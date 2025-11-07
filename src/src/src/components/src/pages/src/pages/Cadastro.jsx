import React, { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({ nome: "", cpf: "", email: "", apelido: "", senha: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="max-w-md mx-auto bg-ases-green border border-ases-gold p-6 rounded-xl">
      <h2 className="text-2xl font-bold text-center text-ases-gold mb-4">Cadastro</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {["nome", "cpf", "email", "apelido", "senha"].map((campo) => (
          <input
            key={campo}
            type={campo === "senha" ? "password" : "text"}
            name={campo}
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
            className="w-full p-2 rounded bg-green-800 border border-ases-gold focus:outline-none"
            onChange={handleChange}
            required
          />
        ))}
        <label className="flex items-center text-sm">
          <input type="checkbox" required className="mr-2" />
          Declaro que sou maior de 18 anos e que compreendo que este é um jogo de habilidade.
        </label>
        <button type="submit" className="bg-ases-gold text-black w-full py-2 rounded font-bold">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
