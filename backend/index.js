const randomString = require('randomstring');

const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

router.get('/:length', (req, res) => {
  const length = req.params.length;
  const random_password = randomString.generate(parseInt(length));

  return res.json({
    random_password: random_password
  });
});

app.use('/', router);

const port = 3000;
app.listen(port, () => {
  console.log(`> Server on: http://localhost:${port}`);
});