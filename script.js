//Generate Pin 
document.getElementById('generate_clicker').addEventListener('click', function () {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9999);
    document.getElementById('generate_input').value = generateRandomNumber;
});
// Submit button
document.getElementById('generateSubmit').addEventListener('click', function () {
    const generateInput = document.getElementById('generate_input').value;
    const generateOutput = document.getElementById('generate_output').value;
    if (generateInput === generateOutput) {
        const submitOutputDone = document.getElementById('outputDone');
        submitOutputDone.style.display = 'block';
        document.getElementById('generate_input').value = ' ';
        document.getElementById('generate_output').value = ' ';
    }

    if (generateInput !== generateOutput) {
        const submitOutputError = document.getElementById('outputError');
        submitOutputError.style.display = 'block';
    }
});