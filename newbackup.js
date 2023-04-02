// const apiKey = 'D6lZ8OzEDollOsIYlfV4T3BlbkFJRMexeVK3MFO7qKWh3zLZ';
const apiKey = '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';
//Just keeping the api key headers

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'generateTestCases') {
    generateTestCases(request.text)
      .then((testCases) => sendResponse({ testCases }))
      .catch((error) => sendResponse({ error }));
    return true; // Required to use sendResponse asynchronously
  }
});

async function generateTestCases(text) {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const prompt = `Generate test cases from the following text: ${text}`;
  const maxTokens = 50;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      max_tokens: maxTokens,
      n: 1,
      stop: null,
      temperature: 0.5,
    }),
  });

  const data = await response.json();
  if (data.choices && data.choices.length > 0) {
    return data.choices[0].text.trim();
  } else {
    throw new Error('No test cases generated. Try again.');
  }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: 'tab.html' });
  });

  