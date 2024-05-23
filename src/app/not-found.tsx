'use client'

import { EmptyState } from '@/components/emptyState'

const NotFound = (): JSX.Element => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center p-[8vmin]">
      <EmptyState title="Not Found" description="There's no page to see here :(" />
    </main>
  )
}

export default NotFound
