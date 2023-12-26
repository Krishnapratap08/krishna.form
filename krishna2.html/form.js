document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value;

    const response = `
        <h3>Thank you for your feedback, ${name}!</h3>
        <p>Email: ${email}</p>
        <p>Rating: ${rating}</p>
        <p>Feedback: ${feedback}</p>
    `;

    document.getElementById('response').innerHTML = response;
    document.getElementById('surveyForm').reset();
});