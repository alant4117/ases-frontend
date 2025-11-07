import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const jogos = ["Buraco", "Sueca", "Pife", "Uno", "Pôquer"];
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-ases-gold mb-6">
        Aqui, quem vence é quem joga melhor.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {jogos.map((jogo) => (
          <div
            key={jogo}
            className="bg-ases-green border-2 border-ases-gold rounded-xl p-4 hover:bg-ases-gold hover:text-black transition"
          >
            <p className="font-semibold">{jogo}</p>
            <Link to="/lobby" className="block mt-2 text-sm underline">
              Jogar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
