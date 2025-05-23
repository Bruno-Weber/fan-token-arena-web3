
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

const PageTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
