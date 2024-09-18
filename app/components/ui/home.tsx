import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mb-[9rem] flex items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4 max-w-[600px]">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Prolang
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Discover a new way to boost your productivity and streamline your workflow. Our innovative solution
                  is designed to make your life easier.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}