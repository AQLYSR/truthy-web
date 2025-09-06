import './App.css'
import Aurora from '@/components/Aurora'
import GlassSurface from '@/components/GlassSurface'
import PhoneMockup from "@/components/PhoneMockup"
import TruthBubbleCarousel from "@/components/TruthBubbleCarousel"
import ShinyText from '@/components/ShinyText'
import { useState } from 'react'

function App() {
  const thoughts = [
    {
      id: 1,
      name: "Michael",
      pfp: "/public/images/michael.jpg",
      thought: "Reminder: touch grass🌱",
      likes: 13,
      comments: 2,
      location: "Soho, Manhattan",
      time: "20:22"
    },
    {
      id: 2,
      name: "Gio",
      pfp: "public/images/gio.jpg",
      thought: "Is it weird I feel more creative at 2am?",
      likes: 28,
      comments: 5,
      location: "Trastevere, Rome",
      time: "02:15"
    },
    {
      id: 3,
      name: "Sarah",
      pfp: "public/images/sarah.jpg",
      thought: "Can't stop thiking about AI replacing homework.",
      likes: 54,
      comments: 12,
      location: "San Francisco",
      time: "18:45"
    },
    {
      id: 4,
      name: "Alex",
      pfp: "/images/alex.jpg", // Assuming you'd add this image
      thought: "Just realized my 'productive' hours are actually 10 PM - 2 AM. Guess I'm a night owl now.",
      likes: 41,
      comments: 8,
      location: "Berlin, Germany",
      time: "00:07"
    },
    {
      id: 5,
      name: "Chloe",
      pfp: "/images/chloe.jpg", // Assuming you'd add this image
      thought: "Trying to adult but all I want to do is eat cereal for dinner.",
      likes: 22,
      comments: 3,
      location: "London, UK",
      time: "19:30"
    },
    {
      id: 6,
      name: "David",
      pfp: "/images/david.jpg", // Assuming you'd add this image
      thought: "The amount of unread emails in my inbox is starting to give me anxiety.",
      likes: 67,
      comments: 15,
      location: "New York, USA",
      time: "11:55"
    },
    {
      id: 7,
      name: "Sophia",
      pfp: "/images/sophia.jpg", // Assuming you'd add this image
      thought: "Is it just me, or does anyone else feel like they're constantly forgetting something important?",
      likes: 35,
      comments: 6,
      location: "Sydney, Australia",
      time: "09:10"
    }
  ];

  const [email, setEmail] = useState("");

  const scriptURL = "https://script.google.com/macros/s/AKfycbz6qyWOq8hpEOjA_Ku7qJrL9X_2OAuItNxe3qWGxy3mmuIhD73XPvZqDfid_V9D-obI/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({ email }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });

      if (response.ok) {
        alert("Thanks for joining the waitlist!");
        setEmail("");
      } else {
        alert("Something went wrong. Try again!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error submitting. Check console.");
    }
  };

  return (
    <>
      <Aurora
        colorStops={["#876CFF", "#F67874", "#0E6DBC"]}
        blend={1}
        amplitude={0.6}
        speed={0.6}
        className="background"
      />

      <div className="content">
        <GlassSurface
          display={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.8}
          mixBlendMode='screen'
          width="80%"
          height={80}
          borderRadius={25}
          className="header"
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 1rem'
          }}>
            <span className="logo-text">Truthy</span>
            <nav>
              <a href="#" className="nav-link">Home</a>
            </nav>
          </div>
        </GlassSurface>

        <section className="hero">
          <div className="hero-text">
            <h1> Be In The Moment.</h1>
            <div className="carousel-container-mobile">
              <div className="mobile-carousel">
                <TruthBubbleCarousel items={thoughts} />
              </div>
            </div>
            <ul>
              <li>💭 Share one thought each day</li>
              <li>👀 See friends’ thoughts at the same time</li>
              <li>🚫📖 Post to read — no silent scrolling</li>
            </ul>
            <p>
              Everyday you'll get a prompt to share what's on your mind. Post your thought to see what your friends are thinking too.
            </p>
            <p>
              Join the waitlist below 👇
            </p>

            {/* ✅ Proper form */}
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                id="waitlist-email"
                required
                placeholder="Enter your email"
                className="waitlist-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="waitlist-button">
                <ShinyText
                  text="Join Waitlist"
                  disabled={false}
                  speed={3}
                  className="shinytext"
                />
              </button>
            </form>
          </div>

          <div className="hero-visual">
            <PhoneMockup>
              /<TruthBubbleCarousel items={thoughts} />
            </PhoneMockup>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

