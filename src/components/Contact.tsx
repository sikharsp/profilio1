import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use FormSubmit.co API to send email without redirecting
      const response = await fetch("https://formsubmit.co/ajax/psikhar74@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _honey: "",
          _captcha: "false"
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Show success message
        setIsSubmitted(true);
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully. Thank you!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <p className="text-muted-foreground mb-8">Feel free to reach out for any inquiries.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:psikhar74@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    psikhar74@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+977 9867391430</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {isSubmitted ? (
              <div className="space-y-6">
                <Alert className="mb-6 bg-primary/5 border-primary/20">
                  <AlertDescription className="py-4">
                    <h3 className="text-xl font-bold mb-2">Thank you for your message!</h3>
                    <p className="text-muted-foreground">W'll contact you soon.</p>
                  </AlertDescription>
                </Alert>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline"
                  className="w-full"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} className="ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
