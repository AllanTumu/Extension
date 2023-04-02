# ChatGPT Test Case Generator Chrome Extension

This Chrome extension utilizes OpenAI's GPT model to generate human-readable test cases based on user input. The test cases are categorized into positive, negative, and edge cases, making it easier to understand and validate various scenarios.

## Features

- Generate test cases from user input
- Categorize test cases into positive, negative, and edge cases
- Display test cases in a user-friendly, human-readable format

## Files

- `background.js`: Handles communication with the OpenAI API and processes the generated test cases
- `popup.js`: Manages the user interface, capturing user input and displaying the generated test cases
- `tab.html`: Contains the HTML structure for the extension's popup window
- `styles.css`: Contains the CSS styles for the extension's popup window

## Installation

1. Clone this repository:

`git clone https://github.com/AllanTumu/Extension.git`

2. Open Google Chrome and navigate to `chrome://extensions`.

3. Enable "Developer mode" by toggling the switch in the top right corner of the page.

4. Click "Load unpacked" and select the folder containing the cloned repository.

5. The extension should now be installed and visible in your Chrome toolbar.

## Usage

1. Click on the extension's icon in the Chrome toolbar to open the popup window.

2. Enter the text for which you want to generate test cases in the input box.

3. Click the "Generate Test Cases" button, and the extension will display the generated test cases, categorized into positive, negative, and edge cases.

Please note that this extension requires an API key from OpenAI to function. Replace the `apiKey` variable in the `background.js` file with your own API key before using the extension.