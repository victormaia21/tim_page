"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function PlanList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  const planos = [
    {
      id: 1,
      nome: "TIM Controle 1.0",
      gb: 31,
      appIncluso: {
        whatsapp: true,
        mensseger: false,
        redesSociais: false,
      },
      Efatura: true,
      streams: ["deezernow.png", "paramountfundobranco.png", "primevideofundobranco.png"],
      valor: 58.99,
      fidelizado: true,
    },
    {
      id: 2,
      nome: "TIM Controle Plus 1.0",
      gb: 45,
      appIncluso: {
        whatsapp: true,
        mensseger: true,
        redesSociais: true,
      },
      Efatura: true,
      streams: ["deezernow.png", "paramountfundobranco.png", "primevideofundobranco.png"],
      valor: 64.99,
      fidelizado: true,
    },
    {
      id: 3,
      nome: "TIM Controle Premium 1.0",
      gb: 49,
      appIncluso: {
        whatsapp: true,
        mensseger: true,
        redesSociais: true,
      },
      Efatura: true,
      streams: [
        "primevideo.png",
        "deezerpremium.webp",
        "hbomax.jpg",
        "globoplay.webp",
        "netflix.png",
        "disney.webp",
        "paramount2.jpg",
        "youtube.png",
      ],
      valor: 84.99,
      fidelizado: true,
    },
    {
      id: 4,
      nome: "TIM Controle J Express",
      gb: 33,
      appIncluso: {
        whatsapp: true,
        mensseger: true,
        redesSociais: false,
      },
      Efatura: false,
      streams: [],
      valor: 60.99,
      fidelizado: false,
    },
    {
      id: 5,
      nome: "TIM Controle C Express",
      gb: 46,
      appIncluso: {
        whatsapp: true,
        mensseger: true,
        redesSociais: true,
      },
      Efatura: false,
      streams: [],
      valor: 64.99,
      fidelizado: false,
    },
  ];

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    setShowButtons(scrollWidth > clientWidth);
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = 350; // maior para deslocar mais ao clicar
    let newScrollPos =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;

    if (newScrollPos < 0) newScrollPos = 0;
    if (newScrollPos > container.scrollWidth - container.clientWidth)
      newScrollPos = container.scrollWidth - container.clientWidth;

    container.scrollTo({
      left: newScrollPos,
      behavior: "smooth",
    });
  };

 

  return (
    <div className="relative w-full pt-8 pb-8">
      {/* Botão esquerda */}
      {showButtons && (
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#fff] shadow-[#ccc] cursor-pointer h-20 w-9 rounded-md shadow-lg hover:bg-gray-100 transition flex items-center justify-center"
        >
          <FaAngleLeft />
        </button>
      )}

      {/* Container dos planos */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-8 w-full overflow-x-hidden scrollbar-hide scroll-smooth xl:justify-center"
        style={{ scrollBehavior: "smooth" }}
      >
        {planos.map((plan, key) => (
          <div key={key}>
            <div
              style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
              className="pl-5 pr-5 pt-5 pb-5 h-[35.5em] w-[18em] rounded-2xl relative"
            >
              <div className="flex flex-col justify-around" key={key}>
                <h2 className="font-[500]">{plan.nome}</h2>
                <div>
                  <span className="text-lg font-semibold">Até</span>{" "}
                  <span className="text-3xl font-bold">{plan.gb}GB</span>
                </div>
                <div>
                  <p className="text-sm mt-2">Apps inclusos</p>
                  <div className="flex gap-1 p-1">
                    {plan.appIncluso.whatsapp && (
                      <Image src="/img/whatsapp.svg" alt="" width={25} height={25} />
                    )}
                    {plan.appIncluso.mensseger && (
                      <Image src="/img/messenger.svg" alt="" width={25} height={25} />
                    )}
                    {plan.appIncluso.redesSociais && plan.Efatura && (
                      <div
                        className={`flex gap-10 ${
                          plan.Efatura ? "bg-gradient-to-tl from-[#0da30d] to-[#93cf05] p-[1px] rounded-3xl w-full" : ""
                        }`}
                      >
                        <div className="flex gap-13 bg-white w-full rounded-3xl items-center p-2">
                          <div className="flex gap-1">
                            <Image src="/img/instagram.svg" alt="" width={25} height={25} />
                            <Image src="/img/facebook.svg" alt="" width={25} height={25} />
                            <Image src="/img/twitter.png" alt="" width={25} height={25} />
                          </div>
                          {plan.Efatura && (
                            <p className="text-[.51em] text-black">5GB Exclusivos para redes sociais</p>
                          )}
                        </div>
                      </div>
                    )}
                    {plan.appIncluso.redesSociais && !plan.Efatura && (
                      <>
                        <Image src="/img/instagram.svg" alt="" width={25} height={25} />
                        <Image src="/img/facebook.svg" alt="" width={25} height={25} />
                        <Image src="/img/twitter.png" alt="" width={25} height={25} />
                      </>
                    )}
                  </div>
                </div>
                <div className="h-36 flex flex-col justify-between mt-2">
                  {plan.Efatura && (
                    <p className={`text-sm`}>
                      Acesse o App <Link href="/">Meu TIM</Link>, escolha um dos beneficios abaixo e troque todo mês (sem custo adicional ao plano)!
                    </p>
                  )}
                  <div
                    className={`${
                      plan.streams.length < 4 ? "flex justify-between w-full" : "grid-cols-4 grid gap-2 w-7/10"
                    }  mt-1`}
                  >
                    {plan.streams &&
                      plan.streams.map((stream, key) => (
                        <Image
                          src={`/img/${stream}`}
                          alt=""
                          width={80}
                          height={80}
                          key={key}
                          className={plan.streams.length < 4 ? `h-7 w-16` : `rounded-[50%] w-8 h-7`}
                        />
                      ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p>Por apenas</p>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "sans-serif" }}>
                    R$ {plan.valor.toString().replace(".", ",")} <span className="text-lg font-normal">/Mês</span>
                  </h2>
                </div>
                <div className="border-t-[1px] border-b-[1px] border-[#ccc] mt-3 pt-3 pb-3 mb-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="switch"
                      checked={true}
                      readOnly
                      className="sr-only peer"
                    />
                    <label
                      htmlFor="switch"
                      className={`
                                    w-8 h-4 bg-[#a6dd6d] rounded-full relative block cursor-pointer
                                    transition-colors duration-300
                                    peer-checked:after:translate-x-0
                                    after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2
                                    after:right-0
                                    after:w-[20px] after:h-[20px] after:bg-[#6ec60b] after:rounded-full
                                    after:transition-all after:duration-300
                                    `}
                    />
                    <p className="ml-2 text-[#666] text-sm">Fidelizado por 12 meses</p>
                  </div>
                </div>
                <div className="border-b-[1px] border-[#ccc] border-solid pb-3">
                  <p className="text-sm">{plan.Efatura ? "Fatura Digital" : "Pagamento com cartão de credito"}</p>
                </div>
              </div>
              <div className="pt-4 pb-4 h-[6em] absolute border-0 w-full left-0 grid items-center bottom-0">
                <button className="bg-[#0e25a1] text-white pt-3 pb-3 font-bold rounded-2xl w-9/10 m-auto cursor-pointer">
                  Contratar agora
                </button>
              </div>
            </div>

            <div className="flex justify-around text-[#ccc] text-[.75em] pt-2 pb-2">
              <button className="border-[1px] border-[#bbb] border-solid p-1.5 rounded-md cursor-pointer">
                Beneficios
              </button>
              <button className="border-[1px] border-[#bbb] border-solid p-1.5 rounded-md cursor-pointer">
                Detalhes
              </button>
              <button className="border-[1px] border-[#bbb] border-solid p-1.5 rounded-md cursor-pointer">
                Regulamentos
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botão direita */}
      {showButtons && (
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-[#ccc] cursor-pointer h-20 w-9 rounded-md shadow-lg p-2  hover:bg-gray-100 transition"
        >
          <FaAngleRight />
        </button>
      )}
    </div>
  );

  
}
