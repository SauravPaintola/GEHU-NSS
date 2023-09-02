import ConfettiExplosion from 'react-confetti-explosion';
import ShowText from './ShowText'
import ShowTextTwo from './ShowTextTwo';
import ShowLayerTwo from './ShowLayerTwo';

function ShowConfetti() {
  const confettiStyle = {
    position: 'absolute',
    top: 0,
  }
  return (
    <ConfettiExplosion 
      particleCount={600}
      duration={3000}
      force= {0.8}
      width= {1600}
      style={confettiStyle}
    />
  )
}

export default function App() {
  const appStyle = {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={appStyle}>
      <ShowConfetti />
      <ShowText />
      <ShowLayerTwo />
      <ShowTextTwo />
    </div>

  )
}
