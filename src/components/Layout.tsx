import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScanModal from './ScanModal'
import { useReveal } from '../hooks/useReveal'
import { ModalContext } from '../hooks/useModalContext'

interface LayoutProps {
  children: React.ReactNode
  isHomepage?: boolean
}

export default function Layout({ children, isHomepage = false }: LayoutProps) {
  const [modalOpen, setModalOpen] = useState(false)

  useReveal()

  const openModal = () => setModalOpen(true)

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Navbar isHomepage={isHomepage} onOpenModal={openModal} />
      {children}
      <Footer />
      <ScanModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </ModalContext.Provider>
  )
}
