export const options = (to, username, otp) => {
    return {
        from: process.env.SMTP_ID,
        to,
        subject: 'โ Verify your Cithi account',
        html: `Hi ${username} ๐ ,
        
We just need to verify your email address before you use our service.

Verify your email address : <b>${otp}</b>

Thanks! โ The โCithi team        
        `
    }
}
