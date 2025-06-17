import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { PageWrapper } from '@/components/common/PageWrapper'
import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion'
import { Magnetic, Floating } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import { 
  Certificate, 
  Trophy, 
  Star,
  GraduationCap,
  ShieldCheck,
  ChartLineUp,
  Globe,
  Brain
} from '@phosphor-icons/react'

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const certificationsByIssuer = [
  {
    issuer: "Google",
    icon: Globe,
    color: "text-blue-500",
    count: 8,
    certifications: [
      "UX Design Professional Certificate",
      "Data Analytics Professional Certificate", 
      "Cybersecurity Professional Certificate",
      "IT Support Professional Certificate",
      "Business Intelligence Certificate",
      "Project Management Certificate",
      "Digital Marketing Certificate",
      "Google Cloud Associate"
    ]
  },
  {
    issuer: "IBM",
    icon: Brain,
    color: "text-blue-600",
    count: 12,
    certifications: [
      "Data Science Professional Certificate",
      "AI Developer Professional Certificate",
      "DevOps and Software Engineering",
      "Full Stack Software Developer",
      "Cybersecurity Analyst Professional",
      "Applied Data Science with Python",
      "Machine Learning with Python",
      "Deep Learning Fundamentals",
      "Cloud Application Developer",
      "Blockchain Developer",
      "Quantum Computing Fundamentals",
      "Enterprise Design Thinking"
    ]
  },
  {
    issuer: "Microsoft",
    icon: ChartLineUp,
    color: "text-green-500",
    count: 8,
    certifications: [
      "AI & Machine Learning Engineering",
      "Cybersecurity Fundamentals",
      "Power BI Data Analyst",
      "Azure Cloud Applications",
      "Azure AI Fundamentals",
      "Azure Data Fundamentals",
      "Microsoft 365 Certified",
      "Dynamics 365 Fundamentals"
    ]
  },
  {
    issuer: "AWS",
    icon: Star,
    color: "text-orange-500",
    count: 6,
    certifications: [
      "AWS Certified Cloud Architect",
      "AWS Cloud Support Engineer",
      "AWS DevOps Professional",
      "AWS Solutions Architect Associate",
      "AWS Developer Associate",
      "AWS SysOps Administrator"
    ]
  },
  {
    issuer: "Cisco",
    icon: ShieldCheck,
    color: "text-blue-700",
    count: 4,
    certifications: [
      "CCNA Routing and Switching",
      "Cybersecurity Operations",
      "Network Security Fundamentals",
      "IoT Fundamentals"
    ]
  },
  {
    issuer: "Others",
    icon: Trophy,
    color: "text-purple-500",
    count: 22,
    certifications: [
      "Certified Ethical Hacking (CEH v12)",
      "Blockchain Fundamentals (University of California)",
      "Certified Scrum Master (CSM)",
      "CBAP® - Certified Business Analysis Professional",
      "VLSI Design and Verification",
      "Agile Project Management",
      "CompTIA Security+",
      "CISSP Associate",
      "PMP Preparation Course",
      "ITIL Foundation",
      "Lean Six Sigma Green Belt",
      "Digital Transformation",
      "IoT Engineering",
      "Edge Computing Certification",
      "React Advanced Patterns",
      "Node.js Advanced Development",
      "MongoDB Professional",
      "Docker & Kubernetes",
      "Terraform Associate",
      "Jenkins Certified Engineer",
      "Prometheus Monitoring",
      "Grafana Certified"
    ]
  }
]

const certificationStats = [
  { label: "Total Certifications", value: "60+", icon: Certificate },
  { label: "Major Platforms", value: "6", icon: Globe },
  { label: "Years Learning", value: "8+", icon: GraduationCap },
  { label: "Specializations", value: "12", icon: Trophy }
]

