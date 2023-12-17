let sendlink = (email) => {
    const emailSendTemplates = {
        from: "noreply@gmail.com",
        to: email,
        subject: "email verification for " + email,
        text:
            "Use this link to create your account. The password is 12345.    " +
            "Link: http://localhost:3000/verification"

          
    };
    return emailSendTemplates;
}

module.exports = { sendlink };