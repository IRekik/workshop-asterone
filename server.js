const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.post('/api/authenticateUser', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.send({
      message: 'ユーザー名またはパスワードが不正です',
    });
  }

  res.send({
    message: 'ユーザー認証が成功しました。',
  });
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));