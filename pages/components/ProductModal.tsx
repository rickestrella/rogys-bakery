import Image from "next/image";
import ReactDOM from "react-dom";

interface Item {
  id: number;
  name: string;
  image: string;
  alt: string;
  price?: number;
  description?: string;
}

const ProductModal: React.FC<{ item: Item; onClose: () => void }> = ({
  item,
  onClose,
}) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#fff0f0] p-5 rounded-lg w-96 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-5">{item.name}</h2>
        <Image
          src={item.image}
          alt={item.alt ?? item.name}
          width={150}
          height={150}
          className="object-contain object-center size-48"
        />
        <div className="flex justify-evenly items-center gap-5">
        <p className="text-slate-900 mt-5">{item.description}</p>
        <p className="text-slate-600 font-bold mt-5">${item.price}</p>
        </div>
        <button
          className="mt-4 bg-primary text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ProductModal;
