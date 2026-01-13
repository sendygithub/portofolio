import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="#beranda" className="text-2xl font-bold gradient-text">
              Sendy.
            </Link>
            <p className="text-gray-500 mt-2 text-sm max-w-xs">
              Designing and building high-performance web ecosystems with a focus on modern user experience.
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="#beranda" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors uppercase tracking-widest">Profile</Link>
            <Link href="#layanan" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors uppercase tracking-widest">Skills</Link>
            <Link href="#proyek" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors uppercase tracking-widest">Projects</Link>
          </div>

          <div className="flex gap-4">
            {["linkedin", "github", "twitter"].map(social => (
              <Link key={social} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-yellow-500/50 transition-colors">
                <i className={`ri-${social}-line text-xl`} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Sendy Andreansah. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
