import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Database,
  Network,
  Settings,
  Play,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  ExternalLink,
  Eye
} from "lucide-react";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';
import ComingSoonModal from '@/components/ComingSoonModal';
import heroImage from '@/assets/hero-african-landscape.jpg';
import settingsIcon from '@/assets/3d-settings-icon.png';
import chartIcon from '@/assets/3d-chart-icon.png';
import collaborationIcon from '@/assets/3d-collaboration-icon.png';
import problemIcon from '@/assets/problem-icon.png';
import solutionIcon from '@/assets/solution-icon.png';
import missionIcon from '@/assets/mission-icon.png';
import objectiveIcon from '@/assets/objective-icon.png';

import jkuatImg from "@/assets/team/JKUAT.png";
import kictanetImg from "@/assets/team/kictanet.png";
import knbsImg from "@/assets/team/knbs.png";
import idsImg from "@/assets/team/ids.png";
import actsImg from "@/assets/team/acts.png";
import JhubImg from "@/assets/team/JHUB.webp" 

import brianImg from "@/assets/team/brian.jpeg";
import danieleImg from "@/assets/team/daniele.png";
import evanImg from "@/assets/team/evan.jpg";
import geoffreyImg from "@/assets/team/geofrey.png";
import hannahImg from "@/assets/team/hannah.jpg";
import hiramImg from "@/assets/team/hiram.png";
import lawrenceImg from "@/assets/team/lawrence.png";
import leahImg from "@/assets/team/leah.png";
import linahImg from "@/assets/team/linah.png";
import lincolnImg from "@/assets/team/lincoln.png";
import macdonaldImg from "@/assets/team/macdonald.png";
import ngo1Img from "@/assets/team/NGO1.png";
import patrickImg from "@/assets/team/patrick.png";
import rajabImg from "@/assets/team/rajab.png";
import samuelImg from "@/assets/team/samuel.png";
import benjaminImg from "@/assets/team/benjamin.png";



