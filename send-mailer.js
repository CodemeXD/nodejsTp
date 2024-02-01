
//integrate the nodemailer module
const  nodemailer = require('nodemailer')

//Create the transporter 

const transporter = nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:"ibrahimsung7@gmail.com",
        pass:"hkzaakthlkqeewka"
    }

});

const mailOptions = {
    from:'ibrahimsung7@gmail.com',
    to:'dossoelimane@gmail.com',
    subject:'Backend test',
    text:'On try hard notre putain de backend du coup on veut voir si ça marche '

};

transporter.sendMail(mailOptions,function(error,info){

    if(error)
    {
        console.log("erreur ",error)
    }
    else{
        console.log("email sent" + info.response)
    }
})