const Block = require('./block');
const Blockchain = require('./blockchain');

var block = new Block(0, 0, 0, 0);

console.log(Block.genesis());
console.log(Block.hash(0, 0, 0));
