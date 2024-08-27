require('dotenv').config(); // Load environment variables from .env file
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
    }
}));

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'Signups'
});

// Check if server is running
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Register new user
app.post('/NewUser', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) return res.status(500).json({ Error: "Error hashing password" });

        const sql = 'INSERT INTO login(Fname, Lname, email, password) VALUES (?, ?, ?, ?)';
        const values = [req.body.Fname, req.body.Lname, req.body.email, hash];
        db.query(sql, values, (err, result) => {
            if (err) return res.status(500).json({ Error: "Error inserting new user" });
            return res.status(201).json(result);
        });
    });
});

// Login
app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE email = ?';
    db.query(sql, [req.body.email], (err, result) => {
        if (err) return res.status(500).json({ Message: "Error querying database" });

        if (result.length > 0) {
            const user = result[0];
            bcrypt.compare(req.body.password, user.password, (err, match) => {
                if (err) return res.status(500).json({ Message: "Error comparing passwords" });

                if (match) {
                    req.session.user_id = user.id;
                    return res.status(200).json({ Login: true, user_session_id: req.session.user_id });
                } else {
                    return res.status(401).json({ Login: false, Message: 'Incorrect password' });
                }
            });
        } else {
            return res.status(404).json({ Login: false, Message: 'Email does not exist' });
        }
    });
});

// Check if email exists
app.post('/check-email', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM login WHERE email = ?', [email], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        if (user.length > 0) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch user data
app.get('/userdata', (req, res) => {
    const sql = 'SELECT Fname, Lname, email FROM login WHERE id = ?';
    db.query(sql, [req.query.id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Error fetching user data' });
        } else {
            res.status(200).json({ user: result[0] });
        }
    });
});

// Fetch admin data
app.get('/admindata', (req, res) => {
    const sql = 'SELECT adminName, adminEmail FROM admin WHERE id = ?';
    db.query(sql, [req.query.id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Error fetching admin data' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ admin: result[0] });
            } else {
                res.status(404).json({ error: 'Admin not found' });
            }
        }
    });
});

// Contact form submission
app.post('/Contact', (req, res) => {
    const sql = 'INSERT INTO contactus(username, email, number, message) VALUES (?, ?, ?, ?)';
    const values = [req.body.username, req.body.email, req.body.number, req.body.message];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.status(500).json('Error');
        }
        return res.status(201).json(data);
    });
});

// Form submission
app.post('/form', (req, res) => {
  const { name, mobile, email, address, location, garden_area, garden_service, price } = req.body;
  const sql = 'INSERT INTO Forms (name, mobile, email, address, location, garden_area, garden_service, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [name, mobile, email, address, location, garden_area, garden_service, price];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Error inserting form data:', err);
          return res.status(500).json({ error: 'Error inserting form data' });
      }
      console.log('Form data inserted successfully');
      return res.status(200).json({ message: 'Form data inserted successfully', result });
  });
});


// Another form submission
app.post('/forms', (req, res) => {
    const { name, mobile, email, address, location, garden_area, garden_service, price } = req.body;
    const sql = 'INSERT INTO Forms (name, mobile, email, address, location, garden_area, garden_service, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, mobile, email, address, location, garden_area, garden_service, price];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting form data:', err);
            return res.status(500).json({ error: 'Error inserting form data' });
        }
        console.log('Form data inserted successfully');
        return res.status(200).json({ message: 'Form data inserted successfully', result });
    });
});

// Register new admin
app.post('/newadmin', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) return res.status(500).json({ Error: "Error hashing password" });

        const sql = 'INSERT INTO admin(adminName, adminEmail, password) VALUES (?, ?, ?)';
        const values = [req.body.adminName, req.body.adminEmail, hash];
        db.query(sql, values, (err, result) => {
            if (err) return res.status(500).json('Error');
            return res.status(201).json(result);
        });
    });
});

// Admin login
app.post('/admin', (req, res) => {
    const sql = 'SELECT * FROM admin WHERE adminEmail = ?';
    db.query(sql, [req.body.adminEmail], (err, result) => {
        console.log(req.body?.adminEmail);
        if (err) return res.status(500).json({ Message: 'Error querying database' });

        if (result.length > 0) {
            const admin = result[0];
            bcrypt.compare(req.body.password, admin.password, (err, match) => {
                if (err) return res.status(500).json({ Message: 'Error comparing passwords' });

                if (match) {
                    req.session.admin_id = admin.id;
                    console.log(req.session?.admin_id);
                    return res.status(200).json({ Login: true, admin_session_id: req.session.admin_id });
                } else {
                    return res.status(401).json({ Login: false });
                }
            });
        } else {
            return res.status(404).json({ Login: false });
        }
    });
});

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
