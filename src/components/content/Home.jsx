//Default imports
import React from 'react';
import './Home.css';

// Import images from src/images
import heroImage from '../../images/tech backround.jpg';
import image1 from '../../images/hero.jpg';
import image2 from '../../images/magic.gif';
import image3 from '../../images/statisticThing.jpg';

function Home() {
  const cards = [
    {
      image: image1,
      title: "We're no strangers to love",
      subtitle: "You know the rules and so do I.   A full commitment's what I'm thinkin' of. You wouldn't get this from any other guy. I just wanna tell you how I'm feeling. Gotta make you understand",
    },
    {
      image: image2,
      title: 'Never gonna run around',
      subtitle: "Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you",
    },
    {
      image: image3,
      title: "We've known each other for so long",
      subtitle: "Your heart's been aching, but you're too shy to say it. Inside, we both know what's been going on. We know the game and we're gonna play it. And if you ask me how I'm feeling.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Lorem ipsum<br />dolor sit amet</h1>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
