"use client"

import { create } from "zustand"

interface WorkData {
  id: number
  title: string
  image: string
  category: string
  description: string
}

interface WorkModalStore {
  isOpen: boolean
  workData: WorkData | null
  openModal: (data: WorkData) => void
  closeModal: () => void
}

export const useWorkModal = create<WorkModalStore>((set) => ({
  isOpen: false,
  workData: null,
  openModal: (data) => set({ isOpen: true, workData: data }),
  closeModal: () => set({ isOpen: false, workData: null }),
}))
