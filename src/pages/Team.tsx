import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const professor = {
  name: 'Victor Norman',
  role: 'Faculty Advisor',
  bio: 'Professor of Computer Science at Calvin University with extensive experience in software development and education. Guides students in innovative projects that combine technical excellence with practical application.',
  image: '/images/team/profnorman.webp',
}

const students = [
  {
    name: 'Alim Darmenov',
    role: 'Developer',
    bio: 'Computer Science student at Calvin University and intern at the EV Group. Participates in the University Men\'s ice hockey team. Passionate about full stack web app development.',
    image: '/images/team/alimdarmenov.webp',
  },
  {
    name: 'Peter Brink',
    role: 'Developer',
    bio: 'Computer Science student motivated by a passion for efficient software development. Committed to continuous learning and collaboration, bringing a proactive attitude and strong communication skills to team environments',
    image: '/images/team/peterbrink.webp',
  },
  {
    name: 'Sam Visser',
    role: 'Developer',
    bio: 'Calvin University upperclassman pursuing Computer Science with a minor in Information Systems. A dedicated problem-solver who brings reliability, a strong work ethic, and technical adaptability to every project.',
    image: '/images/team/samvisser.webp',
  },
]

export function Team() {
  return (
    <main className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#8B2233]">
          Our Team
        </h1>

        {/* Two-column layout: Professor on left, Students on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Faculty Advisor - Left Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-[#8B2233]">
                Faculty Advisor
              </h2>
              <Card className="border-2 border-[#8B2233] shadow-xl hover:shadow-2xl transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#8B2233] shadow-lg">
                    <img
                      src={professor.image}
                      alt={professor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-center text-2xl text-[#8B2233]">
                    {professor.name}
                  </CardTitle>
                  <CardDescription className="text-center text-base text-gray-600">
                    {professor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    {professor.bio}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Student Developers - Right Column */}
          <div className="lg:col-span-8">
            <h2 className="text-xl font-semibold mb-6 text-[#8B2233]">
              Student Developers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {students.map((student) => (
                <Card
                  key={student.name}
                  className="hover:shadow-lg transition-shadow bg-white h-full"
                >
                  <CardHeader>
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#8B2233] shadow-sm">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center text-lg text-[#8B2233]">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600">
                      {student.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {student.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
