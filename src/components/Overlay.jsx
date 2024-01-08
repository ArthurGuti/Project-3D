import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      {/* <img 
        style={{
          width: "2em", 
          position: "absolute",
          marginLeft: "55%",
          marginTop: "10.5%",
          userSelect: "none",
        }}
        src="/public/seta.png" 
        alt="An arrow that means you can drag the background by clicking"
      /> */}
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-poppins text-2xl">
            Olá! Sou Arthur Gutierrez🧑‍💻
          </h1>
          <p className="text-gray-500">Estou alugando este lar!</p>
          <p className="mt-3">Térreo tem:</p>
          <ul className="leading-9">
            <li>🪑Cadeira Gamer</li>
            <li>🪴 Vaso de Planta</li>
            <li>🪟 Uma linda janela</li>
            <li>📚 Um nicho para por livros</li>
          </ul>
          <p className="animate-bounce  mt-6">  ↓</p>
          <p>🖱️</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-poppins text-2xl">
            2° Andar 🪜
          </h1>
          <p className="text-gray-500">O local mais chique</p>
          <p className="mt-3">
            2° Andar tem:
          </p>
          <ul className="leading-9">
            <li>📚 Tapete</li>
            <li>🛋️ Abajur</li>
            <li>🪜 Escada para o sótão</li>
            <li>💺 Poltrona confortavel</li>
          </ul>
          <p className="animate-bounce  mt-6">  ↓</p>
          <p>🖱️</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-poppins text-2xl">
            Sótão 🏠
          </h1>
          <p className="text-gray-500">
            Muitos não entrariam aqui...
          </p>
          <ul className="leading-9">
            <li>🦇...</li>
            <li>💀....</li>
            <li>⚰️.....</li>
          </ul>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
          📧  <a 
                href="https://www.linkedin.com/in/arthur-gutierrez-de-oliveira-69a2b7280/" 
                target="_blank"
              >
                arthur.gutierrez.sfs@icloud.com
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
