import Image from "../assets/images/background.png";
import "../styles/Home.css";
function Home() {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-text">
          <h1>Together, We Can Change the World</h1>
          <p>
            Join our volunteer community and help create a better future 
            through education, health, and environmental initiatives.
          </p>
          <button className="btn-primary">Explore Opportunities</button>
        </div>
    <div className="hero-image">
        <img
          src={Image}
          width="400"
          style={{ borderRadius: "20px" }}
        />
        </div>
      </div>
    </div>
  );
}

export default Home;