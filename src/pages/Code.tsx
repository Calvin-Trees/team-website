import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Code2, Smartphone, Map } from 'lucide-react'

const techStack = [
  {
    name: 'Angular',
    icon: Code2,
    description: 'Modern web application framework for building scalable SPAs',
  },
  {
    name: 'Ionic',
    icon: Smartphone,
    description: 'Cross-platform mobile app development framework',
  },
  {
    name: 'MapLibre',
    icon: Map,
    description: 'Open-source mapping library for interactive maps',
  },
]

export function Code() {
  return (
    <main className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#8B2233]">
          Project Code
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Explore the source code and technical documentation
        </p>

        {/* GitHub Repository Card */}
        <Card className="mb-12 border-2 hover:shadow-lg transition-shadow bg-white">
          <CardHeader>
            <Github className="w-16 h-16 mx-auto mb-4 text-[#8B2233]" />
            <CardTitle className="text-center text-2xl text-[#8B2233]">
              View on GitHub
            </CardTitle>
            <CardDescription className="text-center text-base text-gray-600">
              Access the full source code, documentation, and project history
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              size="lg"
              className="bg-[#8B2233] hover:bg-[#6d1a28] text-white"
              asChild
            >
              <a
                href="https://github.com/Calvin-Trees/calvin-trees-main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Visit Repository
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Tech Stack Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-[#8B2233] text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon
              return (
                <Card
                  key={tech.name}
                  className="text-center hover:shadow-md transition-shadow bg-white"
                >
                  <CardHeader>
                    <Icon className="w-16 h-16 mx-auto mb-3 text-[#8B2233]" />
                    <CardTitle className="text-xl text-[#8B2233]">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
