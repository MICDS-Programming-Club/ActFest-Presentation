const port = 1506;

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'html', 'display.html'));
});

app.listen(port, () => console.log(`Server listening on *:${port}`));
