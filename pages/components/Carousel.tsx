import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ProductModal from "./ProductModal";

interface Item {
  id: number;
  name: string;
  image: string;
  alt: string;
  price?: number;
  description?: string;
}

interface ItemProps {
  items: Item[];
}

const ContinuousMarquee: React.FC<ItemProps> = ({ items = [] }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  let position = 0;

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const moveMarquee = useCallback(() => {
    const container = marqueeRef.current;
    if (container) {
      position -= 0.45; // Ajusta la velocidad del desplazamiento
      const maxScroll = container.scrollWidth / 2; // Mitad porque hay duplicados
      if (Math.abs(position) >= maxScroll) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
    }
    animationRef.current = requestAnimationFrame(moveMarquee);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(moveMarquee);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [moveMarquee]);

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
      <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-[#f7f5f0] via-transparent to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-[#f7f5f0] via-transparent to-transparent pointer-events-none z-10"></div>

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
        onMouseEnter={stopMarquee}
        onMouseLeave={startMarquee}
      >
        {Array.isArray(items) &&
          [...items, ...items, ...items].map((item, index) => (
            <button
              onClick={() => setSelectedItem(item)}
              key={`${item.id}-${index}`}
              className="flex-none px-4"
            >
              <Image
                src={item.image}
                alt={item.alt ?? `Slide ${index}`}
                className="w-full h-full object-cover object-center p-1"
                width={120}
                height={120}
              />
            </button>
          ))}
      </div>
      {selectedItem && (
        <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default ContinuousMarquee;
