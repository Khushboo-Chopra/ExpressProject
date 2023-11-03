const express = require('express');
const app = express();
const port = 3000;
const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Sir Issac Newton'
    }
];

app.get('/', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }
});

app.get('/messages', (req, res) => {
    res.send('HEEEEEEYYYYYYYYYY.....');
});


app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});