import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { PageWrapper } from '@/components/common/PageWrapper'
import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Magnetic, Floating } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendUp,
  Trophy,
  Users,
  Lightning,
  Target
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

const experiences = [
  {
    title: "Senior Full-Stack Developer & AI Specialist",
    company: "Remote Position",
    period: "2023 - Present",
    location: "Remote",
    type: "Current Role",
    description: "Leading innovative AI-integrated applications with focus on productivity platforms and intelligent systems.",
    achievements: [
      "Built productivity platform with 98% user satisfaction rate",
      "Developed AI book summary system handling 10k+ daily requests", 
      "Created enterprise monitoring reducing response time by 70%",
      "Architected scalable cloud infrastructure on AWS"
    ],
    technologies: ["Flutter", "React", "Python", "AWS", "TensorFlow", "OpenAI", "Docker"],
    icon: Lightning,
    color: "text-blue-500"
  },
  {
    title: "Lead Automation Technology Engineer",
    company: "Nacala Logistics",
    period: "2016 - Present",
    location: "Moçambique",
    type: "Full-time",
    description: "Leading digital transformation of railway operations with focus on predictive maintenance and IoT systems.",
    achievements: [
      "Implemented ML-based predictive maintenance saving $2M+ annually",
      "Built real-time monitoring for 500+ equipment units",
      "Managed 1000+ IoT devices with 99.99% uptime",
      "Modernized 900km of railway signaling network",
      "Led cross-functional teams of 15+ engineers"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Azure", "MQTT", "SCADA", "BigQuery"],
    icon: TrendUp,
    color: "text-green-500"
  },
  {
    title: "Customer Service Intern",
    company: "Standard Bank Moçambique",
    period: "2015 - 2016",
    location: "Moçambique", 
    type: "Internship",
    description: "Customer service excellence with focus on sales targets and fraud prevention initiatives.",
    achievements: [
      "Achieved 110% of quarterly sales targets",
      "Ranked #1 in customer satisfaction scores",
      "Led fraud prevention initiatives reducing incidents by 25%",
      "Trained 5+ new customer service representatives"
    ],
    technologies: ["CRM Systems", "Banking Software", "Data Analysis"],
    icon: Users,
    color: "text-purple-500"
  },
  {
    title: "IT Assistant",
    company: "Gabriel A.S. Couto S.A.",
    period: "2012 - 2015",
    location: "Moçambique",
    type: "Part-time",
    description: "Enterprise IT infrastructure management with focus on data center operations and network security.",
    achievements: [
      "Maintained enterprise data center with 99.95% uptime",
      "Managed network infrastructure for 200+ employees",
      "Handled 50TB+ enterprise data backup operations",
      "Implemented security protocols reducing incidents by 40%"
    ],
    technologies: ["Windows Server", "Linux", "Network Administration", "Backup Systems"],
    icon: Target,
    color: "text-orange-500"
  }
]

export function Experience() {
  const { actualTheme: theme } = useTheme()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={8} delay={0} intensity={30} className="absolute top-32 left-12">
          <div className="w-3 h-3 bg-indigo-500/10 rounded-full" />
        </Floating>
        <Floating duration={6} delay={2} intensity={25} className="absolute top-80 right-20">
          <div className="w-2 h-2 bg-green-500/10 rounded-full" />
        </Floating>
        <Floating duration={7} delay={4} intensity={35} className="absolute bottom-56 left-1/4">
          <div className="w-1 h-1 bg-blue-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>          <Magnetic strength={0.1}>
            <PageHeader
              icon={Briefcase}
              title="Professional Experience"
              description="A journey through leadership, innovation, and technical excellence across diverse industries and challenging projects."
              badges={[
                { text: "8+ Years Experience", variant: "default" },
                { text: "Leadership Roles", variant: "success" },
                { text: "Multi-Industry", variant: "secondary" }
              ]}
            />
          </Magnetic>

          {/* Experience Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <Magnetic key={index} strength={0.08}>
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Timeline Line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                    )}
                    
                    <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className={cn(
                              "p-3 rounded-xl",
                              "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                              "group-hover:from-indigo-50 group-hover:to-purple-50",
                              "dark:group-hover:from-indigo-900/30 dark:group-hover:to-purple-900/30",
                              "transition-all duration-300 shadow-lg group-hover:shadow-xl"
                            )}>
                              <Icon className={cn("w-6 h-6", exp.color)} weight="duotone" />
                            </div>
                          <div className="flex-1">
                            <h3 className={cn(
                              "text-xl font-bold mb-1",
                              tokens[theme].text.primary
                            )}>
                              {exp.title}
                            </h3>
                            <p className={cn(
                              "text-lg font-semibold mb-2",
                              tokens[theme].text.brand
                            )}>
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <div className={cn(
                                "flex items-center gap-1",
                                tokens[theme].text.muted
                              )}>
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                              <div className={cn(
                                "flex items-center gap-1",
                                tokens[theme].text.muted
                              )}>
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                              <Badge variant={exp.type === "Current Role" ? "success" : "secondary"}>
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className={cn("text-base", tokens[theme].text.secondary)}>
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className={cn(
                          "font-semibold mb-3 flex items-center gap-2",
                          tokens[theme].text.primary
                        )}>
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className={cn(
                                "flex items-start gap-2 text-sm",
                                tokens[theme].text.secondary
                              )}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className={cn(
                          "font-semibold mb-3",
                          tokens[theme].text.primary
                        )}>
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>                    </CardContent>
                  </Card>
                </motion.div>
                </Magnetic>
              )
            })}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <Card className={cn("p-8", tokens[theme].background.brandSubtle)}>
              <CardContent>
                <h3 className={cn(
                  "text-2xl font-bold text-center mb-8",
                  tokens[theme].text.primary
                )}>
                  Career Impact
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.brand)}>
                      $2M+
                    </div>
                    <div className={cn("text-sm", tokens[theme].text.muted)}>
                      Cost Savings
                    </div>
                  </div>
                  <div>
                    <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.brand)}>
                      99.99%
                    </div>
                    <div className={cn("text-sm", tokens[theme].text.muted)}>
                      System Uptime
                    </div>
                  </div>
                  <div>
                    <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.brand)}>
                      1000+
                    </div>
                    <div className={cn("text-sm", tokens[theme].text.muted)}>
                      IoT Devices
                    </div>
                  </div>
                  <div>
                    <div className={cn("text-3xl font-bold mb-2", tokens[theme].text.brand)}>
                      15+
                    </div>
                    <div className={cn("text-sm", tokens[theme].text.muted)}>
                      Team Members
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
