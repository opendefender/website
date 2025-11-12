import Button from "@/components/Button";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 glow"
        >
          OpenDefender — La défense cyber du futur, open-source et intelligente.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Un écosystème complet pour sécuriser vos infrastructures, vos données et vos utilisateurs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="/produits">Découvrir les produits</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/communaute">Rejoindre la communauté</a>
          </Button>
        </motion.div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {[
            { icon: "🔰", name: "Protection réseau (OpenShield)" },
            { icon: "🧩", name: "Analyse de risque (OpenRisk)" },
            { icon: "👁️", name: "Surveillance intelligente (OpenEye)" },
            { icon: "🕵️", name: "Détection d’anomalies (OpenWatch)" },
            { icon: "🔗", name: "Traçabilité et audit (OpenTrace)" },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-neutral/50 rounded-lg text-center glow"
            >
              <span className="text-4xl mb-2">{pillar.icon}</span>
              <p className="text-white">{pillar.name}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}