const sgMail = require("@sendgrid/mail");

const sendEmailadmin = async (options) => {
    sgMail.setApiKey(process.env.SEND_GRID_KEY);

    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
     
        html: ` <p>  ${options.name}   </p><br> Regards FitMe Team`,
    };
    await sgMail.send(message);
};
module.exports = sendEmailadmin;
