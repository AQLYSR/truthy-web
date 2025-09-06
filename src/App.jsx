import './App.css'
import Aurora from '@/components/Aurora'
import GlassSurface from '@/components/GlassSurface'
import PhoneMockup from "@/components/PhoneMockup"
import TruthBubbleCarousel from "@/components/TruthBubbleCarousel"
import ShinyText from '@/components/ShinyText'
import { useState } from 'react'

function App() {
  const thoughts = [
    "Reminder: touch grass🌱",
    "Is it weird I feel more creative at 2am?",
    "Can't stop thinking about AI replacing homework",
    "If I write it, will future-me judge me?",
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
        speed={0.3}
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
            <ul>
              <li>One RAW thought everyday</li>
              <li>See what your friends are thinking at the same time</li>
              <li>No lurking: if you don't post, you don't get to read</li>
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
              <TruthBubbleCarousel items={thoughts} />
            </PhoneMockup>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

