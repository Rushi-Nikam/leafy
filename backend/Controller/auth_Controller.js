const login = (req,res)=>{
    const sql = "SELECT * FROM login WHERE `email`= ? AND `password` = ?";
    try {
      db.query(sql, [req.body.email ,  req.body.password],(err , result)=>{
            if(err) return res.json({Message:"Error inside server"})
            if(result.length > 0){
            req.session.user_id = result[0].id;
            console.log(req.session.user_id);
            return res.json({Login:true, user_session_id: req.session.user_id});
            }
            else return res.json({Login:false})
        })
    } catch (error) {
        console.log("failed");
    }
    }
const UserData = (req, res) => {
    const sql ="SELECT Fname, Lname, email FROM login WHERE id = ?";
  
    db.query(sql, [req.query.id], (err, result) => {
        if(err) {
            console.error(err.message);
             res.status(500).json({ error: "Error fetching user data" });
        } else {
            res.status(200).json({ user: result[0] });
        }
    });
}
module.exports = {login,UserData}