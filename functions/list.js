const colors = require('colors/safe');

const listFn = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    if (!base) {
      reject('Base is required.');
      return;
    }

    let data = '';

    for (let i = 0; i <= limit; i++) {
      data += (`${colors.red('---------')}\n${base} * ${i} = ${base * i}\n`);
    }

    resolve(data);
  })
};

module.exports = listFn;