import { NavbarWithMegaMenu } from "./Navbar";
import { SimpleFooter } from "./Footer";
import { Link } from "react-router-dom";

export const Ratios = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <div className="container min-h-screen mx-auto">
        <div className="text-center bg-light-green-200">
          <div className="p-5 text-2xl ">Razones contables</div>
        </div>
        <div className="w-full container mt-10 flex flex-wrap justify-center">
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/RazonCorriente">
              <p className="font-mono text-xl font-bold text-gray-200">
                Razon Corriente
              </p>
            </Link>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/pruebac">
              <p className="font-mono text-xl font-bold text-gray-200">
                Prueba acida
              </p>
            </Link>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/CapitalNetoOperativo">
              <p className="font-mono text-xl font-bold text-gray-200">
                Capital de trabajo neto operativo
              </p>
            </Link>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/margenbruto">
              <p className="font-mono text-xl font-bold text-gray-200">
                Margen bruto de utilidad
              </p>
            </Link>
          </button>
          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/MargenUtilidadOperativa">
              <p className="font-mono text-xl font-bold text-gray-200">
                Margen de utilidades operacionales
              </p>
            </Link>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/margenbrutoN">
              <p className="font-mono text-xl font-bold text-gray-200">
                Margen neto de utilidad
              </p>
            </Link>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/rentabilidad/activo">
              <p className="font-mono text-xl font-bold text-gray-200">
                Rentabilidad del activo
              </p>
            </Link>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/rentabCap">
              <p className="font-mono text-xl font-bold text-gray-200">
                Rentabilidad del capital
              </p>
            </Link>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/rotacion/activo">
              <p className="font-mono text-xl font-bold text-gray-200">
                Rotacion de activos
              </p>
            </Link>
          </button>

          <button className="m-1 md:w-2/5 w-4/5 rounded-lg shadow-lg p-10 bg-teal-900 hover:bg-indigo-900">
            <Link to="/ratio/rotacionInv">
              <p className="font-mono text-xl font-bold text-gray-200">
                Rotacion de inventarios
              </p>
            </Link>
          </button>
        </div>
      </div>
      <SimpleFooter />
    </>
  );
};
