function StationProgress({ stations, currentIndex }) {
  return (
    <div className="progress-card" aria-label="Progreso de estaciones">
      <div className="progress-line">
        {stations.map((station, index) => {
          const state =
            index < currentIndex ? 'past' : index === currentIndex ? 'current' : 'upcoming'

          return (
            <div className={`station-step ${state}`} key={station}>
              <span className="station-dot"></span>
              <span className="station-name">{station}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StationProgress
