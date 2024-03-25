import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Accueil />} /> {/* Utilisation de '/' pour la route racine */}
            <Route path="/Accueil" element={<Accueil />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Apropos" element={<Apropos />} />
         </Routes>
      </BrowserRouter>
   );
}
