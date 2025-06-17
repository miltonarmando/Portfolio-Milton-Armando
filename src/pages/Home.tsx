import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { useAnimateOnInView } from '@/hooks/useAdvancedIntersectionObserver'
import { PageWrapper } from '@/components/common/PageWrapper'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { Magnetic, Floating, Pulse } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import { 
  RocketLaunch, 
  Train, 
  Brain, 
  LinkedinLogo, 
  GithubLogo, 
  EnvelopeSimple,
  MapPin,
  Globe,
  Cpu,
  CloudArrowUp,
  ShieldCheck,
  Lightning,
  Sparkle
} from '@phosphor-icons/react'

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const skillIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

const skills = [
  { icon: Brain, name: "AI/ML", color: "text-purple-500" },
  { icon: Train, name: "Railway IoT", color: "text-blue-500" },
  { icon: Cpu, name: "DevOps", color: "text-green-500" },
  { icon: CloudArrowUp, name: "Cloud", color: "text-sky-500" },
  { icon: ShieldCheck, name: "Cybersecurity", color: "text-red-500" },
  { icon: Lightning, name: "Automation", color: "text-yellow-500" }
]

export function Home() {
  const { actualTheme: theme } = useTheme()
  const { ref: skillsRef, inView: skillsInView } = useAnimateOnInView()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={6} delay={0} intensity={20} className="absolute top-20 left-10">
          <div className="w-2 h-2 bg-blue-500/20 rounded-full" />
        </Floating>
        <Floating duration={8} delay={2} intensity={30} className="absolute top-40 right-20">
          <div className="w-3 h-3 bg-purple-500/20 rounded-full" />
        </Floating>
        <Floating duration={5} delay={1} intensity={15} className="absolute bottom-40 left-1/4">
          <div className="w-1 h-1 bg-green-500/20 rounded-full" />
        </Floating>
      </div>      <div className={cn(compositions.layout.container, "py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40")}>
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Avatar and Status */}
          <motion.div 
            variants={heroVariants}
            className="relative inline-block mb-6 sm:mb-8 md:mb-10"
          >
            <Pulse scale={[1, 1.02]} duration={3}>
              <div className={cn(
                "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full mx-auto relative overflow-hidden",
                "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1",
                "shadow-xl sm:shadow-2xl shadow-indigo-500/25"
              )}>                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">                  <img 
                    src="/assets/img/profile.jpg" 
                    alt="Milton Armando" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </Pulse>
            
            {/* Status indicator */}
            <motion.div
              className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 flex items-center gap-1 sm:gap-2 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
              <span className="hidden xs:inline">Available for Projects</span>
              <span className="xs:hidden">Available</span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={heroVariants}
            className={cn(
              "text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8",
              "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent",
              "leading-tight tracking-tight px-4 sm:px-0"
            )}
          >
            <span className="block sm:inline">Milton </span>
            <span className="block sm:inline sm:ml-2"> Armando</span>
          </motion.h1>          
          {/* Subtitle with animated typing effect */}
          <motion.div 
            variants={heroVariants}
            className="mb-6 sm:mb-8 md:mb-10"
          >
            <h2 className={cn(
              "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6",
              tokens[theme].text.primary,
              "px-4 sm:px-0"
            )}>
              <span className="block xs:inline">Full-Stack Developer </span>
                <span className="xs:hidden"> & </span>
                <span className="hidden xs:inline"> & </span>
              <span className="block xs:inline">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  AI Specialist
                </span>
              </span>
            </h2>
            <p className={cn(
              "text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed",
              tokens[theme].text.secondary,
              "px-4 sm:px-6 md:px-8 lg:px-0"
            )}>
              Transforming complex industrial challenges into intelligent, scalable solutions through 
              cutting-edge AI/ML technologies and robust full-stack development.
            </p>
          </motion.div>

          {/* Location and experience badges */}
          <motion.div 
            variants={heroVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-4"
          >
            <Badge variant="outline" className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">Moçambique</span>
              <span className="xs:hidden">MZ</span>
            </Badge>
            <Badge variant="outline" className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">8+ Years Experience</span>
              <span className="sm:hidden">8+ Years</span>
            </Badge>
            <Badge variant="success" className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base">
              <Sparkle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">60+ Certifications</span>
              <span className="xs:hidden">60+ Certs</span>
            </Badge>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={heroVariants}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-4"
          >
            <Magnetic strength={0.2}>
              <Button 
                size="lg" 
                className="w-full xs:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 touch-manipulation"
              >
                <RocketLaunch className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">View Projects</span>
                <span className="sm:hidden">Projects</span>
              </Button>
            </Magnetic>
            
            <Magnetic strength={0.2}>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full xs:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 touch-manipulation"
              >
                <EnvelopeSimple className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Get In Touch</span>
                <span className="sm:hidden">Contact</span>
              </Button>
            </Magnetic>
          </motion.div>          {/* Social Links */}
          <motion.div 
            variants={heroVariants}
            className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-16 sm:mb-20 md:mb-24 px-4"
          >
            {[
              { icon: LinkedinLogo, href: "https://linkedin.com/in/marmando", label: "LinkedIn" },
              { icon: GithubLogo, href: "https://github.com/milton-armando", label: "GitHub" },
              { icon: EnvelopeSimple, href: "mailto:miltonarmando@outlook.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <Magnetic key={label} strength={0.3}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center",
                    "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
                    "hover:from-indigo-500 hover:to-purple-600 hover:text-white",
                    "transition-all duration-300 transform hover:scale-110 active:scale-95",
                    "shadow-lg hover:shadow-xl touch-manipulation",
                    tokens[theme].text.secondary
                  )}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" weight="duotone" />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills showcase */}
        <motion.div 
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16 sm:mb-20 md:mb-24 px-4 sm:px-6 lg:px-8"
        >
          <motion.h3 
            variants={heroVariants}
            className={cn(
              "text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12",
              tokens[theme].text.primary
            )}
          >
            Core Expertise
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Magnetic key={skill.name} strength={0.2}>
                <motion.div
                  variants={skillIconVariants}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl text-center cursor-pointer",
                    "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                    "hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20",
                    "border border-gray-200 dark:border-gray-700",
                    "hover:border-indigo-300 dark:hover:border-indigo-600",
                    "transition-all duration-300 transform hover:scale-105 active:scale-95",
                    "shadow-md sm:shadow-lg hover:shadow-xl touch-manipulation"
                  )}
                >
                  <skill.icon 
                    className={cn("w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 sm:mb-3 transition-colors", skill.color)}
                    weight="duotone"
                  />
                  <span className={cn(
                    "text-xs sm:text-sm md:text-base font-medium block",
                    tokens[theme].text.primary
                  )}>
                    {skill.name}
                  </span>
                </motion.div>
              </Magnetic>
            ))}
          </div>
        </motion.div>
          {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 touch-manipulation">
              <CardContent>
                <div className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold mb-2",
                  tokens[theme].text.brand
                )}>
                  8+
                </div>
                <div className={cn(
                  "text-xs sm:text-sm md:text-base font-medium",
                  tokens[theme].text.muted
                )}>
                  <span className="hidden sm:inline">Years Experience</span>
                  <span className="sm:hidden">Years Exp.</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 touch-manipulation">
              <CardContent>
                <div className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold mb-2",
                  tokens[theme].text.brand
                )}>
                  60+
                </div>
                <div className={cn(
                  "text-xs sm:text-sm md:text-base font-medium",
                  tokens[theme].text.muted
                )}>
                  Certifications
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 touch-manipulation col-span-1 sm:col-span-2 lg:col-span-1">
              <CardContent>
                <div className={cn(
                  "text-2xl sm:text-3xl md:text-4xl font-bold mb-2",
                  tokens[theme].text.brand
                )}>
                  $2M+
                </div>
                <div className={cn(
                  "text-xs sm:text-sm md:text-base font-medium",
                  tokens[theme].text.muted
                )}>
                  <span className="hidden sm:inline">Cost Savings Delivered</span>
                  <span className="sm:hidden">Cost Savings</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  )
}
