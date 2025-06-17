import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { PageWrapper } from '@/components/common/PageWrapper'
import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Magnetic, Floating } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import {   RocketLaunch, 
  Train, 
  Brain, 
  ChartLineUp,
  CloudArrowUp,
  Monitor,
  GithubLogo,
  Lightning,
  Database,
  ShieldCheck,
  Eye
} from '@phosphor-icons/react'

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

const projects = [
  {
    title: "Predictive Maintenance System for Railways",
    description: "Advanced ML-powered system for locomotive maintenance optimization with real-time monitoring and anomaly detection.",
    stack: ["Python", "TensorFlow", "BigQuery", "Flask", "Docker"],
    metrics: [
      "65% reduction in downtime",
      "99.9% anomaly detection accuracy",
      "$2M+ annual cost savings"
    ],
    features: [
      "ML models with 92% failure prediction accuracy",
      "Real-time monitoring of 500+ equipment units",
      "Automated maintenance scheduling"
    ],
    icon: Train,
    color: "text-blue-500",
    status: "Production"
  },
  {
    title: "Smart Productivity Platform",
    description: "AI-enhanced productivity platform with gamification, wearable integration, and advanced analytics.",
    stack: ["Flutter", "React", "FastAPI", "WebSocket", "AWS"],
    metrics: [
      "98% user satisfaction rate",
      "45% increase in engagement",
      "10k+ active users"
    ],
    features: [
      "Custom Pomodoro implementation",
      "Gamification system with rewards",
      "Wearable device integration",
      "Real-time analytics dashboard"
    ],
    icon: ChartLineUp,
    color: "text-green-500",
    status: "Production"
  },
  {
    title: "AI-Powered Book Summary Platform",
    description: "Scalable cloud platform for automated book summarization using GPT and custom text-to-speech.",
    stack: ["Python", "AWS ECS", "Lambda", "S3", "OpenAI API"],
    metrics: [
      "60% reduction in processing time",
      "10k+ daily requests",
      "99.5% uptime"
    ],
    features: [      "GPT-based text summarization",
      "Custom text-to-speech pipeline",
      "Scalable cloud infrastructure",
      "Multi-format support"
    ],
    icon: Brain,
    color: "text-purple-500",
    status: "Production"
  },
  {
    title: "Enterprise Monitoring System",
    description: "Comprehensive monitoring solution with sub-second alerting and advanced visualization.",
    stack: ["Python", "Prometheus", "Grafana", "Linux", "Docker"],
    metrics: [
      "70% reduction in response time",
      "99.9% system uptime",
      "Real-time alerting"
    ],
    features: [
      "Real-time application monitoring",
      "Sub-second alerting system",
      "Custom metric visualization",
      "Automated incident response"
    ],
    icon: Monitor,
    color: "text-orange-500",
    status: "Production"
  },
  {
    title: "Railway IoT Command Center",
    description: "Hybrid cloud infrastructure managing 1000+ IoT devices across 900km of railway network.",
    stack: ["MQTT", "SCADA", "AWS", "Azure", "TETRA", "Satellite"],
    metrics: [
      "99.99% system uptime",
      "Zero security breaches",
      "1000+ IoT devices managed"
    ],
    features: [
      "Hybrid cloud infrastructure",
      "900km track coverage",
      "Zero Trust security architecture",
      "Real-time communication systems"
    ],
    icon: CloudArrowUp,
    color: "text-sky-500",
    status: "Production"
  },
  {
    title: "Industrial Data Pipeline",
    description: "High-performance data processing system handling 1TB+ daily sensor data with automated analysis.",
    stack: ["Python", "BigQuery", "TensorFlow", "Apache Beam"],
    metrics: [
      "40% faster decision-making",
      "85% task automation",
      "1TB+ daily processing"
    ],
    features: [
      "Processing 1TB+ daily sensor data",
      "Automated analysis workflows",
      "Real-time decision support",
      "Predictive analytics engine"
    ],
    icon: Database,
    color: "text-indigo-500",
    status: "Production"
  }
]

