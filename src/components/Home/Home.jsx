import { useEffect, useRef, createRef } from "react";
import "./Home.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import carousel1 from "../../assets/videos/nerves.mp4";
import carousel2 from "../../assets/videos/brain.mp4";

import why1 from "../../assets/why-1.svg";
import why2 from "../../assets/why-2.svg";
import why3 from "../../assets/why-3.svg";
import why4 from "../../assets/why-4.svg";

import serviceImg1 from "../../assets/mental-health-1.jpg";
import serviceImg2 from "../../assets/mental-health-2.jpg";
import serviceImg3 from "../../assets/mental-health-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const aboutGrid = [
    {
      id: 1,
      img: why1,
      title: "Comprehensive Care",
      text: "Discover a range of services, from individual therapy and group programs to both in-person and online mental health care designed to support you fully.",
    },
    {
      id: 2,
      img: why2,
      title: "Science-Driven Care",
      text: "Our treatments are rooted in proven psychological frameworks and the latest research, ensuring that you receive the most effective and reliable support.",
    },
    {
      id: 3,
      img: why3,
      title: "Tailored Support for You",
      text: "Every treatment plan is uniquely crafted to address your specific challenges and goals, empowering you to thrive in your mental health journey.",
    },
    {
      id: 4,
      img: why4,
      title: "Always Here for You",
      text: "Our mental health services are available around the clock, ensuring you have access to help whenever and wherever you need it.",
    },
  ];

  const servicesGrid = [
    {
      id: 1,
      img: serviceImg1,
      title: "Cognitive Behavioral Therapy (CBT)",
      text: "CBT is a core component of our psychotherapeutic services, aimed at treating a range of conditions by changing negative patterns of thought and behavior. This evidence-based approach is particularly effective in treating depression, anxiety, and stress.",
    },
    {
      id: 2,
      img: serviceImg2,
      title: "Psychotherapy and Counseling",
      text: "We offer individual, couple, family, and group counseling to help our patients deal with a wide array of mental health challenges. Our therapists are skilled in various modalities to support and guide you toward emotional and psychological well-being.",
    },
    {
      id: 3,
      img: serviceImg3,
      title: "Specialized Programs for Diverse Conditions",
      text: "Our center offers specialized programs tailored to specific conditions, including dementia, stress, and more, providing targeted interventions designed to meet the unique needs of each patient.",
    },
  ];

  const refs = useRef(
    servicesGrid.map(() => ({
      img: createRef(),
      text: createRef(),
    }))
  );

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      const imgFromX = index % 2 === 0 ? -200 : 200; // Images slide from left for even indexes, right for odd
      const textFromX = index % 2 === 0 ? 200 : -200; // Texts slide from right for even indexes, left for odd

      gsap.fromTo(
        ref.img.current,
        { x: imgFromX, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ref.img.current,
            start: "top bottom-=200",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ref.text.current,
        { x: textFromX, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ref.text.current,
            start: "top bottom-=200",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup function to prevent memory leaks
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      <section className="hero-section" id="/">
        <Swiper
          navigation={true}
          // loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <video src={carousel1} autoPlay muted playsInline loop />
          </SwiperSlide>
          <SwiperSlide>
            <video src={carousel2} autoPlay muted playsInline loop />
          </SwiperSlide>
        </Swiper>
        <div className="overlay-layer"></div>
      </section>

      <section className="about-section" id="about-us">
        <h1 className="title">Why Optimal Minds?</h1>
        <p className="tagline">
          At Optimal Minds, we bring together experienced mental health
          professionals to provide holistic care and personalized support for
          your mental well-being.
        </p>
        <div className="grid-container">
          {aboutGrid.map((item) => (
            <div className="grid-item" key={item.id}>
              <img src={item.img} alt="why" />
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.text}</p>
            </div>
          ))}
        </div>
        <button className="know-more">Know More</button>
      </section>

      <section className="services" id="services">
        <div className="services-container">
          <h2>Our Mental Healthcare Offerings</h2>
          {servicesGrid.map((service, index) => (
            <div
              key={service.id}
              className={`service ${index % 2 === 0 ? "" : "reverse"}`}
            >
              <div className="image-container" ref={refs.current[index].img}>
                <img src={service.img} alt={service.title} />
              </div>
              <div className="text-container" ref={refs.current[index].text}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <button>Book Appointment</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
