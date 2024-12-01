import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./slideshow.module.css";

interface ItemProps {
  id?: number;
  alt?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
}

interface Item {
  items: ItemProps[];
  time: number;
}

const Slideshow: React.FC<Item> = ({ items, time = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex < items.length - 1 ? prevIndex + 1 : 0
      );
    }, time);

    return () => clearInterval(interval);
  }, [items.length, time]);

  return (
    <div className={`relative ${classes.slideshow}`}>
      {items.map((item: ItemProps, index) => (
        <Image
          key={item.id}
          src={item.image!}
          width={300}
          height={300}
          alt={item.alt! || `Slide-${index}`}
          className={`absolute ${currentSlide === index ? classes.active : ""}`}
          priority={currentSlide === index}
        />
      ))}
    </div>
  );
};

export default Slideshow;
