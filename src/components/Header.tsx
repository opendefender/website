"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-20 bg-primary/80 backdrop-blur-md shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent glow">OpenDefender</Link>
        <ul className="flex gap-6 text-white">
          {["Produits", "Documentation", "Communauté", "À propos", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} className="hover:text-accent">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}