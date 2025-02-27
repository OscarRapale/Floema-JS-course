require('dotenv').config()

const express = require('express')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')

const app = express()
const path = require('path')
const port = 3000

app.use(logger('dev'))
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')

const initApi = req => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch: (url, options) => fetch(url, { ...options, headers: { ...options.headers, 'X-Request-URL': req.url } })
  })
}

const handleLinkResolver = doc => {
  if (doc.type === 'details') {
    return `/detail/${doc.slug}`
  }

  if (doc.type === 'collections') {
    return '/collections'
  }

  if (doc.type === 'about') {
    return '/about'
  }

  console.log(doc)
  // Define the url depending on the document type
  // if (doc.type === 'page') {
  //   return '/page' + doc.uid
  // } else if (doc.type === 'blog_post') {
  //   return '/blog' + doc.uid
  // }

  // Default to homepage
  return '/'
}

app.use((req, res, next) => {
  // res.locals.ctx = {
  //   endpoint: process.env.PRISMIC_ENDPOINT,
  //   linkResolver: handleLinkResolver
  // }

  res.locals.Link = handleLinkResolver

  res.locals.Numbers = index => {
    return index == 0 ? 'One' : index == 1 ? 'Two' : index == 2 ? 'Three' : index == 3 ? 'Four' : '';
  }

  res.locals.PrismicDOM = PrismicDOM

  next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest = async api => {
  const meta = await api.getSingle('seo_settings')
  const navigation = await api.getSingle('navigation')
  const preloader = await api.getSingle('preloader')

  return {
    meta,
    navigation,
    preloader
  }
}

app.get('/', async (req, res) => {
  const api = initApi(req)
  const defaults = await handleRequest(api)
  const home = await api.getSingle('home')

  const { results: collections } = await api.get({
    predicates: Prismic.predicate.at('document.type', 'collection'),
    fetchLinks: 'details.image'
  })

  res.render('pages/home', {
    ...defaults,
    collections,
    home
  })
})

app.get('/about', async (req, res) => {
  const api = initApi(req)
  const about = await api.getSingle('about')
  const defaults = await handleRequest(api)

  res.render('pages/about', {
    ...defaults,
    about
  })
})

app.get('/collections', async (req, res) => {
  const api = initApi(req)
  const home = await api.getSingle('home')
  const defaults = await handleRequest(api)

  const { results: collections } = await api.get({
    predicates: Prismic.predicate.at('document.type', 'collection'),
    fetchLinks: 'details.image'
  })

  res.render('pages/collections', {
    ...defaults,
    collections,
    home
  })
})

app.get('/detail/:uid', async (req, res) => {
  const api = initApi(req)
  const defaults = await handleRequest(api)

  const product = await api.getByUID('details', req.params.uid, {
    fetchLinks: 'collection.title'
  })

  //console.log(product)

  res.render('pages/detail', { 
    ...defaults,
    product
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
