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
          src="/assets/icon-1.webp"
          title="Sports Training"
          content="We provide professional training programs for young athletes in various sports including football, athletics, and volleyball. Our coaches are experienced professionals dedicated to developing talent."
        />
        <HomeOne
          src="/assets/icon-2.webp"
          title="Equipment Support"
          content="We provide quality sports equipment to talented athletes who lack resources."
          extraContent="Our equipment donation program ensures that financial constraints don't limit athletic potential."
        />
        <HomeOne
          src="/assets/icon-3.webp"
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
              backgroundImage: "url('/assets/sports7.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Youth Football Academy"
            content="
                  Our youth football academy provides professional training for talented young players aged 8-18. We focus on technical skills, tactical understanding, physical development, and mental strength to create well-rounded athletes."
            goal="Join Today"
          />
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports6.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title="Sports Equipment Drive"
            content="
                 We're collecting and distributing sports equipment to schools and communities that lack resources. This includes footballs, jerseys, boots, training equipment, and more. Your donations help us ensure that all talented athletes have access to proper equipment.

  "
            goal="Donate Now"
          />
          <HomeTwo
            stylez={{
              backgroundImage: "url('/assets/sports10.jpg')",
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
          src="/assets/person.webp"
          size={50}
          title="Our Leadership Team"
          content="Ruto, Oscar Sudi, Farouk Kibet, Mandaa, Ababu na Mwamba, and Kipchumba Murkomen"
        />
        <HomeThree
          src="/assets/ruto.jpeg"
          size={200}
          alt="President William Ruto of Kenya"
          title="Our History"
          content="Chepsaita Sports Limited was founded with a vision to develop sports talent in Kenya. We focus on providing opportunities for young athletes to develop their skills and reach their full potential through professional training, equipment support, and competition opportunities."
        />
        <HomeThree
          src="/assets/murkomen.jpeg"
          size={200}
          title="Our Mission"
          alt="Sports CS Kipchumba Murkomen"
          content="Our mission is to identify, develop, and promote sports talent across Kenya. We believe that every talented athlete deserves the opportunity to succeed regardless of their background or financial situation. Through our programs, we aim to create pathways for athletes to achieve their dreams."
        />
      </section>
    </>
  );
}
