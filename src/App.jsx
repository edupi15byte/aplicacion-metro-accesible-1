import { useState } from 'react'
import AccessibleToggle from './components/AccessibleToggle.jsx'
import AlertsScreen from './components/AlertsScreen.jsx'
import BottomNav from './components/BottomNav.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import SearchScreen from './components/SearchScreen.jsx'
import TripScreen from './components/TripScreen.jsx'
import { metroAlerts, metroTrip, stationRecommendations } from './data/metroData.js'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('home')
  const [isAccessible, setIsAccessible] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [hasScanned, setHasScanned] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('Baquedano')

  const recommendation =
    stationRecommendations[selectedDestination] ||
    `Para bajar en ${selectedDestination}, revisa la barra de progreso y acercate a la puerta antes de llegar.`

  const handleScan = () => {
    setIsScanning(true)

    window.setTimeout(() => {
      setHasScanned(true)
      setIsScanning(false)
      setActiveView('trip')
    }, 900)
  }

  const screens = {
    home: (
      <HomeScreen
        hasScanned={hasScanned}
        isScanning={isScanning}
        onScan={handleScan}
        trip={metroTrip}
      />
    ),
    trip: (
      <TripScreen
        recommendation={recommendation}
        selectedDestination={selectedDestination}
        trip={metroTrip}
      />
    ),
    search: (
      <SearchScreen
        onSearchChange={setSearchTerm}
        onSelectDestination={setSelectedDestination}
        searchTerm={searchTerm}
        selectedDestination={selectedDestination}
        stations={metroTrip.stations}
      />
    ),
    alerts: <AlertsScreen alerts={metroAlerts} />,
  }

  return (
    <div className={isAccessible ? 'app-shell accessible' : 'app-shell'}>
      <header className="app-header">
        <div>
          <span className="metro-mark">M</span>
          <span>MetroGuia Accesible</span>
        </div>
        <AccessibleToggle
          enabled={isAccessible}
          onToggle={() => setIsAccessible((current) => !current)}
        />
      </header>

      <main>{screens[activeView]}</main>

      <BottomNav activeView={activeView} onChange={setActiveView} />
    </div>
  )
}

export default App
