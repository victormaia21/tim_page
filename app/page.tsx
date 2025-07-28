"use client";

import Aviso from "./components/Aviso/Aviso";
import EstadoCliente from "./components/EstadoCliente/EstadoCliente";
import Header from "./components/header/header";
import IzaAnuncio from "./components/iza_anuncio/iza_anuncio";
import PlanList from "./components/planosList/PlanList";

export default function Home() {
  return (
      <div className="relative min-h-screen">
        <Header />
        <IzaAnuncio />
        <PlanList />
        <Aviso />
        <EstadoCliente />
      </div>
  );
}
