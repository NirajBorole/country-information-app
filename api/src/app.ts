import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello') 
})
app.get('/country', (req: Request, res: Response) => {
    try {
        res.sendFile(path.join(__dirname, 'public', 'data.json'));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(5000, () => {console.log('Listening to 5000')}) 