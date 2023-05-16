/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const next = require('next')
const createLocaleMiddleware = require('express-locale')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        // server.get('/', createLocaleMiddleware(), (req, res) => {
        //     res.redirect(`/${req.locale.language}/home`)
        // })

        server.get('/:lang/home', (req, res) => {
            const actualPage = '/'
            const queryParams = { locale: req.params.lang }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/:slug*', (req, res) => {
            const actualPage = '/content_type_1'
            const queryParams = { locale: req.params.lang }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', handle)

        server.listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })