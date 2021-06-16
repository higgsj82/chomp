# Chomp App
### The Chomp App is a tiny app that takes in a string of any size and munches it down returning a string made up of every 3rd letter of the original input string.

![cookie monster](https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif)

This Javascript backend app is built using Node, Express, and Mongoose. It leverages a non-relational MongoDB database that saves input strings and the correspoding chomped string. My model looks like this:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = Schema({
    input: {
        type: String,
        required: true
    },
    chomped: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = Word = mongoose.model('Word', WordSchema);
```

## Let the Munching Begin
1. Download this repository
2. Open a terminal, make sure you're in chomp directory, and run `npm install` to install packages
3. Then start the server by running `npm run server`
