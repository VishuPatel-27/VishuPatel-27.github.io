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
      projectName: "eks-gitops-microservices",
      description: "Deployed a highly available 𝗘𝗞𝗦 𝗰𝗹𝘂𝘀𝘁𝗲𝗿 𝗮𝗰𝗿𝗼𝘀𝘀 𝟮 𝗔𝗭𝘀, orchestrating 𝟮𝟬+ 𝗺𝗶𝗰𝗿𝗼𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 with GitOps automation via 𝗔𝗿𝗴𝗼𝗖𝗗 𝗮𝗽𝗽-𝗼𝗳-𝗮𝗽𝗽𝘀 𝗽𝗮𝘁𝘁𝗲𝗿𝗻, achieving nearly zero-downtime deployments and 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝘁𝗶𝗻𝗴 𝗰𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝘁𝗶𝗼𝗻 𝗱𝗿𝗶𝗳𝘁. Built automated 𝗖𝗜/𝗖𝗗 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲𝘀 (GitHub Actions) for 𝟯 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝘄𝗶𝘁𝗵 𝗺𝘂𝗹𝘁𝗶-𝘀𝘁𝗮𝗴𝗲 𝗗𝗼𝗰𝗸𝗲𝗿 𝗯𝘂𝗶𝗹𝗱𝘀, security scanning, and automated manifest updates, reducing deployment time by 80%. Architected production networking using Terraform with custom VPC modules, private subnets, NAT gateways, and 𝗔𝗪𝗦 𝗔𝗟𝗕 𝗜𝗻𝗴𝗿𝗲𝘀𝘀 𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗿 𝘄𝗶𝘁𝗵 𝗧𝗟𝗦 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗶𝗼𝗻 (𝗔𝗖𝗠) 𝗳𝗼𝗿 𝘀𝗲𝗰𝘂𝗿𝗲 𝗛𝗧𝗧𝗣𝗦 𝗮𝗰𝗰𝗲𝘀𝘀. 𝗖𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗲𝗱 𝗥𝗼𝘂𝘁𝗲𝟱𝟯 𝗗𝗡𝗦 𝘄𝗶𝘁𝗵 𝗮 𝗰𝘂𝘀𝘁𝗼𝗺 𝗱𝗼𝗺𝗮𝗶𝗻 𝗮𝗻𝗱 𝘄𝗶𝗹𝗱𝗰𝗮𝗿𝗱 𝗰𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗲, exposing applications and the ArgoCD dashboard securely via Application Load Balancer with intelligent health checks. 𝗥𝗲𝘀𝗼𝗹𝘃𝗲𝗱 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝗶𝘀𝘀𝘂𝗲𝘀: Kubernetes scheduling constraints, IAM OIDC trust relationships, and ALB health check misconfigurations through systematic troubleshooting.",
      githubLink: "https://github.com/VishuPatel-27/eks-gitops-microservices.git",
      techStack: [ "AWS(EKS, VPC, ALB, Route53, ACM)", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "ArgoCD", "Go", "Python", "Java"],
      accentColor: "rgba(56, 189, 248, 1)" // Neon blue
    },
        {
      projectName: "CI/CD Powered Board Game Review Portal",
      description: "Built a comprehensive 𝟭𝟰-𝘀𝘁𝗮𝗴𝗲 𝗝𝗲𝗻𝗸𝗶𝗻𝘀 𝗱𝗲𝗰𝗹𝗮𝗿𝗮𝘁𝗶𝘃𝗲 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲 automating full SDLC from code commit to production deployment, 𝗿𝗲𝗱𝘂𝗰𝗶𝗻𝗴 𝗺𝗮𝗻𝘂𝗮𝗹 𝗿𝗲𝗹𝗲𝗮𝘀𝗲 𝘁𝗶𝗺𝗲 𝗯𝘆 𝟳𝟬% 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 automated build, test, security scanning, and deployment workflows. Deployed production-ready 𝗞𝘂𝗯𝗲𝗿𝗻𝗲𝘁𝗲𝘀 𝗰𝗹𝘂𝘀𝘁𝗲𝗿 on AWS EC2 (t2.large) using kubeadm with 1 master and 1 worker node, implementing 𝗖𝗡𝗜 𝗻𝗲𝘁𝘄𝗼𝗿𝗸𝗶𝗻𝗴, 𝗥𝗕𝗔𝗖 𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗽𝗼𝗹𝗶𝗰𝗶𝗲𝘀, and proper pod-to-pod communication for a multi-tier Java Spring Boot application. Integrated automated security and quality gates with 𝗧𝗿𝗶𝘃𝘆 (container vulnerability scanning) and 𝗦𝗼𝗻𝗮𝗿𝗤𝘂𝗯𝗲 (static code analysis), catching code smells and critical vulnerabilities in pre-production, enforcing quality thresholds before deployment. Implemented end-to-end 𝗮𝗿𝘁𝗶𝗳𝗮𝗰𝘁 𝗺𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 with Maven for Java builds and Nexus repository for artifact versioning, followed by Docker image build, tag, and push to container registry for immutable deployments. Configured Prometheus and Grafana 𝗺𝗼𝗻𝗶𝘁𝗼𝗿𝗶𝗻𝗴 𝘀𝘁𝗮𝗰𝗸 with 𝗡𝗼𝗱𝗲 𝗘𝘅𝗽𝗼𝗿𝘁𝗲𝗿 (Jenkins server metrics) and 𝗕𝗹𝗮𝗰𝗸𝗯𝗼𝘅 𝗘𝘅𝗽𝗼𝗿𝘁𝗲𝗿 (application availability), providing real-time visibility into pipeline performance and application health. 𝗥𝗲𝘀𝗼𝗹𝘃𝗲𝗱 𝗰𝗿𝗶𝘁𝗶𝗰𝗮𝗹 𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝗶𝘀𝘀𝘂𝗲𝘀: kubeadm networking conflicts, Jenkins-to-Kubernetes RBAC misconfigurations for secure API access, and pipeline failures due to dependency management and image push authentication",
      githubLink: "https://github.com/VishuPatel-27/project-board-game.git",
      techStack: ["Jenkins", "Maven", "Nexus", "SonarQube", "Trivy", "Kubeaudit", "Kubernetes (kubeadm)", "Docker", "AWS EC2", "Prometheus", "Grafana"],
      accentColor: "rgba(56, 189, 248, 1)" // Neon blue
    },
    {
      projectName: "Event-Driven Secure Identity Todo Service",
      description: "𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝗲𝗱 𝘀𝗲𝗿𝘃𝗲𝗿𝗹𝗲𝘀𝘀 REST API with 𝟱 𝗟𝗮𝗺𝗯𝗱𝗮 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 handling CRUD operations via API Gateway with Cognito authentication, delivered through CloudFront CDN with S3 frontend 𝗮𝗰𝗵𝗶𝗲𝘃𝗶𝗻𝗴 𝗵𝗶𝗴𝗵𝗲𝗿 𝘂𝗽𝘁𝗶𝗺𝗲 𝗮𝗻𝗱 𝘀𝘂𝗯-𝟭𝟬𝟬𝗺𝘀 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝘁𝗶𝗺𝗲𝘀. 𝗕𝘂𝗶𝗹𝘁 𝗱𝘂𝗮𝗹 𝗚𝗶𝘁𝗛𝘂𝗯 𝗔𝗰𝘁𝗶𝗼𝗻𝘀 𝗖𝗜/𝗖𝗗 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲𝘀 (8 jobs total) with comprehensive testing: unit (Jest), integration (LocalStack), and multi-layered security scanning (Checkov, cfn-lint, npm audit, ESLint), 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝘁𝗶𝗻𝗴 𝘃𝘂𝗹𝗻𝗲𝗿𝗮𝗯𝗶𝗹𝗶𝘁𝗶𝗲𝘀 𝗽𝗿𝗲-𝗱𝗲𝗽𝗹𝗼𝘆𝗺𝗲𝗻𝘁. Implemented 𝗱𝗲𝗳𝗲𝗻𝗰𝗲-𝗶𝗻-𝗱𝗲𝗽𝘁𝗵 𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 with Cognito JWT authentication, customer-managed KMS encryption for DynamoDB and Lambda environment variables, and 𝗹𝗲𝗮𝘀𝘁-𝗽𝗿𝗶𝘃𝗶𝗹𝗲𝗴𝗲 𝗜𝗔𝗠 𝗽𝗼𝗹𝗶𝗰𝗶𝗲𝘀 𝗲𝗻𝗳𝗼𝗿𝗰𝗶𝗻𝗴 𝗥𝗕𝗔𝗖. Integrated automated 𝗜𝗮𝗖 𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝘀𝗰𝗮𝗻𝗻𝗶𝗻𝗴 𝘄𝗶𝘁𝗵 𝗖𝗵𝗲𝗰𝗸𝗼𝘃 (SAST catching 15+ misconfigurations), cfn-lint (CloudFormation validation), and SCA tools preventing deployment of vulnerable dependencies. Deployed 𝗶𝗻𝗳𝗿𝗮𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲 𝘂𝘀𝗶𝗻𝗴 𝗔𝗪𝗦 SAM with DynamoDB on-demand billing and API Gateway caching, optimizing costs to <$5/month while maintaining production-grade performance.",
      githubLink: "https://github.com/VishuPatel-27/serverless-secure-todo-app.git",
      techStack: ["AWS Lambda", "DynamoDB", "API Gateway", "Cognito", "S3", "CloudFront", "KMS", "SAM", "GitHub Actions", "LocalStack", "Node.js", "Jest", "Checkov", "cfn-lint"],
      accentColor: "rgba(139, 92, 246, 1)" // Neon purple
    },
    {
      projectName: "Azure 3-Tier Infrastructure with Custom Terraform Modules",
      description: "Deployed a scalable, highly secure, and redundant 3-Tier application (Node.js/Go/PostgreSQL) on Azure using Infrastructure as Code to enforce configuration drift prevention. Achieved an 85% reduction in environment provisioning time through modularized Terraform IaC, successfully securing all tiers with WAF, Key Vault secrets rotation, NSGs, and a Bastion Host access model.",
      githubLink: "https://github.com/VishuPatel-27/azure-3tier-terraform.git",
      techStack: [ "Azure VM Scale Sets", "Application Gateway/WAF", "Azure PostgreSQL Flexible Server", "VNet", "Key Vault", "Terraform Custom Modules", "Terraform Remote State", "Docker", "Bash", "Go", "Node.js"],
      accentColor: "rgba(56, 189, 248, 1)" // Neon blue
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
