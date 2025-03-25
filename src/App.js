import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services'
import CloudConsulting from './Components/Services/CloudConsulting';
import CloudSecurity from './Components/Services/CloudSecurity';
import CloudMigration from './Components/Services/CloudMigration';
import CloudManagement from './Components/Services/CloudManagement';
import SoftwareTesting from './Components/Services/SoftwareTesting';
import DataWarehousing from './Components/Services/DataWarehousing';
import SoftwareDevelopment from './Components/Services/SoftwareDevelopment';
import ITConsulting from './Components/Services/ITConsulting';
import Careers from './Components/Careers';
import Clients from './Components/Clients';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/cloud-consulting" element={<CloudConsulting />} />
        <Route path="/services/cloud-security" element={<CloudSecurity />} />
        <Route path="/services/cloud-migration" element={<CloudMigration />} />
        <Route path="/services/cloud-management" element={<CloudManagement />} />
        <Route path="/services/software-testing" element={<SoftwareTesting />} />
        <Route path="/services/data-warehousing" element={<DataWarehousing />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
