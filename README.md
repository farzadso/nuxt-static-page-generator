# Nuxt Static Page Generator

> This is an example project based on Nuxt.js that generates static semi-blog pages and also handles dynamic routes.

> You can use this project a a boilerplate for the above mentioned functionality.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Code Setup

### API Call Setup

This project calls an API of my own. You can replace the API url with any API returning any amount of HTML.

To do so you can edit the url in **"_route2.vue"** which lies in the directory below :

``` bash
/pages/_route1/_route2.vue
```

To test my API, these are valid routes :

```
http://localhost:3000/vuejs/1
http://localhost:3000/vuejs/2
```

Whereas testing this route `http://localhost:3000/vuejs/3` or any other number other than 1 or 2 leads to an error, as my API returns 404 (Not Found).

### Routing Errror Handling

Whenever an error occurs in routing, the user gets redirected to the Error page via the **asyncData** function.

```javascript
asyncData ({ params, error }) {
      return axios.get(url)
        .then((response) => {
            // Do something
            return {
            // Return some parameters into the data object of your component
          }
        })
        .catch(() => {
            // Render the error page
            error({
            statusCode: 404,
            message: 'Post Not Found'
            })
        })
    }
```