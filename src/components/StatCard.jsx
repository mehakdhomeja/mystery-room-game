
import { motion } from "framer-motion";

export default function StatCard({ title, value, detail, icon: Icon }) {
  return (
    <motion.div
      className="stat-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="stat-top">
        <span>{title}</span>
        <Icon size={20} />
      </div>

      <h2>{value}</h2>

      <p>{detail}</p>
    </motion.div>
  );
}
