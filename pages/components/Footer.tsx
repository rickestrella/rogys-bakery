import Link from "next/link";
import React from "react";
import {
  AiOutlineFacebook,
  // AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-center py-4">
      <p className="flex flex-col lg:flex-row items-center justify-center">
        <Link
          href="https://rcservice.tech"
          target="_blank"
          className="hover:underline hover:text-sky-600"
        >
          Powered by RCService &nbsp;
        </Link>
        © {new Date().getFullYear()} Rogy&apos;s Bakery. Todos los derechos
        reservados.
      </p>
      <div className="flex justify-center mt-2 space-x-4">
        <Link
          href="https://www.facebook.com/RogysBakery"
          target="_blank"
          className="hover:text-secondary"
        >
          <AiOutlineFacebook className="size-6" />
        </Link>
        {/* <Link
          href="https://www.instagram.com/rogyscreations/"
          target="_blank"
          className="hover:text-secondary"
        >
          <AiOutlineInstagram className="size-6" />
        </Link> */}
        <Link href="https://wa.link/44zrl1" className="hover:text-secondary">
          <AiOutlineWhatsApp className="size-6" />
        </Link>
        {/* <Link href="#" className="hover:text-secondary">
          <AiOutlineTikTok className="size-6" />
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
