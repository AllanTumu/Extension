const inputTextElement = document.getElementById('inputText');
const generateButton = document.getElementById('generateButton');
const outputElement = document.getElementById('output');

generateButton.addEventListener('click', () => {
  const inputText = inputTextElement.value;
  chrome.runtime.sendMessage({ type: 'generateTestCases', text: inputText }, (response) => {
    if (response.error) {
      outputElement.innerText = `Error: ${response.error}`;
    } else if (response.testCases) {
      outputElement.innerText = response.testCases;
    }
  });
});
