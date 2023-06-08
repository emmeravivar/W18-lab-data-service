// import { useFetch } from './useFetch';
import { useAxios } from './useAxios';
// import { useAsyncAwait } from './useAsyncAwait';
import './App.css'

function App() {

  // const { data, loading, error } = useFetch('https://api.punkapi.com/v2/beers')
  const { data, loading, error } = useAxios('https://api.punkapi.com/v2/beers')
  // const { data, loading, error } = useAsyncAwait('https://api.punkapi.com/v2/beers')

  console.log('Leyendo la data:', data)
  console.log('Leyendo el loading:', loading)
  console.log('Leyendo el error:', error)

  return (
    <div className='container'>
      <h2>Week 18</h2>
      <h1>Servicio de Datos I</h1>
      <h3>Eva María Mera Vivar</h3>
      <h4>Learning Facilitator | 06/2023| Emeritus | MiT</h4>
    </div>
  )
}

export default App
