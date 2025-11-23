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
                  I am a curious DevOps & Cloud Engineer based in Canada, 
                  passionate about the intersection of software development and reliable infrastructure.
                </p>
                
                <p>
                  My journey began as Junior Software Engineer (DevOps Intern), during that period I realized my true interest wasn't just in writing 
                  application code - it was in architecting the systems that make that code run securely, efficiently, and at scale.
                </p>
                
                <p>
                  With a background in Computer Engineering and a specialized Post-Grad in Cloud Computing, 
                  I bridge the gap between Dev and Ops. I don't just "configure servers"; I build self-healing 
                  infrastructure using Terraform and Kubernetes. My recent work involves architecting secure 
                  serverless solutions on AWS and optimizing container workflows to reduce image bloat by over 90%.
                </p>
                
                <p>
                  I am AWS Certified (Solutions Architect Associate) and currently looking for opportunities to bring modern 
                  DevOps practices to a forward-thinking team in Canada. When I'm not fine-tuning CI/CD pipelines, 
                  you can find me exploring the latest in DevOps, cloud security and automation.
                </p>
              </div>
              
              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                {["AWS","Azure","Terraform","Kubernetes","Docker","Jenkins","GitHub Actions", "Azure DevOps", "Python","Bash","YAML","Prometheus","Grafana","Ansible","Helm","ArgoCD","AWS SAM","Trivy","Checkov","Linux","Git", "GitHub"].map((skill, index) => (
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
