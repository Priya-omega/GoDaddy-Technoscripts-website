require('dotenv').config();

const sgMail = require('@sendgrid/mail');

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env;

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req,res){
    const{name, contact, email} = req.body;

    const msg = {
        to: TO_EMAIL,
// from:{
//     name:'TechnoScripts Website',
//     email:'FROM_EMAIL',
// },

        from: FROM_EMAIL,
        subject: 'Technoscripts Enquiry Form',
        html: `<p><strong>Name: </strong>${name}</p>
        <p><strong>Contact: </strong>${contact}</p>
        <p><strong>Email: </strong>${email}</p>
        `,
    };
    await sgMail.send(msg);
    res.json({success: true});
}
