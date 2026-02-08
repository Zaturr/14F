import { useState } from 'react'

function App() {
  const [respuesta, setRespuesta] = useState(null) // null | 'si' | 'no'
  const [mostrarModalNo, setMostrarModalNo] = useState(false)

  const handleNo = () => {
    setRespuesta('no')
    setMostrarModalNo(true)
  }

  const cerrarModalNo = () => {
    setMostrarModalNo(false)
  }

  return (
    <div className="contenedor">
      <div className="card">
        <div className="heart">🤍</div>
        <h1>¡Hola mi vida!</h1>
        <p>Me falto pedirtelo de forma bonita y si bien ya es un hecho, amorcito.</p>
        <p>Este sabado 14 de Febrero, te gustaria que pasarlo junto a tu noviao en una posada de manera muy romantica...?.</p>

        {respuesta === 'si' && (
          <div className="contenido-si">
            {/* Aquí irá lo que quieras mostrar cuando diga Sí */}
          </div>
        )}
      </div>

      <div className="botones">
        <button
          type="button"
          className={respuesta === 'si' ? 'boton boton--activo' : 'boton'}
          onClick={() => setRespuesta('si')}
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
