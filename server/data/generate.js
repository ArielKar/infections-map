/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const getRandomTime = () => {
    const now = new Date();
    const nowUnix = now.getTime();
    const monthAgoUnix = now.setMonth(now.getMonth() - 1);
    return Math.random() * (nowUnix - monthAgoUnix) + monthAgoUnix;
};

const getRandomCoordinates = () => {
    const longitude = (Math.random() * 360 - 180).toFixed(8);
    const latitude = (Math.random() * 180 - 90).toFixed(8);
    return [longitude, latitude];
};

const users = {};
const infections = {};
let userCount = 1;
while (userCount <= 5) {
    const user = {
        id: userCount,
        fname: 'John',
        lname: 'Doe'
    };
    users[userCount] = user;
    userCount++;
}

const infectionsList = Array(10000).fill(null);
infections[1] = infectionsList.map(() => {
    const [lon, lat] = getRandomCoordinates();
    return ({
        location: {
            lon,
            lat,
        },
        datetime: new Date(getRandomTime()).toISOString()
    });
});

fs.promises.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(users))
    .then(() => console.log('Users data created'));
fs.promises.writeFile(path.join(__dirname, 'infections.json'), JSON.stringify(infections))
    .then(() => console.log('Infections data created'));










