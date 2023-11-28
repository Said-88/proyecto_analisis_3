import { useState } from 'react';
import { NavbarWithMegaMenu } from '../Navbar';
import { SimpleFooter } from '../Footer';

const RentabilidadActivo = () => {
  const [utilidadNeta, setUtilidadNeta] = useState('');
  const [activosTotales, setActivosTotales] = useState('');
  const [rentabilidadActivo, setRentabilidadActivo] = useState(null);
  const [error, setError] = useState('');
  const [comentario, setComentario] = useState('');

  const handleUtilidadNetaChange = (e) => {
    setUtilidadNeta(e.target.value);
  };

  const handleActivosTotalesChange = (e) => {
    setActivosTotales(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!utilidadNeta.trim() || !activosTotales.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    // Calcular Rentabilidad del Activo (ROA)
    const utilidadNetaFloat = parseFloat(utilidadNeta);
    const activosTotalesFloat = parseFloat(activosTotales);

    const rentabilidadActivoCalculada = (utilidadNetaFloat / activosTotalesFloat) * 100;
    setRentabilidadActivo(rentabilidadActivoCalculada.toFixed(2));

    // Establecer comentario según el resultado
    if (!isNaN(rentabilidadActivoCalculada)) {
      setComentario('La Rentabilidad del Activo es: ' + rentabilidadActivoCalculada.toFixed(2) + '%');
    } else {
      setComentario('No se puede calcular debido a valores no válidos.');
    }
  };

  const handleReset = () => {
    setUtilidadNeta('');
    setActivosTotales('');
    setRentabilidadActivo(null);
    setError('');
    setComentario('');
  };

  return (
    <>
    <NavbarWithMegaMenu />
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Rentabilidad del Activo (ROA)</h1>
        <div className="w-full  p-4 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Utilidad Neta:
              <input
                type="text"
                value={utilidadNeta}
                onChange={handleUtilidadNetaChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese la utilidad neta"
              />
            </label>
            <label className="block mb-2">
              Activos Totales:
              <input
                type="text"
                value={activosTotales}
                onChange={handleActivosTotalesChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el total de activos"
              />
            </label>
            <div className="flex items-center justify-center space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Calcular
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Limpiar
              </button>
            </div>

            {rentabilidadActivo !== null && (
              <div className="mt-4">
                <p>
                  Rentabilidad del Activo (ROA): <strong>{rentabilidadActivo}%</strong>
                </p>
                <p className="mt-2">
                  Comentario: {comentario}
                </p>
              </div>
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
    <SimpleFooter />
    </>
  );
};

export default RentabilidadActivo;