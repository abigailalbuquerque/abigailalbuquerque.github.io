// gitprofile.config.js

const config = {
  github: {
    username: 'abigailalbuquerque', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'abigailalbuquerque',
    website: 'https://abigailalbuquerque.github.io',
    phone: '+1 603-814-0854',
    email: 'aralbuquerque@wpi.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'PostgreSQL',
    'MySQL',
    'Java',
    'C',
    'C++',
    'Git',
    'Docker',
    'Microsoft Azure Devops and ML',
    'Tableau',
    'Microsoft Office',
  ],
  experiences: [
    {
      company: 'Saint Gobain Research North America',
      position: 'Data Science Intern',
      from: 'May 2023',
      to: 'August 2023',
    },
    {
      company: 'Altair Engineering Inc.',
      position: 'Technical Sales Development Intern - Data Analytics Division',
      from: 'June 2022',
      to: 'September 2022',
      /* companyLink: 'https://example.com', */
    },
    {
      company: 'Worcester Polytechnic Institute',
      position: 'Academic Technology Center Student Staff',
      from: 'August 2021',
      to: 'Present',
    },
    {
      company: 'Worcester Polytechnic Institute',
      position: 'Research Solutions Institute Student Helper',
      from: 'April 2022',
      to: 'Present',
    },
    {
      company: 'Worcester Polytechnic Institute',
      position: 'Sustainability Intern',
      from: 'August 2021',
      to: 'May 2022',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Worcester Polytechnic Institute',
      degree: 'Master of Science - Computer Science',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Worcester Polytechnic Institute',
      degree: 'Bachelor of Science - Data Science',
      from: '2020',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     // title: 'Project Name',
  //     // description:
  //     //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     // imageUrl: 'https://via.placeholder.com/250x250',
  //     // link: 'https://example.com',
  //   },
  //   {
  //     // title: 'Project Name',
  //     // description:
  //     //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     // imageUrl: 'https://via.placeholder.com/250x250',
  //     // link: 'https://example.com',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'aralbuquerque', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
