function AlertsScreen({ activeLine, alerts }) {
  return (
    <section className="screen alerts-screen" aria-labelledby="alerts-title">
      <div className="section-heading">
        <p className="eyebrow">Alertas Metro</p>
        <h1 id="alerts-title">Estado del servicio</h1>
        <p>Revisa novedades por línea, accesibilidad y operación simulada.</p>
      </div>

      <div className="alerts-list">
        {alerts.map((alert) => {
          const isRelevant = alert.lineIds.includes(activeLine.id)

          return (
            <article
              className={`alert-card ${alert.type}${isRelevant ? ' relevant' : ''}`}
              key={alert.id}
            >
              <div className="alert-card-header">
                <span className={`alert-level ${alert.type}`}>{alert.type}</span>
                {isRelevant && <strong>Relevante para {activeLine.id}</strong>}
              </div>
              <h2>{alert.title}</h2>
              <p>{alert.message}</p>
              <div className="alert-lines">
                {alert.lineIds.map((lineId) => (
                  <span key={lineId}>{lineId}</span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AlertsScreen
