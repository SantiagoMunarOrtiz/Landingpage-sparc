import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
               <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SPARC</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            The intelligent dashboard for modern enterprises. Built with love and AI.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Features</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Security</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Integrations</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Enterprise</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-orange-400 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-orange-400 cursor-pointer transition-colors">Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
        <p className="text-gray-600 text-xs">© 2024 SPARC Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {/* Social Icons Placeholder */}
          <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors cursor-pointer" />
          <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors cursor-pointer" />
          <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;