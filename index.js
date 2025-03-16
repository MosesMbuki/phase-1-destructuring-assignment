// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructure animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Destructure four animals
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Destructure three animal colors
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Destructure all seven colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure six colors using initials
const [r, o, y, g, b, , v] = colors;

// 6. Destructure only indigo
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructure nestedMuppet
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;
