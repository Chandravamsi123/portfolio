import "./index.css";

const Home = () => (
  <>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Chandra Vamsi Vanapalli</h1>
        <img
          src="https://res.cloudinary.com/dhz7loqpf/image/upload/v1720417127/1_8_sheoef.jpg"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          About Me
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dhz7loqpf/image/upload/v1720417127/1_8_sheoef.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
);

export default Home;
