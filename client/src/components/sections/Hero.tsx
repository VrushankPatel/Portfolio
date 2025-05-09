import { motion } from "framer-motion";
import { SocialButton } from "@/components/ui/social-button";
import { profileData } from "@/data";

export function Hero() {
  const { name, title, summary, socialLinks, tagline } = profileData;
  
  // Use hardcoded image paths
  const profilePic = "/img/profile-pic.jpg";
  const cspoBadge = "/img/sa-cspo-600.png";

  return (
    <section className="relative overflow-hidden flex items-center min-h-[90vh] bg-hero-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8 md:gap-16">
          <div className="w-full lg:w-3/5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                <span className="block">Hi, I'm {name}</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-primary dark:to-accent animate-gradient bg-size-200">
                  {title}
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {tagline}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SocialButton
                href={socialLinks.linkedin}
                icon={<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>}
                label="Connect on LinkedIn"
                variant="linkedin"
                size="lg"
              />
              <SocialButton
                href={socialLinks.github}
                icon={<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>}
                label="View GitHub"
                variant="github"
                size="lg"
              />
              <SocialButton
                href="/Vrushank_Resume.pdf"
                icon={<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-19.2 56-19.2 77.6 0 22.2 5.5 36.3 16.8 48.7-6.4 1.8-12.7 3.8-18.6 5.8C38.3 368.6 80.8 378.6 95.9 373.3c-12.6 23.5-14.3 79.6 26.3 89.2 92.1-18.8 146.4-66.5 153.9-96.9 22.7-11.2 28.3-39.1 14.1-48.3zm-77.2 121.5c-13.9 7.9-38.4 2.5-51.4-6.5 9-1.4 16.8-4.8 22.1-10.5 12.8 5.2 28.4 4.5 38.9-.5 2.3 4.3 7.8 8.5 13.5 9.5-6.9 5.6-15.3 8.2-23.1 8zm8.7-116c.2-.1.4-.2.6-.4 13.7 5.3 29.2 2.9 40.3-5.7 2.7 3.4 7.4 6.3 13.7 8.1-9 12.9-28.5 20.3-55.2 11.3 1-4.5 1-8.6-.2-13.3.6 0 1.2 0 .8 0zM240.2 111v-.3c11.5-10.7 28.4-11.8 41.1-4 1.7 7.3 10.8 14 18.8 14.7-13.9 17.9-41.4 19.3-62.8 6.9 0-.9.1-1.8.1-2.7.1-4.9-.7-9.9-2.8-14.6 2.1-.1 4.1-.1 5.6 0z"/></svg>}
                label="View Resume"
                variant="resume"
                size="lg"
              />
            </motion.div>
          </div>

          <motion.div 
            className="w-full lg:w-2/5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl dark:from-primary/20 dark:to-accent/20 animate-pulse-slow"></div>
              <img 
                src={profilePic} 
                alt={`Headshot of ${name}`} 
                className="relative z-10 w-72 h-72 md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover animate-float"
              />
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg z-20">
                <img 
                  src={cspoBadge} 
                  alt="CSPO Certification Badge" 
                  className="w-14 h-14"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
    </section>
  );
}