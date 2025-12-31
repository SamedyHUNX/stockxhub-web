import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL!,
    pass: process.env.NODEMAILER_PASSWORD!,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace(
    "{{name}}",
    intro
  ).replace("{{intro}}", intro);

  const mailOptions = {
    from: '"admin <admin@stockxhub.com>"',
    to: email,
    subject: `Welcome to StockXHub - your stock market toolkit is ready`,
    text: "Thanks for joining StockXHub",
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};
