import "./WhyChooseUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWifi, FaShieldAlt, FaClock, FaBolt, FaHeadset, FaMobileAlt } from "react-icons/fa";

const features = [
  { icon: <FaWifi />, title: "Seamless Connectivity", desc: "Works with Wi-Fi, no hub required." },
  { icon: <FaShieldAlt />, title: "Top-Tier Security", desc: "AES encryption & real-time monitoring." },
  { icon: <FaClock />, title: "Fast & Reliable", desc: "Lightning-fast response time." },
  { icon: <FaBolt />, title: "Energy Efficient", desc: "Reduces power consumption smartly." },
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Always here to assist you." },
  { icon: <FaMobileAlt />, title: "Voice & App Control", desc: "Compatible with Alexa & Google Home." },
];

export default function WhyChooseUs() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold">Why Choose Us?</h1>
      <p className="text-muted fst-italic"><h3>Smart. Secure. Seamless. Experience the future of home automation.</h3></p>
      <div className="row mt-4">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 d-flex flex-column align-items-center p-3">
            <div className="fs-1 text-primary">{feature.icon}</div>
            <h5 className="mt-3 fw-semibold">{feature.title}</h5>
            <p className="text-muted">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
