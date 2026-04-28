function AccessibleToggle({ enabled, onToggle }) {
  return (
    <button
      className={enabled ? 'access-toggle active' : 'access-toggle'}
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
    >
      <span aria-hidden="true">Aa</span>
      Accesible
    </button>
  )
}

export default AccessibleToggle
