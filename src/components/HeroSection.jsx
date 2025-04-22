import "./HerosSection.css";

function HeroSection() {
    return (
      <section className="hero">
        <div className="overlay"></div> 
        <div className="content">
          <h1>Welcome to <span className="text-highlight">UrbanScape</span></h1>
          <p>Make Your Home Smarter, Safer, and More Convenient!</p>
          <button className="btn btn-danger btn-lg">Explore Now</button>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  