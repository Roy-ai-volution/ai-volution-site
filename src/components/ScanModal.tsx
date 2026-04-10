import { useEffect } from 'react'
import GHLForm from './GHLForm'

interface ScanModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScanModal({ isOpen, onClose }: ScanModalProps) {
  // Escape key → close
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Body scroll lock wanneer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="scan-modal-overlay"
      id="scanModal"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="scan-modal">
        <button className="scan-modal-close" onClick={onClose}>&times;</button>
        <h2>Gratis AI Strategie Scan</h2>
        <p className="scan-subtitle">Ontdek in 30 minuten welke processen jij kunt automatiseren en hoeveel tijd en geld je bespaart.</p>
        <GHLForm formId="VZKtnbuXIFCf3TvXiFGO" formName="AI-ROI Scan (Simpele Scan)" height={631} />
      </div>
    </div>
  )
}
