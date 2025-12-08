import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Layout } from 'lucide-react'

const documents = [
  {
    title: 'Project Presentation',
    description:
      'Comprehensive presentation covering project milestones and design norms of previous project, as well as future development plans for the Calvin Trees application following our transition.',
    icon: Layout,
    file: '/docs/Dice Museum App Proj Update.pptx',
    type: 'PowerPoint Presentation',
  },
]

export function Reports() {
  return (
    <main className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#8B2233]">
          Reports & Documentation
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Access project reports, presentations, and technical documentation
        </p>

        <div className="space-y-6">
          {documents.map((doc) => {
            const Icon = doc.icon
            return (
              <Card
                key={doc.title}
                className="hover:shadow-lg transition-shadow bg-white"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#8B2233]/10 rounded-lg">
                      <Icon className="w-8 h-8 text-[#8B2233]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-[#8B2233]">{doc.title}</CardTitle>
                      <CardDescription className="text-base text-gray-600">
                        {doc.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>{doc.type}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    className="bg-[#8B2233] hover:bg-[#6d1a28] text-white"
                    asChild
                  >
                    <a href={doc.file} download>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Additional Info Box */}
        <div className="mt-12 p-6 bg-white border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-[#8B2233] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#8B2233]" />
            About Our Documentation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our project documentation includes detailed reports on development progress,
            technical architecture, user testing results, and future roadmap planning.
            These materials provide comprehensive insight into the Calvin Trees application
            and our team's development process.
          </p>
        </div>
      </div>
    </main>
  )
}
