import { HomeOne, HomeTwo, HomeThree } from "../components/home";

export default function HomePage() {
  return (
    <>
      <div className="intro">
        <p>Join us today</p>
        <h2>Developing Sports Talent</h2>
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
    </>
  );
}
