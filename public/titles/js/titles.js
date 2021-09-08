'use strict';

const fs = require('fs');

function getTitles() {
    let rawdata = fs.readFileSync('../titles.json');
    return JSON.parse(rawdata);
}