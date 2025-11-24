import Navbar from "./Navbar";
import "./Thankyou.css";
const Thankyou = () => {
  return (
    <div id="thank-you-main-container">
      <Navbar />
      <div id="thank-you-container">
        <div id="thank-you-header">Thank you for your purchase!</div>
        <div id="thank-you-total-price">
          Your order was completed succesfully.
        </div>
        <div id="thank-you-details">
          <img src={require("./images/email-sent.png")} id="email-image"></img>
          <br />
          <br />
          An email with more details of your order has been sent to your email.
          Status of your order will be constantly update through email as well.
        </div>
      </div>
    </div>
  );
};
export default Thankyou;
