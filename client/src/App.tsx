import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import PrimaryLayout from './components/layouts/PrimaryLayout';

// pages
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ConsultPage from './pages/Consult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/schedule-a-consult" element={<ConsultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
