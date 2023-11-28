import { useState } from "react";
import { NavbarWithMegaMenu } from "../Navbar";
import { SimpleFooter } from "../Footer";

const RotacionActivos = () => {
  const [ventasNetas, setVentasNetas] = useState("");
  const [activosPromedio, setActivosPromedio] = useState("");
  const [rotacionActivos, setRotacionActivos] = useState(null);
  const [error, setError] = useState("");
  const [comentario, setComentario] = useState("");

  const handleVentasNetasChange = (e) => {
    setVentasNetas(e.target.value);
  };

  const handleActivosPromedioChange = (e) => {
    setActivosPromedio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ventasNetas.trim() || !activosPromedio.trim()) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");

    // Calcular la Rotación de Activos
    const ventasNetasFloat = parseFloat(ventasNetas);
    const activosPromedioFloat = parseFloat(activosPromedio);

    if (activosPromedioFloat <= 0) {
      setError("Los activos promedio deben ser mayores que cero.");
      setRotacionActivos(null);
      return;
    }

    const rotacionActivosCalculada = ventasNetasFloat / activosPromedioFloat;
    setRotacionActivos(rotacionActivosCalculada.toFixed(2));

    // Establecer comentario según el resultado
    if (!isNaN(rotacionActivosCalculada)) {
      if (rotacionActivosCalculada > 0) {
        setComentario("La rotación de activos es positiva. Buen indicador.");
      } else {
        setComentario(
          "La rotación de activos es negativa. Puede ser un área de mejora."
        );
      }
    } else {
      setComentario("No se puede calcular debido a valores no válidos.");
    }
  };

  const handleReset = () => {
    setVentasNetas("");
    setActivosPromedio("");
    setRotacionActivos(null);
    setError("");
    setComentario("");
  };

  return (
    <>
      <NavbarWithMegaMenu />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-blue-600">
            Rotación de Activos
          </h1>
          <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                Ventas Netas:
                <input
                  type="text"
                  value={ventasNetas}
                  onChange={handleVentasNetasChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Ingrese el monto de ventas netas"
                />
              </label>
              <label className="block mb-2">
                Activos Promedio:
                <input
                  type="text"
                  value={activosPromedio}
                  onChange={handleActivosPromedioChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Ingrese el monto de activos promedio"
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

              {rotacionActivos !== null && (
                <div className="mt-4">
                  <p>
                    Rotación de Activos: <strong>{rotacionActivos}</strong>
                  </p>
                  <p className="mt-2">Comentario: {comentario}</p>
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

export default RotacionActivos;
