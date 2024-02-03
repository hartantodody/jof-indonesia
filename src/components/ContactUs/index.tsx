import React, { useState } from "react";
import axios from "axios";
import "../../styles/main.css";
import OppositeGradientButton from "../OppositeGradientButton";
import { CircularLoading } from "..";
import { ModalProps } from "../../interfaces/interface";

const ContactUs = ({ openModal }: { openModal: (modalProps: ModalProps) => void }) => {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    let isValid = true;
    const errors: { [key: string]: string } = {};

    // Validate name
    if (!formData.get("name")) {
      errors["name"] = "Name is required";
      isValid = false;
    }

    // Validate email
    const email = formData.get("email") as string;
    if (!email || !validateEmail(email)) {
      errors["email"] = "Please enter a valid email address";
      isValid = false;
    }

    // Validate service
    if (!formData.get("service")) {
      errors["service"] = "Please select a service";
      isValid = false;
    }

    // Validate message
    if (!formData.get("message")) {
      errors["message"] = "Message is required";
      isValid = false;
    }

    if (!isValid) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }

    setFormErrors({});

    try {
      const response = await axios.post("https://jofindonesia-service.onrender.com/send-email", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log(response.data.message);
        console.log(typeof response.data.message);

        openModal(response.data.message);
        formElement.reset();
      } else if (response.status === 500) {
        openModal(response.data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='pt-[128px] contact-us-background'>
      <div
        className='w-[90vw] max-w-[1000px] mx-auto p-[26px] bg-cardbg bg-opacity-25 lg:flex lg:flex-row rounded-[10px]'
        style={{ backdropFilter: "blur(10px)" }}
      >
        <h2 className='flex-1 text-[32px] text-white mb-[29px] font-bold lg:text-[42px] lg:p-[15px]'>
          Let's discuss something <span className='gradient-text'>awesome</span> together
        </h2>
        <form className='flex flex-1 flex-col gap-[16px] lg:p-[15px]' onSubmit={sendEmail}>
          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='name'>
              Name/Organization
            </label>
            <input
              className={`p-[8px] rounded-[5px] text-white bg-cardbg ${formErrors.name ? "border border-red-500" : ""}`}
              type='text'
              id='name'
              name='name'
              placeholder=''
            />
            {formErrors.name && <p className='text-red-500 text-[12px] italic'>{formErrors.name}</p>}
          </div>

          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='email'>
              Email
            </label>
            <input
              className={`p-[8px] rounded-[5px] text-white bg-cardbg ${
                formErrors.email ? "border border-red-500" : ""
              }`}
              type='email'
              id='email'
              name='email'
              placeholder=''
            />
            {formErrors.email && <p className='text-red-500 text-[12px] italic'>{formErrors.email}</p>}
          </div>

          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='service'>
              What service are you interested in?
            </label>
            <select
              className={`p-[8px] rounded-[5px] text-white bg-cardbg ${
                formErrors.service ? "border border-red-500" : ""
              }`}
              id='service'
              name='service'
            >
              <option value='' disabled hidden>
                Select your needs
              </option>
              <option value='Event Organizer'>Event Organizer</option>
              <option value='Event Production'>Event Production</option>
              <option value='Customized Needs'>Customized Needs</option>
            </select>
            {formErrors.service && <p className='text-red-500 text-[12px] italic'>{formErrors.service}</p>}
          </div>

          <div className='flex flex-col lg:gap-2'>
            <label className='text-headline text-[16px]' htmlFor='message'>
              Your message
            </label>
            <textarea
              className={`p-[8px] rounded-[5px] text-white bg-cardbg h-[172px] ${
                formErrors.message ? "border border-red-500" : ""
              }`}
              id='message'
              name='message'
              placeholder=''
            ></textarea>
            {formErrors.message && <p className='text-red-500 text-[12px] italic'>{formErrors.message}</p>}
          </div>

          <div>
            <OppositeGradientButton
              type='submit'
              className='w-full p-[5px] text-[16px]'
              text={isLoading ? <CircularLoading /> : "Submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
