function AccessibleToggle({ enabled, onToggle }) {
  return (
    <button
      className={enabled ? 'access-toggle active' : 'access-toggle'}
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
    >
      Modo accesible
    </button>
  )
}

export default AccessibleToggle
