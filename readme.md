<h1 align="center">INVOICE</h1>

[![Node JS](https://img.shields.io/badge/Dependencies-Express%20JS-green)](https://nodejs.org/en/)
![GitHub repo size](https://img.shields.io/github/repo-size/defri-ansyah/Invoice-backend)
![GitHub contributors](https://img.shields.io/github/contributors/defri-ansyah/Invoice-backend)
![GitHub stars](https://img.shields.io/github/stars/defri-ansyah/Invoice-backend)
![GitHub forks](https://img.shields.io/github/forks/defri-ansyah/Invoice-backend)

<p align="center">
  <a href="https://nodejs.org/" target="blank">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

## Table of Contents
* [Prerequiste](#Prerequiste)
* [Installation](#Installation)
* [Create Environment Variable](#create-environment-variable)
* [Start Development Server](#Start-Development-Server)
* [Postman Collection](#Postman-Collection)
* [API Endpoint](#API-Endpoint)
* [About Project](#About-Project)
* [Related Project](#Related-Project)
* [Contact](#Contact)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/).
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/)
- Express.js - Download and Install [Express.js](https://expressjs.com/)
- Sequelize.js - Download and Install [Sequelize.js](https://sequelize.org/)

## Installation
### Clone
```
$ git clone https://github.com/defri-ansyah/Invoice-backend.git
$ cd Invoice-backend
$ npm install
```

## Create Environment Variable

```
PORT = YOUR_PORT
BASE_URL = YOUR_BASE_URL
SECRET_KEY = YOUR_SECRET_KEY_FOR_JWT
EMAIL_USERNAME = YOUR_EMAIL 
EMAIL_PASSWORD = YOUR_PASSWORD
```

### Start Development Server
```
$ npm run dev
```
## Link Collection Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3d20c27d5665c78c5037)

## API Endpoint
### Auth Endpoint
| No  | HTTP Method | URI                                           | Operation                                  |
| --- | ----------- | --------------------------------------------- | ------------------------------------------ |
| 1   | POST        | /api/auth/signup                              | Register new user                          |
| 2   | POST        | /api/auth/login                               | login user                                 |
| 3   | POST        | /api/auth/forgot-password/request             | Request forgot password via email          |
| 4   | POST        | /api/auth/forgot-password/new-password/:token | Forgot password                            |
| 5   | PATCH       | /api/auth/edit-password                       | Edit password from profile user            |

### Invoice Endpoint
| No  | HTTP Method | URI                              | Operation                                  |
| --- | ----------- | -------------------------------- | ------------------------------------------ |
| 1   | POST        | /api/invoice                     | Create Invoice                             |
| 2   | PATCH       | /api/invoice/edit                | update Invoice                             |
| 3   | DELETE      | /api/invoice/:id                 | Delete Invoice                             |
| 4   | GET         | /api/invoice/                    | Get all invoice                            |
| 5   | GET         | /api/invoice/:id                 | Get detail invoice                         |
| 6   | GET         | /api/invoice/report              | Get invoice report                         |

## About Project
Website Application for manage invoice

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
1. Create your Feature Branch  ```git checkout -b [feature]```
2. Commit your Changes ```git commit -m 'Add some feature'```
3. Push to the Branch ```git push origin [feature]```
4. Open a Pull Request

## Related Project
* [`Frontend Invoice`](https://github.com/ArbiNMaki/Invoice-frontend)

## Contact
- Email - defriansyah013@gmail.com
- LinkedIn - [Defri Ansyah](https://linkedin.com/in/defri-ansyah/)

---
Copyright © 2021 [Defri Ansyah](https://github.com/defri-ansyah)