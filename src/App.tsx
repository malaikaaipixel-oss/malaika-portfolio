import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { KindWords } from './components/sections/KindWords';
import { Contact } from './components/sections/Contact';
import { ProfessionalFeedback } from './components/sections/ProfessionalFeedback';
import { BackToTop } from './components/ui/BackToTop';
import { FeedbackPage } from './pages/FeedbackPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <KindWords />
      <Contact />
      <ProfessionalFeedback />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-plum text-ivory">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
