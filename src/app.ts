import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

import healthcheckRoutes from './controllers/healthcheckController';
import bookRoutes from './controllers/bookController';
import authorRoutes from './controllers/authorController';
import borrowRoutes from './controllers/borrowController';
import usersRoutes from './controllers/usersController';

const port = process.env['PORT'] || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

/**
 * Primary app routes.
 */
app.use('/healthcheck', healthcheckRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes)
app.use('/borrows', borrowRoutes)
app.use('/users', usersRoutes)