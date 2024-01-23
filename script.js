//your JS code here. If required.
async function displayTextAfterDelay() {
            const textInput = document.getElementById('text');
            const delayInput = document.getElementById('delay');
            const outputDiv = document.getElementById('output');

            const userText = textInput.value;
            const userDelay = parseInt(delayInput.value);

            await new Promise(resolve => setTimeout(resolve, userDelay));

            outputDiv.textContent = userText;
        }

        document.getElementById('btn').addEventListener('click', () => {
            displayTextAfterDelay();
        });

