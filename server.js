const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/grant-access', (req, res) => {
    const { email } = req.body;

    // Simulate granting access by updating a user's status
    // In a real-world scenario, you'd interact with a database here.
    res.json({ success: true, message: 'Access granted successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
