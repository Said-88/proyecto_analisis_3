import { useState, useEffect } from 'react';
import { NavbarWithMegaMenu } from '../Navbar';
import { SimpleFooter } from '../Footer';
import { getRazones } from '../../api/razon.api';

const MargenNetoUtilidad = () => {
  const [ingresos, setIngresos] = useState('');
  const [costos, setCostos] = useState('');
  const [gastos, setGastos] = useState('');
  const [margenNeto, setMargenNeto] = useState(null);
  const [error, setError] = useState('');
  const [comentario, setComentario] = useState('');
  const [ratios, setRatios] = useState([]);

  useEffect(() => {
    const loadRatios = async () => {
      const response = await getRazones();
      console.log(response.data);
      setRatios(response.data);
    };
    loadRatios();
  }, []);
  

  const handleIngresosChange = (e) => {
    setIngresos(e.target.value);
  };

  const handleCostosChange = (e) => {
    setCostos(e.target.value);
  };

  const handleGastosChange = (e) => {
    setGastos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ingresos.trim() || !costos.trim() || !gastos.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    // Calcular el margen neto de utilidad
    const ingresosFloat = parseFloat(ingresos);
    const costosFloat = parseFloat(costos);
    const gastosFloat = parseFloat(gastos);

    if (costosFloat >= ingresosFloat || gastosFloat >= ingresosFloat) {
      setError('Los costos o gastos no pueden ser iguales o mayores que los ingresos.');
      setMargenNeto(null);
      return;
    }

    const margenNetoCalculado = (((ingresosFloat - costosFloat) - gastosFloat) / ingresosFloat) * 100;
    setMargenNeto(margenNetoCalculado.toFixed(2));

    // Establecer comentario según el resultado
    if (margenNetoCalculado >= 10) {
      setComentario('El margen neto de utilidad es saludable. ¡Excelente trabajo!');
    } else {
      setComentario('El margen neto de utilidad es bajo. Se recomienda revisar costos y gastos.');
    }
  };

  const handleReset = () => {
    setIngresos('');
    setCostos('');
    setGastos('');
    setMargenNeto(null);
    setError('');
    setComentario('');
  };

  return (
    <>
    <NavbarWithMegaMenu />
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Margen Neto de Utilidad</h1>
        <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
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

            {margenNeto !== null && (
              <div className="mt-4">
                <p>
                  Margen Neto de Utilidad: <strong>{margenNeto}%</strong>
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

export default MargenNetoUtilidad;
