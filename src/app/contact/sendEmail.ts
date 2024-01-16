"use client";
import { FormEvent } from "react";

type ContactFormData = {
  userName: string;
  email: string;
  message: string;
};

export const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const name = formData.get("userName") as string;
  const email = formData.get("userEmail") as string;
  const message = formData.get("message") as string;

  const mailData: ContactFormData = {
    userName: name,
    email,
    message,
  };
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mailData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully");
    } else {
      alert("Error sending email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
