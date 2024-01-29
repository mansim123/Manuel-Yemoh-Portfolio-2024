import React, { useState } from "react";
import emailjs from "emailjs-com";

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email ? "" : "Email is required",
      subject: formData.subject ? "" : "Subject is required",
      message: formData.message ? "" : "Message is required",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).every((error) => !error)) {
      // If there are errors, do not submit the form
      setSubmissionStatus("error");
      return;
    }

    try {
      const response = await emailjs.send(
        "service_33kytbq",
        "template_kgayg89",
        formData,
        "zL2Uy6M5riyeseeeF"
      );

      console.log("Email sent successfully:", response);

      // Handle success
      setSubmissionStatus("success");

      // Clear form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear errors
      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);

      // Handle error
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className={`absolute top-0 left-0 w-full h-full opacity-80 z-10 transition-all duration-200 bg-[#000000]`}></div>
      <video
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src="contact-bg.mp4" type="video/mp4" />
      </video>
      <div className={`w-full max-w-xl mx-4 p-6 ${props.isDark ? "bg-[#2e2e2e]" : "bg-[#d6d6d6]"} rounded-lg shadow-md z-10 transition-all duration-200`}>
        <h1 className={`text-2xl font-semibold mb-4 ${props.isDark ? "text-[#ffffff]" : "text-[#000000]"} `}>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className={`block text-sm font-medium ${props.isDark ? "text-[#ffffff]" : "text-[#000000] transition-all duration-200"}`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block text-sm font-medium ${props.isDark ? "text-[#ffffff]" : "text-[#000000] transition-all duration-200"}`}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className={`block text-sm font-medium ${props.isDark ? "text-[#ffffff]" : "text-[#000000] transition-all duration-200"}`}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.subject ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={`block text-sm font-medium ${props.isDark ? "text-[#ffffff]" : "text-[#000000] transition-all duration-200"}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring ${
                errors.message ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
          {submissionStatus === "success" && (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500 text-sm mt-2">Email sending failed. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
