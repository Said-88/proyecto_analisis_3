import { Route, Routes } from "react-router-dom";
import { Ratios } from "../components/Ratios";
import { LoginPage } from "../components/LoginPage";
import { About } from "../components/About";
import { ProtectedRoute } from "./ProtectedRoute";
import { Balance } from "../components/Balance";
import { ResetPassword } from "../components/ResetPassword";
import { RegisterPage } from "../components/RegisterPage";
import  Pruebacida  from "../components/ratios/Pruebacida"; 
import  MargenBruto  from "../components/ratios/margenbrutoutilidad"; 
import  MargenBrutoN  from "../components/ratios/margenbrutoneto"; 
import  RentabCap  from "../components/ratios/rentabcapital"; 
import  RotacInv  from "../components/ratios/rotacioninven";
import  RazonCorr  from "../components/ratios/RazonCorriente";
import  CapitalNOperat from "../components/ratios/CapitalOperativo";
import  MargenUtilidadOp from "../components/ratios/MargenUtilidadOperativa";
import RentabilidadActivo from "../components/ratios/RentabilidadActivo";
import RotacionActivos from "../components/ratios/RotacionActivo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/ratio"
        element={
          <ProtectedRoute>
            <Ratios />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ratio/pruebac"
        element={
          <ProtectedRoute>
            <Pruebacida />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ratio/margenbruto"
        element={
          <ProtectedRoute>
            <MargenBruto />
          </ProtectedRoute>
        }
        />
        <Route
        path="/ratio/margenbrutoN"
        element={
          <ProtectedRoute>
            <MargenBrutoN />
          </ProtectedRoute>
        }
        />
        <Route
        path="/ratio/rentabCap"
        element={
          <ProtectedRoute>
            <RentabCap />
          </ProtectedRoute>
        }
        />
        <Route
        path="/ratio/rotacionInv"
        element={
          <ProtectedRoute>
            <RotacInv />
          </ProtectedRoute>
        }
        />
      <Route
        path="/balance"
        element={
          <ProtectedRoute>
            <Balance />
          </ProtectedRoute>
        }
      />
      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />

      <Route
        path="/ratio/RazonCorriente"
        element={
          <ProtectedRoute>
            <RazonCorr />
          </ProtectedRoute>
        }
        />
         <Route
        path="/ratio/CapitalNetoOperativo"
        element={
          <ProtectedRoute>
            <CapitalNOperat />
          </ProtectedRoute>
        }
        />
           <Route
        path="/ratio/MargenUtilidadOperativa"
        element={
          <ProtectedRoute>
            <MargenUtilidadOp />
          </ProtectedRoute>
        }
        />
        <Route
        path="/ratio/rentabilidad/activo"
        element={
          <ProtectedRoute>
            <RentabilidadActivo />
          </ProtectedRoute>
        }
        />
         <Route
        path="/ratio/rotacion/activo"
        element={
          <ProtectedRoute>
            <RotacionActivos />
          </ProtectedRoute>
        }
        />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};
