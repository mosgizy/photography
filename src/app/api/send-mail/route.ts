import nodemailer from "nodemailer";

const mail =  async (req:any, res:any) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "example@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
  } catch (error:any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "hello world" });
};

export default mail