import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const { projectName, description, githubLink, techStack, accentColor } = project;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="h-full backdrop-blur-md rounded-2xl overflow-hidden relative group glass-card cursor-pointer"
        whileHover={{ 
          borderColor: accentColor,
          y: -5,
          transition: { duration: 0.2 } 
        }}
        onClick={() => window.open(githubLink, '_blank', 'noopener,noreferrer')}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.open(githubLink, '_blank', 'noopener,noreferrer');
          }
        }}
      >
        {/* Color accent line at top of card */}
        <div 
          className="h-1.5 w-full"
          style={{ 
            background: `linear-gradient(90deg, ${accentColor} 0%, rgba(17, 24, 39, 0) 100%)` 
          }}
        ></div>
        
        <div className="flex h-full flex-col p-5 sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-white font-heading font-bold text-lg sm:text-xl leading-snug">{projectName}</h3>
            
            <motion.a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-glass-secondary p-2 self-start"
              whileHover={{ 
                backgroundColor: `rgba(${accentColor.split('(')[1].split(')')[0].split(',').slice(0, 3).join(',')}, 0.2)`,
                transition: { duration: 0.2 }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={accentColor}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </div>
          
          <p className="text-gray-300 mb-5 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          
          <div className="mt-auto flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-2.5 py-1 rounded-full text-xs bg-glass-secondary border border-glass-border"
                style={{ color: accentColor }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: `rgba(${accentColor.split('(')[1].split(')')[0].split(',').slice(0, 3).join(',')}, 0.15)`,
                  borderColor: accentColor,
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Hover effect - subtle glow */}
        <motion.div 
          className="absolute inset-0 opacity-0 rounded-2xl z-0"
          style={{ 
            boxShadow: `0 0 40px ${accentColor}`,
            background: `radial-gradient(circle at center, rgba(${accentColor.split('(')[1].split(')')[0].split(',').slice(0, 3).join(',')}, 0.03) 0%, rgba(17, 24, 39, 0) 70%)` 
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      projectName: "Azure 3-Tier Infrastructure with Custom Terraform Modules",
      description: "Deployed a scalable, highly secure, and redundant 3-Tier application (Node.js/Go/PostgreSQL) on Azure using Infrastructure as Code to enforce configuration drift prevention. Achieved an 85% reduction in environment provisioning time through modularized Terraform IaC, successfully securing all tiers with WAF, Key Vault secrets rotation, NSGs, and a Bastion Host access model.",
      githubLink: "https://github.com/VishuPatel-27/azure-3tier-terraform.git",
      techStack: [ "Azure VM Scale Sets", "Application Gateway/WAF", "Azure PostgreSQL Flexible Server", "VNet", "Key Vault", "Terraform Custom Modules", "Terraform Remote State", "Docker", "Bash", "Go", "Node.js"],
      accentColor: "rgba(56, 189, 248, 1)" // Neon blue
    },
    {
      projectName: "Event-Driven Secure Identity Todo Service",
      description: "Engineered production-ready, secure serverless application architecture, eliminating manual provisioning and incorporating strict development security controls. Achieved security-first deployment by encrypting sensitive data with Customer Managed KMS Keys and integrating Checkov/cfn-lint into CI/CD, effectively remediating 100% of Critical and High-severity IaC misconfigurations before deployment.",
      githubLink: "https://github.com/VishuPatel-27/serverless-secure-todo-app.git",
      techStack: ["AWS Lambda", "DynamoDB", "API Gateway", "Cognito", "S3", "CloudFront", "WAF", "KMS", "SAM", "GitHub Actions", "LocalStack", "Node.js", "Jest", "Checkov", "cfn-lint"],
      accentColor: "rgba(139, 92, 246, 1)" // Neon purple
    },
    {
      projectName: "CI/CD Powered Board Game Review Portal",
      description: "Established an end-to-end CI/CD pipeline with Jenkins and self-hosted Kubernetes to automate code quality, enforce security compliance, and ensure zero-downtime application delivery. Automated build, test, container packaging, and deployment pipeline that reduced release time by 70% and removed all manual server update steps. Increased deployment success rate from occasional failures to consistent successful runs.",
      githubLink: "https://github.com/VishuPatel-27/project-board-game.git",
      techStack: ["Jenkins", "Maven", "Nexus", "SonarQube", "Trivy", "Kubeaudit", "Kubernetes (kubeadm)", "Docker", "AWS EC2", "Prometheus", "Grafana"],
      accentColor: "rgba(56, 189, 248, 1)" // Neon blue
    },
    {
      projectName: "Microservice Deployment with Helm & GitHub Actions",
      description: "Designed a high-performance CI/CD workflow for a Go-based web application to enforce container best practices and streamline Kubernetes releases. Reduced container image size by approximately 90% and minimized attack surface by implementing Multi-Stage Builds with Distroless images. Standardized Kubernetes deployments using custom Helm Charts to manage environment-specific configurations.",
      githubLink: "https://github.com/VishuPatel-27/go-webapp-devops.git",
      techStack: ["Go (Golang)", "Docker (Multi-stage, Distroless)", "Kubernetes(EKS)", "Helm", "GitHub Actions", "Nginx Ingress"],
      accentColor: "rgba(139, 92, 246, 1)" // Neon purple
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="relative py-10">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 right-10 rounded-full glow-effect"
        style={{ 
          width: 200, 
          height: 200, 
          background: "rgba(56, 189, 248, 0.06)"
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.09, 0.06] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 rounded-full glow-effect"
        style={{ 
          width: 250, 
          height: 250, 
          background: "rgba(139, 92, 246, 0.07)"
        }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.1, 0.07] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 1.5
        }}
      />

      {/* Section heading */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white inline-block relative">
          Projects
          <span className="absolute -bottom-3 left-0 right-0 h-1 rounded-full" 
            style={{ 
              background: "linear-gradient(90deg, rgba(56, 189, 248, 1) 0%, rgba(139, 92, 246, 1) 100%)" 
            }}>
          </span>
        </h2>
      </motion.div>

      {/* Projects grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 px-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
