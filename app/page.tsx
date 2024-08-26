import { MoveRight } from 'lucide-react';
import Container from './_components/container';
import { Button } from './_components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from './_components/ui/card';

export default function Home() {
  return (
    <Container>
      <main>
        {/* BLOG */}
        <section className="space-y-6">
          <h1 className="mt-16 text-2xl font-medium text-yellow-400">React 19: New Features with Code Examples</h1>
          <div>
            <h2>🚀 React Compiler</h2>
            <p>
              React is introducing an innovative compiler called React Forget, already in use at Instagram to optimize
              performance.
            </p>
          </div>

          <div>
            <h2>🌐 Server Components</h2>
            <p>
              After years of development, Server Components are finally arriving in React, and they’ll be usable with
              Next.js.
            </p>
          </div>

          <div>
            <h2>🎯 Actions</h2>
            <p>Actions will redefine how we interact with DOM elements, making operations more efficient.</p>
          </div>

          <Button className="bg-yellow-400 font-bold text-black hover:bg-yellow-300">Learn More</Button>
        </section>

        {/* ABOUT */}
        <section className="mt-24">
          <h1 className="mb-4 px-2 text-2xl font-medium">Learn about</h1>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">Project Journeys</CardTitle>
                </div>
                <CardDescription>Document project development, including decisions and solutions.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">Practical Tutorials</CardTitle>
                </div>
                <CardDescription>Quick guides for setting up and using technologies.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">
                    Exploring Tools and Technologies
                  </CardTitle>
                </div>
                <CardDescription>Reviews of new tools and frameworks.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">
                    Best Practices and Code Standards
                  </CardTitle>
                </div>
                <CardDescription>Tips on best practices and coding standards.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">Developer Interviews</CardTitle>
                </div>
                <CardDescription>Conversations with developers about careers and advice.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">Productivity Tips</CardTitle>
                </div>
                <CardDescription>Strategies for time management and work-life balance.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">
                    Career Development Path
                  </CardTitle>
                </div>
                <CardDescription>Advice on advancing a developer career.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="select-none text-lg text-yellow-400 sm:text-xl">Finance for Devs</CardTitle>
                </div>
                <CardDescription>Tips on financial management for developers.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center space-y-4 py-28">
          <h1 className="text-3xl font-bold">Support us!</h1>
          <p className="ml-4 text-sm text-zinc-400">
            DevTrek empowers developers worldwide with resources, tutorials, and best practices. Our work is made
            possible by community support.
          </p>
          <div className="flex gap-2">
            <Button variant="outline">Learn more</Button>
            <Button className="mr-2 font-bold">
              Donate now <MoveRight />
            </Button>
          </div>
        </section>
      </main>
    </Container>
  );
}
