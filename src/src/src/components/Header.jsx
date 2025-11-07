import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-ases-green border-b border-ases-gold py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-ases-gold">ASES</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-ases-gold">Início</Link>
          <Link to="/cadastro" className="hover:text-ases-gold">Cadastro</Link>
          <Link to="/lobby" className="hover:text-ases-gold">Lobby</Link>
        </div>
      </nav>
    </header>
  );
}
