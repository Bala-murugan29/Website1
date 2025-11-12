import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      // Validate configuration early and show helpful message if missing
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS configuration missing', { serviceId, templateId, publicKey });
        toast.error("Email service is not configured. Please set EmailJS keys in your environment.");
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'r.balamurugan.dev@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
                 value: "r.balamurugan.dev@gmail.com",
                 href: "mailto:r.balamurugan.dev@gmail.com"
    },
    
    {
      icon: MapPin,
      label: "Location",
      value: "Villupuram ,Tamil Nadu,India",
      
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="glass-card p-4 md:p-8 hover:shadow-elevated transition-all duration-300">
              <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="sm"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50 text-xs md:text-base md:size-lg"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <div className="space-y-6 md:space-y-8">
              <div className="glass-card p-4 md:p-8 hover:shadow-elevated transition-all duration-300">
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-4 md:mb-8 leading-relaxed text-sm md:text-base">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're someone with an 
                  interesting project, I'd love to hear from you.
                </p>
                
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-2 md:space-x-4 p-2 md:p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-xs md:text-base">{item.label}</h4>
                        <p className="text-muted-foreground text-xs md:text-base">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};