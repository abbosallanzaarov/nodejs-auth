import express from 'express'
import cors  from 'cors'
import authRoutes from './routes/auth.routes'
import photosRoutes from './routes/photos.routes'
import path from 'path'

const app = express()
//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')))

app.use('/auth', authRoutes)
app.use('/photo', photosRoutes)

// run server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...')
})