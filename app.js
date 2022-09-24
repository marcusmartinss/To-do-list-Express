const express = require('express');
const checkListRouter = require('./src/routes/checklists');

require('./config/database');
// Como não está chamando em uma constante, assim que
// o app começar a rodar, ele vai rodar o arquivo
// do database completo no início

const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter);
// todas rotas que estão dentro do checkListRouter sao
// derivadas da rota anterior /checklists, sempre que
// for passar a responsabilidade para o middleware 
// tratar, só vai passar se estiver com o checklists
// antes.

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
});