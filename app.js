const express = require('express');
const path = require('path');

const checkListRouter = require('./src/routes/checklists');
const rootRouter = require('./src/routes/index');

require('./config/database');
// Como não está chamando em uma constante, assim que o app começar a rodar, ele vai rodar o arquivo do database completo no início

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklists', checkListRouter);
// Todas rotas que estão dentro do checkListRouter sao derivadas da rota anterior /checklists, sempre que for passar a responsabilidade para o middleware tratar, só vai passar se estiver com o checklists antes.

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
});