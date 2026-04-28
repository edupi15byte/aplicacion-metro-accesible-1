const combinations = {
  'San Pablo': ['L1', 'L5'],
  'Los Héroes': ['L1', 'L2'],
  'Universidad de Chile': ['L1', 'L3'],
  Baquedano: ['L1', 'L5'],
  Tobalaba: ['L1', 'L4'],
  'Santa Ana': ['L2', 'L5'],
  'Puente Cal y Canto': ['L2', 'L3'],
  'Plaza Egaña': ['L4', 'L3'],
  'Vicuña Mackenna': ['L4', 'L4A'],
  'Vicente Valdés': ['L4', 'L5'],
  'La Cisterna': ['L2', 'L4A'],
  Franklin: ['L2', 'L6'],
  Ñuble: ['L5', 'L6'],
}

const lineDefinitions = [
  {
    id: 'L1',
    nombre: 'Línea 1',
    color: '#E32731',
    textColor: '#FFFFFF',
    direcciones: ['San Pablo', 'Los Dominicos'],
    estaciones: [
      'San Pablo',
      'Neptuno',
      'Pajaritos',
      'Las Rejas',
      'Ecuador',
      'San Alberto Hurtado',
      'Universidad de Santiago',
      'Estación Central',
      'Unión Latinoamericana',
      'República',
      'Los Héroes',
      'La Moneda',
      'Universidad de Chile',
      'Santa Lucía',
      'Universidad Católica',
      'Baquedano',
      'Salvador',
      'Manuel Montt',
      'Pedro de Valdivia',
      'Los Leones',
      'Tobalaba',
      'El Golf',
      'Alcántara',
      'Escuela Militar',
      'Manquehue',
      'Hernando de Magallanes',
      'Los Dominicos',
    ],
  },
  {
    id: 'L2',
    nombre: 'Línea 2',
    color: '#FFD100',
    textColor: '#111827',
    direcciones: ['Vespucio Norte', 'Hospital El Pino'],
    estaciones: [
      'Vespucio Norte',
      'Zapadores',
      'Dorsal',
      'Einstein',
      'Cementerios',
      'Cerro Blanco',
      'Patronato',
      'Puente Cal y Canto',
      'Santa Ana',
      'Los Héroes',
      'Toesca',
      'Parque O’Higgins',
      'Rondizzoni',
      'Franklin',
      'El Llano',
      'San Miguel',
      'Lo Vial',
      'Departamental',
      'Ciudad del Niño',
      'Lo Ovalle',
      'El Parrón',
      'La Cisterna',
      'El Bosque',
      'Observatorio',
      'Copa Lo Martínez',
      'Hospital El Pino',
    ],
  },
  {
    id: 'L4',
    nombre: 'Línea 4',
    color: '#2563EB',
    textColor: '#FFFFFF',
    direcciones: ['Tobalaba', 'Plaza de Puente Alto'],
    estaciones: [
      'Tobalaba',
      'Cristóbal Colón',
      'Francisco Bilbao',
      'Príncipe de Gales',
      'Simón Bolívar',
      'Plaza Egaña',
      'Los Orientales',
      'Grecia',
      'Los Presidentes',
      'Quilín',
      'Las Torres',
      'Macul',
      'Vicuña Mackenna',
      'Vicente Valdés',
      'Rojas Magallanes',
      'Trinidad',
      'San José de la Estrella',
      'Los Quillayes',
      'Elisa Correa',
      'Hospital Sótero del Río',
      'Protectora de la Infancia',
      'Las Mercedes',
      'Plaza de Puente Alto',
    ],
  },
  {
    id: 'L4A',
    nombre: 'Línea 4A',
    color: '#38BDF8',
    textColor: '#111827',
    direcciones: ['La Cisterna', 'Vicuña Mackenna'],
    estaciones: [
      'La Cisterna',
      'San Ramón',
      'Santa Rosa',
      'La Granja',
      'Santa Julia',
      'Vicuña Mackenna',
    ],
  },
  {
    id: 'L5',
    nombre: 'Línea 5',
    color: '#22C55E',
    textColor: '#111827',
    direcciones: ['Plaza de Maipú', 'Vicente Valdés'],
    estaciones: [
      'Plaza de Maipú',
      'Santiago Bueras',
      'Del Sol',
      'Monte Tabor',
      'Las Parcelas',
      'Laguna Sur',
      'Barrancas',
      'Pudahuel',
      'San Pablo',
      'Lo Prado',
      'Blanqueado',
      'Gruta de Lourdes',
      'Quinta Normal',
      'Cumming',
      'Santa Ana',
      'Plaza de Armas',
      'Bellas Artes',
      'Baquedano',
      'Parque Bustamante',
      'Santa Isabel',
      'Irarrázaval',
      'Ñuble',
      'Rodrigo de Araya',
      'Carlos Valdovinos',
      'Camino Agrícola',
      'San Joaquín',
      'Pedrero',
      'Mirador',
      'Bellavista de La Florida',
      'Vicente Valdés',
    ],
  },
]

