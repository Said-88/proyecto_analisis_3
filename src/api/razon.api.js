import axios from "axios";

export const getBalance = async (balance) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/balancegeneral",balance);
}

export const getRazones = async (ratio) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/razonesContablesDetalle",ratio);
}

export const getActivos = async (activos) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/activos",activos);
}

export const getPasivos = async (pasivos) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/pasivos",pasivos);
}

export const getPatrimonios = async (patrimonios) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/patrimonioneto",patrimonios);
}

// Razones Financieras
export const getMargenOperacional = async (margen) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/margenutilidadnetaoperacional",margen);
}

export const getCapitalOperacional = async (capital) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/capitaltrabajonetooperacional",capital);
}

export const getRazonesCorrientes = async (corrientes) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/razoncorriente",corrientes);
}

export const getMargenBruto = async (margen) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/margenBrutoUtilidad",margen);
}

export const getMargenNeto = async (margen) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/margenNetoUtilidad",margen);
}

export const getRentCapital = async (capital) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/rentabilidadCapital",capital);
}

export const getRotInventario = async (inventario) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/rotacionInventario",inventario);
}

export const getPruebaAcida = async (acida) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/pruebaAcida",acida);
}

export const getRotActivos = async (rotacion) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/rotacionactivos",rotacion);
}

export const getRentActivos = async (rent) => {
   return await axios.get("http://131.108.233.200:5000/contabilidad/rentabilidadactivos",rent);
}