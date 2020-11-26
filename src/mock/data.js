import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'margaux.dev', // e.g: 'Name | Developer'
  lang: 'nl', // e.g: en, es, fr, jp
  description: 'creative developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Margaux Laurier',
  subtitle: 'Creative Developer',
  cta: '👩🏻‍💻',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi! Mijn naam is Margaux Laurier en ik omschrijf mezelf het liefst als een Creative Developer.',
  paragraphTwo: 'Momenteel studeer ik Grafische en Digitale Media aan de AP Hogeschool, maar ik wist al snel dat mijn grootste interesse bij het coderen lag. Ik koos daarom ook dit jaar voor het keuzevak Advanced Front-end Coding en zette zo mijn eerste stappen in de React wereld. In de toekomst wil ik me graag toespitsen op custom built React Native websites en uitdagende projecten.',
  paragraphThree: 'En ja, wat kan ik voor u betekenen? Heel veel als het van uw wensen afhangt! Ik bouw websites die er goed uitzien, goed werken én goed scoren in Google door rekening te houden met de nieuwste technologieën.',
  resume: 'cv.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'madamemoustache.jpg',
    title: 'Madame Moustache',
    info: 'Wordpress Website met Google Analytics',
    info2: 'Madame Moustache is een kapster aan huis. Ze maakt het haar klanten graag gemakkelijk en vroeg dus om een afspraaktool te integreren in de website, met e-mail meldingen voor zowel klant als kapster. Via Google Analytics is het mogelijk om de bezoekers van de website te leren kennen.',
    url: 'https://madamemoustachebarber.be/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'contacteer mij voor meer info',
  btn: 'naar de mailbox!',
  email: 'info@margaux.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/margaux-laurier/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mmargauxx/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
