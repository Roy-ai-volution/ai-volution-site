import { createContext, useContext } from 'react'

interface ModalContextValue {
  openModal: () => void
}

export const ModalContext = createContext<ModalContextValue>({ openModal: () => {} })

export function useModal() {
  return useContext(ModalContext)
}

export function useOpenModal() {
  return useContext(ModalContext).openModal
}
