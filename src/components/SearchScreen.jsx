function SearchScreen({
  stations,
  searchTerm,
  onSearchChange,
  selectedDestination,
  onSelectDestination,
}) {
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredStations = stations.filter((station) =>
    station.toLowerCase().includes(normalizedSearch),
  )

  return (
    <section className="screen" aria-labelledby="search-title">
      <div className="section-heading">
        <p className="eyebrow">Buscador</p>
        <h1 id="search-title">Elige tu estacion de destino</h1>
      </div>

      <label className="search-field">
        <span>Buscar estacion</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Ej: Baquedano"
        />
      </label>

      <div className="station-list">
        {filteredStations.map((station) => (
          <button
            key={station}
            className={selectedDestination === station ? 'station-result active' : 'station-result'}
            type="button"
            onClick={() => onSelectDestination(station)}
          >
            <span>{station}</span>
            <strong>{selectedDestination === station ? 'Destino' : 'Seleccionar'}</strong>
          </button>
        ))}
      </div>
    </section>
  )
}

export default SearchScreen
