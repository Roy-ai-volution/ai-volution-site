import { Routes, Route } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import HomePage from './pages/HomePage'
import DienstenPage from './pages/DienstenPage'
import SalesAutomationPage from './pages/services/SalesAutomationPage'
import MarketingAutomationPage from './pages/services/MarketingAutomationPage'
import AutomateSupportPage from './pages/services/AutomateSupportPage'
import AutomateFinancePage from './pages/services/AutomateFinancePage'
import InternalProcessesPage from './pages/services/InternalProcessesPage'
import AiAgentsDetailPage from './pages/services/AiAgentsDetailPage'

// Branches
import BranchesPage from './pages/BranchesPage'
import BrancheBtoBSaasPage from './pages/branches/BrancheBtoBSaasPage'
import BrancheLogistiekPage from './pages/branches/BrancheLogistiekPage'
import BrancheEcommercePage from './pages/branches/BrancheEcommercePage'
import BrancheDienstverlenersPage from './pages/branches/BrancheDienstverlenersPage'

// Info pagina's
import AanpakPage from './pages/AanpakPage'
import OverOnsPage from './pages/OverOnsPage'
import ContactPage from './pages/ContactPage'
import RoiPage from './pages/RoiPage'

// Legal pagina's
import PrivacybeleidPage from './pages/PrivacybeleidPage'
import AlgemeneVoorwaardenPage from './pages/AlgemeneVoorwaardenPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diensten" element={<DienstenPage />} />
      <Route path="/diensten/sales-automatisering" element={<SalesAutomationPage />} />
      <Route path="/diensten/marketing-automatisering" element={<MarketingAutomationPage />} />
      <Route path="/diensten/klantenservice-automatisering" element={<AutomateSupportPage />} />
      <Route path="/diensten/finance-automatisering" element={<AutomateFinancePage />} />
      <Route path="/diensten/interne-processen" element={<InternalProcessesPage />} />
      <Route path="/diensten/ai-agents" element={<AiAgentsDetailPage />} />
      <Route path="/branches" element={<BranchesPage />} />
      <Route path="/branches/b2b-saas" element={<BrancheBtoBSaasPage />} />
      <Route path="/branches/logistiek" element={<BrancheLogistiekPage />} />
      <Route path="/branches/ecommerce" element={<BrancheEcommercePage />} />
      <Route path="/branches/dienstverleners" element={<BrancheDienstverlenersPage />} />
      <Route path="/aanpak" element={<AanpakPage />} />
      <Route path="/over-ons" element={<OverOnsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/roi-calculator" element={<RoiPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacybeleid" element={<PrivacybeleidPage />} />
      <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaardenPage />} />
    </Routes>
  )
}
