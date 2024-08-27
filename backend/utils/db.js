const mysql  = require('mysql');
const connectdb =async()=>{
    try {
        const db =  mysql.createConnection({
            host :"localhost",
            user:"root",
            password:"Rushikesh@27",
            database:"Signups",
            })
        console.log("data");
    } catch (error) {
        console.error(error);
    }
} 
module.exports = connectdb;