export function Certifications() {
  const { actualTheme: theme } = useTheme()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={6} delay={0} intensity={20} className="absolute top-36 right-14">
          <div className="w-3 h-3 bg-yellow-500/10 rounded-full" />
        </Floating>
        <Floating duration={8} delay={2.5} intensity={25} className="absolute top-72 left-16">
          <div className="w-2 h-2 bg-indigo-500/10 rounded-full" />
        </Floating>
        <Floating duration={7} delay={1} intensity={30} className="absolute bottom-44 right-1/3">
          <div className="w-1 h-1 bg-green-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <Magnetic strength={0.1}>
            <PageHeader 
              icon={Certificate}
              title="Professional Certifications"
              description="A comprehensive collection of industry-recognized certifications demonstrating expertise across AI/ML, cloud computing, cybersecurity, and modern development practices."
              badges={[
                { text: "60+ Certifications", variant: "success" },
                { text: "6 Major Providers", variant: "default" },
                { text: "Continuously Learning", variant: "secondary" }
              ]}
            />
          </Magnetic>          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certificationStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Magnetic key={index} strength={0.1}>
                    <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 group">
                      <CardContent>
                        <div className={cn(
                          "w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center",
                          "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                          "group-hover:from-indigo-50 group-hover:to-purple-50",
                          "dark:group-hover:from-indigo-900/30 dark:group-hover:to-purple-900/30",
                          "transition-all duration-300 shadow-lg group-hover:shadow-xl"
                        )}>
                          <Icon className={cn("w-6 h-6", tokens[theme].icon.brand)} weight="duotone" />
                        </div>
                        <div className={cn("text-3xl font-bold mb-1", tokens[theme].text.brand)}>
                          {stat.value}
                        </div>
                        <div className={cn("text-sm", tokens[theme].text.muted)}>
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </Magnetic>
                )
              })}
            </div>
          </motion.div>

          {/* Certifications by Issuer */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {certificationsByIssuer.map((issuer, index) => {
              const Icon = issuer.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-3 rounded-xl",
                            tokens[theme].background.brandSubtle
                          )}>
                            <Icon className={cn("w-6 h-6", issuer.color)} weight="duotone" />
                          </div>
                          <div>
                            <h3 className={cn(
                              "text-xl font-bold",
                              tokens[theme].text.primary
                            )}>
                              {issuer.issuer}
                            </h3>
                            <p className={cn("text-sm", tokens[theme].text.muted)}>
                              {issuer.count} certifications
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {issuer.count}
                        </Badge>
                      </div>
                    </CardHeader>                    <CardContent>
                      <AccordionRoot type="single" collapsible className="w-full">
                        <AccordionItem value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            View All {issuer.issuer} Certifications
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                              {issuer.certifications.map((cert, certIndex) => (
                                <div 
                                  key={certIndex}
                                  className={cn(
                                    "flex items-center gap-3 p-3 rounded-lg",
                                    tokens[theme].background.secondary,
                                    "hover:bg-accent/50 transition-colors"
                                  )}
                                >
                                  <Certificate className={cn("w-4 h-4", issuer.color)} />
                                  <span className={cn("text-sm", tokens[theme].text.secondary)}>
                                    {cert}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </AccordionRoot>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Certification Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <Card className={cn("p-8", tokens[theme].background.brandSubtle)}>
              <CardContent>
                <div className="text-center">
                  <GraduationCap className={cn("w-12 h-12 mx-auto mb-6", tokens[theme].icon.brand)} weight="duotone" />
                  <h3 className={cn(
                    "text-2xl font-bold mb-4",
                    tokens[theme].text.primary
                  )}>
                    Continuous Learning Journey
                  </h3>
                  <p className={cn(
                    "text-lg max-w-3xl mx-auto mb-8",
                    tokens[theme].text.secondary
                  )}>
                    These certifications represent a commitment to staying at the forefront of technology. 
                    From foundational concepts to advanced specializations, each certification has contributed 
                    to building expertise that drives innovation in real-world projects.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className={cn("text-2xl font-bold mb-2", tokens[theme].text.brand)}>
                        2016
                      </div>
                      <div className={cn("text-sm", tokens[theme].text.muted)}>
                        Started Certification Journey
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={cn("text-2xl font-bold mb-2", tokens[theme].text.brand)}>
                        60+
                      </div>
                      <div className={cn("text-sm", tokens[theme].text.muted)}>
                        Certifications Earned
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={cn("text-2xl font-bold mb-2", tokens[theme].text.brand)}>
                        Ongoing
                      </div>
                      <div className={cn("text-sm", tokens[theme].text.muted)}>
                        Learning Never Stops
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
