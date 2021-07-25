# Domain driven design architecture example
The project is an example how the domains of the project can be divided into microservices

Let's build a small server-side app that consists of 3 domains involved in solving a business task - "Account Management Service"
- Account
- Transaction
- Currency

Also, there can be added extra participants like bank, activity log, etc.

### Introduction



### Launch

1. ```docker-compose run yarn``` - to install all dependencies
2. ```docker-compose up -d``` - to start all containers (pg, rabbitmq, account service, transaction service, currency service)
3. API is available via localhost:3000

### Documentation

1. ```cd swagger/```
2. ```docker-compose up -d```
3. open in browser localhost:8080

### Techs

- rabbitmq - event bus
- grpc - transport between services
- http - public gateway
- swagger - documentation
- nestjs - framework to build scalable Node.js web applications

### TODOs

1. handle errors in gateway received from services
2. add tests
3. add jsdoc comments

### Tests

1. ```docker-compose up -d db``` - up db container
2. ```docker-compose run yarn test``` - run e2e tests
