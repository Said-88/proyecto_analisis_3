import { NavbarWithMegaMenu } from "./Navbar";
import { SimpleFooter } from "./Footer";

export const Ratios = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <div className="text-center border-b-2 bg-gray-200">
        <div className="p-5 text-2xl bg-light-green-400">Razones contables</div>
      </div>
      <div className="container mx-auto bg-light-green-200">
        <div className="w-full container mt-10 flex flex-wrap justify-center">
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Razon Corriente
            </p>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Prueba acida
            </p>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Capital de trabajo neto operativo
            </p>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Margen bruto de utilidad
            </p>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Margen de utilidades operacionales
            </p>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Margen neto de utilidad
            </p>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Rentabilidad del activo
            </p>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Rentabilidad del capital
            </p>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Rotacion de activos
            </p>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-teal-700">
            <p className="font-mono text-xl font-bold text-gray-200">
              Rotacion de inventarios
            </p>
          </button>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
};
