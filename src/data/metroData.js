export const metroTrip = {
  line: 'L1',
  lineName: 'Linea 1',
  direction: 'Direccion Los Dominicos',
  trainCar: 'Vagon 4',
  currentStation: 'Universidad de Chile',
  nextStation: 'Santa Lucia',
  estimatedTime: '3 min',
  currentStationIndex: 4,
  recommendedExit: 'Puerta derecha, salida hacia calle Merced',
  stations: [
    'San Pablo',
    'Neptuno',
    'Pajaritos',
    'Las Rejas',
    'Universidad de Chile',
    'Santa Lucia',
    'Baquedano',
    'Manuel Montt',
    'Pedro de Valdivia',
    'Tobalaba',
    'Los Dominicos',
  ],
}

export const stationRecommendations = {
  'Santa Lucia': 'Baja en la siguiente estacion. Usa la puerta derecha.',
  Baquedano: 'Quedan 2 estaciones. Ubicate cerca de la puerta derecha.',
  Tobalaba: 'Quedan 5 estaciones. Recomendado permanecer en el centro del vagon.',
  'Los Dominicos': 'Destino final de la direccion actual. Mantente atento a los avisos.',
  'Universidad de Chile': 'Estas en la estacion actual. Verifica combinaciones antes de bajar.',
}

export const metroAlerts = [
  {
    id: 1,
    level: 'Normal',
    title: 'Servicio regular en Linea 1',
    message: 'Frecuencia estimada entre trenes: 4 minutos.',
  },
  {
    id: 2,
    level: 'Aviso',
    title: 'Alto flujo en Baquedano',
    message: 'Prefiere ascensores y rutas accesibles senalizadas.',
  },
  {
    id: 3,
    level: 'Accesible',
    title: 'Ascensor operativo',
    message: 'Ascensor disponible en Universidad de Chile, salida Alameda.',
  },
]
