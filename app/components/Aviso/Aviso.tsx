"use client";
import { useEffect, useState } from "react";

export default function Aviso() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    if (visivel) {
      // Bloqueia rolagem
      document.body.style.overflow = "hidden";
    } else {
      // Libera rolagem
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visivel]);

  if (!visivel) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 px-6 py-4 rounded-lg shadow-lg max-w-md w-[90%] text-center">
        <div className="text-4xl mb-2">⚠️</div>
        <h2 className="text-lg font-bold mb-2">Aviso importante</h2>
        <p className="text-sm mb-4">
          Esta página é apenas um <strong>template para fins estudantis</strong>. Nenhuma informação exibida aqui deve ser considerada oficial.
        </p>
        <button
          onClick={() => setVisivel(false)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition cursor-pointer"
        >
          Concordo
        </button>
      </div>
    </div>
  );
}
