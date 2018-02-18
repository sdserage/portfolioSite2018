require('dotenv').config();
const express       = require('express')
    , bodyParser    = require('body-parser')
    , cors          = require('cors')
/* Set Port */
const PORT = process.env.PORT || 3010
/* Create express app */
const app = express();
/* Middleware */
// static
app.use(express.static(`${__dirname}/..`));
// cors
app.use(cors());
// body-parser
app.use(bodyParser.json());


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });
