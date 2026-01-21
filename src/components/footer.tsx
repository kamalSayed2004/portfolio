import React from "react";
import { Github, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import data from "../assets/data";
import ScrollToTop from "./scroll-to-top";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Map data.js icon names to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-5 h-5" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "Facebook":
        return <Facebook className="w-5 h-5" />;
      default:
        return <Github className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left">
          {/* About Section */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {data.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {data.summary[0]}
            </p>
          </div>

          {/* Quick Links (Socials) */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Connect
            </h4>
            <div className="flex flex-col space-y-3 items-center sm:items-start">
              {data.socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group w-fit"
                >
                  <span className="group-hover:scale-110 transition-transform text-gray-500 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {getIcon(social.icon)}
                  </span>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact
            </h4>
            <ul className="space-y-3 flex flex-col items-center sm:items-start">
              <li className="flex items-center sm:items-start gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all"
                >
                  {data.email}
                </a>
              </li>
              <li className="flex items-center sm:items-start gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div className="flex flex-col gap-1 items-center sm:items-start">
                  {data.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center sm:items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">{data.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {data.name}
            </span>
            . All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-600 text-xs flex items-center gap-1">
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
