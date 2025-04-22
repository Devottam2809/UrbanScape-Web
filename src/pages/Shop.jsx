import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Shop = () => {
  const styles = {
    heroSection: {
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heroImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.5,
    },
    heroText: {
      position: "relative",
      zIndex: 2,
      color: "#ffffff",
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
      padding: "20px",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.4)",
      zIndex: 1,
    },
  };

  return (
    <section style={styles.heroSection} className="text-white bg-dark">
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroText} className="text-center">
        <h1 className="text-warning display-4 fw-bold mb-3">
          Revolutionize Your Home with Smart Automation!
        </h1>
        <p className="text-white lead mb-4">
          Experience the convenience of smart lights, security cameras,
          thermostats, and more.
        </p>
      </div>
      <div style={styles.heroImage}>
        <img
          src="src/assets/shop.jpeg"
          alt="Smart home devices in action"
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default Shop;
