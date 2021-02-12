import { useEffect, useState } from 'react'
import { CitasList } from './components/CitasList'
import { Formulario } from './components/Formulario'

function App() {
	const [citas, setCitas] = useState([])

	// eliminar cita por id
	const deleteCita = (id) => {
		const newCitas = citas.filter((cita) => cita.id !== id)
		setCitas(newCitas)
	}

	useEffect(() => {
		console.log('me ejecuto')
		const citasStorage = JSON.parse(localStorage.getItem('citas')) || []
		setCitas(citasStorage)
	}, [])

	useEffect(() => {
		console.log('me actualice')

		localStorage.setItem('citas', JSON.stringify(citas))
	}, [citas])

	return (
		<main className='container'>
			<h1>Administrar Citas</h1>
			<section className='form-container'>
				<Formulario setCitas={setCitas} />
			</section>
			<section className='data-container'>
				<CitasList citas={citas} deleteCita={deleteCita} />
			</section>
		</main>
	)
}

export default App
