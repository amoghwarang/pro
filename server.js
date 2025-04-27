const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'moodiesecret-key'; // In production, use environment variables
app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

// Add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Create users table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating users table:', err);
  } else {
    console.log('Users table ready');
  }
});

// Create subscription_plans table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS subscription_plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    description TEXT,
    features TEXT
  )
`, (err) => {
  if (err) {
    console.error('Error creating subscription_plans table:', err);
  } else {
    console.log('Subscription plans table ready');
    
    // Check if we need to insert default plans
    db.query('SELECT * FROM subscription_plans', (err, results) => {
      if (err) {
        console.error('Error checking subscription plans:', err);
      } else if (results.length === 0) {
        // Insert default plans
        const defaultPlans = [
          {
            name: 'Basic',
            price: 9.99,
            description: 'Basic streaming plan',
            features: 'HD Available, Watch on 1 Device, Unlimited Movies & TV Shows'
          },
          {
            name: 'Premium',
            price: 14.99,
            description: 'Premium streaming plan',
            features: 'Ultra HD Available, Watch on 2 Devices, Unlimited Movies & TV Shows'
          },
          {
            name: 'Ultimate',
            price: 19.99,
            description: 'Ultimate streaming plan',
            features: '4K + HDR Available, Watch on 4 Devices, Unlimited Movies & TV Shows'
          }
        ];
        
        defaultPlans.forEach((plan, index) => {
          db.query(
            'INSERT INTO subscription_plans (name, price, description, features) VALUES (?, ?, ?, ?)',
            [plan.name, plan.price, plan.description, plan.features],
            (err) => {
              if (err) {
                console.error(`Error inserting plan ${plan.name}:`, err);
              } else {
                console.log(`Plan ${plan.name} inserted successfully`);
              }
            }
          );
        });
      }
    });
  }
});

// Create user_subscriptions table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS user_subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    plan_id INT NOT NULL,
    status ENUM('active', 'cancelled', 'expired') DEFAULT 'active',
    start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMP NULL,
    payment_method VARCHAR(50),
    last_four VARCHAR(4),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (plan_id) REFERENCES subscription_plans(id)
  )
`, (err) => {
  if (err) {
    console.error('Error creating user_subscriptions table:', err);
  } else {
    console.log('User subscriptions table ready');
  }
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/subscribe.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'subscribe.html'));
});

app.get('/subscription-success.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'subscription-success.html'));
});

// API Routes
app.post('/signup', async (req, res) => {
  const { fullname, email, password } = req.body;
  
  // Log the request body
  console.log('Signup request received:', { fullname, email });
  
  // Validate input
  if (!fullname || !email || !password) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  try {
    // Check if user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
      if (err) {
        console.error('Database error during user check:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      
      if (results.length > 0) {
        console.log('Email already registered:', email);
        return res.status(400).json({ message: 'Email already registered' });
      }
      
      try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Insert new user
        db.query(
          'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)',
          [fullname, email, hashedPassword],
          (err, result) => {
            if (err) {
              console.error('Error inserting user:', err);
              return res.status(500).json({ message: 'Server error', success: false });
            }
            
            console.log('User registered successfully:', email);
            res.status(201).json({ message: 'User registered successfully', success: true });
          }
        );
      } catch (hashError) {
        console.error('Password hashing error:', hashError);
        return res.status(500).json({ message: 'Server error' });
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  // Find user by email
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const user = results[0];
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email
      }
    });
  });
});

// Get subscription plans
app.get('/api/plans', (req, res) => {
  db.query('SELECT * FROM subscription_plans', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    
    res.json({ plans: results });
  });
});

// Handle subscription creation
app.post('/subscribe', authenticateToken, (req, res) => {
  const { plan_id, plan_name, plan_price, card_number, expiry, cvv, address } = req.body;
  
  // In a real application, you would validate the card details and process payment here
  // For this example, we'll just assume payment was successful
  
  // Extract last four digits of card number
  const lastFour = card_number.replace(/\s/g, '').slice(-4);
  
  // Insert subscription record
  db.query(
    'INSERT INTO user_subscriptions (user_id, plan_id, payment_method, last_four) VALUES (?, ?, ?, ?)',
    [req.user.id, plan_id, 'Credit Card', lastFour],
    (err, result) => {
      if (err) {
        console.error('Error creating subscription:', err);
        return res.status(500).json({ 
          success: false,
          message: 'Failed to create subscription. Please try again.' 
        });
      }
      
      console.log(`Subscription created for user ${req.user.id}, plan ${plan_id}`);
      res.status(201).json({ 
        success: true,
        message: 'Subscription created successfully',
        subscription_id: result.insertId
      });
    }
  );
});

// Get user's active subscription
app.get('/api/subscription', authenticateToken, (req, res) => {
  db.query(
    `SELECT us.*, sp.name as plan_name, sp.price as plan_price, sp.features 
     FROM user_subscriptions us 
     JOIN subscription_plans sp ON us.plan_id = sp.id 
     WHERE us.user_id = ? AND us.status = 'active'
     ORDER BY us.start_date DESC LIMIT 1`,
    [req.user.id],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      
      if (results.length === 0) {
        return res.status(404).json({ message: 'No active subscription found' });
      }
      
      res.json({ subscription: results[0] });
    }
  );
});

// Protected route example
app.get('/api/profile', authenticateToken, (req, res) => {
  db.query('SELECT id, fullname, email, created_at FROM users WHERE id = ?', [req.user.id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({ user: results[0] });
  });
});

// Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { fullname, email, subject, message } = req.body;
  
  // Validate input
  if (!fullname || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  
  // In a production environment, you would typically:
  // 1. Save the contact submission to a database
  // 2. Send an email notification
  // 3. Possibly set up an auto-responder
  
  console.log('Contact form submission received:', { fullname, email, subject, message });
  
  // Return success response
  res.status(200).json({ 
    success: true, 
    message: 'Your message has been received. Our team will contact you shortly.' 
  });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log('Received token:', token); // DEBUG LINE
  if (!token) {
    console.warn('No token provided');
    return res.status(401).json({ message: 'Access denied' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error('JWT verification error:', err); // DEBUG LINE
      return res.status(403).json({ message: 'Invalid token' });
    }
    
    req.user = user;
    next();
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});