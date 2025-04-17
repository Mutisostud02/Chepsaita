import Message from "../components/message";
import { Link } from "react-router-dom";
import { HomeTwo } from "../components/home";
import PropTypes from "prop-types";

export default function AboutProgramsPage() {
  return (
    <>
      <div className="about-intro">
        <h1>About Us</h1>
        <p>
          Chepsaita Sports Limited is a leading sports development organization
          dedicated to identifying, nurturing, and promoting sports talent
          across Kenya. We specialize in a variety of sports including football,
          athletics, swimming, and cycling. We work in partnership with local
          communities, schools, sports federations, and international
          organizations to create opportunities for athletes at all levels.
        </p>
        <p>
          <a>
            <Link to="/">Home</Link>
          </a>
          /About
        </p>
      </div>
      <div className="about-section1">
        <Section1 src="/assets/sudi.jpeg" />
        <Section2 />
        <div className="message">
          <Message title="Our Leadership Team">
            <p>
              Our organization is led by a team of dedicated sports enthusiasts
              and professionals including Ruto, Oscar Sudi, Farouk Kibet,
              Mandaa, Ababu na Mwamba, and Kipchumba Murkomen. Their combined
              experience in sports management, coaching, and community
              development has been instrumental in our success.
            </p>
          </Message>
          <Message title="Inclusivity">
            <p>
              Chepsaita Sports Limited is committed to inclusivity in sports. We
              actively promote participation from all genders, backgrounds, and
              abilities. We believe that sports should be accessible to
              everyone, and we work to remove barriers that prevent talented
              individuals from pursuing their athletic dreams.
            </p>
          </Message>
          <Message title="Community Ownership">
            <p>
              Our programs are developed in partnership with local communities
              to ensure they address real needs and have lasting impact. We
              believe that community involvement is essential for the
              sustainability of our initiatives.
            </p>
          </Message>
          <Message title="Athlete-Centered Approach">
            <p>
              We place the needs, aspirations, and well-being of athletes at the
              center of everything we do. Our programs are designed to develop
              not just athletic skills but also character, leadership, and life
              skills that will benefit participants beyond their sporting
              careers.
            </p>
          </Message>
          <Message title="Transparency">
            <p>
              As part of our commitment to our sponsors and partners, Chepsaita
              Sports Limited maintains the highest standards of financial
              transparency and accountability. We regularly conduct internal and
              external audits to ensure that resources are used effectively and
              efficiently.
            </p>
            <p>
              Our code of conduct is based on international best practices and
              ensures equality, ethics, transparency, and integrity in all our
              operations. We are committed to creating a safe and supportive
              environment for all athletes in our programs.
            </p>
          </Message>
        </div>

        {/* Programs Section */}
        <h1 className="programs-heading">Our Programs</h1>
        <div className="programs-section">
          <ProgramsSection1 title="Chepsaita Sports Limited is dedicated to the following:">
            <li>
              We identify and nurture sports talent from grassroots to elite
              levels.
            </li>
            <li>
              We provide professional coaching and training programs for
              athletes of all ages in football, athletics, swimming, cycling,
              and other sports.
            </li>
            <li>
              We supply quality sports equipment to talented athletes who lack
              resources.
            </li>
            <li>
              We organize community sports events, tournaments, and talent
              identification programs.
            </li>
            <li>
              We create pathways for athletes to compete at regional, national,
              and international levels.
            </li>
            <li>
              We partner with schools, sports federations, and international
              organizations to expand opportunities for athletes.
            </li>
            <li>
              We develop not just athletic skills but also character,
              leadership, and life skills that benefit participants beyond their
              sporting careers.
            </li>
            <li>
              We advocate for increased investment in sports infrastructure and
              development programs in underserved communities.
            </li>
          </ProgramsSection1>
          <section>
            <h3>Featured Programs</h3>
            <div className="services-group2">
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports8.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Youth Football Academy"
                content="Our flagship program provides comprehensive football training for talented young players aged 8-18. We focus on technical skills, tactical understanding, physical development, and mental strength to create well-rounded athletes with the potential to compete at the highest levels."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports24.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Athletics Development"
                content="Kenya has a rich tradition of excellence in track and field. Our athletics program identifies and develops talented runners, jumpers, and throwers, providing them with professional coaching, training facilities, and competition opportunities."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports23.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Swimming Program"
                content="Our swimming program focuses on developing water safety skills and competitive swimming abilities. From beginners to advanced swimmers, we provide structured training that builds confidence, technique, and endurance in the water."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports19.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Cycling Academy"
                content="Our cycling academy introduces young athletes to the exciting world of cycling. We offer training in road cycling, mountain biking, and track cycling, with a focus on technique, safety, and competitive strategies for all skill levels."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports26.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Sports Equipment Support"
                content="We collect and distribute quality sports equipment to talented athletes who lack resources. This includes footballs, jerseys, boots, swimming gear, bicycles, cycling equipment, and more. Our goal is to ensure that financial constraints don't limit athletic potential."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports13.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Community Sports Events"
                content="We organize regular sports events and tournaments that bring communities together, promote healthy competition, and help us identify promising athletes for our development programs. These events cover various sports including football, athletics, swimming, cycling, volleyball, and basketball."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sports25.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Coach Education"
                content="We provide training and certification programs for local coaches to improve the quality of sports instruction at the grassroots level. Well-trained coaches are essential for identifying and developing talent effectively."
              />
              <HomeTwo
                stylez={{
                  backgroundImage: "url('/assets/sudi.jpeg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                title="Sports Scholarships"
                content="We help talented athletes secure scholarships to continue their education while pursuing their sporting dreams. This program ensures that athletes don't have to choose between education and sports."
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Section1({ src }) {
  return (
    <div className="about-group1">
      <figure style={{ textAlign: "center" }}>
        <img src={src} style={{ minWidth: "320px", maxWidth: "500px" }} />
        <figcaption>Hon. Oscar Sudi</figcaption>
      </figure>
      <div className="about-group1Info">
        <h2>Mission Statement</h2>
        <p style={{ marginBottom: "1rem" }}>
          Our mission is to identify, develop, and promote sports talent across
          Kenya in football, athletics, swimming, cycling, and other sports,
          with a focus on providing opportunities for young athletes from
          underserved communities.
        </p>
        <p>
          We believe in the power of sports to transform lives and communities,
          and we work to create pathways for talented athletes to achieve their
          full potential.
        </p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <>
      <h1>Our History</h1>
      <div className="about-group2">
        <div id="image">
          <img src="/assets/murkoc.jpeg" style={{ width: "250px" }} />
          <img src="/assets/ababu.jpeg" style={{ width: "250px" }} />
          <img src="/assets/ruto3.jpeg" style={{ width: "250px" }} />
          <img src="/assets/rutos.jpeg" style={{ width: "250px" }} />
        </div>
        <div className="about-group2Info">
          <p style={{ marginBottom: "1rem" }}>
            Chepsaita Sports Limited was founded with a vision to develop sports
            talent in Kenya. Based in Kapsos, we started with a small football
            training program for local youth and have since expanded to offer a
            wide range of sports development initiatives.
          </p>
          <p>
            Over the years, we have established partnerships with schools,
            sports federations, and international organizations to create
            opportunities for athletes at all levels. Our programs now reach
            communities across the region, with a focus on areas where sports
            infrastructure and opportunities are limited.
          </p>
          <p>
            Our leadership team of professionals, led by our Founder Kirwa, in
            collaboration and assistance from visionaries and donors such as his
            excellency William Ruto, Oscar Sudi, Farouk Kibet, Mandago, Ababu
            Namwamba, Kipchumba Murkomen, Rai, Sport Pesa, Betika and others.
          </p>
          <p>
            Our core focus remains on grassroots sports development and creating
            pathways for talented athletes from underserved communities to
            achieve their dreams.
          </p>
        </div>
      </div>
    </>
  );
}

function ProgramsSection1({ title, children }) {
  return (
    <div className="services-content">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
}
Section1.propTypes = {
  src: PropTypes.string.isRequired,
};
ProgramsSection1.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
