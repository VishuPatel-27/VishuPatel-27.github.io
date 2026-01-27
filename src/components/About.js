/*
  About.js
  A React component that displays an "About Me" section with a bio and skills tags.
  Utilizes Framer Motion for animations and Tailwind CSS for styling.
  This about section is loaded dynamically in the main application.
*/
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full">
      <div className="glass-card p-6 md:p-8 relative overflow-hidden">
        {/* Background glow effect */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-neon-purple opacity-10 glow-effect"
          style={{ filter: "blur(80px)" }}
        />
        
        <div className="relative z-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            {/* Bio Content */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">
                A bit about me
              </h3>
              {/* <h4 className="text-xl text-neon-blue mb-4 font-medium">
                Software Engineer - DevOps Engineer
              </h4> */}
              
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  Hi, I'm Vishukumar Patel, a curious and passionate DevOps Engineer about building automated, secure, and cost-efficient cloud infrastructure.
                  I focus on reducing deployment friction through Infrastructure as Code, container orchestration, and CI/CD automation. 
                  In my recent hands-on projects, I got measurable results, including faster infrastructure provisioning with Terraform and much shorter release cycles using automated pipelines.</p>
                <p>
                  My journey began as Junior Software Engineer (DevOps Intern), during that period I realized my true interest wasn't just in writing 
                  application code - it was in architecting the systems that make that code run securely, efficiently, and at scale. With a background in Computer Engineering and a specialized Post-Grad in Cloud Computing, 
                  I bridge the gap between Dev and Ops.
                </p>
                
                <p>
                  𝗪𝗵𝗮𝘁 𝗜 𝗗𝗼? I architect and implement production-grade cloud solutions using AWS.
                  I do Infrastructure Automation using Terraform, Container Orchestration using Kubernetes. 
                  I engineered Docker multi-stage builds for optimisation and containerisation. 
                  For CI/CD, I build solutions using GitHub actions and Jenkins, in which I used ArgoCD for a GitOps approach. 
                  In my projects, production-style environment, I always follow the IAM least privilege approach along with various security scans in CI/CD pipelines,
                  including SAST, SCA, and IaC validation, before even deploying a tiny change into the environment. 
                  I build things the right way: documented, tested, and reproducible. When issues arise, I troubleshoot systematically and share learnings with the community.
                </p>
                
                <p>
                  𝗪𝗵𝗮𝘁 𝗗𝗿𝗶𝘃𝗲𝘀 𝗠𝗲?
                  I'm energised by solving complex problems and optimising workflows. 
                  I thrive in collaborative environments and stay current by building projects, reading docs, and engaging with the DevOps community.
                </p>
              </div>
              
              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                {["Linux", "AWS","Terraform","Kubernetes","Docker","Jenkins","GitHub Actions", "Python","Bash","YAML","Prometheus","Grafana","Ansible","Helm","ArgoCD","AWS SAM","Trivy","Checkov",,"Git", "GitHub"].map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-glass-secondary border border-glass-border text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
