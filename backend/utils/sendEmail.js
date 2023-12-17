const nodemailer = require('nodemailer');
const {google} = require("googleapis");
const clientId = "684997376597-ppi8enbr2sdjj8n77ur0aq329urumj6a.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUri = "https://developers.google.com/oauthplayground";
const refreshToken = "1//04Z2TaBXajo29CgYIARAAGAQSNwF-L9IrrdNCmK-zSTZwZOrEmbUioxmIAxazbGwNZby28xoURVL7Cyqt3yvPN8mWUurMgc6UdKo";

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
oAuth2Client.setCredentials({refresh_token: refreshToken});
async function main(){
       const accessToken = await oAuth2Client.getAccessToken(); 

       transporter = nodemailer.createTransport({
           service: "gmail",
           auth: {
             type: "OAuth2",
             clientId,
             clientSecret, 
             refreshToken,
             accessToken,
             user: "asirimadusanka02@gmail.com"
        },
      });
} 
main();


let sendEmail = (emailTemplate) => {
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ', info.response)
        }
    });
}

module.exports = {sendEmail};