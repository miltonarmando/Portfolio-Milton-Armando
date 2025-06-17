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
import { 
  Article, 
  Calendar, 
  Clock,
  ArrowRight,  Tag,
  Radio,
  Globe,
  Brain,
  Wrench
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

const blogPosts = [
  {
    title: "MQTT in Industrial IoT: Lessons from Railway Systems",
    excerpt: "Deep dive into implementing MQTT protocol for large-scale industrial applications, with real-world examples from railway communication systems.",
    content: "Learn how MQTT's lightweight messaging protocol enables efficient communication between thousands of IoT devices across 900km of railway infrastructure...",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["MQTT", "Industrial IoT", "Railway", "Communication"],
    icon: Radio,
    color: "text-blue-500",
    status: "published"
  },
  {
    title: "Satellite vs TETRA: Choosing the Right Communication for Real-Time Systems",
    excerpt: "Comparative analysis of satellite and TETRA communication systems for mission-critical industrial applications.",
    content: "When designing communication systems for remote industrial operations, choosing between satellite and TETRA networks requires careful consideration...",
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["Satellite", "TETRA", "Communication", "Real-time Systems"],
    icon: Globe,
    color: "text-green-500",
    status: "published"
  },
  {
    title: "Building AI-Powered Productivity Tools: From Concept to 10k+ Daily Users",
    excerpt: "A complete guide to developing and scaling AI-integrated productivity applications with practical insights from a real project.",
    content: "Discover the complete journey of building an AI-powered productivity platform that now serves thousands of users daily...",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["AI", "Productivity", "OpenAI", "React", "Flutter"],
    icon: Brain,
    color: "text-purple-500",
    status: "published"
  },
  {
    title: "Predictive Maintenance with Machine Learning: $2M+ in Savings",
    excerpt: "How we implemented ML-based predictive maintenance for railway equipment, achieving 92% prediction accuracy and massive cost savings.",
    content: "Implementing predictive maintenance using machine learning transformed our approach to equipment management...",
    date: "2023-12-28",
    readTime: "15 min read",
    tags: ["Machine Learning", "Predictive Maintenance", "Python", "TensorFlow"],
    icon: Wrench,
    color: "text-orange-500",
    status: "published"
  }
]

const upcomingPosts = [
  {
    title: "Zero Trust Architecture in Industrial Networks",
    description: "Implementing modern security principles in traditional industrial environments.",
    estimatedDate: "Coming Soon",
    tags: ["Security", "Zero Trust", "Industrial"]
  },
  {
    title: "Edge Computing for Real-Time Decision Making",
    description: "Optimizing edge computing deployments for sub-second industrial responses.",
    estimatedDate: "Coming Soon", 
    tags: ["Edge Computing", "Real-time", "IoT"]
  },
  {
    title: "Building Scalable Data Pipelines for 1TB+ Daily Processing",
    description: "Architecture patterns and lessons learned from processing massive industrial datasets.",
    estimatedDate: "Coming Soon",
    tags: ["Data Engineering", "BigQuery", "Scalability"]
  }
]

export function Blog() {
  const { actualTheme: theme } = useTheme()

  return (
    <PageWrapper>
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Floating duration={8} delay={0} intensity={25} className="absolute top-40 left-10">
          <div className="w-3 h-3 bg-orange-500/10 rounded-full" />
        </Floating>
        <Floating duration={6} delay={3} intensity={20} className="absolute top-80 right-16">
          <div className="w-2 h-2 bg-blue-500/10 rounded-full" />
        </Floating>
        <Floating duration={7} delay={1.5} intensity={30} className="absolute bottom-60 left-1/3">
          <div className="w-1 h-1 bg-purple-500/10 rounded-full" />
        </Floating>
      </div>

      <div className={compositions.layout.section}>
        <div className={compositions.layout.container}>
          <Magnetic strength={0.1}>
            <PageHeader 
              icon={Article}
              title="Technical Blog"
              description="Insights, tutorials, and real-world experiences from building industrial IoT systems, AI applications, and modern development practices."
              badges={[
                { text: "Industrial IoT", variant: "default" },
                { text: "AI/ML Insights", variant: "success" },
                { text: "Real-world Examples", variant: "secondary" }
              ]}
            />
          </Magnetic>

          {/* Featured Posts */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h2 className={cn(
              "text-2xl font-bold mb-8",
              tokens[theme].text.primary
            )}>
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => {
                const Icon = post.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start gap-4 mb-4">
                          <div className={cn(
                            "p-3 rounded-xl group-hover:scale-110 transition-transform",
                            tokens[theme].background.brandSubtle
                          )}>
                            <Icon className={cn("w-6 h-6", post.color)} weight="duotone" />
                          </div>
                          <div className="flex-1">
                            <h3 className={cn(
                              "text-lg font-bold mb-2 group-hover:text-primary transition-colors",
                              tokens[theme].text.primary
                            )}>
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm mb-3">
                              <div className={cn(
                                "flex items-center gap-1",
                                tokens[theme].text.muted
                              )}>
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                              <div className={cn(
                                "flex items-center gap-1",
                                tokens[theme].text.muted
                              )}>
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className={cn("text-sm leading-relaxed", tokens[theme].text.secondary)}>
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-4">
                          <Button variant="ghost" className="group/btn">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Upcoming Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className={cn(
              "text-2xl font-bold mb-8",
              tokens[theme].text.primary
            )}>
              Coming Soon
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingPosts.map((post, index) => (
                <Card key={index} className={cn("p-6", tokens[theme].background.secondary)}>
                  <CardContent>
                    <h3 className={cn(
                      "text-lg font-semibold mb-3",
                      tokens[theme].text.primary
                    )}>
                      {post.title}
                    </h3>
                    <p className={cn("text-sm mb-4", tokens[theme].text.secondary)}>
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className={cn("text-xs", tokens[theme].text.muted)}>
                      {post.estimatedDate}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className={cn("p-8 text-center", tokens[theme].background.brandSubtle)}>
              <CardContent>
                <Article className={cn("w-12 h-12 mx-auto mb-6", tokens[theme].icon.brand)} weight="duotone" />
                <h3 className={cn(
                  "text-2xl font-bold mb-4",
                  tokens[theme].text.primary
                )}>
                  Stay Updated
                </h3>
                <p className={cn(
                  "text-lg mb-6 max-w-2xl mx-auto",
                  tokens[theme].text.secondary
                )}>
                  Get notified when new technical articles are published. Deep dives into industrial IoT, 
                  AI implementation, and real-world development experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      "flex-1 px-4 py-2 rounded-lg border",
                      "focus:ring-2 focus:ring-primary focus:border-primary",
                      "transition-colors duration-200",
                      tokens[theme].background.primary,
                      tokens[theme].border.default,
                      tokens[theme].text.primary
                    )}
                  />
                  <Button className="sm:w-auto">
                    Subscribe
                  </Button>
                </div>
                <p className={cn("text-xs mt-3", tokens[theme].text.muted)}>
                  No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
