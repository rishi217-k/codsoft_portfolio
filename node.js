const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In a real-world scenario, you'd use a database to store access requests and manage permissions.

const accessRequests = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/grant-access', (req, res) => {
    const { email } = req.body;

    // Simulate granting access by updating a user's status
    const user = accessRequests.find(request => request.email === email);
    if (user) {
        user.accessGranted = true;
        res.json({ success: true, message: 'Access granted successfully.' });
    } else {
        res.json({ success: false, message: 'User not found.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