export function Projects() {
  const { actualTheme: theme } = useTheme()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={9} delay={0} intensity={30} className="absolute top-24 right-12">
          <div className="w-4 h-4 bg-indigo-500/10 rounded-full" />
        </Floating>
        <Floating duration={7} delay={4} intensity={25} className="absolute top-72 left-16">
          <div className="w-2 h-2 bg-purple-500/10 rounded-full" />
        </Floating>
        <Floating duration={8} delay={2} intensity={35} className="absolute bottom-32 right-1/4">
          <div className="w-1 h-1 bg-blue-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={cn(compositions.layout.container, compositions.layout.section)}>
        <Magnetic strength={0.1}>
          <PageHeader 
            icon={RocketLaunch}
            title="Featured Projects"
            description="A showcase of innovative solutions in AI/ML, industrial IoT, and full-stack development that have delivered measurable business impact."
            badges={[
              { text: "6 Major Projects", variant: "outline" },
              { text: "$2M+ Savings", variant: "success" },
              { text: "Production Ready", variant: "secondary" }
            ]}
          />
        </Magnetic>        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <Magnetic key={project.title} strength={0.08}>
              <motion.div
                variants={itemVariants}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-indigo-200 dark:hover:border-indigo-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                          "group-hover:from-indigo-50 group-hover:to-purple-50",
                          "dark:group-hover:from-indigo-900/30 dark:group-hover:to-purple-900/30",
                          "transition-all duration-300 shadow-lg group-hover:shadow-xl"
                        )}>
                          <project.icon 
                            className={cn("w-6 h-6", project.color)} 
                            weight="duotone"
                          />
                        </div>
                        <div>                          <h3 className={cn(
                            "text-lg sm:text-xl md:text-2xl font-bold font-touch-friendly",
                            tokens[theme].text.primary,
                            "group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                          )}>
                            {project.title}
                          </h3>
                          <Badge variant="success" size="sm" className="mt-1">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <Magnetic strength={0.2}>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Magnetic>
                    </div>
                  </CardHeader>

                <CardContent className="space-y-6">                  <p className={cn(
                    "text-sm sm:text-base md:text-lg leading-mobile-friendly font-touch-friendly",
                    tokens[theme].text.secondary
                  )}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>                    <h4 className={cn(
                      "text-sm sm:text-base font-semibold mb-3 font-touch-friendly",
                      tokens[theme].text.primary
                    )}>
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>                    <h4 className={cn(
                      "text-sm sm:text-base font-semibold mb-3 font-touch-friendly",
                      tokens[theme].text.primary
                    )}>
                      Key Features
                    </h4>
                    <ul className="grid gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}                          className={cn(
                            "text-sm sm:text-base flex items-start gap-2 leading-mobile-friendly font-touch-friendly",
                            tokens[theme].text.secondary
                          )}
                        >
                          <Lightning className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div>                    <h4 className={cn(
                      "text-sm sm:text-base font-semibold mb-3 font-touch-friendly",
                      tokens[theme].text.primary
                    )}>
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div 
                          key={metricIndex}
                          className={cn(
                            "p-3 rounded-lg text-center",
                            tokens[theme].background.secondary
                          )}
                        >
                          <div className={cn(
                            "text-lg font-bold",
                            tokens[theme].text.brand
                          )}>
                            {metric.split(' ')[0]}
                          </div>
                          <div className={cn(
                            "text-xs",
                            tokens[theme].text.muted
                          )}>
                            {metric.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Magnetic strength={0.1}>
                      <Button variant="outline" size="sm" className="flex-1 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                        <Monitor className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Magnetic>
                    <Magnetic strength={0.1}>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <GithubLogo className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </Magnetic>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            </Magnetic>
          ))}
        </motion.div>        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-16 text-center"
        >
          <Magnetic strength={0.05}>
            <Card className={cn("p-8", tokens[theme].background.brandSubtle, "hover:shadow-2xl transition-all duration-500")}>
              <CardContent>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg blur-xl" />
                  <div className="relative">
                    <ShieldCheck className={cn("w-12 h-12 mx-auto mb-4", tokens[theme].icon.brand)} weight="duotone" />
                    <h3 className={cn(
                      compositions.text.heading,
                      tokens[theme].text.primary,
                      "mb-4"
                    )}>
                      Interested in a Custom Solution?
                    </h3>
                    <p className={cn(
                      compositions.text.body,
                      tokens[theme].text.secondary,
                      "mb-6 max-w-2xl mx-auto"
                    )}>
                      I specialize in building scalable, production-ready systems that solve real business problems. 
                      Let's discuss how I can help with your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Magnetic strength={0.15}>
                        <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                          Start a Project
                        </Button>
                      </Magnetic>
                      <Magnetic strength={0.15}>
                        <Button variant="outline" size="lg" className="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                          Schedule Consultation
                        </Button>
                      </Magnetic>
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
