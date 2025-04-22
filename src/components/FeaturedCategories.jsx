import { useEffect, useRef } from "react";
import lights from "../assets/lights.jpeg";
import camera from "../assets/camera.jpeg";
import switchpic from "../assets/switchpic.jpeg";
import voice from "../assets/voice.jpeg";
import "./FeaturedCategories.css";

const categories = [
  {
    name: "Smart Lighting",
    description: "Control your lights with voice using the app.",
    image: lights,
    link: "/shop/smart-lighting",
    color: "#ff007f",
  },
  {
    name: "Security & Surveillance",
    description: "Keep your home safe with smart security.",
    image: camera,
    link: "/shop/security",
    color: "#ff8800",
  },
  {
    name: "Smart Plugs & Switches",
    description: "Automate your appliances effortlessly.",
    image: switchpic,
    link: "/shop/smart-plugs",
    color: "#8a2be2",
  },
  {
    name: "Voice Assistants & Hubs",
    description: "Control your home with Alexa & Google Home.",
    image: voice,
    link: "/shop/voice-assistants",
    color: "#00bfff",
  },
];

function FeaturedCategories() {
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="featured-container">
      <h2 className="gradient-text"> Featured Categories </h2>
      {categories.map((category, index) => (
        <div
          className={`category-item hidden ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
          ref={(el) => (categoryRefs.current[index] = el)}
        >
          <div className="image-container">
            <img src={category.image} alt={category.name} />
          </div>
          <div className="text-content">
            <h3 style={{ color: category.color }}>{category.name}</h3>
            <p>{category.description}</p>
            <a href={category.link} className="explore-btn">
              Explore {category.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedCategories;
