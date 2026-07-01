"use client"

import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

let toastCount = 0
const generateId = () => `toast-${++toastCount}-${Date.now()}`

// Global toast state
let globalToasts: ToasterToast[] = []
const listeners: Set<(toasts: ToasterToast[]) => void> = new Set()

const notifyListeners = () => {
  listeners.forEach((listener) => listener([...globalToasts]))
}

const addToast = (toast: Omit<ToasterToast, "id">) => {
  const id = generateId()
  const newToast: ToasterToast = {
    ...toast,
    id,
    open: true,
  }

  globalToasts = [newToast, ...globalToasts].slice(0, TOAST_LIMIT)
  notifyListeners()

  return id
}

const removeToast = (id: string) => {
  globalToasts = globalToasts.filter((toast) => toast.id !== id)
  notifyListeners()
}

const dismissToast = (id: string) => {
  globalToasts = globalToasts.map((toast) => (toast.id === id ? { ...toast, open: false } : toast))
  notifyListeners()

  // Remove after delay
  setTimeout(() => removeToast(id), TOAST_REMOVE_DELAY)
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = addToast({
    ...props,
    onOpenChange: (open) => {
      if (!open) dismissToast(id)
    },
  })

  return {
    id,
    dismiss: () => dismissToast(id),
    update: (newProps: Partial<ToasterToast>) => {
      globalToasts = globalToasts.map((t) => (t.id === id ? { ...t, ...newProps } : t))
      notifyListeners()
    },
  }
}

function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>(globalToasts)

  React.useEffect(() => {
    const listener = (newToasts: ToasterToast[]) => {
      setToasts(newToasts)
    }

    listeners.add(listener)

    return () => {
      listeners.delete(listener)
    }
  }, [])

  return {
    toasts,
    toast,
    dismiss: dismissToast,
  }
}

export { useToast, toast }