const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Contact Form Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:info@jhub.jkuat.ac.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    toast.success('Email client opened! Please send the message.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComingSoon = () => {
    setShowComingSoonModal(true);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/85"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="text-left lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="block text-text-primary-contrast"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  A
                </motion.span>
                <motion.span 
                  className="text-brand-primary block leading-tight"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Policy
                </motion.span>
                <motion.span 
                  className="block text-text-primary-contrast text-3xl md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Tracking and Simulation Platform
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-text-secondary-contrast max-w-2xl mb-8 leading-relaxed font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Simplifies evaluation and analysis of policies through interactive simulations and real-time data visualizations
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="glass"
                    className="px-8 py-4 text-lg font-medium"
                    onClick={handleComingSoon}
                  >
                    Request Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="glass-container rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-accent/20"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-3">
                        <Database className="w-6 h-6 text-brand-primary" />
                      </div>
                      <h3 className="text-sm font-medium text-text-primary-contrast mb-1">Data Upload</h3>
                      <p className="text-xs text-text-muted-contrast">Government indicators</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-brand-secondary/20 rounded-lg flex items-center justify-center mb-3">
                        <Settings className="w-6 h-6 text-brand-secondary" />
                      </div>
                      <h3 className="text-sm font-medium text-text-primary-contrast mb-1">Calibration</h3>
                      <p className="text-xs text-text-muted-contrast">Model parameters</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-3">
                        <Play className="w-6 h-6 text-brand-accent" />
                      </div>
                      <h3 className="text-sm font-medium text-text-primary-contrast mb-1">Simulation</h3>
                      <p className="text-xs text-text-muted-contrast">Policy testing</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 rounded-lg p-4 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-3">
                        <BarChart3 className="w-6 h-6 text-brand-primary" />
                      </div>
                      <h3 className="text-sm font-medium text-text-primary-contrast mb-1">Analysis</h3>
                      <p className="text-xs text-text-muted-contrast">Real-time insights</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem, Mission, Objective & Solutions Section */}
      <section id="about" className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-heading">About Us</h2>
            <p className="text-xl text-text-secondary-contrast max-w-2xl mx-auto font-body">
              Explore more about our project and mission
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: problemIcon,
                title: "The Problem",
                description: "Decision-makers struggle to analyze government policies effectively using traditional methods.",
                delay: 0.1
              },
              {
                icon: solutionIcon,
                title: "The Solution",
                description: "With our app evaluation and analysis of policies are simplified. All within a few clicks.",
                delay: 0.2
              },
              {
                icon: missionIcon,
                title: "Our Mission",
                description: "To empower policymakers with a low-cost decision simulation engine tailored to Kenya.",
                delay: 0.3
              },
              {
                icon: objectiveIcon,
                title: "Our Objective",
                description: "To deliver a powerful tool integrating PPI tool to drive evidence-based growth.",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <Card className="card-elevated group h-full">
                  <CardHeader>
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                    </motion.div>
                    <CardTitle className="text-xl text-center font-heading">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-text-muted-contrast font-body">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APP Section - Key Features + How It Works */}
<section id="app" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Key Features */}
    <motion.div 
      className="text-center mb-16"
      {...fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-heading">Our App</h2>
      <p className="text-xl text-text-secondary-contrast max-w-2xl mx-auto font-body">
        Discover the core features and workflow of POLIAGENTX
      </p>
    </motion.div>

    {/* Key Features Cards */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 mb-20"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {[
        {
          icon: settingsIcon,
          title: "Interactive Simulations",
          description: "Evaluate and analyze policies effortlessly with interactive simulations — all within a few clicks."
        },
        {
          icon: chartIcon,
          title: "Real-time Data Visualization",
          description: "Visualize policy data in real-time using intuitive charts and graphs for actionable insights."
        },
        {
          icon: collaborationIcon,
          title: "Collaborative Analysis",
          description: "Collaborate with stakeholders in real-time, sharing insights and refining policy strategies together."
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <Card className="card-elevated group h-full">
            <CardHeader className="text-center">
              <motion.div 
                className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" />
              </motion.div>
              <CardTitle className="text-2xl font-heading">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-text-muted-contrast font-body">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>


          {/* How It Works Timeline */}
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 font-heading">Workflow</h3>
            <p className="text-lg text-text-secondary-contrast max-w-2xl mx-auto font-body">
              Follow these simple steps to get started with policy analysis
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent rounded-full hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  step: 1,
                  icon: Upload,
                  title: "Upload Government Indicators Data",
                  description: "Start by uploading your time series data of development indicators across different policy dimensions",
                  side: "left"
                },
                {
                  step: 2,
                  icon: Database,
                  title: "Upload Government Expenditure Data",
                  description: "Provide budget information either as total amount or disaggregated expenditure programmes",
                  side: "right"
                },
                {
                  step: 3,
                  icon: Network,
                  title: "Upload Network of Interdependency Data",
                  description: "Input the network matrix capturing conditional dependencies between all indicators",
                  side: "left"
                },
                {
                  step: 4,
                  icon: Settings,
                  title: "Start Calibration",
                  description: "Adjust model parameters using real-world data to reflect Kenya's socio-economic environment",
                  side: "right"
                },
                {
                  step: 5,
                  icon: Play,
                  title: "Start Simulation",
                  description: "Run policy simulations to visualize performance over time and under various conditions",
                  side: "left"
                },
                {
                  step: 6,
                  icon: Eye,
                  title: "See Real-time Analysis",
                  description: "View comprehensive results with interactive charts and actionable policy insights",
                  side: "right"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${item.side === 'right' ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="card-elevated">
                        <CardHeader>
                          <div className={`flex items-center gap-4 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                              <item.icon className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-heading">{item.title}</CardTitle>
                              <div className="text-sm text-brand-primary font-bold font-body">Step {item.step}</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-text-muted-contrast font-body">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div 
                    className="hidden md:flex w-8 h-8 bg-brand-primary rounded-full items-center justify-center relative z-10 mx-4"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </motion.div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section id="team" className="py-20 section-light">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div className="text-center mb-16" {...fadeInUp}>
      <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-heading">
        Meet the Team
      </h2>
      <p className="text-xl text-text-secondary-contrast font-body">
        The brains behind the project
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {[
        {
          name: "Dr Lawrence Nderu",
          role: "Project PI",
          org: "JKUAT",
          imageUrl: lawrenceImg, 
          featured: true,
          linkedin: "https://www.linkedin.com/in/dr-lawrence-nderu/",
          github: "https://github.com/lawrencenderu"
        },
        {
          name: "George Ngiye",
          role: "Team Lead",
          org: "Data Analyst & UI/UX Designer",
          imageUrl: ngo1Img,
          featured: true,
          linkedin: "https://www.linkedin.com/in/george-ngiye-498803366",
          github: "https://github.com/NGIYEG"
        },
        {
          name: "Lincoln Muraguri",
          role: "Backend Developer",
          imageUrl: lincolnImg,
          linkedin: "https://www.linkedin.com/in/lincoln-muraguri-555655368",
          github:"https://github.com/RagurivonRaguri"
        },
        {
          name: "Sundra Evans",
          role: "Frontend Developer",
         imageUrl: evanImg,
          linkedin:"https://www.linkedin.com/in/sundra-evans-39490a313",
          github: "https://github.com/Sundra731"
        },
        {
          name: "Brian Kariuki",
          role: "UI/UX Designer",
          imageUrl: brianImg,
          linkedin: "https://www.linkedin.com/in/placeholder",
          github: "https://github.com/nerdybrian"
        },
        {
          name: "Bridgit Kagendo",
          role: "Frontend Developer",
          initials: "BK",
          linkedin: "https://www.linkedin.com/in/placeholder",
          github: "https://github.com/BridgitKagendo"
        },
        {
          name: "Hannah Kibunja",
          role: "Communication Specialist",
          imageUrl: hannahImg,
          linkedin: "https://www.linkedin.com/in/hannah-kibunja-471261330",
          github: "https://github.com/"
        },
        {
          name: "Dr Daniele Guariso",
          role: "The Alan Turing Institute",
          imageUrl: danieleImg,
          
        },
        {
          name: "Mr Rajab Mbaruk",
          role: "Kenya National Bureau of Statistics",
          imageUrl: rajabImg,
        
        },
        {
          name: "Mr Geoffrey Kagombe",
          role: "Jomo Kenyatta University of Agriculture and Technology",
          imageUrl: geoffreyImg,
          linkedin: "https://www.linkedin.com/in/kagombe-geofrey-74a97343/",
          github: "https://github.com/"
        },
        {
          name: "Dr Patrick Gikunda",
          role: "Dedan Kimathi University of Technology",
          imageUrl: patrickImg,
         
        },
        {
          name: "Ms Leah Wambugu",
          role: "Kenya National Bureau of Statistics",
          imageUrl: leahImg,
         
        },
         {
          name: "Dr Macdonald Obudho",
          role: "Kenya National Bureau of Statistics",
          imageUrl: macdonaldImg,
   
        },
        {
          name: "Mr Benjamin Muchiri",
          role: "Kenya National Bureau of Statistics",
          imageUrl: benjaminImg,
      
        },
        {
          name: "Mr Hiram Mbatia",
          role: "Kenya National Bureau of Statistics",
          imageUrl: hiramImg,
         
        },
        {
          name: "Mr Samuel Wanjau",
          role: "African Centre for Technology Studies",
          imageUrl: samuelImg,
         
        },
         {
          name: "Ms Linah Ngumba",
          role: "Kenya National Bureau of Statistics",
          imageUrl: linahImg,
          
        },

      ].map((member, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="card-elevated text-center group h-full">
            <CardContent className="pt-6">
              <motion.div
                className={`w-20 h-20 ${
                  index % 3 === 0
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary"
                    : index % 3 === 1
                    ? "bg-gradient-to-r from-brand-secondary to-brand-accent"
                    : "bg-gradient-to-r from-brand-accent to-brand-primary"
                } rounded-full mx-auto mb-4 flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {member.imageUrl ? (
  <img
    src={member.imageUrl}
    alt={member.name}
    className="w-20 h-20 rounded-full object-cover"
  />
) : (
  <span className="text-white font-bold text-xl">
    {member.initials}
  </span>
)}
              </motion.div>
              <h3 className="font-bold text-brand-secondary mb-1 font-heading">
                {member.name}
              </h3>
              <p className="text-sm text-text-secondary-contrast mb-2 font-body">
                {member.role}
              </p>
              {member.org && (
                <p className="text-xs text-text-muted-contrast mb-4 font-body">
                  {member.org}
                </p>
              )}
              <div className="flex justify-center space-x-2">
                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="sm" className="p-1">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </motion.a>
                )}
                {member.github && (
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="sm" className="p-1">
                      <Github className="w-4 h-4" />
                    </Button>
                  </motion.a>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>



     {/* Partners Section */}
<section id="partners" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      className="text-center mb-16"
      {...fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-heading">
        Our Partners
      </h2>
      <p className="text-xl text-text-secondary-contrast font-body">
        Collaborating with leading institutions
      </p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {[
        {
          name: "Jomo Kenyatta University of Agriculture and Technology",
          logo: jkuatImg,
          description: "Project leadership and coordination",
          gradient: "from-brand-secondary to-brand-accent",
          link: "https://www.jkuat.ac.ke/",
        },
          {
          name: "JHUB Africa",
          logo: JhubImg,
          description: "Lead digital hub for public sector service delivery project",
          gradient: "from-brand-secondary to-brand-accent",
          link: "https://jhubafrica.com",
        },
        {
          name: "Kenya National Bureau of Statistics",
          logo: knbsImg,
          description: "Kenya’s principal agency for statistical data collection and analysis",
          gradient: "from-brand-primary to-brand-secondary",
          link: "https://www.knbs.or.ke/"
        },
        {
          name: "Kenya ICT Action Network",
          logo: kictanetImg,
          description: "Digital policy and technology governance expertise",
          gradient: "from-brand-accent to-brand-primary",
          link: "https://www.kictanet.or.ke/"
        },
        {
          name: "Institute of Development Studies",
          logo: idsImg,
          description: "Global development expertise",
          gradient: "from-brand-secondary to-brand-primary",
          link: "https://www.ids.ac.uk/"
        },
        {
          name: "African Centre for Technology Studies",
          logo: actsImg,
          description: "Integrating technology change considerations",
          gradient: "from-brand-accent to-brand-secondary",
          link: "https://acts-net.org/"
        }

      ].map((partner, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          <Card className="card-elevated group h-full">
            <CardContent className="p-8 text-center">
              <motion.div 
                className={`w-24 h-24  rounded-full mx-auto mb-6 flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
               <img
  src={partner.logo}
  alt={`${partner.name} logo`}
  className="w-16 h-16 object-contain rounded-full"
/>

              </motion.div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4 font-heading">
                {partner.name}
              </h3>
              <p className="text-text-muted-contrast mb-6 font-body">
                {partner.description}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" asChild className="font-body">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${partner.name}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 font-heading">Get In Touch</h2>
            <p className="text-xl text-text-secondary-contrast max-w-2xl mx-auto font-body">
             Are You Interested in supporting this project? or do you have any question about POLIAGENTX?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-primary font-heading">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-body"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-body"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="font-body"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 font-body"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-primary font-heading">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "info@jhub.jkuat.ac.ke", color: "brand-primary" },
                  { icon: Phone, label: "Phone", value: "+254 785 748 006", color: "brand-secondary" },
                  { icon: MapPin, label: "Location", value: "Juja, Kenya", color: "brand-accent" }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 bg-${contact.color}/10 rounded-full flex items-center justify-center`}>
                      <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold font-heading">{contact.label}</p>
                      <p className="text-text-muted-contrast font-body">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
              
                <div className="flex space-x-4">
                  {[
                  
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <social.Icon className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <motion.h3 
                className="text-2xl font-bold text-brand-primary mb-4 font-heading"
                whileHover={{ scale: 1.05 }}
              >
                POLIAGENTX
              </motion.h3>
              <p className="text-text-muted-contrast mb-6 max-w-md font-body">
                Empowering policymakers with interactive simulations and real-time data visualization for evidence-based decision making.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-body"
                  onClick={handleComingSoon}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-primary font-heading">Quick Links</h4>
              <ul className="space-y-2">
                 {[
                   { label: 'Home', id: 'home' },
                   { label: 'App', id: 'app' },
                   { label: 'Team', id: 'team' },
                   { label: 'Contact', id: 'contact' }
                 ].map((link) => (
                  <motion.li 
                    key={link.id}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-text-muted-contrast hover:text-brand-primary transition-colors font-body"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-brand-primary font-heading">Connect</h4>
              <div className="flex space-x-3">
                {[
                  { Icon: Twitter, url: "https://x.com/JHUBAfrica" },
                    { Icon: Linkedin, url: "https://www.linkedin.com/company/jhubafrica/" },
                    { Icon: MessageCircle, url: "https://wa.me/254785748006" },
                    { Icon: Facebook, url: "https://www.facebook.com/JHUBAfrica/" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.Icon className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-text-muted-contrast">
            <p className="font-body">&copy; 2025 POLIAGENTX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      <ComingSoonModal 
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </div>
  );
};

export default Index;