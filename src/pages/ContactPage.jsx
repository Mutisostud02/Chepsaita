import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "min(500px, 50vh)", // Responsive height based on viewport
};

const center = {
  lat: 0.5279384851455688, // This is a placeholder - you should update with the actual coordinates for Kapsos
  lng: 35.25893783569336,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCpOX8UeB706633Osm3KSkp3sbj5Y_s8dE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} title="Chepsaita Sports Limited" />
      </GoogleMap>
    </LoadScript>
  );
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <GoogleMapComponent />
      <div className="contact">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            If you have questions about our sports programs, want to join a
            team, sponsor an athlete, or anything else, don&apos;t hesitate to
            get in contact.
          </p>
          <span id="span"> </span>
          <p id="welcome">We welcome all inquiries.</p>
          <div className="contact-links">
            <p>
              Lower kipkarin, chepterwai road, kapsos 606-30100 Kapsos-Turbo
            </p>
            <p>0202600171</p>
            <p>Info@chepsaitasportsltd.com</p>
          </div>
        </div>
        <form
          action="https://formsubmit.co/Info@chepsaitasportsltd.com"
          method="POST"
          className="contact-form"
        >
          <div className="personal-details">
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="text-area">
            <textarea
              cols="30"
              rows="5"
              name="message"
              placeholder="Your message.."
            ></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
