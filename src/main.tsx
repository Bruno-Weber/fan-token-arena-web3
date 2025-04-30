import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Importar configuração do i18n (deve ser importado antes de qualquer componente que use traduções)
import './i18n';

createRoot(document.getElementById("root")!).render(<App />);
