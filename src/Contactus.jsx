import React from "react";
import "./Contactus.css";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validateTrue, setValidateTrue] = useState(false);

  function popUp(event) {
    event.preventDefault();

    if (name !== "" || email !== "" || message !== "") {
      setValidateTrue(!validateTrue);
    }
  }

  function InputSuccess() {
    return (
      <div class="alert-success">
        <span
          class="closebtn"
          onClick={() => {
            var close = document.getElementsByClassName("closebtn");
            var i;

            for (i = 0; i < close.length; i++) {
              close[i].onclick = function () {
                var div = this.parentElement;
                div.style.opacity = "0";
              };
            }
          }}
        >
          &times;
        </span>
        <strong>Success!</strong> Email has been sent.
      </div>
    );
  }

  return (
    <div id="contact-us-main-div">
      <NavigationBar />
      <div class="contact-form">
        <h2>Contact Us</h2>

        <form class="contact" onSubmit={popUp} method="post">
          <input
            type="text"
            name="name"
            class="contact-text-box"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          ></input>
          <input
            type="email"
            name="email"
            class="contact-text-box"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
          {validateTrue && InputSuccess()}

          <input type="submit" name="submit" class="contact-send-btn"></input>
        </form>
        <button
          id="contact-us-clear-button"
          onClick={() => {
            setValidateTrue(false);
            setName("");
            setMessage("");
            setEmail("");
          }}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
export default ContactUs;
