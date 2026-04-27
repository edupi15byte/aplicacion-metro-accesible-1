function HomeScreen({ isScanning, hasScanned, onScan, trip }) {
  return (
    <section className="screen home-screen" aria-labelledby="home-title">
      <div className="brand-strip">
        <span className="line-badge">{trip.line}</span>
        <span>{trip.direction}</span>
      </div>

      <div className="hero-panel">
        <p className="eyebrow">MetroGuia Accesible</p>
        <h1 id="home-title">Orientacion simple para tu viaje en Metro</h1>
        <p>
          Simula el QR del vagon para cargar informacion del recorrido, alertas y
          recomendaciones de bajada.
        </p>
      </div>

      <button className="scan-button" type="button" onClick={onScan}>
        {isScanning ? 'Escaneando...' : 'Escanear QR del vagon'}
      </button>

      <div className={hasScanned ? 'scan-card success' : 'scan-card'}>
        <div className="qr-frame" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <strong>{hasScanned ? 'QR detectado' : 'Escaneo simulado'}</strong>
          <p>
            {hasScanned
              ? `${trip.trainCar} cargado correctamente.`
              : 'Presiona el boton para iniciar el viaje.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeScreen
