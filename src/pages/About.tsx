import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { useAnimateOnInView } from '@/hooks/useAdvancedIntersectionObserver'
import { PageWrapper } from '@/components/common/PageWrapper'
import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Magnetic, Floating } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import {  User, 
  Train, 
  Brain, 
  Globe, 
  Quotes,
  MapPin,
  Translate,
  GraduationCap,
  Lightbulb,
  Sparkle
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

const expertise = [
  {
    category: "Railway & Industrial IoT",
    items: [
      "Locomotive Communication Systems",
      "Satellite & TETRA Networks", 
      "SCADA Systems",
      "Industrial Automation",
      "Edge Computing"
    ],
    icon: Train,
    color: "text-blue-500"
  },
  {
    category: "Software Development",
    items: [
      "Python, JavaScript, TypeScript",
      "React, Flutter, FastAPI",
      "MQTT, RabbitMQ, WebSockets",
      "Docker, Git, CI/CD",
      "MySQL, BigQuery, MongoDB"
    ],
    icon: Brain,
    color: "text-purple-500"
  },
  {
    category: "AI/ML & Data",
    items: [
      "TensorFlow, PyTorch",
      "OpenAI API Integration",
      "Predictive Maintenance",
      "Data Pipeline Architecture",
      "Real-time Analytics"
    ],
    icon: Lightbulb,
    color: "text-amber-500"
  }
]

export function About() {
  const { actualTheme: theme } = useTheme()
  const { ref: expertiseRef, inView: expertiseInView } = useAnimateOnInView()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={8} delay={0} intensity={25} className="absolute top-32 left-16">
          <div className="w-3 h-3 bg-blue-500/10 rounded-full" />
        </Floating>
        <Floating duration={6} delay={3} intensity={20} className="absolute top-64 right-24">
          <div className="w-2 h-2 bg-purple-500/10 rounded-full" />
        </Floating>
        <Floating duration={7} delay={1.5} intensity={30} className="absolute bottom-48 left-1/3">
          <div className="w-1 h-1 bg-green-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={cn(compositions.layout.container, compositions.layout.section)}>
        <Magnetic strength={0.1}>
          <PageHeader 
            icon={User}
            title="About Milton Armando"
            description="Project Manager and Full-Stack Developer from Moçambique, specialized in locomotive data systems and AI-powered mobile/web applications."
          />
        </Magnetic>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Personal Info Card */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">              <CardHeader>
                <h2 className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold font-touch-friendly", 
                  tokens[theme].text.primary
                )}>
                  Background
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className={cn("w-5 h-5", tokens[theme].icon.brand)} />
                      <div>                        <div className={cn("font-medium text-sm sm:text-base font-touch-friendly", tokens[theme].text.primary)}>
                          Location
                        </div>
                        <div className={cn("text-xs sm:text-sm leading-mobile-friendly", tokens[theme].text.muted)}>
                          Moçambique
                        </div>
                      </div>
                    </div>                      <div className="flex items-center gap-3">
                      <Translate className={cn("w-5 h-5", tokens[theme].icon.brand)} />
                      <div>
                        <div className={cn("font-medium text-sm sm:text-base font-touch-friendly", tokens[theme].text.primary)}>
                          Languages
                        </div>
                        <div className={cn("text-xs sm:text-sm leading-mobile-friendly", tokens[theme].text.muted)}>
                          Portuguese (Native), English (Intermediate)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className={cn("w-5 h-5", tokens[theme].icon.brand)} />
                      <div>
                        <div className={cn("font-medium text-sm sm:text-base font-touch-friendly", tokens[theme].text.primary)}>
                          Availability
                        </div>
                        <div className={cn("text-xs sm:text-sm leading-mobile-friendly", tokens[theme].text.muted)}>
                          Remote Work & Freelance Opportunities
                        </div>
                      </div>
                    </div>
                  </div>                  <div className="space-y-4">
                    <div className={cn("text-sm sm:text-base leading-mobile-friendly font-touch-friendly", tokens[theme].text.secondary)}>
                      <strong>Core Technologies:</strong> Python, MQTT, RabbitMQ, MySQL, Flutter, Firebase, Docker, Git
                    </div>
                    <div className={cn("text-sm sm:text-base leading-mobile-friendly font-touch-friendly", tokens[theme].text.secondary)}>
                      <strong>Specializations:</strong> AI/ML, DevOps, Cybersecurity, Industrial IoT
                    </div>
                    <div className={cn("text-sm sm:text-base leading-mobile-friendly font-touch-friendly", tokens[theme].text.secondary)}>
                      <strong>Industries:</strong> Railway Systems, Industrial Automation, Edge Computing
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>          {/* Expertise Areas */}
          <motion.div 
            ref={expertiseRef}
            variants={itemVariants}
            initial="hidden"
            animate={expertiseInView ? "visible" : "hidden"}
          >            <h2 className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-touch-friendly", 
              tokens[theme].text.primary,
              "mb-8 text-center"
            )}>
              Areas of Expertise
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {expertise.map((area, index) => (
                <Magnetic key={area.category} strength={0.15}>
                  <motion.div
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                            "group-hover:from-indigo-50 group-hover:to-purple-50",
                            "dark:group-hover:from-indigo-900/20 dark:group-hover:to-purple-900/20",
                            "transition-all duration-300"
                          )}>
                            <area.icon className={cn("w-6 h-6", area.color)} weight="duotone" />
                          </div>
                          <h3 className={cn(
                            compositions.text.title,
                            tokens[theme].text.primary
                          )}>
                            {area.category}
                          </h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {area.items.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              className={cn(
                                "text-sm flex items-start gap-2",
                                tokens[theme].text.secondary
                              )}
                            >
                              <Sparkle className="w-3 h-3 mt-1 text-indigo-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Learning Focus */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className={cn("w-8 h-8", tokens[theme].icon.brand)} weight="duotone" />
                  <h2 className={cn(compositions.text.heading, tokens[theme].text.primary)}>
                    Current Learning Focus
                  </h2>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="outline" className="justify-center py-2">
                    Blockchain
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    DevOps
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    Cybersecurity
                  </Badge>
                  <Badge variant="outline" className="justify-center py-2">
                    AI for Ops
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quote */}
          <motion.div variants={itemVariants}>
            <Card className={cn("p-8 text-center", tokens[theme].background.brandSubtle)}>              <CardContent>
                <Quotes className={cn("w-12 h-12 mx-auto mb-6", tokens[theme].icon.brand)} weight="duotone" />
                <blockquote className={cn(
                  "text-2xl font-medium italic mb-4",
                  tokens[theme].text.primary
                )}>
                  "Milton isn't just riding the tech wave — he's laying the tracks."
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
