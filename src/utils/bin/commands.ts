// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help - Organized List of Commands
export const help = async (args: string[]): Promise<string> => {
  return `Welcome to Alienfader's Terminal! 👽🛸

📌 **General Commands**
  - help       → Display available commands
  - banner     → Show the welcome banner
  - sumfetch   → Display a user summary
🔗 **Redirection Commands**
  - repo       → Open the GitHub repository
  - resume     → Open my latest resume
  - readme     → Open the GitHub README file
👤 **About & Contact**
  - about      → Learn more about me
  - email      → Contact me via email
  - github     → Open my GitHub profile
  - linkedin   → Open my LinkedIn profile
💰 **Donation Commands**
  - donate     → Support my work (PayPal/Patreon)
🌎 **Web Search**
  - google <query>     → Search Google
  - duckduckgo <query> → Search DuckDuckGo
  - bing <query>       → Search Bing
  - reddit <query>     → Search Reddit
🔧 **System & Linux Commands**
  - echo <text>  → Output text
  - whoami       → Show your username
  - ls           → List files (mock command)
  - cd           → 'nope.' (mock command)
  - date         → Show current date/time
  - vi, vim, nvim, emacs → Fun text editor responses
  - sudo         → Permission denied (and a surprise 😆)
💻 **Skills & Knowledge**
  - skills      → Show my cybersecurity and programming skills
🤣 **Fun & Entertainment**
  - joke       → Get a random programming joke
✨ **Shortcuts**
  - [tab]       → Autocomplete commands
  - [ctrl+l]    → Clear the terminal

Type 'sumfetch' to display a summary.
`;
};
// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};


// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my coffee addiction:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};
export const theme = async (args: string[]): Promise<string> => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    return "Switched to light theme.";
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    return "Switched to dark theme.";
  }
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
.ssh
root
secret_files
NASA_rejection_letter.pdf`;
};
export const skills = async (args: string[]): Promise<string> => {
  return `My Skills:
-Cybersecurity & Red Teaming: Penetration Testing, Threat Hunting, Incident Response, Vulnerability Assessments
-Offensive Security Tools: Metasploit, Cobalt Strike, Burp Suite, Nmap, Wireshark, SQLmap, Hydra, John the Ripper
-Defensive Security & Monitoring: SIEM (Splunk, Elastic), EDR (CrowdStrike, SentinelOne), IDS/IPS (Snort, Suricata)
-Programming & Scripting: Python, Bash, PowerShell
-Exploit Development & Reverse Engineering: Ghidra, IDA Pro, Assembly, Binary Exploitation
-Cloud & Network Security: AWS, Azure, Firewalls, VPNs, Proxies, Network Traffic Analysis
-DevSecOps & Automation: CI/CD Security, GitHub Actions, Docker, Kubernetes, Ansible
-Capture The Flag (CTF) & Ethical Hacking: Web Exploitation, Privilege Escalation, Cryptography, Reverse Engineering
-Compliance & Frameworks: MITRE ATT&CK, NIST 800-53, Cyber Kill Chain, ISO 27001
`;
};
export const cd = async (args: string[]): Promise<string> => {
  return `nope.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://youtu.be/g_vZasFzMN4?si=EpRlxTl6k3AZo1JO', '_blank'); // ...I'm sorry
  return `Permission denied: Silly user.`;
};
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "There are 10 types of people in the world: those who understand binary and those who don’t.",
  "Why don’t programmers like nature? It has too many bugs.",
];

export const joke = async (args: string[]): Promise<string> => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  return randomJoke;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
    e Y8b     888     888 888'Y88 Y88b Y88 888'Y88   e Y8b     888 88e   888'Y88 888 88e  
   d8b Y8b    888     888 888 ,'Y  Y88b Y8 888 ,'Y  d8b Y8b    888 888b  888 ,'Y 888 888D 
  d888b Y8b   888     888 888C8   b Y88b Y 888C8   d888b Y8b   888 8888D 888C8   888 88"  
 d888888888b  888  ,d 888 888 ",d 8b Y88b  888 "  d888888888b  888 888P  888 ",d 888 b,   
d8888888b Y8b 888,d88 888 888,d88 88b Y88b 888   d8888888b Y8b 888 88"   888,d88 888 88b, 
                                                                                            
                                                                                            

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
