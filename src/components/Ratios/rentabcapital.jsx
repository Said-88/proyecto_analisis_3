import { useState } from 'react';
import { NavbarWithMegaMenu } from '../Navbar';
import { SimpleFooter } from '../Footer';

const RentabilidadCapital = () => {
  const [ingresos, setIngresos] = useState('');
  const [costos, setCostos] = useState('');
  const [gastos, setGastos] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [rentabilidadCapital, setRentabilidadCapital] = useState(null);
  const [error, setError] = useState('');
  const [comentario, setComentario] = useState('');

  const handleIngresosChange = (e) => {
    setIngresos(e.target.value);
  };

  const handleCostosChange = (e) => {
    setCostos(e.target.value);
  };

  const handleGastosChange = (e) => {
    setGastos(e.target.value);
  };

  const handlePatrimonioChange = (e) => {
    setPatrimonio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ingresos.trim() || !costos.trim() || !gastos.trim() || !patrimonio.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    // Calcula la rentabilidad del capital (ROE)
    const ingresosFloat = parseFloat(ingresos);
    const costosFloat = parseFloat(costos);
    const gastosFloat = parseFloat(gastos);
    const patrimonioFloat = parseFloat(patrimonio);

    if (costosFloat >= ingresosFloat || gastosFloat >= ingresosFloat || patrimonioFloat <= 0) {
      setError('Los costos, gastos o patrimonio no pueden ser iguales o mayores que los ingresos, o el patrimonio debe ser mayor que cero.');
      setRentabilidadCapital(null);
      return;
    }

    const utilidadNeta = ingresosFloat - costosFloat - gastosFloat;
    const rentabilidadCapitalCalculada = (utilidadNeta / patrimonioFloat) * 100;
    setRentabilidadCapital(rentabilidadCapitalCalculada.toFixed(2));

    // Establecer comentario según el resultado
    if (rentabilidadCapitalCalculada >= 10) {
      setComentario('La rentabilidad del capital es saludable. ¡Excelente gestión!');
    } else {
      setComentario('La rentabilidad del capital es baja. Se recomienda mejorar la gestión financiera.');
    }
  };

  const handleReset = () => {
    setIngresos('');
    setCostos('');
    setGastos('');
    setPatrimonio('');
    setRentabilidadCapital(null);
    setError('');
    setComentario('');
  };

  return (
    <>
      <NavbarWithMegaMenu />
    <div className="flex justify-center items-center h-screen bg-gray-100 max-w-full ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Rentabilidad del Capital (ROE)</h1>
        <div className="p-4 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Ingresos:
              <input
                type="text"
                value={ingresos}
                onChange={handleIngresosChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de ingresos"
              />
            </label>
            <label className="block mb-2">
              Costos:
              <input
                type="text"
                value={costos}
                onChange={handleCostosChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de costos"
              />
            </label>
            <label className="block mb-2">
              Gastos:
              <input
                type="text"
                value={gastos}
                onChange={handleGastosChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de gastos"
              />
            </label>
            <label className="block mb-2">
              Patrimonio:
              <input
                type="text"
                value={patrimonio}
                onChange={handlePatrimonioChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de patrimonio"
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
                className="bg-gray-300 text-gray-700  px-4 py-2 rounded hover:bg-gray-400"
              >
                Limpiar
              </button>
            </div>

            {rentabilidadCapital !== null && (
              <div className="mt-4">
                <p>
                  Rentabilidad del Capital (ROE): <strong>{rentabilidadCapital}%</strong>
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

export default RentabilidadCapital;
