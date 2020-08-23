const allPhrases = [
  "Eddie The Eagle",
  "Indiana Jones And The Raiders Of The Lost Ark",
  "The Empire Strikes Back",
  "Spirited Away",
  "Jumanji",
  "Mary Poppins",
  "School Of Rock",
  "Ghostbusters",
  "The Muppet Christmas Carol",
  "Home Alone",
  "The Goonies",
  "Brewster'S Millions",
  "Back To The Future",
  "Harry Potter And The Prisoner Of Azkaban",
  "The Lion King",
  "Finding Nemo",
  "The Wizard Of Oz",
  "The Sound Of Music",
  "Beauty And The Beast",
  "Despicable Me",
  "The Nightmare Before Christmas",
  "How To Train Your Dragon",
  "Alice In Wonderland",
  "Labyrinth"
];

const shuffle = (arr) => {
  var result = [...arr];
  var temp, newIndex;
  for (let currIndex = 0; currIndex < result.length; currIndex++){
    newIndex = Math.floor(Math.random() * result.length);
    temp = result[newIndex];
    result[newIndex] = result[currIndex];
    result[currIndex] = temp;
  }
  return result;
}

var currentPhrases = [];

const getPhraseLocal = () => {
  if (currentPhrases.length === 0){
    currentPhrases = shuffle([...allPhrases]);
  }
  return currentPhrases.pop();
}

const getPhrase = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(getPhraseLocal())
      }, 1000);
    }
    catch {
      reject("Something went wrong");
    }
  });  
}

export default getPhrase;