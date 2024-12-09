const phrases = ["Software Developer.", "Flutter Developer."];
const pushLetterDelay = 150;
const popLetterDelay = pushLetterDelay / 2; 
const pauseTime = 1000;
const typingElement = document.querySelector(".typing");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pushLetter = async (letter) => {
	typingElement.textContent += letter;
}

const popLetter = async () => {
	typingElement.textContent = typingElement.textContent.slice(0,-1);
}

const typePhrase = async (phrase) => {
	for (const letter of phrase) {
		await delay(pushLetterDelay);
		pushLetter(letter);
	}
}

const backspacePhrase = async (phrase) => {
	for (const letter of phrase) {
		popLetter(letter);
		await delay(popLetterDelay);
	}
}

const typePhrases = async () => {
	for (const phrase of phrases) {  
	  await typePhrase(phrase);
	  await delay(pauseTime);
	  await backspacePhrase(phrase);
	  await delay(pauseTime);
	}
}

new Promise(
	async () => 
	{
		while(true)
		{
			await typePhrases();
		}
	}
)
