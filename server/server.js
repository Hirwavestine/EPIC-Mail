import express from 'express';
import Message from './routes/Message';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})
app.use('/api/v1', Message);


app.listen(3000)
console.log('app running on port ', 3000);

export default app