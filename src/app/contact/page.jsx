import React from "react";
import ContactForm from "@/components/contactform";

const Contact = () => {
  return (
    <div className="bg-[url('/contactbg.jpg')]  bg-cover  h-screen">
      <div className=" ">
        <p className="text-2xl font-mono text-center p-2 mb-4 text-white  ">
          Welcome User Feel free to give us your feedback
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
