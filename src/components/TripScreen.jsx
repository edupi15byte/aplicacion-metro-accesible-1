import StationProgress from './StationProgress.jsx'

function TripScreen({
  line,
  trip,
  destination,
  onDestinationChange,
  remainingStations,
  destinationMessage,
  alerts,
}) {
  const stationOptions =
    trip.directionIndex === 1 ? line.estaciones : [...line.estaciones].reverse()
  const nextStationLabel =
    trip.nextStation === trip.currentStation ? 'Fin de recorrido' : trip.nextStation

  return (
    <section className="screen trip-screen" aria-labelledby="trip-title">
      <div className="live-panel">
        <div className="live-panel-header">
          <span className="status-pill">
            <span aria-hidden="true"></span>
            Seguimiento en vivo
          </span>
          <span className="line-badge">{line.id}</span>
        </div>
        <h1 id="trip-title">{line.nombre}</h1>
        <p>Dirección {line.direcciones[trip.directionIndex]}</p>
      </div>

      <div className="trip-summary">
        <article className="metric-card">
          <span>Vagón</span>
          <strong>{trip.trainCar}</strong>
        </article>
        <article className="metric-card current">
          <span>Estación actual</span>
          <strong>{trip.currentStation}</strong>
        </article>
        <article className="metric-card next">
          <span>Próxima estación</span>
          <strong>{nextStationLabel}</strong>
        </article>
        <article className="metric-card eta">
          <span>Tiempo estimado</span>
          <strong>{trip.estimatedTime}</strong>
        </article>
      </div>

      <StationProgress
        currentIndex={trip.currentStationIndex}
        destination={destination}
        directionIndex={trip.directionIndex}
        nextIndex={trip.nextStationIndex}
        stations={line.estaciones}
      />

      <div className="destination-card">
        <div className="card-title-row">
          <div>
            <span className="eyebrow">Destino del viaje</span>
            <h2>{destination}</h2>
          </div>
          <span className="remaining-badge">
            {Math.max(remainingStations, 0)} restantes
          </span>
        </div>

        <label className="select-field">
          <span>Cambiar destino</span>
          <select
            value={destination}
            onChange={(event) => onDestinationChange(event.target.value)}
          >
            {stationOptions.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </label>

        <p className="destination-message">{destinationMessage}</p>
      </div>

      <div className="recommendation-card">
        <span>Recomendación de bajada</span>
        <strong>
          {remainingStations <= 1 ? 'Acércate a la puerta' : 'Mantén tu ubicación'}
        </strong>
        <p>
          {remainingStations <= 0
            ? 'Ya estás en el punto indicado. Revisa combinaciones antes de salir.'
            : 'La app seguirá mostrando la próxima estación y el avance de tu ruta.'}
        </p>
      </div>

      <div className="inline-alerts">
        <div className="card-title-row">
          <div>
            <span className="eyebrow">Alertas relevantes</span>
            <h2>{line.nombre}</h2>
          </div>
        </div>
        {alerts.slice(0, 2).map((alert) => (
          <article className={`mini-alert ${alert.type}`} key={alert.id}>
            <span>{alert.type}</span>
            <p>{alert.title}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TripScreen
