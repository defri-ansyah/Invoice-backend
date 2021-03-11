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

### User Endpoint
| No  | HTTP Method | URI                              | Operation                                  |
| --- | ----------- | -------------------------------- | ------------------------------------------ |
| 1   | PATCH       | /api/user/edit-profile           | Edit profile user                          |
| 2   | PATCH       | /api/user/update-image           | update image user                          |
| 3   | DELETE      | /api/user/delete-image           | Delete image user                          |
| 4   | GET         | /api/user/detail                 | Get detail user                            |
| 5   | GET         | /api/user/my booking             | Get all booking user                       |

### Ticketing Endpoint
| No  | HTTP Method | URI                                     | Operation                                 |
| --- | ----------- | --------------------------------------- | ----------------------------------------- |
| 1   | GET         | /api/ticketing/find                     | Get find ticket                           |
| 2   | POST        | /api/ticketing/select-ticket            | Select ticket by flight route id for order|
| 3   | GET         | /api/ticketing/detail/:order_id         | Get order detail by order id & userid     |
| 4   | PATCH       | /api/ticketing/input-flight-detail      | Input flight detail by order id           |
| 5   | GET         | /api/ticketing/amount-completed-payment | Get total completed payment on admin      |

### Data look-up Endpoint
| No  | HTTP Method | URI                    | Operation               |
| --- | ----------- | ---------------------- | ----------------------- |
| 1   | GET         | /api/data-lookup/city  | Get city on find ticket |

### Airlines Endpoint
| No  | HTTP Method | URI                               | Operation                     |
| --- | ----------- | --------------------------------- | ----------------------------- |
| 1   | POST        | /api/airlines/insert-airlines     | Add new airlines on admin     |
| 2   | DELETE      | /api/airlines/delete/:id          | Delete airlines on admin      |
| 3   | GET         | /api/airlines                     | Get all airlines on admin     |
| 4   | PATCH       | /api/airlines/update-airlines/:id | Update name airlines on admin |
| 5   | GET         | /api/airlines/get-by-id/:id       | Get airlines by id on admin   |
| 6   | GET         | /api/airlines/amount              | Get total airlines on admin   |
| 7   | POST        | /api/airlines/search              | Search airlines on admin      |
| 8   | PATCH       | /api/airlines/update-logo/:id     | Update logo airlines on admin |

### Airlines Endpoint
| No  | HTTP Method | URI                               | Operation                       |
| --- | ----------- | --------------------------------- | ------------------------------- |
| 1   | POST        | /api/flightroute/insert-route     | Insert flighroutes on admin     |
| 2   | DELETE      | /api/flighroute/delete/:id        | Delete flightroutes on admin    |
| 3   | GET         | /api/flighroute                   | Get all flightroutes on admin   |
| 4   | PATCH       | /api/flightroute/update/:id       | Update flightroutes on admin    |
| 5   | GET         | /api/flightroute/get-by-id/:id    | Get flightroutes by id on admin |
| 6   | GET         | /api/flightroute/amount           | Get total flightroutes on admin |
| 7   | POST        | /api/flightroute/search           | Search flightroutes on admin    |

## About Project
This App for manage invoice

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