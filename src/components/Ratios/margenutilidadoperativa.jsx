import React, { useState } from 'react';

const MargenUtilidadOperacional = () => {
  const [ingresosOperacionales, setIngresosOperacionales] = useState('');
  const [costosOperacionales, setCostosOperacionales] = useState('');
  const [margenUtilidadOperacional, setMargenUtilidadOperacional] = useState(null);
  const [error, setError] = useState('');
  const [comentario, setComentario] = useState('');

  const handleIngresosOperacionalesChange = (e) => {
    setIngresosOperacionales(e.target.value);
  };

  const handleCostosOperacionalesChange = (e) => {
    setCostosOperacionales(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ingresosOperacionales.trim() || !costosOperacionales.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    // Calcular el Margen de Utilidad Operacional
    const ingresosOperacionalesFloat = parseFloat(ingresosOperacionales);
    const costosOperacionalesFloat = parseFloat(costosOperacionales);

    if (costosOperacionalesFloat >= ingresosOperacionalesFloat) {
      setError('Los costos operacionales no pueden ser iguales o mayores que los ingresos.');
      setMargenUtilidadOperacional(null);
      return;
    }

    const utilidadOperacional = ingresosOperacionalesFloat - costosOperacionalesFloat;
    const margenUtilidadOperacionalCalculado = (utilidadOperacional / ingresosOperacionalesFloat) * 100;
    setMargenUtilidadOperacional(margenUtilidadOperacionalCalculado.toFixed(2));

    // Establecer comentario según el resultado
    if (margenUtilidadOperacionalCalculado >= 0) {
      setComentario('El margen de utilidad operacional es positivo.');
    } else {
      setComentario('El margen de utilidad operacional es negativo. Se recomienda revisar costos.');
    }
  };

  const handleReset = () => {
    setIngresosOperacionales('');
    setCostosOperacionales('');
    setMargenUtilidadOperacional(null);
    setError('');
    setComentario('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Margen de Utilidad Operacional</h1>
        <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Ingresos Operacionales:
              <input
                type="text"
                value={ingresosOperacionales}
                onChange={handleIngresosOperacionalesChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de ingresos operacionales"
              />
            </label>
            <label className="block mb-2">
              Costos Operacionales:
              <input
                type="text"
                value={costosOperacionales}
                onChange={handleCostosOperacionalesChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de costos operacionales"
              />
            </label>
            <div className="flex space-x-4">
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

            {margenUtilidadOperacional !== null && (
              <div className="mt-4">
                <p>
                  Margen de Utilidad Operacional: <strong>{margenUtilidadOperacional}%</strong>
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
  );
};

export default MargenUtilidadOperacional;
