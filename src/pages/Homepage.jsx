import { HomeOne, HomeTwo, HomeThree } from "../components/home";

export default function HomePage() {
  return (
    <>
      <div className="intro">
        <p>Join us today</p>
        <h2>Developing Sports Talent</h2>
        <p></p>
      </div>
      <section className="section1">
        <HomeOne
          name="pool"
          title="Sports Training"
          content="We provide professional training programs for young athletes in various sports including football, athletics, swimming, cycling, and volleyball. Our coaches are experienced professionals dedicated to developing talent."
        />
        <HomeOne
          name="fitness_center"
          title="Equipment Support"
          content="We provide quality sports equipment to talented athletes who lack resources."
          extraContent="Our equipment donation program ensures that financial constraints don't limit athletic potential."
        />
        <HomeOne
          name="sports_football"
          title="Talent Development"
          content="Join our talent development programs designed to identify, nurture, and promote sports talent across Kenya. We connect promising athletes with opportunities both locally and internationally."
        />
      </section>
      <section className="section-added1">
        <h3>About Us</h3>
        <p>
          We are a sports development initiative committed to empowering young
          athletes across Kenya through professional training, talent
          development, and equipment support. Our programs span football,
          athletics, swimming, cycling, and volleyball, led by experienced
          coaches dedicated to nurturing potential.
        </p>
        <p>
          We also run an equipment donation program, ensuring that no athlete is
          held back by financial limitations. Through community outreach and
          organized events, we actively identify and support promising talent in
          both urban and rural areas.
        </p>
      </section>
      <section className="section2">
        <h2>Our Programs</h2>
        <p>Join our sports programs and initiatives for 2023 and beyond.</p>

        <div className="section2group">
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports16.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Swimming Program"
            content="
                  Our swimming program develops water safety skills and competitive swimming abilities for all ages. From beginners to advanced swimmers, we provide structured training that builds confidence, technique, and endurance in the water."
            goal="Join Today"
          />
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports19.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Cycling Program"
            content="
                  Our cycling program introduces athletes to road cycling, mountain biking, and track cycling. We focus on technique, safety, and competitive strategies for all skill levels from beginners to advanced riders."
            goal="Register Now"
          />
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports7.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Sports Academy"
            content="
                  Our sports academy provides professional training for talented young players aged 8-18. We focus on technical skills, physical development, and mental strength to create well-rounded athletes."
            goal="Join Today"
          />
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports18.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Sports Equipment Drive"
            content="
                 We're collecting and distributing sports equipment to schools and communities that lack resources. This includes footballs, jerseys, boots, swimming gear, bicycles, helmets, and other training equipment. Your donations help us ensure that all talented athletes have access to proper equipment.

  "
            goal="Donate Now"
          />
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports10.jpeg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Community Sports Events"
            content="
                  We organize regular community sports events, tournaments, and talent identification programs across the region. These events bring communities together, promote healthy competition, and help us identify promising athletes for our development programs."
            goal="Upcoming: July 2023"
          />
        </div>
      </section>
      <section className="section3">
        <HomeThree
          src="/assets/dr.jpeg"
          size={50}
          alt="Leadership Team"
          title="Our Leadership Team"
          content="Our team includes Directors Peter Mukunda Kuria and Daniel Kiprono, in collaboration with visionaries and donors; William Ruto, Oscar Sudi, Farouk Kibet, Mandago, Ababu Namwamba, and Kipchumba Murkomen"
        />
        <HomeThree
          src="/assets/rutos.jpeg"
          size={200}
          alt="Hon. William Ruto"
          title="Our History"
          content="Chepsaita Sports Limited was founded with a vision to develop sports talent in Kenya. We focus on providing opportunities for young athletes to develop their skills and reach their full potential through professional training, equipment support, and competition opportunities."
        />
        <HomeThree
          src="/assets/murkoc.jpeg"
          size={200}
          title="Our Mission"
          alt="Hon. Kipchumba Murkomen"
          content="Our mission is to identify, develop, and promote sports talent across Kenya. We believe that every talented athlete deserves the opportunity to succeed regardless of their background or financial situation. Through our programs, we aim to create pathways for athletes to achieve their dreams."
        />
      </section>
      <section className="section-added2">
        <h2>More Activities</h2>
        <h3>Chepsaita Sacco Society LTD</h3>
        <p>
          Chepsaita Sacco Society Limited was established in 2022 with a clear
          mission: to simplify and streamline financial support for employees of
          Chepsaita Sports Limited. We are dedicated to facilitating timely
          salary payments while also offering accessible, low-interest soft
          loans to help employees meet their immediate financial needs.
        </p>
        <p>
          Our goal is to empower members by providing fast, reliable, and
          affordable financial solutions. Whether it's bridging a gap between
          paychecks or handling unexpected expenses, Strickly Company Sacco is
          here to ensure that financial challenges don’t stand in the way of
          personal and professional progress.
        </p>
        <p>
          We are committed to transparency, efficiency, and the financial
          well-being of every employee we serve.
        </p>
        <p>You can contact us in email: info@chepsaitasacco.co.ke</p>
        <p>Tel: 0202324345</p>
      </section>
    </>
  );
}
