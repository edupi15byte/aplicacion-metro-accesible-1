import StationProgress from './StationProgress.jsx'

function TripScreen({ trip, selectedDestination, recommendation }) {
  return (
    <section className="screen" aria-labelledby="trip-title">
      <div className="section-heading">
        <p className="eyebrow">Mi viaje</p>
        <h1 id="trip-title">{trip.lineName}</h1>
      </div>

      <div className="trip-summary">
        <div>
          <span>Direccion</span>
          <strong>{trip.direction}</strong>
        </div>
        <div>
          <span>Vagon</span>
          <strong>{trip.trainCar}</strong>
        </div>
        <div>
          <span>Estacion actual</span>
          <strong>{trip.currentStation}</strong>
        </div>
        <div>
          <span>Proxima estacion</span>
          <strong>{trip.nextStation}</strong>
        </div>
      </div>

      <div className="eta-card">
        <span>Tiempo estimado</span>
        <strong>{trip.estimatedTime}</strong>
      </div>

      <StationProgress
        stations={trip.stations}
        currentIndex={trip.currentStationIndex}
      />

      <div className="recommendation-card">
        <span>Recomendacion de bajada</span>
        <strong>{selectedDestination}</strong>
        <p>{recommendation}</p>
      </div>
    </section>
  )
}

export default TripScreen
