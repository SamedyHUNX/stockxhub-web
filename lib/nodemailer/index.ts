import nodemailer from "nodemailer";
import {
  WELCOME_EMAIL_TEMPLATE,
  NEWS_SUMMARY_EMAIL_TEMPLATE,
} from "@/lib/nodemailer/templates";

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;

if (!NODEMAILER_EMAIL || !NODEMAILER_PASSWORD) {
  throw new Error(
    "NODEMAILER_EMAIL and NODEMAILER_PASSWORD must be defined in environment variables"
  );
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replaceAll(
    "{{name}}",
    name
  ).replaceAll("{{intro}}", intro);

  const mailOptions = {
    from: `"StockXHub" <admin@stockxhub.com>`,
    to: email,
    subject: `Welcome to StockXHub - your stock market toolkit is ready!`,
    text: "Thanks for joining StockXHub",
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};

export const sendNewsSummaryEmail = async ({
  email,
  date,
  newsContent,
}: {
  email: string;
  date: string;
  newsContent: string;
}): Promise<void> => {
  const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE.replaceAll(
    "{{date}}",
    date
  ).replaceAll("{{newsContent}}", newsContent);

  const mailOptions = {
    from: `"StockXHub News" <admin@stockxhub.com>`,
    to: email,
    subject: `📈 Market News Summary Today - ${date}`,
    text: `Today's market news summary from StockXHub`,
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};
