import axios from "axios";

export const getBalance = async (balance) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/balancegeneral",balance);
}

export const getRazones = async (ratio) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/razonesContablesDetalle",ratio);
}

export const getActivos = async (activos) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/activos",activos);
}

export const getPasivos = async (pasivos) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/pasivos",pasivos);
}

export const getPatrimonios = async (patrimonios) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/patrimonioneto",patrimonios);
}

// Razones Financieras
export const getMargenOperacional = async (margen) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/margenutilidadnetaoperacional",margen);
}

export const getCapitalOperacional = async (capital) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/capitaltrabajonetooperacional",capital);
}

export const getRazonesCorrientes = async (corrientes) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/razoncorriente",corrientes);
}

export const getMargenBruto = async (margen) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/margenBrutoUtilidad",margen);
}

export const getMargenNeto = async (margen) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/margenNetoUtilidad",margen);
}

export const getRentCapital = async (capital) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/rentabilidadCapital",capital);
}

export const getRotInventario = async (inventario) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/rotacionInventario",inventario);
}

export const getPruebaAcida = async (acida) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/pruebaAcida",acida);
}

export const getRotActivos = async (rotacion) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/rotacionactivos",rotacion);
}

export const getRentActivos = async (rent) => {
   return await axios.get("https://apisistemafinanzas-production.up.railway.app/contabilidad/rentabilidadactivos",rent);
}