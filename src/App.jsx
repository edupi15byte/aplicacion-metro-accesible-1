import { useState } from 'react'
import AccessibleToggle from './components/AccessibleToggle.jsx'
import AlertsScreen from './components/AlertsScreen.jsx'
import BottomNav from './components/BottomNav.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import TripScreen from './components/TripScreen.jsx'
import {
  createRandomTrip,
  createTrip,
  getDestinationMessage,
  getLineAlerts,
  getLineById,
  getRemainingStations,
  metroAlerts,
  metroLines,
} from './data/metroData.js'
import './App.css'

const initialTrip = createTrip({
  lineId: 'L1',
  currentIndex: 12,
  directionIndex: 1,
  trainCar: 'Vagón 4',
})

function App() {
  const [activeView, setActiveView] = useState('home')
  const [isAccessible, setIsAccessible] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [hasScanned, setHasScanned] = useState(false)
  const [trip, setTrip] = useState(initialTrip)
  const [destination, setDestination] = useState('Baquedano')

  const activeLine = getLineById(trip.lineId)
  const remainingStations = getRemainingStations(trip, destination)
  const destinationMessage = getDestinationMessage(remainingStations)
  const lineAlerts = getLineAlerts(activeLine.id)

  const setTripAndDestination = (nextTrip, preferredDestination) => {
    const nextLine = getLineById(nextTrip.lineId)
    const fallbackIndex =
      nextTrip.directionIndex === 1
        ? Math.min(nextTrip.currentStationIndex + 3, nextLine.estaciones.length - 1)
        : Math.max(nextTrip.currentStationIndex - 3, 0)

    setTrip(nextTrip)
    setDestination(preferredDestination || nextLine.estaciones[fallbackIndex])
  }

  const handleScan = () => {
    setIsScanning(true)

    window.setTimeout(() => {
      const nextTrip = createRandomTrip()
      setTripAndDestination(nextTrip)
      setHasScanned(true)
      setIsScanning(false)
      setActiveView('trip')
    }, 850)
  }

  const appStyle = {
    '--line-color': activeLine.color,
    '--line-on-color': activeLine.textColor,
    '--line-soft': `${activeLine.color}16`,
    '--line-shadow': `${activeLine.color}33`,
  }

  const screens = {
    home: (
      <HomeScreen
        activeLine={activeLine}
        hasScanned={hasScanned}
        isScanning={isScanning}
        lines={metroLines}
        onScan={handleScan}
        trip={trip}
      />
    ),
    trip: (
      <TripScreen
        alerts={lineAlerts}
        destination={destination}
        destinationMessage={destinationMessage}
        line={activeLine}
        onDestinationChange={setDestination}
        remainingStations={remainingStations}
        trip={trip}
      />
    ),
    alerts: <AlertsScreen activeLine={activeLine} alerts={metroAlerts} />,
  }

  return (
    <div
      className={isAccessible ? 'app-shell accessible' : 'app-shell'}
      style={appStyle}
    >
      <header className="app-header">
        <div className="app-brand">
          <span className="metro-mark">M</span>
          <div>
            <span>MetroGuía Accesible</span>
            <small>{activeLine.nombre} activa</small>
          </div>
        </div>
        <AccessibleToggle
          enabled={isAccessible}
          onToggle={() => setIsAccessible((current) => !current)}
        />
      </header>

      <main>{screens[activeView] || screens.home}</main>

      <BottomNav activeView={activeView} onChange={setActiveView} />
    </div>
  )
}

export default App
