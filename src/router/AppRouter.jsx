import { Route, Routes } from "react-router-dom";
import { Ratios } from "../components/Ratios";
import { LoginPage } from "../components/LoginPage";
import { About } from "../components/About";
import { ProtectedRoute } from "./ProtectedRoute";
import { Balance } from "../components/Balance";
import { ResetPassword } from "../components/ResetPassword";
import { RegisterPage } from "../components/RegisterPage";
import  Pruebacida  from "../components/Ratios/Pruebacida"; 
import  MargenBruto  from "../components/Ratios/margenbrutoutilidad"; 
import  MargenBrutoN  from "../components/Ratios/margenbrutoneto"; 
import  RentabCap  from "../components/Ratios/rentabcapital"; 
import  RotacInv  from "../components/Ratios/rotacioninven"; 
import  RazonCorr  from "../components/Ratios/razoncorriente";
import  CapitalNOperat from "../components/Ratios/capitalnetooperativo";
import  MargenUtilidadOp from "../components/Ratios/margenutilidadoperativa";
import  RentabilidadActivo from "../components/Ratios/rentabilidadactivo";
import  RotacionActivo from "../components/Ratios/rotacionactivos";
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
        path="/ratio/razoncorriente"
        element={
          <ProtectedRoute>
            <RazonCorr />
          </ProtectedRoute>
        }
        />
         <Route
        path="/ratio/capitalnetooperativo"
        element={
          <ProtectedRoute>
            <CapitalNOperat />
          </ProtectedRoute>
        }
        />
           <Route
        path="/ratio/margenutilidadoperativa"
        element={
          <ProtectedRoute>
            <MargenUtilidadOp />
          </ProtectedRoute>
        }
        />
         <Route
        path="/ratio/rentabilidadactivo"
        element={
          <ProtectedRoute>
            <RentabilidadActivo />
          </ProtectedRoute>
        }
        />
         <Route
        path="/ratio/rotacionactivos"
        element={
          <ProtectedRoute>
            <RotacionActivo />
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
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};
