function AlertsScreen({ alerts }) {
  return (
    <section className="screen" aria-labelledby="alerts-title">
      <div className="section-heading">
        <p className="eyebrow">Alertas Metro</p>
        <h1 id="alerts-title">Estado del servicio</h1>
      </div>

      <div className="alerts-list">
        {alerts.map((alert) => (
          <article className="alert-card" key={alert.id}>
            <span className={`alert-level ${alert.level.toLowerCase()}`}>
              {alert.level}
            </span>
            <h2>{alert.title}</h2>
            <p>{alert.message}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AlertsScreen
