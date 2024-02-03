// ContactUsPage.jsx
import { useState } from "react";
import { Footer, Modal } from "../../components";
import ContactUs from "../../components/ContactUs";
import { Navbar } from "../../container";
import { ModalProps } from "../../interfaces/interface";

const ContactUsPage = () => {
  const [modalText, setModalText] = useState<any>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = (text: ModalProps) => {
    console.log(text);
    setModalText(text);

    toggleModal();
  };

  return (
    <>
      <Navbar />
      <ContactUs openModal={openModal} />
      {isModalOpen && <Modal text={modalText} buttonText='Close' handleClose={toggleModal} />}
      <Footer />
    </>
  );
};

export default ContactUsPage;
