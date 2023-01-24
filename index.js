import { cwd } from 'node:process';
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: cwd() });
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
