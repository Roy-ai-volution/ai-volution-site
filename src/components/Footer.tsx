import { Link } from 'react-router-dom'
import GHLForm from './GHLForm'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo-licht.png" alt="AI Volution" style={{ height: '32px', marginBottom: '8px' }} />
            <p>Wij bouwen AI Workforces die jouw team versterken en je omzet per medewerker verhogen.</p>
            <div className="footer-contact">
              <div><span>E-mail</span><a href="mailto:info@ai-volution.nl">info@ai-volution.nl</a></div>
              <div><span>Telefoon</span><a href="tel:+3197010275159">+31 970 102 75159</a></div>
              <div><span>Kantoor</span><a href="https://maps.google.com/?q=De+Vriesstraat+26+Oud-Beijerland">De Vriesstraat 26, 3261 PC Oud-Beijerland</a></div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Diensten</h4>
            <ul>
              <li><Link to="/diensten/sales-automatisering">Sales Automatisering</Link></li>
              <li><Link to="/diensten/marketing-automatisering">Marketing Automatisering</Link></li>
              <li><Link to="/diensten/interne-processen">Interne Processen</Link></li>
              <li><Link to="/diensten/finance-automatisering">Finance Automatisering</Link></li>
              <li><Link to="/diensten/ai-agents">AI Agent Workforces</Link></li>
              <li><Link to="/diensten/klantenservice-automatisering">Klantenservice</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Bedrijf</h4>
            <ul>
              <li><Link to="/over-ons">Over Ons</Link></li>
              <li><Link to="/aanpak">Aanpak</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/roi-calculator">ROI Calculator</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Nieuwsbrief</h4>
            <div style={{ minHeight: '250px' }}>
              <GHLForm formId="N2V6YGvNn1bQkMZIlWDk" formName="Nieuwsbrief Site" height={250} />
            </div>
          </div>
        </div>
        <div className="footer-line">
          <p>&copy; 2026 AI Volution. Alle rechten voorbehouden.</p>
          <div className="footer-line-links">
            <Link to="/privacybeleid">Privacybeleid</Link>
            <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
