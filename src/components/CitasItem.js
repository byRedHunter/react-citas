import React from 'react'
import PropTypes from 'prop-types'

export const CitasItem = ({ cita, deleteCita }) => {
	return (
		<article className='cita'>
			<h3>{cita.duenio}</h3>
			<p>
				<strong>Mascota: </strong>
				{cita.mascota}
			</p>
			<p>
				<strong>Fecha: </strong>
				{cita.fecha}
			</p>
			<p>
				<strong>Hola: </strong>
				{cita.hora}
			</p>
			<p>
				<strong>Sintoma: </strong>
				{cita.sintomas}
			</p>

			<button
				className='form-button button-delete'
				onClick={() => deleteCita(cita.id)}
			>
				&times;
			</button>
		</article>
	)
}

CitasItem.propTypes = {
	cita: PropTypes.object.isRequired,
	deleteCita: PropTypes.func.isRequired,
}
