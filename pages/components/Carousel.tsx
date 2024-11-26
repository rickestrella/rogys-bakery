import Image from "next/image";
import { useEffect, useRef } from "react";

interface Item {
  id: number;
  name: string;
  image: string;
  alt?: string; // Hacer opcional el alt si no siempre está presente
}

interface ItemProps {
  items: Item[];
}

const ContinuousMarquee: React.FC<ItemProps> = ({ items }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  let position = 0;

  // Función que mueve el marquee
  const moveMarquee = () => {
    const container = marqueeRef.current;
    if (container) {
      position -= 0.45; // Ajusta la velocidad del desplazamiento
      const maxScroll = container.scrollWidth / 2; // Mitad porque hay duplicados
      if (Math.abs(position) >= maxScroll) {
        position = 0; // Reiniciar posición para bucle infinito
      }
      container.style.transform = `translateX(${position}px)`;
    }
    animationRef.current = requestAnimationFrame(moveMarquee);
  };

  // Iniciar la animación
  useEffect(() => {
    animationRef.current = requestAnimationFrame(moveMarquee);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    }; // Limpieza al desmontar
  }, [moveMarquee]);

  // Función para detener y reanudar el movimiento
  const stopMarquee = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const startMarquee = () => {
    animationRef.current = requestAnimationFrame(moveMarquee);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "85%",
        height: "auto",
        marginInline: "auto",
      }}
    >
      {/* Efecto de sombreado en los extremos */}
      <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-[#f7f5f0] via-transparent to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-[#f7f5f0] via-transparent to-transparent pointer-events-none z-10"></div>

      {/* Contenedor del marquee */}
      <div
        ref={marqueeRef}
        className="flex cursor-default"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
        role="button"
        tabIndex={0}
        onMouseEnter={stopMarquee} // Pausar al pasar el mouse
        onMouseLeave={startMarquee} // Reanudar al quitar el mouse
      >
        {/* Duplicamos los ítems para efecto continuo */}
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`} // Más robusto usando item.id
            className="flex-none px-4"
            // style={{
            //   width: "120px", // Ajusta el ancho según los ítems
            // }}
          >
            <Image
              src={item.image}
              alt={item.alt ?? `Slide ${index}`}
              className="w-full h-full object-cover object-center p-1"
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousMarquee;
