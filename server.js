const express=require('express');
const mysql=require("mysql");
const cors=require('cors')
const app=express();
// for qr code 
const qr = require('qrcode');
// ===
app.use(cors());
app.use(express.json());
let loginCount=0;  // login count 

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

app.post('/signup',(req,res)=>{
    const sql="Insert into login(`name`,`email`,`phonenumber`,`password`,`confirmpassword`) VALUES(?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.password,
        req.body.confirmpassword
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


// ===========login ============
app.post('/login',(req,res)=>{
    const sql="SELECT * FROM login WHERE `email`=? AND `password`=?";
 
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        if(data.length>0){
            return res.json("Success")
        }
        else{
            return res.json("Fail");
        }
    })
})
// ==============for the generate or 
app.post('/generateQR', (req, res) => {
    const loginId = req.body.loginId;
    const qrCodeData = `https://your-domain.com/login/${loginId}`; // Replace with your login route
  
    // Generate the QR code
    qr.toDataURL(qrCodeData, (err, qrCodeUrl) => {
      if (err) {
        console.error('Error generating QR code:', err);
        return res.status(500).json({ error: 'QR code generation failed' });
      }
  
      // Increment login count
      loginCount++;
  
      // Send the QR code URL and login count back to the client
      return res.json({ qrCodeUrl, loginCount });
    });
  });

//   ====
app.listen(8081,()=>{
    console.log("listening");
})