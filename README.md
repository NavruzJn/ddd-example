# Domain driven design architecture example
The project is an example how the domains of the project can be divided into microservices

Let's build a small server-side app that consists of 3 domains involved in solving a business task - "Account Management Service"
- Account
- Transaction
- Currency

Also, there can be added extra participants like bank, activity log, etc.

###Introduction



###Launch

1. docker-compose up -d - to start all containers (pg, rabbitmq, account service, transaction service, currency service)

###Tools


###TODOs

1. add logic to perform transactions between accounts
2. add e2e and unit tests
3. REST Api documentation
