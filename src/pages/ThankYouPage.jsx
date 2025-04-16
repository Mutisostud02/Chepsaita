import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    console.log("ThankYouPage component mounted");
  }, []);
  return (
    <main style={{ minHeight: "70vh", padding: "2rem 0" }}>
      <div className="thank-you-page">
        <div className="thank-you-content">
          <h1>Thank You!</h1>
          <p>
            Your message has been successfully sent. We appreciate your interest
            in Chepsaita Sports Limited.
          </p>
          <p>
            Our team will review your message and get back to you as soon as
            possible.
          </p>
          <div className="thank-you-links">
            <Link to="/" className="thank-you-button">
              Return to Home
            </Link>
            <Link to="/contact" className="thank-you-button secondary">
              Send Another Message
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
