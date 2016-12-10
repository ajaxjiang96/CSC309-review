let express = require('express');
let review = require('./routes.js');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let nunjucks = require('nunjucks');
let session = require('express-session');
let LocalStrategy = require('passport-local').Strategy;


let app = express();
nunjucks.configure('views', {autoescape: true, express: app});

app.use(express.static(path.join(__dirname, 'assets')));
app.use(session({secret: 'doodoodoo'}));
app.use(logger('dev'));


app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});
// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.listen(process.env.PORT||3000, function () {
    console.log('Listening on port 3000');
});



/**Routing functions go here**/
// Get the index page:
app.get('/', (req, res) => {
    //console.log(req.user.username);
    if (req.user !== undefined) {
        doo.getAllEvents(req, res);
    } else {
        res.redirect('/201504Q2');
    }
});

app.get("/201504Q2", (req, res) => {
    res.render("201504Q2.html")
});
app.post("/201504Q2", review.Q201504Q2);
