import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const containerStyle = {
  width: "100%",
  height: "min(500px, 50vh)", // Responsive height based on viewport
};

const center = {
  lat: 0.5279384851455688, // Coordinates for Kapsos
  lng: 35.25893783569336,
};

const GoogleMapComponent = () => {
  // Use memoized API key to prevent unnecessary re-renders
  const libraries = useMemo(() => ["places"], []);

  // Load the Google Maps API only once
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCpOX8UeB706633Osm3KSkp3sbj5Y_s8dE",
    libraries,
  });

  if (!isLoaded) return <div className="map-loading">Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: true,
      }}
    >
      <Marker position={center} title="Chepsaita Sports Limited" />
    </GoogleMap>
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
            <p> 0202324345</p>
            <p>info@chepsaitasacco.co.ke</p>
          </div>
        </div>
        <form
          action="https://formsubmit.co/2ed4ae0259f41bd6e55eacabbbcaa34c"
          method="POST"
          className="contact-form"
        >
          {/* Honeypot field to prevent spam */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Success page redirect */}
          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/thank-you`}
          />

          <div className="personal-details">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              minLength="2"
              maxLength="50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>
          <div className="personal-details">
            <input
              type="tel"
              name="phone"
              placeholder="Your phone (optional)"
              pattern="[0-9+\s]*"
              title="Please enter a valid phone number"
            />
          </div>
          <div className="text-area">
            <textarea
              cols="30"
              rows="5"
              name="message"
              placeholder="Your message..."
              required
              minLength="10"
              maxLength="1000"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
