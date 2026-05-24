import { useState } from 'react';

function App() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'UI/UX Design',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-100">
      {/* Stars Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[70%] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[15%] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[80%] left-[80%] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[50%] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[40%] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-3xl w-full">
          {/* Profile Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-700/50 p-8 md:p-12 transition-all duration-300 hover:shadow-cyan-500/10">
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-lg shadow-cyan-500/50">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      JD
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 shadow-lg"></div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                John Doe
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Full-Stack Developer & Designer
              </p>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <p className="text-gray-300 text-center leading-relaxed text-lg">
                Passionate about crafting beautiful, user-centric web experiences. I specialize in building modern applications with React, TypeScript, and cutting-edge technologies. When I'm not coding, you'll find me exploring new design trends and contributing to open-source projects.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm font-medium text-cyan-300 hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group relative"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-slate-700/50 border border-slate-600 flex items-center justify-center transition-all duration-300 ${
                      hoveredLink === link.name
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-transparent scale-110 shadow-lg shadow-cyan-500/50'
                        : 'hover:border-cyan-500/50 hover:bg-slate-700'
                    }`}
                  >
                    <div className={`transition-all duration-300 ${
                      hoveredLink === link.name ? 'text-white scale-110' : 'text-gray-300 group-hover:text-cyan-400'
                    }`}>
                      {link.icon}
                    </div>
                  </div>
                  <span
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      hoveredLink === link.name
                        ? 'opacity-100 translate-y-0 text-cyan-400'
                        : 'opacity-0 translate-y-2 text-gray-400'
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Footer Text */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                Let's build something amazing together
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;