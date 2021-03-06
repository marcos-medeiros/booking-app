# AeroTest App


## Contents

* [About](#about)
* [How to install](#install)
* [How to test](#test)
* [Used tools](#tools)
* [Next features](#next-features)
* [Author](#author)

<a name="about"></a>
## About

This project is a booking app made with React JS, Redux, and deployed with Heroku. It is a platform to check aircraft models ans specs and schedule Test Flights.

![Screenshot](screenshot.png?raw=true "AeroTest App")


[Live Demo](https://aerotest-app.herokuapp.com/)


<a name="install"></a>
## How to install

Clone the repository:
- `git clone https://github.com/marcos-medeiros/booking-app.git`

Start the rails server:

- `cd api-server/`
- `bundle`
- `rails db:setup`
- `rails s`

The server will be hosted at localhost:3001.

Now, move to the root directory and start the react client:

- `cd client/`
- `npm i`
- `npm start`

Open your browser at localhost:3000

<a name="test"></a>
## How to test

After the install process:

- `cd api-server/`
- `rails spec`

<a name="tools"></a>
### Used tools

This project was built using these technologies.

- React
- Redux
- Heroku
- Babel
- Webpack
- HTML
- CSS3

<a name="next-features"></a>
## Next Features

- Implement a schedule table for each aircraft that enables the user to see which time blocks are available for that aircraft (Cross data from all users to make sure which time blocks are available and which are not).

<a name="author"></a>
## Author

👤 **Marcos Medeiros**

- Github: [@marcos-medeiros](https://github.com/marcos-medeiros)
- Twitter: [@mrcsmedeiros](https://twitter.com/mrcsmedeiros)
- Linkedin: [Marcos Medeiros](https://www.linkedin.com/in/marcosmedeiros-dev/)
- Email: [mvsmdrs@protonmail.com](mvsmdrs@protonmail.com)
