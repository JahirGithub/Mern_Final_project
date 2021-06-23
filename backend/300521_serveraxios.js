// Login





let express = require('express');
let mysql = require('mysql');
let jwt = require('jsonwebtoken');
let session = require('express-session')

var mycrypto=require('crypto');
var key="password";
var algo='aes256';
var jwtkey='jwtkey';


let app = express();
app.use(express.json());
let db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "react_db_gmit",
});


// app.use(session({
//     secret: 'creature',
//     resave: false,
//     saveUninitialized: false,
// }))
app.post("/newsignup",async (req,res)=>{
    let {email, mobile, password} = req.body;
    var myCipher= mycrypto.createCipher(algo,key);
    
        // encrypt the password Advanced Encryption Standard 256 using UTF8 & hex 
    
    
        var encpassword=myCipher.update(password,'utf8','hex')
        +myCipher.final('hex');
    
        db.query('INSERT INTO gmit2018cse (email, mobile, password) VALUES (?,?,?)',
        [email, mobile, encpassword],
        (err,result)=>{
            if(err){
                res.status(422).send({err:err})
            }else{
                res.status(201).send({message:'Your data inserted succesfully'});
                console.log("SignupSucessful"); 
            }
        });
          
    
        });



        

app.post("/axioslogin", function (req, res) {

    let {email, password} = req.body;
    console.log('the email is'.email);

    var myCipher= mycrypto.createCipher(algo,key);

    var encpassword=myCipher.update(password,'utf8','hex')
    +myCipher.final('hex');

    {
        db.query(
            'SELECT * FROM gmit2018cse WHERE email =? and password=?',
            [email, encpassword],
            (err, result) => {
                if (err) {
                    res.send({ err: err })
                }

                if (result.length > 0) {
                    console.log(result[0])

                    let { email, mobile } = result[0]
                    var user = {
                        userEmail: email,
                        userMobile: mobile,
                    }

                    const tokenCode = jwt.sign(user, "secretKey");
                    res.status(200).send({ access: tokenCode })
                    console.log("login Sucessful")


                } else {
                    res.status(404).send({ message: 'Invalid Credential' });
                    console.log('Invalid Credential')
                }
            }
        )
    }
});



// var myApp = require('express');
// var app = myApp();
// app.use(myApp.json());
// var mongooseApp = require('mongoose');
// var myModel = require('./model/MP');
// var mycrypto = require('crypto');
// var key = "password";
// var algo = 'aes256';
// var jwt = require('jsonwebtoken');
// var jwtkey = 'jwtkey';


// mongooseApp.connect('mongodb+srv://new-user_31:M@2000@cluster0.l6mgc.gcp.mongodb.net/my_db?retryWrites=true&w=majority',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// );


// //for login using encrypted password
// app.post("/axioslogin", function (req, res) {

//     let { email, password } = req.body;
//     myModel.findOne({ email }).then((data) => {

//         // var decipher = mycrypto.createDecipher(algo, key);
//         // var decryptedPassword = decipher.update(data.password, 'hex', 'utf8' )+ 
//         // decipher.final('utf8');
//         console.log(password);
//         if (password == password) {
//             jwt.sign({ data }, jwtkey, { expiresIn: '180s' }, (err, result) => {
//                 res.status(200).json({ result })
//             })
//         }

//         console.log("login Sucessful")
//     });
// })



app.listen(4550, () => {
    console.log("server is running on port 4550");
})