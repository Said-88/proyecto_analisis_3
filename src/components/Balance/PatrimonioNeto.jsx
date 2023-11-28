import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getPatrimonios, getBalance } from "../../api/razon.api";

const TABLE_ROWS = [
    {
        id: 1,
        patrimonio: "Capital Social",
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        id: 2,
        patrimonio: "Utilidades Retenidas",
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        id: 3,
        patrimonio: "Aporte de los Propietarios",
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        id: 4,
        patrimonio: "Reserva Legal",
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        id: 5,
        patrimonio: "Dividendo por Pagar",
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];

export const PatrimonioNeto = () => {
    const [patrimonios, setPatrimonios] = useState([]);
    const [totals, setTotal] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      async function loadEvents() {
        const response = await getPatrimonios();
        console.log(response.data);
        setPatrimonios(response.data);
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
    
      const handleClick = (balance) => {
        setInputValue(balance); // Establece el valor del input al hacer clic en el botón
    }

  return (
    <>
 <div className="p-4 flex items-center justify-center h-full">
                <table className="min-w-max table-auto text-left w-full rounded-lg shadow-md">
                    <tbody>
                        {patrimonios.map(({ Tipo_Patrimonio, Monto,descripcion, ID_Patrimonio }) => (
                            <tr key={ID_Patrimonio} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {Tipo_Patrimonio}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {descripcion}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        ${Monto}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                  
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                      
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center">
                <button
                    type="submit"
                    className="bg-teal-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleClick(totals[0].Patrimonio_Neto)}
                >
                    Calcular
                </button>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 rounded p-2 m-9"
                    placeholder="Total Pasivos Corrientes"
                    disabled={true}
                    value={`$ ${inputValue}`}
                />
            </div>
    </>
  );
};
