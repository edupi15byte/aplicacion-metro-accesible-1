import { useEffect, useRef } from 'react'

function StationProgress({ stations, currentIndex, nextIndex, destination, directionIndex }) {
  const scrollerRef = useRef(null)
  const destinationIndex = stations.indexOf(destination)
  const directionLabel =
    directionIndex === 1 ? stations[stations.length - 1] : stations[0]

  useEffect(() => {
    const scroller = scrollerRef.current
    const currentMarker = scroller?.querySelector('[data-current="true"]')

    if (!scroller || !currentMarker) return

    const targetLeft =
      currentMarker.offsetLeft - scroller.clientWidth / 2 + currentMarker.clientWidth / 2

    scroller.scrollTo({ left: Math.max(targetLeft, 0), behavior: 'smooth' })
  }, [currentIndex, stations])

  return (
    <div className="progress-card" aria-label="Progreso de estaciones">
      <div className="progress-card-header">
        <div>
          <span className="eyebrow">Ruta de estaciones</span>
          <h2>Avance del trayecto</h2>
        </div>
        <span className="direction-badge">Vas hacia {directionLabel}</span>
      </div>

      <div className="route-orientation">
        <span>{directionIndex === 1 ? 'Inicio' : 'Final'}</span>
        <strong aria-hidden="true">{directionIndex === 1 ? '→' : '←'}</strong>
        <span>{directionLabel}</span>
      </div>

      <div className="progress-scroll" ref={scrollerRef}>
        <div
          className={directionIndex === 1 ? 'progress-line' : 'progress-line reverse'}
          style={{ '--station-count': stations.length }}
        >
          {stations.map((station, index) => {
            const hasPassed =
              directionIndex === 1 ? index < currentIndex : index > currentIndex
            const isCurrent = index === currentIndex
            const isNext = index === nextIndex && nextIndex !== currentIndex
            const isDestination = index === destinationIndex
            const state = isCurrent ? 'current' : hasPassed ? 'past' : 'upcoming'

            return (
              <div
                className={`station-step ${state}${isNext ? ' next' : ''}${
                  isDestination ? ' destination' : ''
                }`}
                data-current={isCurrent ? 'true' : undefined}
                key={station}
              >
                <span className="station-dot">
                  {isCurrent && <span aria-hidden="true">●</span>}
                  {isNext && <span aria-hidden="true">→</span>}
                  {isDestination && <span aria-hidden="true">◆</span>}
                </span>
                <span className="station-name">{station}</span>
                <span className="station-tags">
                  {isCurrent && <span className="station-tag actual">Actual</span>}
                  {isNext && <span className="station-tag next-tag">Próxima</span>}
                  {isDestination && <span className="station-tag destination-tag">Destino</span>}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StationProgress
