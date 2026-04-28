function HomeScreen({ activeLine, lines, isScanning, hasScanned, onScan, trip }) {
  return (
    <section className="screen home-screen" aria-labelledby="home-title">
      <div className="hero-card">
        <div className="hero-topline">
          <span className="line-badge">{activeLine.id}</span>
          <span>QR de vagón simulado</span>
        </div>
        <h1 id="home-title">Tu guía accesible para moverte en Metro</h1>
        <p>
          Escanea el código del vagón para cargar línea, dirección, estación
          actual, alertas y recomendaciones de bajada.
        </p>
        <button className="scan-button" type="button" onClick={onScan}>
          {isScanning ? 'Escaneando QR...' : 'Escanear QR del vagón'}
        </button>
      </div>

      <div className={hasScanned ? 'scan-card success' : 'scan-card'}>
        <div className="qr-frame" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <strong>{hasScanned ? 'Viaje cargado' : 'Escaneo simulado'}</strong>
          <p>
            {hasScanned
              ? `${activeLine.nombre}, ${trip.trainCar}, estación ${trip.currentStation}.`
              : 'El QR puede generar viajes en cualquiera de las líneas disponibles.'}
          </p>
        </div>
      </div>

      <div className="network-card">
        <div>
          <span className="eyebrow">Red disponible</span>
          <h2>Líneas simuladas</h2>
        </div>
        <div className="line-chip-list">
          {lines.map((line) => (
            <span
              className="line-chip"
              key={line.id}
              style={{ '--chip-color': line.color, '--chip-text': line.textColor }}
            >
              {line.id}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
