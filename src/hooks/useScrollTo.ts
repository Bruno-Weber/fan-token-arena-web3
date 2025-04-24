
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useScrollTo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const isHome = location.pathname === "/";
    if (!isHome) {
      navigate("/", { replace: false });
      // Aguardar próxima renderização e tentar o scroll
      setTimeout(() => scrollTo(id), 150);
      return;
    }

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return scrollTo;
};
