import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SocialButton } from "@/components/ui/social-button";
import { profileData } from "@/data";
import { Printer, Download, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Resume() {
  const { 
    name, 
    title, 
    socialLinks, 
    resumeSkills, 
    professionalExperience, 
    education, 
    resumeCertifications 
  } = profileData;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Resume - ${name} | ${title}`;

    const style = document.createElement('style');
    style.setAttribute('media', 'print');
    style.innerHTML = `
      @page {
        size: A4;
        margin: 10mm;
      }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .print-container {
        width: 100%;
        max-width: 100%;
        padding: 0;
      }
      .print-resume {
        box-shadow: none !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.title = `${name} | ${title}`;
      document.head.removeChild(style);
    };
  }, [name, title]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="print:hidden mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </a>
          </Link>

          <div className="flex gap-3">
            <SocialButton
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrint();
              }}
              icon={<Printer className="w-5 h-5" />}
              label="Print Resume"
              variant="primary"
            />

            <SocialButton
              href="/Vrushank_Resume.pdf"
              icon={<Download className="w-5 h-5" />}
              label="Download PDF"
              variant="outline"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 print:shadow-none print:p-0 print:dark:bg-white print:dark:text-black print-resume">
          <header className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 print:dark:border-gray-200">
            <div className="text-center mb-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white print:dark:text-gray-900">{name}</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-300 print:dark:text-gray-600">
              <a href={`mailto:${socialLinks.email}`} className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                {socialLinks.email}
              </a>
              <span className="hidden md:inline">•</span>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                linkedin.com/in/vrushank-patel
              </a>
              <span className="hidden md:inline">•</span>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary-400 hover:underline print:dark:text-primary">
                github.com/VrushankPatel
              </a>
              <span className="hidden md:inline">•</span>
              <span>Bangalore, IN</span>
            </div>
          </header>

          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Experience (5+ Years)
            </h2>
            <div className="space-y-4">
              {professionalExperience.map((exp, index) => (
                <div key={index} className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 print:dark:text-gray-800">{exp.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                      {exp.period}
                    </p>
                  </div>
                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1 print:dark:text-gray-600">
                    {exp.responsibilities.map((item, itemIndex) => (
                      <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-2">
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Programming Languages:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  {resumeSkills.programmingLanguages.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Frameworks:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  {resumeSkills.frameworks.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Databases:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  {resumeSkills.databases.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Cloud / DevOps and CI/CD:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  {resumeSkills.cloudDevOps.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Distributed Systems:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  {resumeSkills.distributedSystems.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-700 dark:text-gray-300 print:dark:text-gray-700 inline">
                  Other Skills:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600 inline ml-2">
                  {resumeSkills.otherSkills.join(", ")}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 print:dark:text-gray-800">{edu.degree}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 print:dark:text-gray-600">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0 sm:mt-0 print:dark:text-gray-500">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold uppercase text-gray-800 dark:text-gray-200 mb-3 print:dark:text-gray-800 border-b border-gray-200 dark:border-gray-700 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {resumeCertifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-primary dark:text-primary-400 mt-0.5 flex-shrink-0 print:dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div className="ml-2">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-400 print:dark:text-gray-800 print:hover:dark:text-gray-800">
                      {cert.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400 print:dark:text-gray-500">
            <p>APEX · Bluelink · Maxine · Complexica · Other Projects · More</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}