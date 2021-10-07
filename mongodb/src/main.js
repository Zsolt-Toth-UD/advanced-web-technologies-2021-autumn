const mongoose = require('mongoose');
// const dbName = 'leaderboard';
const connectionString = `mongodb://localhost:27017/leaderboard`;

mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        auth: {
            authSource: 'admin'
        },
        user: 'root', pass: 'secret'
    })
    .then(()=>{
        const playerSchema = new mongoose.Schema({
            username: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            }
        });

        const player = mongoose.model('players', playerSchema);

        console.log(player);
        player.find().then(doc => console.log(doc)).catch(err => console.error(err));
        // player.find().then((players) => console.log(players));

        // mongoose.disconnect();

    })
    .catch((reason) => {
        console.error(reason);
        console.error(reason.message);
    });

