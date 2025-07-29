'use client';

import Image from "next/image";
import { SiParamountplus, SiPrimevideo } from "react-icons/si";
import { MdAddCircleOutline } from "react-icons/md";

function IzaAnuncio() {
    
      
    return (
        <div className={`bg-[#151ce0] h-[47em] relative xl:h-[30em]`}>
            <div className="w-full border-t-[2px] border-[rgba(0,0,0,.4)] border-solid block absolute bottom-3 shadow-black shadow-lg"></div>
            <div className="w-9/10 m-auto pt-6 xl:hidden">
                <article className="text-white w-3/4 ml-auto mr-auto flex flex-col gap-3">
                    <h1 className="font-bold text-center">Planos TIM Controle</h1>
                    <p className="text-xl text-center">Aproveite essa oferta imperdível e escolha o novo streaming todo mês</p>
                </article>
                <div>
                    <div className="w-full flex justify-center overflow-hidden z-0">
                        <Image
                            src="https://timbrasil.widen.net/content/wzpyxrevwl/webp/controle_hero_chip_gratis_st.webp?glo"
                            alt=""
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="relative bg-[#151ce0] -translate-y-[40%] z-20 pb-12 border-solid border-[2px] border-[#07cdf0] w-[22em] m-auto p-4 flex flex-col gap-3 rounded-2xl shadow-lg shadow-[rgba(255,255,255,.1)]">
                        <h4 className="text-white text-[.75em] font-[600] text-center">VOCÊ PODE TROCAR SUA ASSINATURA TODO MÊS</h4>
                        <div className="flex items-center text-3xl justify-evenly text-white">
                            <Image 
                              src="/img/deezernow.png"
                              alt=""
                              width={80}
                              height={80}
                            />
                            <SiParamountplus />
                            <SiPrimevideo className="text-5xl" />
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <div className="w-3/7 border-t-[2px] border-[#07cdf0] h-[2px] mt-2 pb-20 flex items-start text-center">
                                <h1 className="text-white text-center text-7xl font-[600]" style={{ textShadow: '2px 1px 3px #07cdf0' }}>
                                    <span className="text-5xl">35</span><span className="text-4xl">GB</span>
                                </h1>
                            </div>
                            <MdAddCircleOutline className="text-[#07cdf0] text-lg" />
                            <div className="w-3/7 border-t-[2px] border-[#07cdf0] h-[2px] mt-2 pb-20 flex items-start text-center flex-col">
                                <div className="flex pt-2 pb-4 gap-1 border-b-[2px] border-[#07cdf0]">
                                    <p className="text-white text-[.45em]">5GB EXCLUSIVOS PARA REDES SOCIAIS</p>
                                    <div className="flex items-center justify-center gap-0.5 ml-4">
                                        <Image 
                                            src="/img/twitter.png"
                                            alt=""
                                            width={20}
                                            height={20} 
                                        />
                                        <Image 
                                            src="/img/facebook.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                        <Image 
                                            src="/img/instagram.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-2 pt-2 pb-2">
                                    <Image 
                                        src="/img/whatsapp.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-white text-[.62em] font-[600]">WHATSAPP INCLUÍDO</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-[#eb0129] pl-5 pr-5 m-auto flex text-white items-center rounded-2xl pt-4 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                        >
                            <div className="text-center w-full flex justify-center gap-1">
                                <div className="grid translate-x-1">
                                    <div className="text-[.8em] font-bold -translate-x-[.1em]">POR</div>
                                    <div className="-translate-y-3.5 mr-1 font-normal text-xl">R$</div>
                                </div>
                                <div className="grid justify-center">
                                    <div className="flex">
                                        <div className="text-4xl font-normal">64</div>
                                        <div className="-translate-y-.5">,99</div>
                                    </div>
                                    <div className="text-[.75em] translate-x-6 -translate-y-6">/MÊS</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-[#151ce0] w-3 h-2 block absolute bottom-0 translate-y-3/12 left-[28.8%] -translate-1/2"></div>
                        <div className="bg-[#151ce0] w-3 h-2 block absolute bottom-0 translate-y-3/12 left-[71.4%] -translate-1/2"></div>

                    </div>
                    <div className="flex justify-center">
                        <button className="bg-white w-[22em] text-[1em] font-bold pt-3 pb-3 rounded-xl cursor-pointer">Contratar agora</button>
                    </div>
                </div>
            </div>

            {/* 3 div divida na informação tim controle a imagem da iza e as informações do plano na esquerda sendo a ultima */}
            <div className="hidden xl:block w-[1294px] m-auto -translate-y-2 relative">
                {/* CLasse pai das 3 divs */}
                <div className="flex gap-1">
                    {/* Novo tim controle, informações basicas 5g e etc... */}
                    <div className="flex flex-col justify-center gap-4 w-1/4">
                        <div className="flex items-center gap-3 ">
                            <span className="bg-gradient-to-b from-white to-[#a6e1f0] p-1 rounded-xl">NOVO</span>
                            <span className="text-[#26d0f9] font-bold">TIM CONTROLE</span>
                        </div>

                        <div>
                            <h1
                                className="text-white text-3xl font-thin pr-2"
                                style={{ fontFamily: 'roboto' }}
                            >
                                Tenha um plano TIM CONTROLE com <b className=" text-3xl font-[700]" style={{ fontFamily: 'roboto' }}>muitas vantagens e streaming incluso</b>
                            </h1>
                        </div>

                        <div>
                            {/* logo marca 5g tim */}
                            <div className="flex">

                               <div className=" flex flex-col items-center justify-center gap-[3px] -translate-y-[3px] translate-x-[3px]">
                                    <div className="flex gap-[2px]">
                                        <div className="bg-[#e3001f] w-1 h-1 block"></div>
                                        <div className="bg-[#e3001f] w-4 h-1 block rounded-r-xl"></div>
                                    </div>

                                    <div className="flex gap-[2px] -translate-x-2">
                                        <div className="bg-[#e3001f] w-1 h-1 block"></div>
                                        <div className="bg-[#e3001f] w-5 h-1 block rounded-r-xl"></div>
                                    </div>

                                    <div className="flex gap-[2px] translate-x-[2px]">
                                        <div className="bg-[#e3001f] w-1 h-1 block"></div>
                                        <div className="bg-[#e3001f] w-4 h-1 block rounded-r-xl"></div>
                                    </div>
                               </div>
                                <span className="text-white text-5xl flex items-center font-bold" style={{ fontFamily: 'Helvetica' }}>5<span className="text-4xl">G</span></span>
                            </div>

                            <div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Imagem da iza representação */}
                    <div className="w-2/4 flex justify-center">
                        <Image
                          src="/img/izailu.jpeg"
                          alt=""
                          width={520}
                          height={520}
                          className="xl:translate-y-6.5"
                        />
                    </div>

                    {/* Informações do plano e quantidade de internet */}
                    <div className="w-1/4 flex items-end">
                        <div className="relative w-[19em] bg-[#151ce0] z-20  border-solid border-[2px] border-[#07cdf0] m-auto p-4 flex flex-col gap-3 rounded-2xl shadow-lg shadow-[rgba(255,255,255,.1)]">
                            <h4 className="text-white text-[.75em] text-center font-bold">VOCÊ PODE TROCAR SUA ASSINATURA TODO MÊS</h4>
                            <div className="flex items-center text-3xl justify-evenly text-white">
                                <Image 
                                  src="/img/deezernow.png"
                                  alt=""
                                  width={80}
                                  height={80}
                                />
                                <SiParamountplus />
                                <SiPrimevideo className="text-5xl" />
                            </div>
                            <div className="flex  gap-2 border-b-[2px] border-[#07cdf0] ">
                                <div className="w-3/7 border-t-[2px] border-[#07cdf0] h-[2px] mt-2 flex text-center pt-2">
                                    <p className="text-white text-[.75em] font-bold">5GB EXCLUSIVOS PARA REDES SOCIAIS</p>
                                </div>
                                
                                {/* <div className="w-3/7 border-t-[2px] border-[#07cdf0] h-[2px] mt-2 pb-20 flex items-start text-center">
                                    <h1 className="text-white text-center text-7xl font-[600]" style={{ textShadow: '2px 1px 3px #07cdf0' }}>
                                        <span className="text-5xl">35</span><span className="text-4xl">GB</span>
                                    </h1>
                                </div> */}
                                <MdAddCircleOutline className="text-[#07cdf0] text-lg" />
                                <div className="w-3/7 border-t-[2px] border-[#07cdf0]  mt-2  flex items-start text-center flex-col">
                                    <div className="flex pt-2 pb-4 gap-1  w-full">
                                        <div className="flex items-center justify-around w-full">
                                            <Image 
                                                src="/img/twitter.png"
                                                alt=""
                                                width={40}
                                                height={40} 
                                            />
                                            <Image 
                                                src="/img/facebook.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                            <Image 
                                                src="/img/instagram.svg"
                                                alt=""
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="flex justify-center items-center gap-2 pt-2 pb-2">
                                        <FaWhatsapp className="text-[#25D366]" />
                                        <p className="text-white text-[.62em] font-[600]">WHATSAPP INCLUÍDO</p>
                                    </div> */}
                                </div>
                            </div>
                            
                            <div className="flex  gap-2 border-b-[2px] border-[#07cdf0]">
                                <div className="flex justify-center items-center gap-2 pt-2 pb-4 w-full">
                                    <Image 
                                        src="/img/whatsapp.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-white text-sm font-[600]" style={{ fontFamily: 'roboto' }}>WHATSAPP INCLUÍDO</p>
                                </div>
                            </div>
                            <div className="flex justify-around items-center h-full">
                                    <div className="">
                                        <h1 className="text-white text-center text-7xl font-[600]" style={{ textShadow: '2px 1px 3px #07cdf0' }}>
                                            <span className="text-6xl">35</span><span className="text-4xl">GB</span>
                                        </h1>
                                    </div>
                                    <div className="border-l-[2px] border-l-[#07cdf0] ml-2 border-solid pl-3 pt-2 pb-2">
                                        <div
                                            className=
                                            "bg-[#eb0129] pl-5 pr-5 m-auto text-white items-center rounded-2xl pt-4"
                                            style={{ fontFamily: 'roboto' }}
                                        >
                                            <div className="text-center w-full flex justify-center gap-1">
                                                <div className="grid translate-x-1">
                                                    <div className="text-[.8em] font-bold -translate-x-[.1em]">POR</div>
                                                    <div className="-translate-y-3.5 mr-1 font-normal text-xl">R$</div>
                                                </div>
                                                <div className="grid justify-center">
                                                    <div className="flex">
                                                        <div className="text-4xl font-normal">64</div>
                                                        <div className="-translate-y-.5">,99</div>
                                                    </div>
                                                    <div className="text-[.75em] translate-x-6 -translate-y-6">/MÊS</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-white w-full text-[1em] font-bold pt-3 pb-3 rounded-xl cursor-pointer">Contratar agora</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block w-full bg-[#0e25a1] h-4 absolute bottom-0 left-0"></div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="relative">
            {/* Primeiro anúncio */}
            <IzaAnuncio />

        </div>
    );
}
