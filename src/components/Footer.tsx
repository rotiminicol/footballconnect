import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Use Cases', href: '#' },
      { name: 'Integrations', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Status', href: '#' },
    ],
    legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };
  
  const socialIcons = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Logo colorClass="text-white" />
            <p className="text-slate-300 max-w-xs">
              Revolutionizing football transfers with direct club-to-club connections
              and advanced player intelligence globally.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">contact@footballconnect.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">+44 (0) 20 1234 5678</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>© {currentYear} Football Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;