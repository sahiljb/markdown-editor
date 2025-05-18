import React from "react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckCircle2Icon, Quote, SparklesIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <BackgroundBeamsWithCollision className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">
              <SparklesIcon className="h-3.5 w-3.5 mr-1" />
              <span>New Features Available</span>
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              Your New Favorite Place to Write in Markdown
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A beautiful, intuitive editor that makes writing in Markdown a joy. 
              Create, edit, and organize your content with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>

          {/* YouTube Video Embed */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Markdown Editor Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Markdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our editor comes packed with features to enhance your writing experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Preview",
                description: "See your formatted text as you type with our side-by-side preview mode",
                icon: "🔄"
              },
              {
                title: "Cloud Sync",
                description: "Your documents are automatically saved and synced across all your devices",
                icon: "☁️"
              },
              {
                title: "Export Options",
                description: "Export your documents to PDF, HTML, or other formats with a single click",
                icon: "📤"
              },
              {
                title: "Customizable Themes",
                description: "Choose from light, dark, or create your own custom theme to match your style",
                icon: "🎨"
              },
              {
                title: "Keyboard Shortcuts",
                description: "Boost your productivity with intuitive keyboard shortcuts",
                icon: "⌨️"
              },
              {
                title: "Version History",
                description: "Access previous versions of your documents and restore them if needed",
                icon: "📜"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm border">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Writers Everywhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of writers who have transformed their workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "This editor has completely changed how I write my blog posts. The interface is clean and the features are exactly what I need.",
                author: "Sarah Johnson",
                role: "Content Creator"
              },
              {
                quote: "As a technical writer, I need reliability and precision. This markdown editor delivers both, plus it's a joy to use.",
                author: "Michael Chen",
                role: "Technical Writer"
              },
              {
                quote: "I've tried many markdown editors, but this one stands out for its simplicity and powerful features. Highly recommended!",
                author: "Emma Rodriguez",
                role: "Novelist"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background rounded-xl p-8 shadow-sm border relative">
                <div className="absolute bottom-2 right-2 text-primary opacity-10"><Quote className="size-20"/></div>
                <p className="mb-6 relative z-10">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Writing Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of writers who have already made the switch to our markdown editor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm">
              <CheckCircle2Icon className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <CheckCircle2Icon className="h-4 w-4 text-green-500" />
              <span>Free 14-day trial</span>
              <span className="mx-2">•</span>
              <CheckCircle2Icon className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
