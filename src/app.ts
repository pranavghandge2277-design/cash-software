import Fastify from 'fastify'
import cors from '@fastify/cors'
import path from 'path'
import fastifyStatic from '@fastify/static'

import cashRoutes from './modules/cash/cash.route'
import transactionRoutes from './modules/transaction/transaction.route'
import reportRoutes from './modules/report/report.route'
import todayRoutes from './modules/cash/cash.today.route'

const app = Fastify()

// 👉 CORS
app.register(cors, {
  origin: "*"
})

// 👉 Static frontend (IMPORTANT)
app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
  prefix: '/'
})


app.setNotFoundHandler((req, reply) => {
  reply.sendFile('index.html')
})

// 👉 Routes
app.register(todayRoutes)
app.register(cashRoutes)
app.register(transactionRoutes)
app.register(reportRoutes)

// 👉 Test route
// app.get('/', async () => {
//   return { message: "Cash Management API Running 🚀" }
// })

export default app