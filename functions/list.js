const colors = require('colors');

const listFn = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    if (!base) {
      reject('Base is required.');
      return;
    }

    let data = '';

    for (let i = 0; i <= limit; i++) {
      data += (`${base} * ${i} = ${base * i}\n`.green);
    }

    resolve(data);
  })
};

module.exports = listFn;