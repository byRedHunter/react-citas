import React from 'react'
import PropTypes from 'prop-types'
import { CitasItem } from './CitasItem'

export const CitasList = ({ citas, deleteCita }) => {
	return (
		<div className='list'>
			{citas.length > 0 ? (
				citas.map((cita) => (
					<CitasItem key={cita.id} cita={cita} deleteCita={deleteCita} />
				))
			) : (
				<p className='alerta error'>No hay citas.</p>
			)}
		</div>
	)
}

CitasList.propTypes = {
	citas: PropTypes.array.isRequired,
	deleteCita: PropTypes.func.isRequired,
}
