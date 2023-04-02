const apiKey = "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";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'generateTestCases') {
    generateTestCases(request.text)
      .then((testCases) => sendResponse({ testCases }))
      .catch((error) => sendResponse({ error: error.message }));
    return true;
  }
});

async function generateTestCases(text) {
  const url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  const prompt = `Provide a detailed description of the functionality "${text}", please generate a maximum  detailed test cases in the following format:

  Scenario: ${text}
  Test Cases:
  `;

  const maxTokens = 500;
  const temperature = 0.5;

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
      temperature: temperature,
    }),
  });

  const data = await response.json();
  if (data.choices && data.choices.length > 0) {
    const rawText = data.choices[0].text.trim();
    const testCases = rawText;
    return testCases;
  } else {
    throw new Error('No test cases generated. Try again.');
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: 'tab.html' });
});


