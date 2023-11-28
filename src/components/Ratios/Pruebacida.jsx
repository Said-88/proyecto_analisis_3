import { useState } from "react";
import { NavbarWithMegaMenu } from "../Navbar";
import { SimpleFooter } from "../Footer";

const Pruebacida = ({ onAnalysisSubmit }) => {
  const [year, setYear] = useState("");
  const [sales, setSales] = useState("");
  const [expenses, setExpenses] = useState("");
  const [currentLiabilities, setCurrentLiabilities] = useState("");
  const [acidTestRatio, setAcidTestRatio] = useState(null);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSalesChange = (e) => {
    setSales(e.target.value);
  };

  const handleExpensesChange = (e) => {
    setExpenses(e.target.value);
  };

  const handleCurrentLiabilitiesChange = (e) => {
    setCurrentLiabilities(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !year.trim() ||
      !sales.trim() ||
      !expenses.trim() ||
      !currentLiabilities.trim()
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");

    // Calcular la Prueba Ácida
    const quickAssets = parseFloat(sales) - parseFloat(expenses);
    const acidTest = quickAssets / parseFloat(currentLiabilities);
    console.log("Valor de la Prueba Ácida:", acidTest);
    setAcidTestRatio(acidTest);

    // Establecer comentarios según el resultado
    if (acidTest >= 1) {
      setComment(
        "La Prueba Ácida es saludable. Los activos líquidos son suficientes para cubrir los pasivos circulantes."
      );
    } else {
      setComment(
        "La Prueba Ácida indica una situación menos saludable. Es posible que haya dificultades para cubrir los pasivos circulantes con los activos líquidos actuales."
      );
    }

    console.log("Submitting analysis:", {
      year,
      sales,
      expenses,
      currentLiabilities,
      acidTestRatio,
    });

    onAnalysisSubmit({
      year,
      sales,
      expenses,
      currentLiabilities,
      acidTestRatio,
    });
  };

  const handleReset = () => {
    setYear("");
    setSales("");
    setExpenses("");
    setCurrentLiabilities("");
    setAcidTestRatio(null);
    setComment("");
    setError("");
  };

  return (
    <>
      <NavbarWithMegaMenu />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-blue-600">
            {" "}
            Prueba Ácida
          </h1>
          <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
            <div className="container mx-auto max-w-md p-4 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Análisis Prueba Ácida</h2>
              <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                  Año:
                  <input
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingrese el año"
                  />
                </label>
                <label className="block mb-2">
                  Ventas (Activos Circulantes):
                  <input
                    type="text"
                    value={sales}
                    onChange={handleSalesChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingrese el monto de ventas"
                  />
                </label>
                <label className="block mb-2">
                  Gastos (Inventario):
                  <input
                    type="text"
                    value={expenses}
                    onChange={handleExpensesChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingrese el monto de gastos"
                  />
                </label>
                <label className="block mb-2">
                  Pasivos Circulantes:
                  <input
                    type="text"
                    value={currentLiabilities}
                    onChange={handleCurrentLiabilitiesChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Ingrese el monto de pasivos circulantes"
                  />
                </label>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Analizar
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Limpiar
                  </button>
                </div>

                {acidTestRatio !== null && (
                  <div className="mt-4">
                    <p>
                      Prueba Ácida: <strong>{acidTestRatio.toFixed(2)}</strong>
                    </p>
                    <p className="mt-2">Comentario: {comment}</p>
                  </div>
                )}

                {error && <p className="text-red-500 mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
};

export default Pruebacida;
