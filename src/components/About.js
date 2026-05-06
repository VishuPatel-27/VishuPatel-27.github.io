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
                <p>Building scalable, secure, and automated cloud infrastructure isn’t just about stringing tools together - it’s about removing friction between development and production.</p>
                <p>
                  Hi, my name is Vishukumar Patel. My journey started with a foundation in Computer Engineering and a hands-on role building CI/CD pipelines and containerising microservices for Infusion Analysts. Driven by a desire to master modern cloud architecture, I relocated to Toronto to pursue a PG Diploma in DevOps for Cloud Computing at Lambton College (Graduated April 2025, 2x Dean's Honour List). Today, armed with my AWS Solutions Architect (SAA-C03) - Associate, Terraform Associate (004) certifications.
                </p>
                
                <p>
                  I don’t just read about modern cloud-native principles; I build them. Recently, I have:
                </p>
                
                <p>
                  𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝗲𝗱 𝗮 𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻-𝗚𝗿𝗮𝗱𝗲 𝗘𝗞𝗦 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺: Deployed a multi-service Kubernetes platform (20+ microservices) across multiple availability zones using Terraform, integrating GitOps workflows via ArgoCD to eliminate configuration drift. </p>
                <p>
                  𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗲𝗱 𝗗𝗲𝘃𝗦𝗲𝗰𝗢𝗽𝘀 𝗣𝗶𝗽𝗲𝗹𝗶𝗻𝗲𝘀: Built a 13-stage Jenkins declarative pipeline automating everything from build and test to Trivy/SonarQube security gates and Kubernetes deployments. </p>
                <p>
                  𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗦𝗲𝗰𝘂𝗿𝗲 𝗦𝗲𝗿𝘃𝗲𝗿𝗹𝗲𝘀𝘀 𝗔𝗿𝗰𝗵𝗶𝘁𝗲𝗰𝘁𝘂𝗿𝗲: Delivered an event-driven AWS serverless application (Lambda, API Gateway, DynamoDB) governed by least-privilege IAM, KMS encryption, and infrstructure scanning (Checkov, cfn-lint).
                </p>

                <p>I am currently seeking New Grad, Junior, or Intermediate DevOps, Cloud Engineer, or SRE roles where I can contribute to a culture of automation, continuous improvement, and security-first engineering.</p>
                <p>If you are looking for an engineer who treats documentation as a feature and infrastructure as code, let’s connect!</p>
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
