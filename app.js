const express = require('express');
const bodyParser = require('body-parser');
const dateUtils = require(`${__dirname}/dateUtils.js`);

const app = express();
const port = 3000;

const dayList = [];
const workList = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const day = dateUtils.getDate();
  res.render('list', { listTitle: day, newListItem: dayList });
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newListItem: workList });
});

app.post('/', (req, res) => {
  if (req.body.newItem != '') {
    if (req.body.listType === 'Work List') {
      workList.push(req.body.newItem);
      res.redirect('/work');
    } else {
      dayList.push(req.body.newItem);
      res.redirect('/');
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log('ToDoList server started successfully!');
});
