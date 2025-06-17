import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { PageWrapper } from '@/components/common/PageWrapper'
import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Magnetic, Floating } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import {   Cpu,   Code, 
  Brain, 
  CloudArrowUp,
  Database,
  ChartLineUp,
  Gear,
  Users
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

const skillCategories = [
  {
    title: "Programming & Development",
    icon: Code,
    color: "text-blue-500",
    skills: [
      { name: "Python", level: 95, category: "Languages" },
      { name: "JavaScript", level: 90, category: "Languages" },
      { name: "TypeScript", level: 88, category: "Languages" },
      { name: "Dart", level: 85, category: "Languages" },
      { name: "SQL", level: 90, category: "Languages" },
      { name: "Rust", level: 70, category: "Languages" },
      { name: "C/C++", level: 75, category: "Languages" },
      { name: "React", level: 92, category: "Frontend" },
      { name: "Flutter", level: 90, category: "Mobile" },
      { name: "HTML5/CSS3", level: 95, category: "Frontend" },
      { name: "TailwindCSS", level: 92, category: "Frontend" },
      { name: "Node.js", level: 88, category: "Backend" },
      { name: "FastAPI", level: 90, category: "Backend" },
      { name: "Flask/Django", level: 85, category: "Backend" }
    ]
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    color: "text-purple-500",
    skills: [
      { name: "TensorFlow", level: 88, category: "ML Frameworks" },
      { name: "PyTorch", level: 82, category: "ML Frameworks" },
      { name: "Scikit-learn", level: 90, category: "ML Frameworks" },
      { name: "OpenAI API", level: 92, category: "AI Integration" },
      { name: "Pandas", level: 95, category: "Data Processing" },
      { name: "NumPy", level: 93, category: "Data Processing" },
      { name: "BigQuery", level: 88, category: "Big Data" },
      { name: "Predictive Analytics", level: 85, category: "ML Applications" }
    ]
  },
  {
    title: "Infrastructure & DevOps",
    icon: CloudArrowUp,
    color: "text-green-500",
    skills: [
      { name: "AWS", level: 88, category: "Cloud Platforms" },
      { name: "Azure", level: 82, category: "Cloud Platforms" },
      { name: "Google Cloud", level: 80, category: "Cloud Platforms" },
      { name: "Docker", level: 90, category: "Containerization" },
      { name: "Kubernetes", level: 75, category: "Orchestration" },
      { name: "Git/GitHub", level: 95, category: "Version Control" },
      { name: "CI/CD", level: 85, category: "Automation" },
      { name: "Prometheus", level: 80, category: "Monitoring" },
      { name: "Grafana", level: 85, category: "Monitoring" }
    ]
  },
  {
    title: "Industrial & IoT",
    icon: Gear,
    color: "text-orange-500",
    skills: [
      { name: "MQTT", level: 95, category: "Protocols" },
      { name: "RTPS", level: 82, category: "Protocols" },
      { name: "TCP/IP", level: 90, category: "Networking" },
      { name: "SCADA", level: 88, category: "Industrial Systems" },
      { name: "Industrial IoT", level: 90, category: "IoT Systems" },
      { name: "TETRA", level: 85, category: "Communications" },
      { name: "Satellite Networks", level: 80, category: "Communications" }
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "text-cyan-500",
    skills: [
      { name: "MySQL", level: 92, category: "SQL Databases" },
      { name: "SQLite", level: 90, category: "SQL Databases" },
      { name: "MongoDB", level: 80, category: "NoSQL Databases" },
      { name: "Firestore", level: 85, category: "NoSQL Databases" },
      { name: "BigQuery", level: 88, category: "Data Warehousing" },
      { name: "Redis", level: 75, category: "Caching" }
    ]
  },
  {
    title: "Leadership & Management",
    icon: Users,
    color: "text-rose-500",
    skills: [
      { name: "Project Management", level: 92, category: "Management" },
      { name: "Agile/Scrum", level: 88, category: "Methodologies" },
      { name: "Team Leadership", level: 90, category: "Leadership" },
      { name: "Technical Documentation", level: 95, category: "Communication" },
      { name: "Security Implementation", level: 85, category: "Security" },
      { name: "Training & Development", level: 88, category: "Development" }
    ]
  }
]

export function Skills() {
  const { actualTheme: theme } = useTheme()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={7} delay={0} intensity={25} className="absolute top-28 right-16">
          <div className="w-3 h-3 bg-blue-500/10 rounded-full" />
        </Floating>
        <Floating duration={9} delay={3} intensity={30} className="absolute top-64 left-20">
          <div className="w-2 h-2 bg-purple-500/10 rounded-full" />
        </Floating>
        <Floating duration={6} delay={1.5} intensity={20} className="absolute bottom-40 right-1/3">
          <div className="w-1 h-1 bg-green-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={cn(compositions.layout.container, compositions.layout.section)}>
        <Magnetic strength={0.1}>
          <PageHeader 
            icon={Cpu}
            title="Technical Skills"
            description="A comprehensive overview of my technical expertise across programming languages, frameworks, tools, and methodologies."
            badges={[
              { text: "8+ Years Experience", variant: "outline" },
              { text: "60+ Technologies", variant: "outline" },
              { text: "Full-Stack", variant: "success" }
            ]}
          />
        </Magnetic>        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <Magnetic key={category.title} strength={0.08}>
              <motion.div
                variants={itemVariants}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                        "hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30",
                        "transition-all duration-300 shadow-lg hover:shadow-xl"
                      )}>
                        <category.icon 
                          className={cn("w-6 h-6", category.color)} 
                          weight="duotone"
                        />
                      </div>
                      <h2 className={cn(
                        compositions.text.heading,
                        tokens[theme].text.primary
                      )}>
                        {category.title}
                      </h2>
                    </div>
                  </CardHeader>

                <CardContent>
                  <div className="grid gap-6">
                    {/* Group skills by subcategory */}
                    {Array.from(new Set(category.skills.map(skill => skill.category))).map(subCategory => (
                      <div key={subCategory}>
                        <h3 className={cn(
                          "text-sm font-semibold mb-4",
                          tokens[theme].text.secondary
                        )}>
                          {subCategory}
                        </h3>
                        <div className="grid gap-4">
                          {category.skills
                            .filter(skill => skill.category === subCategory)
                            .map((skill, skillIndex) => (
                            <div key={skill.name} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className={cn(
                                  "font-medium",
                                  tokens[theme].text.primary
                                )}>
                                  {skill.name}
                                </span>
                                <Badge 
                                  variant={skill.level >= 90 ? "success" : skill.level >= 80 ? "default" : "outline"}
                                  size="sm"
                                >
                                  {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                                </Badge>
                              </div>
                              <div className={cn(
                                "w-full bg-gray-200 rounded-full h-2",
                                "dark:bg-gray-700"
                              )}>
                                <motion.div
                                  className={cn(
                                    "h-2 rounded-full",
                                    skill.level >= 90 ? "bg-green-500" :
                                    skill.level >= 80 ? "bg-blue-500" :
                                    "bg-yellow-500"
                                  )}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ 
                                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                    duration: 0.8,
                                    ease: "easeOut"
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>                </CardContent>
              </Card>
            </motion.div>
            </Magnetic>
          ))}
        </motion.div>        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <Magnetic strength={0.05}>
            <Card className={cn("p-8", tokens[theme].background.brandSubtle, "hover:shadow-2xl transition-all duration-500")}>
              <CardContent className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl" />
                  <div className="relative">
                    <ChartLineUp className={cn("w-12 h-12 mx-auto mb-4", tokens[theme].icon.brand)} weight="duotone" />
                    <h3 className={cn(
                      compositions.text.heading,
                      tokens[theme].text.primary,
                      "mb-4"
                    )}>
                      Continuous Learning & Growth
                    </h3>
                    <p className={cn(
                      compositions.text.body,
                      tokens[theme].text.secondary,
                      "mb-6 max-w-3xl mx-auto"
                    )}>
                      Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
                      Currently focusing on advanced AI/ML techniques, cloud-native architectures, and emerging cybersecurity frameworks.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className={cn("text-2xl font-bold", tokens[theme].text.brand)}>60+</div>
                        <div className={cn("text-sm", tokens[theme].text.muted)}>Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className={cn("text-2xl font-bold", tokens[theme].text.brand)}>8+</div>
                        <div className={cn("text-sm", tokens[theme].text.muted)}>Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className={cn("text-2xl font-bold", tokens[theme].text.brand)}>60+</div>
                        <div className={cn("text-sm", tokens[theme].text.muted)}>Certifications</div>
                      </div>
                      <div className="text-center">
                        <div className={cn("text-2xl font-bold", tokens[theme].text.brand)}>100%</div>
                        <div className={cn("text-sm", tokens[theme].text.muted)}>Commitment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Magnetic>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
