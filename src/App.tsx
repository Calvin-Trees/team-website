import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Vite + React + TypeScript
          </h1>
          <p className="text-muted-foreground">
            With Tailwind CSS and shadcn/ui
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              Outline Button
            </Button>
            <Button variant="ghost" className="w-full">
              Ghost Button
            </Button>
            <Button variant="destructive" className="w-full">
              Destructive Button
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Edit <code className="bg-muted px-2 py-1 rounded">src/App.tsx</code> to test HMR
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
