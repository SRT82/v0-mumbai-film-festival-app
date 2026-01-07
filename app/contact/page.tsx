"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const whatsappMessage = `*New Contact from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`

    // Send to primary contact number via WhatsApp
    const whatsappUrl = `https://wa.me/919665544453?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleWhatsAppDirect = () => {
    window.open("https://wa.me/919665544453", "_blank")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Have questions about the festival? Want to submit your film? We'd love to hear from you!
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-md">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
                      <a href="tel:+919665544453" className="block text-primary hover:underline font-medium mb-1">
                        +91 9665544453
                      </a>
                      <a href="tel:+919260000665" className="block text-primary hover:underline font-medium">
                        +91 9260000665
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-md">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                      <a
                        href="mailto:mumbafilmfestival@gmail.com"
                        className="text-primary hover:underline font-medium break-all"
                      >
                        mumbafilmfestival@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-md">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">Venue</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        National Film Archive of India
                        <br />
                        Law College Road
                        <br />
                        Pune, Maharashtra 411004
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-primary/10 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your message will be sent directly to our WhatsApp
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
