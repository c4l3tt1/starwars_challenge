'use client' // Error components must be Client Components

import { EmptyState } from '@/components/emptyState'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-[8vmin]">
      <EmptyState title="Error" description="Ops! I guess I did it wrong :(" />
    </main>
  )
}
