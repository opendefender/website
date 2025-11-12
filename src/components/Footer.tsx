"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary py-8 text-center text-gray-400"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2025 OpenDefender Labs. Tous droits réservés.</p>
        <ul className="flex justify-center gap-4 mt-4">
          <Link href="https://github.com/OpenDefender" className="hover:text-accent">GitHub</Link>
          <Link href="https://x.com/OpenDefender" className="hover:text-accent">X</Link>
          <Link href="/mentions-legales" className="hover:text-accent">Mentions légales</Link>
          <Link href="/politique-confidentialite" className="hover:text-accent">Politique de confidentialité</Link>
        </ul>
      </div>
    </motion.footer>
  );
}