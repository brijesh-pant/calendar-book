<p align="center">
    <h3 align="center">Calendar book<br></h3>
</p>

### What tech stack is used

* React 16
* Webpack 3
* React Router 4
* SCSS
* Babel Cli
* Hot Module Reloading

### Features

* shows overflow dates at the start and end of the month, if applicable
* month dropdown for changing the month
* year dropdown for changing the year
* previous + next arrows for moving between months
* default to the current month
* After changing the month and refreshing the page, the same month is shown (updates the URL on moving between months)
* handle url validation for month and year parameters, redirects to index page if url is invalid

* Simple src/index.jsx.
* Webpack configuration for development (with hot reloading) and production (with minification).
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/brijesh-pant/calendar-book.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Eslint
There is a `.eslint.yaml` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
