import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-ases-green text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>
      <footer className="text-center text-sm text-ases-gold py-4">
        © {new Date().getFullYear()} Ases - Jogos de Habilidade
      </footer>
    </div>
  );
}
