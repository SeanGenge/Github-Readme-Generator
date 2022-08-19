const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('./controllers');

const app = express();
const PORT = process.env.port || 3001;

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log("Github readme generator listening on http://localhost:3001");
});