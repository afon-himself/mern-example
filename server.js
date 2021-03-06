const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3030, () => {
    console.log('Server is running on 3030');
})