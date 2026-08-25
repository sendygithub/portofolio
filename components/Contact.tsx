import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  AtSign,
  MessageSquare,
  Music,
} from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sendy.lazada@gmail.com",
  },
  {
    name: "GitHub",
    icon: Globe,
    url: "https://github.com/sendygithub",
  },
  {
    name: "LinkedIn",
    icon: ExternalLink,
    url: "https://linkedin.com/in/sendy-andreansah",
  },
  {
    name: "Instagram",
    icon: AtSign,
    url: "https://instagram.com/sendyandreansah",
  },
  {
    name: "Facebook",
    icon: MessageSquare,
    url: "https://facebook.com/sendy.andreansah",
  },
  {
    name: "TikTok",
    icon: Music,
    url: "https://tiktok.com/@sendyandreansah",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto font-body">
            Open for collaborations, freelance opportunities, or just a coffee
            chat.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Info Side */}
          <div className="card border border-secondary/10">
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary/20 rounded-sm flex items-center justify-center">
                  <Mail className="text-tertiary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-secondary">
                    Email
                  </p>
                  <p className="font-body text-primary">
                    sendy.lazada@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary/20 rounded-sm flex items-center justify-center">
                  <MapPin className="text-tertiary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-secondary">
                    Location
                  </p>
                  <p className="font-body text-primary">Banten, Indonesia</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-label uppercase tracking-widest text-secondary mb-4">
                Connect With Me
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 bg-surface border border-secondary/20 hover:bg-tertiary hover:border-tertiary rounded-sm transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon
                        className="text-secondary group-hover:text-on-primary"
                        size={16}
                      />
                      <span className="text-xs font-label uppercase tracking-widest text-secondary group-hover:text-on-primary">
                        {social.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            className="card border border-secondary/10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-surface border border-secondary/20 px-4 py-3 text-primary font-body focus:outline-none focus:border-tertiary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-surface border border-secondary/20 px-4 py-3 text-primary font-body focus:outline-none focus:border-tertiary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-secondary">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-surface border border-secondary/20 px-4 py-3 text-primary font-body focus:outline-none focus:border-tertiary transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button className="w-full py-4 bg-tertiary text-on-primary font-label uppercase tracking-widest text-xs hover:bg-tertiary/90 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
