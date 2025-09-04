import './App.css'
import Aurora from '@/components/Aurora'
import GlassSurface from '@/components/GlassSurface'
import PhoneMockup from "@/components/PhoneMockup"
import TruthBubbleCarousel from "@/components/TruthBubbleCarousel"

function App() {
  const thoughts = [
    "Reminder; touch grass🌱",
    "Is it weird I feel more creative at 2am?",
    "Can't stop thinking about AI replacing homework",
    "If I write it, will future-me judge me?",
  ];

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
      <li> bla bla bla </li>
      <li> bla bla </li>
      <li> bla </li>
    </ul>
    <p>
      Every day at a random time, you'll get a prompt to share what's on your mind. Post your thought to see what your friends are thinking too.
    </p>
    <button className="cta">Join the Wailist</button>
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
