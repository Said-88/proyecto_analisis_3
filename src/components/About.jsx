import { SimpleFooter } from "./Footer";
import { NavbarWithMegaMenu } from "./Navbar";

export const About = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <main className="px-4 max-w-[1200px] mx-auto md:px-0">
        <img
          className="w-full h-[500px] bg-cover rounded-3xl bg-[url('./assets/about.jpg')]"
          alt=""
        />

        <h2 className="text-center font-bold text-3xl mb-4">Nuestra Misión</h2>
        <p className="text-justify">
          En Finanzas PYMES, nos dedicamos a ofrecer servicios contables especializados que trascienden las cifras. Nuestra misión es ser tu socio estratégico en el ámbito financiero, proporcionándote balances generales, estados financieros y análisis de razones contables precisos y comprensibles. Nos esforzamos por ser más que un proveedor de servicios; buscamos ser tu aliado confiable, guiándote a través de la complejidad financiera para que puedas tomar decisiones informadas y alcanzar tus objetivos empresariales con confianza y claridad. En Finanzas PYMES, creemos que el éxito financiero de tu empresa es nuestra misión compartida.
        </p>


        <h2 className="text-center font-bold text-3xl mb-4">
          Nuestra Visión
        </h2>
        <p className="text-justify">
          En Finanzas PYMES, nos visualizamos como líderes en la transformación
          financiera para las pequeñas y medianas empresas. Nuestra visión se
          enfoca en: <br/> Inspirar Confianza y Crecimiento: Queremos ser reconocidos
          como el socio de confianza que impulsa el crecimiento sostenible de
          nuestros clientes a través de soluciones financieras innovadoras y
          servicios contables excepcionales. Nuestra visión es ser
          reconocidos no solo por lo que hacemos, sino por cómo transformamos
          positivamente la experiencia financiera de las empresas a las que
          servimos, construyendo un camino hacia un futuro empresarial más
          próspero y sostenible.
        </p>

        <div className="text-center font-serif my-4">
          <span className="font-bold text-4xl block my-4">
            Nuestro Equipo
          </span>
        </div>

        <div className="flex flex-wrap justify-center my-4">
          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Luisa Espinoza:</span> Project Manager
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Said López León:</span> Frontend Leader
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Ricardo Bertrand:</span> Backend Leader
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Juan Serrano Muñoz:</span> Frontend Dev
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Christopher Louie Tabora:</span> Frontend Dev
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Saúl Romero Murillo:</span> Frontend Dev
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">José Adriano Torres:</span> Frontend Dev
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Karol Machado:</span> Backend Dev
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Walter Alvarenga:</span> Backend Dev
            </p>
          </div>

          <div className="mb-4 mx-4">
            <p>
              <span className="font-bold">Luis Enrique Hernández:</span> Backend Dev
            </p>
          </div>
        </div>
      </main>
      <SimpleFooter />
    </>
  );
};
