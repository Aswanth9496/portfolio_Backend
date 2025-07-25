
const skills = require('../database/skillCatagory')
const services = require('../database/Services')

const nodemailer = require('nodemailer')

const getSkills = async( req,res)=>{

    try {
        res.status(200).json(skills)
    } catch (error) {
       
        res.status(500).json({ message: 'Failed to fetch skills' });
    }
};



const getServices = async(req,res)=>{
    try {
        res.status(200).json(services)
    } catch (error) {
          res.status(500).json({ message: 'Failed to fetch Services' });
    }
}



const sendEmail = async(req,res)=>{

    const { name, lastName, email, subject, message } = req.body;

    try {
         const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            }
         })


         const mailOptions = {
              from: email,
              to: process.env.EMAIL_USER, 
             subject: `Portfolio Contact: ${subject}`,
             html: `
          <div style="font-family:Arial; padding:10px;">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    };


     await transporter.sendMail(mailOptions);

    } catch (error) {
         console.error('Email error:', error);
         res.status(500).json({ message: 'Failed to send Email' });
    }
}

module.exports ={getSkills, getServices,sendEmail}
