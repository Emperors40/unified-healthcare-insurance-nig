import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Brain,
  PrinterIcon as Printer3d,
  ArrowRight,
  Check,
  Star,
  Clock,
  TrendingUp,
  Building2,
  Factory,
  Wheat,
  Cpu,
  Stethoscope,
  Cog,
  Hammer,
  Microscope,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Activity className="h-6 w-6 text-primary animate-pulse" />
            <span className="gradient-text">Unified Healthcare</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#plans">
              Plans
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Button variant="ghost" className="hover:text-primary" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 hero-gradient">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                    AI-Powered Healthcare & Insurance Solutions for{" "}
                    <span className="gradient-text">Every Nigerian</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Experience the future of healthcare with AI-driven diagnostics, 3D printing solutions, and
                    professional training. All in one unified platform.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white group"
                    asChild
                  >
                    <Link href="/register" className="flex items-center gap-2">
                      Get Insured Today
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="group" asChild>
                    <Link href="#plans" className="flex items-center gap-2">
                      View Plans
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[2px]"
                      >
                        <div className="w-full h-full rounded-full bg-white">
                          <Image
                            src={`/placeholder.svg?text=${i}`}
                            alt={`User ${i}`}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Trusted by <span className="font-bold text-primary">10,000+</span> Nigerians
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-square relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl">
                  <Image
                    src="/placeholder.svg"
                    alt="Healthcare illustration"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Enhanced Services Section with Production Lines */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our <span className="gradient-text">Services</span>
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive healthcare solutions and production lines for all sectors
                </p>
              </div>
            </div>

            <Tabs defaultValue="healthcare" className="mt-12">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4">
                <TabsTrigger
                  value="healthcare"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Healthcare
                </TabsTrigger>
                <TabsTrigger
                  value="production"
                  className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                >
                  Production Lines
                </TabsTrigger>
                <TabsTrigger
                  value="training"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Training
                </TabsTrigger>
                <TabsTrigger
                  value="insurance"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Insurance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="healthcare" className="mt-8">
                <div className="grid gap-6 lg:grid-cols-3">
                  {[
                    {
                      icon: Stethoscope,
                      title: "AI Diagnostics",
                      description: "Advanced health monitoring and early detection systems",
                      features: ["24/7 Health Monitoring", "Early Disease Detection", "Personalized Health Insights"],
                      gradient: "from-primary to-primary/50",
                    },
                    {
                      icon: Printer3d,
                      title: "Medical Equipment",
                      description: "3D-printed medical devices and equipment manufacturing",
                      features: ["Custom Prosthetics", "Medical Tools", "Rapid Prototyping"],
                      gradient: "from-secondary to-secondary/50",
                    },
                    {
                      icon: Microscope,
                      title: "Lab Services",
                      description: "State-of-the-art laboratory testing and research",
                      features: ["Advanced Testing", "Quick Results", "Research Support"],
                      gradient: "from-accent to-accent/50",
                    },
                  ].map((service, i) => (
                    <Card key={i} className="service-card group">
                      <div className="p-6 space-y-6">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${service.gradient}`}
                        >
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">{service.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                        </div>
                        <ul className="space-y-2">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm">
                              <Check className="h-4 w-4 text-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="production" className="mt-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  {[
                    {
                      icon: Factory,
                      title: "Medical Manufacturing",
                      description: "Advanced production lines for medical equipment and supplies",
                      features: [
                        "Automated Assembly Lines",
                        "Quality Control Systems",
                        "Clean Room Production",
                        "Medical Device Manufacturing",
                      ],
                      image: "/placeholder.svg",
                    },
                    {
                      icon: Building2,
                      title: "Industrial Automation",
                      description: "Smart factory solutions and industrial automation systems",
                      features: [
                        "Robotic Process Automation",
                        "IoT Integration",
                        "Predictive Maintenance",
                        "Production Monitoring",
                      ],
                      image: "/placeholder.svg",
                    },
                    {
                      icon: Wheat,
                      title: "Agricultural Processing",
                      description: "Modern agricultural processing and packaging solutions",
                      features: ["Food Processing Lines", "Packaging Systems", "Quality Testing", "Storage Solutions"],
                      image: "/placeholder.svg",
                    },
                    {
                      icon: Hammer,
                      title: "Construction & Infrastructure",
                      description: "Production lines for construction materials and infrastructure",
                      features: [
                        "Building Materials Production",
                        "Infrastructure Components",
                        "Quality Testing",
                        "Automated Manufacturing",
                      ],
                      image: "/placeholder.svg",
                    },
                  ].map((line, i) => (
                    <Card key={i} className="group overflow-hidden">
                      <div className="grid md:grid-cols-[1fr_200px] gap-6">
                        <div className="p-6 space-y-6">
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-accent`}
                            >
                              <line.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold">{line.title}</h3>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{line.description}</p>
                          <ul className="space-y-2">
                            {line.features.map((feature, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm">
                                <Check className="h-4 w-4 text-accent" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button variant="outline" className="group" asChild>
                            <Link
                              href={`/production/${line.title.toLowerCase().replace(/ /g, "-")}`}
                              className="flex items-center gap-2"
                            >
                              Learn More
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                        <div className="relative hidden md:block">
                          <Image
                            src={line.image || "/placeholder.svg"}
                            alt={line.title}
                            width={200}
                            height={300}
                            className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 space-y-8">
                  <h3 className="text-2xl font-bold text-center">Additional Production Capabilities</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        icon: Cpu,
                        title: "Electronics Manufacturing",
                        description: "Production lines for electronic components and devices",
                      },
                      {
                        icon: Cog,
                        title: "Automotive Parts",
                        description: "Manufacturing lines for automotive components",
                      },
                      {
                        icon: Brain,
                        title: "Smart Systems",
                        description: "AI-powered production line optimization",
                      },
                      {
                        icon: Activity,
                        title: "Quality Control",
                        description: "Automated testing and quality assurance",
                      },
                    ].map((capability, i) => (
                      <Card
                        key={i}
                        className="p-6 space-y-4 text-center group hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex justify-center">
                          <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                            <capability.icon className="h-6 w-6 text-secondary" />
                          </div>
                        </div>
                        <h4 className="font-semibold">{capability.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{capability.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="training" className="mt-8">
                <div className="grid gap-6 lg:grid-cols-3">
                  {[
                    {
                      title: "VR Production Design",
                      description: "Learn production line design in virtual reality",
                      features: ["Interactive 3D Models", "Real-time Simulation", "Hands-on Practice"],
                      level: "Advanced",
                      duration: "4 weeks",
                    },
                    {
                      title: "AR Assembly Training",
                      description: "Master assembly processes with augmented reality",
                      features: ["Step-by-step Guidance", "Real-time Feedback", "Performance Tracking"],
                      level: "Intermediate",
                      duration: "3 weeks",
                    },
                    {
                      title: "3D Printing Mastery",
                      description: "Comprehensive 3D printing and manufacturing course",
                      features: ["Material Science", "Printer Operation", "Quality Control"],
                      level: "Beginner to Advanced",
                      duration: "6 weeks",
                    },
                  ].map((course, i) => (
                    <Card key={i} className="group hover:shadow-xl transition-all duration-300">
                      <div className="p-6 space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">{course.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{course.level}</Badge>
                          <Badge variant="outline">{course.duration}</Badge>
                        </div>
                        <ul className="space-y-2">
                          {course.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm">
                              <Check className="h-4 w-4 text-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full group" asChild>
                          <Link href="/training" className="flex items-center justify-center gap-2">
                            Enroll Now
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="insurance" className="mt-8">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="p-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">AI-Powered Health Coverage</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Comprehensive health insurance with smart monitoring and preventive care
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "24/7 Health Monitoring",
                        "Preventive Care Alerts",
                        "Smart Claim Processing",
                        "Hospital Network Access",
                        "Medicine Coverage",
                        "Emergency Support",
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
                      asChild
                    >
                      <Link href="#plans">View Plans</Link>
                    </Button>
                  </Card>
                  <div className="relative">
                    <Image
                      src="/placeholder.svg"
                      alt="Health Insurance"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-lg" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <section
          id="plans"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable <span className="gradient-text">Healthcare Plans</span>
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get comprehensive coverage at an unbeatable price
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-sm mt-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-md opacity-75" />
              <Card className="relative bg-white dark:bg-gray-950 border-2 border-primary p-6 space-y-6">
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">Complete Coverage Plan</h3>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-4xl font-bold">₦10,000</span>
                    <span className="text-gray-500">/year</span>
                  </div>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    Most Popular
                  </Badge>
                </div>
                <div className="space-y-4">
                  {[
                    "Full AI-powered health coverage",
                    "Unlimited health scans & monitoring",
                    "Access to 3D printed medical equipment",
                    "Free medicine & treatments",
                    "24/7 AI diagnostic support",
                    "Training centre access",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 group"
                  size="lg"
                  asChild
                >
                  <Link href="/register" className="flex items-center justify-center gap-2">
                    Get Started Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-xs text-center text-gray-500">No hidden fees. Cancel anytime.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest <span className="gradient-text">Healthcare Insights</span>
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay informed with our expert articles on healthcare innovation
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Best Healthcare & Insurance Plans in Nigeria 2025",
                  excerpt:
                    "Discover the most comprehensive and affordable healthcare coverage options available in Nigeria...",
                  category: "Insurance",
                  readTime: "5 min read",
                  trending: true,
                  image: "/placeholder.svg",
                },
                {
                  title: "How AI is Revolutionizing Nigerian Healthcare",
                  excerpt: "Explore how artificial intelligence is transforming the healthcare landscape in Nigeria...",
                  category: "Technology",
                  readTime: "7 min read",
                  trending: true,
                  image: "/placeholder.svg",
                },
                {
                  title: "Why 3D Printing Will Change Nigeria's Medical Industry",
                  excerpt: "Learn about the impact of 3D printing technology on medical equipment manufacturing...",
                  category: "Innovation",
                  readTime: "6 min read",
                  trending: false,
                  image: "/placeholder.svg",
                },
              ].map((post, i) => (
                <Link key={i} href={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-950/90">{post.category}</Badge>
                      {post.trending && (
                        <Badge className="absolute top-4 right-4 bg-secondary/90 text-white">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          4.9
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="/blog" className="flex items-center gap-2">
                  View All Articles
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container flex flex-col gap-4 py-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              <span className="gradient-text font-bold">Unified Healthcare</span>
            </Link>
            <nav className="flex gap-6 flex-wrap">
              <Link className="text-sm hover:text-primary transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-primary transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:text-primary transition-colors" href="/contact">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 Unified Healthcare Insurance NIG. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

