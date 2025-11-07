import React from "react";
import { Link } from "react-router-dom";

export default function Lobby() {
  const valores = [1, 2, 5];
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-ases-gold mb-6">Lobby - Escolha o valor da partida</h2>
      <div className="flex justify-center gap-4 mb-6">
        {valores.map((v) => (
          <Link
            key={v}
            to="/mesa"
            className="bg-ases-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400"
          >
            R$ {v},00
          </Link>
        ))}
      </div>
    </div>
  );
}
