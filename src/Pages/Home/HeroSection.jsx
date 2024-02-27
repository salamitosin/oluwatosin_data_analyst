export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Oluwatosin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Data</span>{" "}
            <br />
            Analyst
          </h1>
          <p className="hero--section-description">
            Harnessing the transformative potential of data 
            <br /> to drive informed decisions and unlock new possibilities.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Profile.png" alt="Hero Section" />
      </div>
    </section>
  );
}
