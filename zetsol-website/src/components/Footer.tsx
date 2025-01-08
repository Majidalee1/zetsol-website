import React from "react";
import { motion } from "framer-motion";
import zetsolLogo from "../assets/logo.png";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "#" },
      { label: "About us", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Fintech", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Travel", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "Aviation", href: "#" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Telemedicine", href: "#" },
      { label: "Grocery e-commerce", href: "#" },
      { label: "Fintech", href: "#" },
      { label: "Salon Inventory App", href: "#" },
      { label: "Gems App", href: "#" },
      { label: "Management App", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M20.472 3.528C18.208 1.264 15.184 0 12 0 5.432 0 0 5.432 0 12c0 2.136.576 4.144 1.584 5.88L0 24l6.12-1.584C7.856 23.424 9.864 24 12 24c6.568 0 12-5.432 12-12 0-3.184-1.264-6.208-3.528-8.472zM12 21.84c-1.92 0-3.84-.528-5.472-1.488l-.384-.24-4.08 1.08 1.08-4.08-.24-.384C1.968 15.36 1.44 13.68 1.44 12 1.44 6.24 6.24 1.44 12 1.44c2.688 0 5.208 1.056 7.104 2.952 1.896 1.896 2.952 4.416 2.952 7.104 0 5.76-4.8 10.56-10.56 10.56zm5.76-7.92c-.336-.144-1.92-.96-2.16-1.08-.24-.096-.432-.144-.624.144-.192.288-.72.96-.912 1.152-.168.192-.336.216-.624.072-.288-.144-1.224-.456-2.304-1.44-.84-.744-1.416-1.68-1.584-1.968-.168-.288 0-.432.12-.576.12-.12.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.624-1.512-.864-2.064-.216-.528-.456-.456-.624-.456-.168 0-.36 0-.552 0-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 1.992 3.048 4.824 4.272.672.288 1.2.48 1.608.624.672.216 1.296.192 1.776.12.528-.072 1.92-.792 2.184-1.56.264-.768.264-1.416.192-1.56-.072-.144-.264-.216-.552-.36z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Skype",
    href: "#",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91 1.529 8.915 1.529 8.924 1.529c-2.199-1.125-4.604-1.434-6.837-.869C.051 1.201-1.259 3.15-.959 5.187c.247 1.681 1.545 3.178 3.151 3.96l.006-.007c-.151.84-.227 1.695-.227 2.538 0 1.529.301 3.012.898 4.42.569 1.348 1.395 2.562 2.427 3.596 1.049 1.033 2.247 1.856 3.595 2.426 1.318.631 2.801.93 4.328.93.859 0 1.691-.084 2.495-.25h-.006c1.758 1.078 3.824 1.309 5.651.877 1.461-.346 2.712-1.268 3.518-2.588.806-1.32 1.075-2.916.76-4.387-.247-1.681-1.545-3.178-3.151-3.96"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden">
      {/* Glassmorphism background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-red-50/5 to-gray-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)] backdrop-blur-[100px]" />
        <motion.div
          className="absolute top-0 -right-64 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 -left-64 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-start">
              <img
                src={zetsolLogo}
                alt="Zetsol Technologies"
                className="h-12"
              />
            </a>
            <p className="mt-6 text-gray-600 font-['Space_Grotesk'] leading-relaxed">
              Feel free to fill out the form, and our team will get in touch
              within 24 hours.
            </p>
            
            {/* Enhanced Company Deck CTA */}
            <motion.div 
              className="mt-8 relative group"
              whileHover="hover"
            >
              <motion.a
                href="/company-deck.pdf"
                download
                className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl group-hover:shadow-xl group-hover:shadow-red-500/20 transition-all duration-300 font-['Space_Grotesk']"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center justify-center w-8 h-8 bg-red-500 rounded-full overflow-hidden">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                    variants={{
                      hover: {
                        y: [0, 4, 0],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                        },
                      },
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </motion.svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Download</span>
                  <span className="text-xs text-red-100">Company Deck (2.5 Mb)</span>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Navigation Sections with enhanced styling */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-gray-900 font-bold mb-6 font-['Space_Grotesk'] relative inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors font-['Space_Grotesk'] flex items-center group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 font-['Space_Grotesk']">
              Copyright {new Date().getFullYear()} Zetsol Technologies All Right
              Reserved
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-red-600 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="relative">
                    {item.icon}
                    <span className="absolute inset-0 bg-red-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
