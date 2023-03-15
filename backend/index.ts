import express from 'express';
import cors from 'cors';

import movieRouter from './routes/movies';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/movies', movieRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
