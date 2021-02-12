import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

export const Formulario = ({ setCitas }) => {
	const [error, setError] = useState(false)
	const [message, setMessage] = useState('')
	const { values, handleInputChange, reset } = useForm({
		mascota: '',
		duenio: '',
		fecha: '',
		hora: '',
		sintomas: '',
	})

	const { mascota, duenio, fecha, hora, sintomas } = values

	const handleSubmit = (e) => {
		e.preventDefault()

		//validar
		if (
			mascota.trim() === '' ||
			duenio.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			setError(true)
			setMessage('Complete todos los campos')
			return
		}

		setError(false)
		values.id = uuid()
		setCitas((citas) => [...citas, values])
		reset()
	}

	return (
		<>
			<h3>Crear Cita</h3>

			{error && <p className='alerta alerta-error'>{message}</p>}

			<form className='form' onSubmit={handleSubmit}>
				<label className='form-label' htmlFor='mascota'>
					Nombre de la mascota
				</label>
				<input
					type='text'
					name='mascota'
					id='mascota'
					placeholder='Luffy'
					className='form-input'
					value={mascota}
					onChange={handleInputChange}
				/>

				<label className='form-label' htmlFor='duenio'>
					Dueño de la mascota
				</label>
				<input
					type='text'
					name='duenio'
					id='duenio'
					placeholder='Pepito'
					className='form-input'
					value={duenio}
					onChange={handleInputChange}
				/>

				<label className='form-label' htmlFor='fecha'>
					Fecha
				</label>
				<input
					type='date'
					name='fecha'
					id='fecha'
					className='form-input'
					value={fecha}
					onChange={handleInputChange}
				/>

				<label className='form-label' htmlFor='hora'>
					Hora
				</label>
				<input
					type='time'
					name='hora'
					id='hora'
					className='form-input'
					value={hora}
					onChange={handleInputChange}
				/>

				<label className='form-label' htmlFor='sintomas'>
					Sintomas
				</label>
				<textarea
					name='sintomas'
					id='sintomas'
					className='form-input'
					placeholder='Sintomas de tu mascota'
					value={sintomas}
					onChange={handleInputChange}
				></textarea>
				<button className='form-button'>Enviar</button>
			</form>
		</>
	)
}

Formulario.prototypes = {
	setCitas: PropTypes.func.isRequired,
}
