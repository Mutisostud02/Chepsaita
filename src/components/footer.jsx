import { Link } from "react-router-dom";
export default function FooterDetails() {
  return (
    <div className="section4">
      <FooterInfo1 />
      <FooterInfo2 />
      <FooterInfo3 />
    </div>
  );
}
function FooterInfo1() {
  return (
    <div className="footer-info1">
      <div className="footer-logo">
        <img src="/logo.jpeg" alt="Chepsaita Sports Limited Logo" />
      </div>
      <p>Support our athletes!</p>
      <div className="links">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
        >
          <title>facebook</title>
          <path
            height="24px"
            width="24px"
            d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
        >
          <title>twitter</title>
          <path
            height="24px"
            width="24px"
            d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
        >
          <title>instagram</title>
          <path
            height="24px"
            width="24px"
            d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
        >
          <title>youtube</title>
          <path
            height="24px"
            width="24px"
            d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
          />
        </svg>
      </div>
    </div>
  );
}
function FooterInfo2() {
  return (
    <div className="footer-info2">
      <h3>Quick Links</h3>
      <ul style={{ listStyle: "none", marginLeft: "0", paddingLeft: "0" }}>
        <li>
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => window.scrollTo(0, 0)} to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link onClick={() => window.scrollTo(0, 0)} to="/about">
            Our Leadership Team
          </Link>
        </li>
      </ul>
    </div>
  );
}
function FooterInfo3() {
  return (
    <div className="footer-info3">
      <h3>Chepsaita Sports Limited</h3>
      <div className="mail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFD700"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
        <p>info@chepsaitasacco.co.ke</p>
      </div>
      <div className="tel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFD700"
        >
          <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
        </svg>
        <p>0202324345</p>
      </div>
      <div className="website">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFD700"
        >
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-82q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-220 86q17 66 64.5 113T437-134v-106q-29 0-49.5-20.5T367-310h-107Zm220 234q66-17 113-64.5T707-257H600q0 29-20.5 49.5T530-187v107Zm-220-474q17-66 64.5-113T437-826v106q-29 0-49.5 20.5T367-650H260Zm220-234q66 17 113 64.5T707-703H600q0-29-20.5-49.5T530-773v-107Z" />
        </svg>
        <p>www.chepsaitasportslimited.co.ke</p>
      </div>
      <div className="location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFD700"
        >
          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
        <p>Lower kipkarin, chepterwai road, 606-30100 Kapsos</p>
      </div>
    </div>
  );
}
