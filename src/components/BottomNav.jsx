const navItems = [
  { id: 'home', label: 'Inicio', icon: 'IN' },
  { id: 'trip', label: 'Mi viaje', icon: 'MV' },
  { id: 'search', label: 'Buscar', icon: 'BU' },
  { id: 'alerts', label: 'Alertas', icon: '!' },
]

function BottomNav({ activeView, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Navegacion principal">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={activeView === item.id ? 'nav-button active' : 'nav-button'}
          type="button"
          onClick={() => onChange(item.id)}
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default BottomNav
