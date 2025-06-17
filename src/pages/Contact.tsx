import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { PageWrapper } from '@/components/common/PageWrapper'
import { PageHeader } from '@/components/common/PageHeader'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Magnetic, Floating } from '@/components/ui/AdvancedMotion'
import { tokens, compositions } from '@/components/ui/theme'
import { cn } from '@/utils'
import { 
  Envelope, 
  LinkedinLogo, 
  GithubLogo,
  Phone,
  MapPin,
  PaperPlaneTilt,
  User,
  ChatCircle
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

const contactInfo = [
  {
    icon: Envelope,
    label: "Email",
    value: "miltonarmando@outlook.com",
    href: "mailto:miltonarmando@outlook.com",
    color: "text-red-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+258 86 845 2953",
    href: "tel:+258868452953",
    color: "text-green-500"
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "linkedin.com/in/marmando",
    href: "https://www.linkedin.com/in/marmando",
    color: "text-blue-500"
  },
  {
    icon: GithubLogo,
    label: "GitHub",
    value: "github.com/miltonarmando",
    href: "https://github.com/miltonarmando",
    color: "text-gray-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Moçambique",
    href: null,
    color: "text-purple-500"
  }
]

export function Contact() {
  const { actualTheme: theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', formData)
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can use toast here)
    alert('Message sent successfully! I\'ll get back to you soon.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={9} delay={0} intensity={25} className="absolute top-44 right-12">
          <div className="w-3 h-3 bg-cyan-500/10 rounded-full" />
        </Floating>
        <Floating duration={7} delay={2} intensity={20} className="absolute top-96 left-20">
          <div className="w-2 h-2 bg-pink-500/10 rounded-full" />
        </Floating>
        <Floating duration={8} delay={4} intensity={30} className="absolute bottom-52 right-1/4">
          <div className="w-1 h-1 bg-yellow-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <Magnetic strength={0.1}>
            <PageHeader 
              icon={ChatCircle}
              title="Get in Touch"
              description="Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions."
              badges={[
                { text: "Remote Available", variant: "success" },
                { text: "Freelance Projects", variant: "default" },
                { text: "Quick Response", variant: "secondary" }
              ]}
            />
          </Magnetic>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h2 className={cn(
                  "text-2xl font-bold mb-6",
                  tokens[theme].text.primary
                )}>
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon
                    return (
                      <motion.div key={index} variants={itemVariants}>
                        <Card className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className={cn(
                                "p-3 rounded-xl",
                                tokens[theme].background.brandSubtle
                              )}>
                                <Icon className={cn("w-5 h-5", contact.color)} weight="duotone" />
                              </div>
                              <div className="flex-1">
                                <h3 className={cn(
                                  "font-semibold mb-1",
                                  tokens[theme].text.primary
                                )}>
                                  {contact.label}
                                </h3>
                                {contact.href ? (
                                  <a 
                                    href={contact.href}
                                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className={cn(
                                      "text-sm hover:underline",
                                      tokens[theme].text.link
                                    )}
                                  >
                                    {contact.value}
                                  </a>
                                ) : (
                                  <span className={cn("text-sm", tokens[theme].text.secondary)}>
                                    {contact.value}
                                  </span>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Availability */}
              <motion.div variants={itemVariants}>
                <Card className={cn("p-6", tokens[theme].background.brandSubtle)}>
                  <CardContent>
                    <h3 className={cn(
                      "text-lg font-semibold mb-4",
                      tokens[theme].text.primary
                    )}>
                      Availability & Services
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={cn("text-sm", tokens[theme].text.secondary)}>
                          Remote Work
                        </span>
                        <Badge variant="success">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={cn("text-sm", tokens[theme].text.secondary)}>
                          Freelance Projects
                        </span>
                        <Badge variant="success">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={cn("text-sm", tokens[theme].text.secondary)}>
                          Consulting
                        </span>
                        <Badge variant="default">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={cn("text-sm", tokens[theme].text.secondary)}>
                          Response Time
                        </span>
                        <Badge variant="secondary">Within 24h</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-fit">
                <CardHeader>
                  <h2 className={cn(
                    "text-2xl font-bold flex items-center gap-3",
                    tokens[theme].text.primary
                  )}>
                    <PaperPlaneTilt className="w-6 h-6 text-primary" weight="duotone" />
                    Send a Message
                  </h2>
                  <p className={cn("text-sm", tokens[theme].text.secondary)}>
                    I'll get back to you as soon as possible.
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className={cn(
                        "block text-sm font-medium mb-2",
                        tokens[theme].text.primary
                      )}>
                        <User className="w-4 h-4 inline mr-2" />
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className={cn(
                        "block text-sm font-medium mb-2",
                        tokens[theme].text.primary
                      )}>
                        <Envelope className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className={cn(
                        "block text-sm font-medium mb-2",
                        tokens[theme].text.primary
                      )}>
                        <ChatCircle className="w-4 h-4 inline mr-2" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, requirements, or just say hello!"
                        required
                        rows={6}
                        className={cn(
                          "w-full px-3 py-2 rounded-lg border resize-none",
                          "focus:ring-2 focus:ring-primary focus:border-primary",
                          "transition-colors duration-200",
                          tokens[theme].background.primary,
                          tokens[theme].border.default,
                          tokens[theme].text.primary
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt className="w-4 h-4 mr-2" weight="duotone" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className={cn("p-8", tokens[theme].background.brandSubtle)}>
              <CardContent>
                <h3 className={cn(
                  "text-2xl font-bold mb-4",
                  tokens[theme].text.primary
                )}>
                  Let's Build Something Amazing Together
                </h3>
                <p className={cn(
                  "text-lg mb-6 max-w-2xl mx-auto",
                  tokens[theme].text.secondary
                )}>
                  Whether you need a full-stack developer, AI specialist, or technical consultant, 
                  I'm here to help turn your vision into reality.
                </p>                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://www.linkedin.com/in/marmando" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto">
                      <LinkedinLogo className="w-5 h-5 mr-2" weight="duotone" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/miltonarmando" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <GithubLogo className="w-5 h-5 mr-2" weight="duotone" />
                      View GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
