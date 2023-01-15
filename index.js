var readlineSync = require('readline-sync')

var score = 0
const questions = [
  {
    id: 1,
    q: 'Grand Central Terminal, Park Avenue, New York is the world\'s',
    options: [
      'Largest railway station',
      'None of the above',
      'Longest railway station',
      'Highest railway station'
    ],
    a: 'Largest railway station',
  },
  {
    id: 2,
    q: 'Entomology is the science that studies',
    options: [
      'Behavior of human beings',
      'Insects',
      'The origin and history of technical and scientific terms',
      'The formation of rocks'
    ],
    a: 'Insects'
  },
  {
    id: 3,
    q: 'For which of the following disciplines is Nobel Prize awarded?',
    options: [
      'Physics and Chemistry',
      'Physiology or Medicine',
      'Literature, Peace and Economics',
      'All of the above'
    ],
    a: 'All of the above'
  },
  {
    id: 4,
    q: 'The reaction which converts sugar solution into alcohol is an example of',
    options: [
      'hydrogenation',
      'fermentation',
      'hydrolysis',
      'saponification'
    ],
    a: 'fermentation'
  },
  {
    id: 5,
    q: 'The Scottish bacteriologist who discovered penicillin was',
    options: [
      'Alexander Fleming',
      'Albert Einstein',
      'Archimeder',
      'Aryabhatta'
    ],
    a: 'Alexander Fleming'
  },
  {
    id: 6,
    q: 'The Homolographic projection has the correct representation of',
    options: [
      'shape',
      'area',
      'baring',
      'distance'
    ],
    a: 'area'
  },
  {
    id: 7,
    q: 'The latitudinal differences in pressure delineate a number of major pressure zones, which correspond with',
    options: [
      'zones of climate',
      'zones of oceans',
      'zones of land',
      'zones of cyclonic depressions'
    ],
    a: 'zones of climate'
  },
  {
    id: 8,
    q: 'The higher the wind speed and the longer the fetch or distance of open water across which the wind blows and waves travel, the ____ waves and the ____ energy they process.',
    options: [
      'larger, less',
      'larger, more',
      'smaller, more',
      'smaller, less'
    ],
    a: 'larger, more'
  },
  {
    id: 9,
    q: 'Which of the following is not a kharif crop?',
    options: [
      'Jute',
      'Maize',
      'Mustard',
      'Rice'
    ],
    a: 'Mustard'
  },
  {
    id: 10,
    q: 'The tertiary winds on the north of the Alps (Europe) are called',
    options: [
      'the loo',
      'the Chinook',
      'the sirocco',
      'the foehn'
    ],
    a: 'the foehn'
  },
  {
    id: 11,
    q: 'Brass gets discoloured in air because of the presence of which of the following gases in air?',
    options: [
      'Oxygen',
      'Carbon dioxide',
      'Hydrogen sulphide',
      'Nitrogen'
    ],
    a: 'Hydrogen sulphide'
  },
  {
    id: 12,
    q: 'Which of the following is a non metal that remains liquid at room temperature?',
    options: [
      'Phosphorous',
      'Helium',
      'Chlorine',
      'Bromine'
    ],
    a: 'Hydrogen sulphide'
  },
  {
    id: 13,
    q: 'Atoms are composed of',
    options: [
      'electrons and protons',
      'electrons only',
      'protons only',
      'electrons and nuclei'
    ],
    a: 'electrons and nuclei'
  },
  {
    id: 14,
    q: 'In an atomic explosion, enormous energy is released which is due to',
    options: [
      'conversion of chemical energy into heat energy',
      'conversion of mechanical energy into nuclear energy',
      'conversion of neutrons into protons',
      'conversion of mass into energy'
    ],
    a: 'conversion of mass into energy'
  },
  {
    id: 15,
    q: 'Who is the father of Geometry?',
    options: [
      'Euclid',
      'Aristotle',
      'Pythagoras',
      'Kepler'
    ],
    a: 'Euclid'
  },
  {
    id: 16,
    q: 'The Indian to beat the computers in mathematical wizardry is',
    options: [
      'Ramanujam',
      'Rina Panigrahi',
      'Raja Ramanna',
      'Shakunthala Devi'
    ],
    a: 'Shakunthala Devi'
  },
  {
    id: 17,
    q: 'Which of the following is NOT a type of expansion slot or bus design used in Advanced-Technology class systems?',
    options: [
      'PCMCIA',
      'ISA',
      'PROM',
      'EISA'
    ],
    a: 'PROM'
  },
  {
    id: 18,
    q: '\'.MOV\' extension refers usually to what kind of file?',
    options: [
      'Image file',
      'Animation/movie file',
      'Audio file',
      'MS Office document'
    ],
    a: 'Animation/movie file'
  },
  {
    id: 19,
    q: 'Radiocarbon is produced in the atmosphere as a result of',
    options: [
      'collision between fast neutrons and nitrogen nuclei present in the atmosphere',
      'action of ultraviolet light from the sun on atmospheric oxygen',
      'action of solar radiations particularly cosmic rays on carbon dioxide present in the atmosphere',
      'lightning discharge in atmosphere'
    ],
    a: 'collision between fast neutrons and nitrogen nuclei present in the atmosphere'
  },
  {
    id: 20,
    q: 'The absorption of ink by blotting paper involves',
    options: [
      'viscosity of ink',
      'capillary action phenomenon',
      'diffusion of ink through the blotting',
      'siphon action'
    ],
    a: 'capillary action phenomenon'
  },
]

// console.log(questions[0].a.length)
// console.log('\'.MOV\' extension refers usually to what kind of file?')

function welcome() {
  var userName = readlineSync.question('Enter your user name: ')

  console.log(`Welcome ${userName}
-------------------------------
This is a multi-choise question quiz game you have to write the right answer from the options`)
}

function shuffleArray(array) {
  // for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  // }
  const shuffle = () => 0.5 - Math.random();

  const testQuestions = array.map(q => ({
    ...q,
    options: q.options.sort(shuffle) // this one shuffles the answers...
  })).sort(shuffle) // ...and this one shuffles the questions.

  return testQuestions

}

function game() {
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].id)
  }
}

console.log(shuffleArray(questions))
// console.log(shuffleArray(questions[19].options))
// game()