import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getPasivos, getBalance } from "../../api/razon.api";

const TABLE_ROWS = [
    {
        id: 1,
        pasivo: "Cuentas por Pagar",
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        id: 2,
        pasivo: "Deudas a Corto Plazo",
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        id: 3,
        pasivo: "Obligaciones Financieras Corrientes",
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        id: 4,
        pasivo: "Impuestos por Pagar",
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        id: 5,
        pasivo: "Salarios por Pagar",
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        id: 6,
        pasivo: "Intereses por Pagar",
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        id: 7,
        pasivo: "Dividendos por Pagar",
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        id: 8,
        pasivo: "Otras Obligaciones Corrientes",
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export const Pasivos = () => {
    const [pasivos, setPasivos] = useState([]);
    const [totals, setTotal] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      async function loadEvents() {
        const response = await getPasivos();
        console.log(response.data);
        setPasivos(response.data);
      }
      loadEvents();
    }, []);

    useEffect(() => {
        async function loadEvents() {
          const response = await getBalance();
          console.log(response.data);
          setTotal(response.data);
        }
        loadEvents();
      }, []);

    const handleClick = (totals) => {
        console.log(totals);
        setInputValue(totals);
    }

  return (
    <>
        <div className="p-4 flex flex-col items-center justify-center">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full table-auto text-left rounded-lg shadow-md">
                    <tbody>
                        {pasivos.map(({ id_pasivo, tipo_pasivo, descripcion, monto }) => (
                            <tr key={id_pasivo} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {tipo_pasivo}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {descripcion}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        ${monto}
                                    </Typography>
                                </td>
                                {/* Otros campos de tu tabla */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <button
                    type="submit"
                    className="bg-teal-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleClick(totals[0].Total_Pasivos)}
                >
                    Calcular
                </button>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 rounded p-2 w-full sm:w-auto mt-2"
                    placeholder="Total Pasivos Corrientes"
                    disabled={true}
                    value={`$ ${inputValue}`}
                />
            </div>
        </div>
    </>
  );
};
      