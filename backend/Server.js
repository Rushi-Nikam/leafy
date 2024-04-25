const mysql  = require('mysql')
const express = require('express')
const cors =require('cors');
// const jwt = require('jsonwebtoken')
const session  = require('express-session')
const cookieParser = require('cookie-parser')

const salt = 10;
const  app = express();
// const router = express.router();
app.use(cors());
app.use(express.json())
app.use(cookieParser())

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000 * 60 * 60 * 24
    }   
}))
const db = mysql.createConnection({
host :"localhost",
user:"root",
password:"Rushikesh@27",
database:"Signups",
})
app.post("/NewUser",(req,res)=>{

    const sql = "INSERT INTO login(`Fname`,`Lname`,`email`,`password`) values (?)";
// bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
    // if(err) return res.json({Error:"Error for hassing password"})
    const values = [
        req.body.Fname,
        req.body.Lname,
        req.body.email,
        req.body.password
     ]
     db.query(sql,[values],(err , result)=>{
        if(err)  return res.json("error")
        
        return res.json(result);
    })     
   
})
app.post("/login",(req,res)=>{
    const sql = "SELECT * FROM login WHERE `email`= ? AND `password` = ?";
    db.query(sql, [req.body.email ,  req.body.password],(err , result)=>{
        if(err) return res.json({Message:"Error inside server"})
        if(result.length > 0){
        req.session.user_id = result[0].id;
        console.log(req.session.user_id);
        return res.json({Login:true, user_session_id: req.session.user_id});
        }
        else return res.json({Login:false})
        
    })
})

//get user data
app.get('/userdata', (req, res) => {
    const sql = "SELECT Fname, Lname, email FROM login WHERE id = ?";
  
    db.query(sql, [req.query.id], (err, result) => {
        if(err) {
            console.error(err.message);
            res.status(500).json({ error: "Error fetching user data" });
        } else {
            res.status(200).json({ user: result[0] });
        }
    });
});
app.get('/admindata', (req, res) => {
    const sql = "SELECT adminName, adminEmail FROM admin WHERE id = ?";
    
    db.query(sql, [req.query.id], (err, result) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Error fetching admin data" });
      } else {
        if (result.length > 0) {
          res.status(200).json({ admin: result[0] });
        } else {
          res.status(404).json({ error: "Admin not found" });
        }
      }
    });
  });
  
app.post("/Contact",(req,res)=>{
    const sql = "INSERT INTO contactus(`username`,`email`,`number`,`message`) values (?)";
     const values = [
        req.body.username,
        req.body.email,
        req.body.number,
        req.body.message,
     ]
    db.query(sql,[values],(err , data)=>{
        if(err){
            return res.json("Error")
        }
        return res.json(data);
    })
})
app.post("/form", (req, res) => {
    // Extract necessary fields from req.body
    const { name, mobile, email, address, location, garden_area, garden_service, price } = req.body;

    // Include all fields in the INSERT query
    const sql = "INSERT INTO Form (name, mobile, email, address, location, garden_area, garden_service, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, mobile, email, address, location, garden_area, garden_service, price];

    // Execute the SQL query
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting form data:", err);
            return res.status(500).json({ error: "Error inserting form data" });
        }
        console.log("Form data inserted successfully");
        return res.status(200).json({ message: "Form data inserted successfully", result });
    });
});

app.post("/forms", (req, res) => {
    // Extract necessary fields from req.body
    const { name, mobile, email, address, location, garden_area, garden_service, price } = req.body;

    // Include all fields in the INSERT query
    const sql = "INSERT INTO Forms (name, mobile, email, address, location, garden_area, garden_service, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [name, mobile, email, address, location, garden_area, garden_service, price];

    // Execute the SQL query
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting form data:", err);
            return res.status(500).json({ error: "Error inserting form data" });
        }
        console.log("Form data inserted successfully");
        return res.status(200).json({ message: "Form data inserted successfully", result });
    });
});

app.post("/newadmin",(req,res)=>{

    const sql = "INSERT INTO admin(`adminName`,`adminEmail`,`password`) values (?)";
// bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
    // if(err) return res.json({Error:"Error for hassing password"})
    const values = [
        req.body.adminName,
        req.body.adminEmail,
        req.body.password
     ]
     db.query(sql,[values],(err , result)=>{
        if(err)  return res.json("error")
        
        return res.json(result);
    })
})
app.get('/login', (req, res) => {
    const sql = 'SELECT * FROM login'; // Assuming your table name is 'customers'
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching customer details:', err);
        res.status(500).json({ error: 'Error fetching customer details' });
      } else {
        res.status(200).json(result);
      }
    });
  });
  app.post("/admin", (req, res) => {
    const sql = "SELECT * FROM admin WHERE `adminEmail`= ? AND `password` = ?";
    db.query(sql, [req.body.adminEmail, req.body.password], (err, result) => {
        if (err) return res.json({ Message: "Error inside server" });
        if (result.length > 0) {
            req.session.admin_id = result[0].id; // Corrected from user_id to admin_id
            console.log(req.session.admin_id);
            return res.json({ Login: true, admin_session_id: req.session.admin_id }); // Corrected from user_id to admin_id
        } else return res.json({ Login: false });
    });
});


  app.get('/userdata', (req, res) => {
    const userId = req.query.id; // Assuming you're passing the user ID in the query parameters
  
    // Query to fetch user data from the database
    const sql = 'SELECT Fname, Lname, email FROM users WHERE id = ?';
  
    // Execute the query with the user ID parameter
    db.query(sql, [userId], (err, result) => {
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'Error fetching user data' });
      } else {
        // Check if user data exists
        if (result.length > 0) {
          // If user data exists, send it as a JSON response
          res.status(200).json({ user: result[0] });
        } else {
          // If user data does not exist, send a 404 response
          res.status(404).json({ error: 'User not found' });
        }
      }
    });
  });
  
app.listen(8080,()=>{
    console.log("listen on 8080");
})