const buildTimes = (stations, base = 2) =>
  stations.slice(1).map((station, index) => ({
    from: stations[index],
    to: station,
    minutes: base + (index % 3),
  }))

export const metroLines = lineDefinitions.map((line, index) => ({
  ...line,
  combinaciones: line.estaciones
    .filter((station) => combinations[station])
    .map((station) => ({ estacion: station, lineas: combinations[station] })),
  tiemposEntreEstaciones: buildTimes(line.estaciones, index === 3 ? 3 : 2),
}))

export const metroAlerts = [
  {
    id: 1,
    lineIds: ['L1', 'L5'],
    type: 'normal',
    title: 'Servicio regular',
    message: 'Frecuencia estimada entre trenes: 4 minutos.',
  },
  {
    id: 2,
    lineIds: ['L1'],
    type: 'aviso',
    title: 'Alto flujo en Baquedano',
    message: 'Prefiere ascensores y rutas accesibles señalizadas.',
  },
  {
    id: 3,
    lineIds: ['L2', 'L4A'],
    type: 'accesible',
    title: 'Ascensor operativo',
    message: 'Ascensor disponible en La Cisterna para combinación accesible.',
  },
  {
    id: 4,
    lineIds: ['L4'],
    type: 'info',
    title: 'Trenes cortos en circulación',
    message: 'Ubícate cerca de las zonas marcadas en el andén.',
  },
  {
    id: 5,
    lineIds: ['L5'],
    type: 'critica',
    title: 'Demora puntual',
    message: 'Tiempo adicional estimado de 6 minutos hacia Vicente Valdés.',
  },
]

export const getLineById = (lineId) =>
  metroLines.find((line) => line.id === lineId) || metroLines[0]

export const getCombinationsForStation = (station) => combinations[station] || []

export const getLineAlerts = (lineId) =>
  metroAlerts.filter((alert) => alert.lineIds.includes(lineId))

export const getNextStationIndex = (line, currentIndex, directionIndex) => {
  if (directionIndex === 0) {
    return currentIndex > 0 ? currentIndex - 1 : currentIndex
  }

  return currentIndex < line.estaciones.length - 1 ? currentIndex + 1 : currentIndex
}

export const createTrip = ({
  lineId = 'L1',
  currentIndex = 12,
  directionIndex = 1,
  trainCar = 'Vagón 4',
} = {}) => {
  const line = getLineById(lineId)
  const boundedIndex = Math.min(Math.max(currentIndex, 0), line.estaciones.length - 1)
  const nextIndex = getNextStationIndex(line, boundedIndex, directionIndex)
  const segment = line.tiemposEntreEstaciones[Math.min(boundedIndex, line.tiemposEntreEstaciones.length - 1)]

  return {
    lineId: line.id,
    directionIndex,
    trainCar,
    currentStationIndex: boundedIndex,
    currentStation: line.estaciones[boundedIndex],
    nextStationIndex: nextIndex,
    nextStation: line.estaciones[nextIndex],
    estimatedTime: `${segment?.minutes || 2} min`,
  }
}

export const createRandomTrip = () => {
  const line = metroLines[Math.floor(Math.random() * metroLines.length)]
  const directionIndex = Math.random() > 0.5 ? 1 : 0
  const minIndex = 1
  const maxIndex = Math.max(line.estaciones.length - 3, minIndex)
  const currentIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex
  const trainCar = `Vagón ${Math.floor(Math.random() * 6) + 1}`

  return createTrip({ lineId: line.id, currentIndex, directionIndex, trainCar })
}

export const getRemainingStations = (trip, destination) => {
  const line = getLineById(trip.lineId)
  const destinationIndex = line.estaciones.indexOf(destination)

  if (destinationIndex === -1) return 0

  if (trip.directionIndex === 1) {
    return destinationIndex - trip.currentStationIndex
  }

  return trip.currentStationIndex - destinationIndex
}

export const getDestinationMessage = (remaining) => {
  if (remaining <= 0) return 'Has llegado a tu destino'
  if (remaining === 1) return 'Prepárate para bajar en la próxima estación'
  return `Faltan ${remaining} estaciones para tu destino`
}

export const getUpcomingTrains = (station, lineId) => {
  const seed = station.length + lineId.length
  return [`${2 + (seed % 4)} min`, `${6 + (seed % 5)} min`]
}
