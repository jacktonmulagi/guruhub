import React, { useEffect, useState, useRef } from "react";
import styles from "./Footer.module.css";
import whatsapp from "../../public/asserts/Whatsapp.png";
import toast from "react-hot-toast";
import Image from "next/image";
import { useIntersection } from "../hero/intersectionObserver";
function Footer() {
  const [mobileView, setMobileView] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  useEffect(() => {
    toast.success("To make an order kindly send us your valid email address");

    if (window.matchMedia("(max-width: 640px)").matches) {
      setMobileView(true);
    }
  }, []);

  const handleLeads = (e) => {
    e.preventDefault();

    window.location.href = `mailto:mlugaliki@guruhub.tech?subject=Inquiry about Guruhub Innovators
        &body=Hi! I am ${name}.interested in knowing more about Guruhub Innovators. Please provide me with further information.

        ${message}%0D%0A%0D%0A

        Regards, %0D%0A
        ${name}, %0D%0A
        ${mobileNumber}`;
  };
  return (
    <footer ref={imgRef} id={"contactUs"}>
      {isInView && (
        <div className={styles.container}>
          <span className={styles.upperSection}>
            <span className={styles.Logo}>
              {/* {mobileView ? null : <Image src={Logo} alt={"footerLogo"} width={"250"} />} */}
            </span>
            <span className={styles.moreDescription}>
              <q>Coffee should be something special</q>
            </span>
            <span className={styles.address}>
              <span className={styles.addressTitle}>Location</span>
              <span className={styles.addressName}>
                <span></span>
                <span>MOMBASA ROAD, BUILDING: IMARA GARDENS ESTATE</span>
              </span>
            </span>
            <span className={styles.address}>
              <span className={styles.addressTitle}>Mobile Number</span>
              <span className={styles.addressName}>
                <span></span>
                <span>
                  <a href="tel: +254726387742">+254726387742</a>
                </span>
              </span>
            </span>
            <span className={styles.address}>
              <span className={styles.addressTitle}>Email Address</span>
              <span className={styles.addressName}>
                <span>
                  <a
                    href="mailto:mlugaliki@guruhub.tech?subject=Inquiry about Guruhub Innovators&body=Hi! I am interested in knowing more about Guruhub Innovators. Please provide me with further information."
                    rel="noreferrer"
                    target="_blank"
                    title="Send us an email"
                  >
                    mlugaliki@guruhub.tech
                  </a>
                </span>
              </span>
            </span>
            <span className={styles.form}>
              <span className={styles.formTitle}>
                To contact us kindly fill the form below.
              </span>
              <span>
                <form onSubmit={handleLeads} className={styles.formDetails}>
                  <div className={styles.personalContact}>
                    <div className={styles.inputLabelWrapper}>
                      <input
                        className={styles.inputField}
                        type="text"
                        name="name"
                        placeholder="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.personalContact}>
                    <div className={styles.inputLabelWrapper}>
                      <input
                        className={styles.inputField}
                        type="tel"
                        name="tel"
                        placeholder="mobile number"
                        required
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.personalContact}>
                    <div className={styles.inputLabelWrapper}>
                      <input
                        className={styles.inputField}
                        type="text"
                        name="message"
                        placeholder="message"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <button className={styles.buttonLabel}>Send Message</button>
                </form>
              </span>
            </span>
          </span>

          <span className={styles.lowerSection}>
            <span className={styles.socialMedia}>
              <span className={styles.socialMediaWrapper}>
                <a
                  href={
                    "https://api.whatsapp.com/send?phone=254726387742&text=Hi!%20I%20am%20interested%20in%20knowing%20more%20about%20Guruhub%20Innovators.%20Please%20provide%20me%20with%20further%20information"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={whatsapp}
                    alt={"whatsapp"}
                    width={"90"}
                    height={"90"}
                    className={styles.socialIcons}
                  />
                </a>
              </span>
            </span>
            <span className={styles.copyright}>
              Copyright © 2023 , Guruhub Innovators{" "}
            </span>
          </span>
        </div>
      )}
    </footer>
  );
}

export default Footer;
