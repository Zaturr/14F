import { useState } from 'react'
import { RosasPie } from './Rosas'
import { Fireworks } from './Fireworks'

function App() {
  const [respuesta, setRespuesta] = useState(null) // null | 'si' | 'no'
  const [mostrarModalNo, setMostrarModalNo] = useState(false)

  const handleNo = () => {
    setRespuesta('no')
    setMostrarModalNo(true)
  }

  const handleSi = () => {
    setRespuesta('si')
  }

  const cerrarModalNo = () => setMostrarModalNo(false)

  const mostrarCita = respuesta === 'si'

  return (
    <div className="contenedor">
      {mostrarCita && <Fireworks />}
      <RosasPie />
      <div className="card">
        {mostrarCita ? (
          <>
            <div className="heart">🤍</div>
            <h1 className="card-titulo card-titulo--grande">
              Listo tenemos una cita, te recojo a la 1 en tu casa amor mío.
            </h1>
          </>
        ) : (
          <>
            <div className="heart">🤍</div>
            <h1 className="card-titulo">¡Hola mi vida!</h1>
            <p>Me falto pedirtelo de forma bonita y si bien ya es un hecho, amorcito.</p>
            <p>Este sabado 14 de Febrero, te gustaria que pasarlo junto a tu novio en una posada de manera muy romantica...?.</p>
          </>
        )}
      </div>

      {mostrarCita && (
        <p className="texto-amor">Te amo mucho mi amorcito</p>
      )}

      <div className="botones">
        <button
          type="button"
          className={respuesta === 'si' ? 'boton boton--activo' : 'boton'}
          onClick={handleSi}
        >
          Sí
        </button>
        <button
          type="button"
          className={respuesta === 'no' ? 'boton boton--activo' : 'boton'}
          onClick={handleNo}
        >
          No
        </button>
      </div>

      {mostrarModalNo && (
        <div className="modal-overlay" onClick={cerrarModalNo}>
          <div className="modal-ventana" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-cerrar" onClick={cerrarModalNo} aria-label="Cerrar">
              ×
            </button>
            <p className="modal-texto">No amorcito este no era, era el otro</p>
          </div>
        </div>
      )}

    </div>
  )
}



export default App
