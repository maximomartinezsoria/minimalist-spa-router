# Minimalist router SPA

A vanilla JavaScript based router for SPAs such as Vue Router or React Router.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Clone this repository

```
git clone
```

To keep it simple, the project use the `http-server-spa` package wich serves our SPA in a local server.

```
npm install
```

Finally, run the app.

```
npm start
```

## Usage

### Define routes

All routes are defined in `/router/routes.js` file.

Example:

```
const routes = [
    {
        path: '/',
        template: '<h1>Home</h1>'
    },
    {
        path: '/about',
        template: '<h1>About</h1>'
    },
    {
        path: '/contact',
        template: '<h1>Contact</h1>'
    },
    {
        path: '/404',
        template: '<h1>Not found</h1>'
    },
]
```

**Note:** last element in the array it will be the default route for not found urls.

### Go to routes

This step is very simple. You just need to call the `loadRoute` method with the url path that you want to render.

Example:

```
<button onclick="router.loadRoute('about')">About</button>
```

## Authors

- **Maximo Martinez Soria** - _Frontend developer_ - [maximomartinezsoria](https://github.com/maximomartinezsoria)

## License

This project is licensed under the MIT License.
