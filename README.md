# io.chronobank.starter

## Prerequisites

- Install node v8.4.0+, install npm 5.2.0+
- Install and v3.4+ and launch mongodb service
- Install pm2 globally

## Setup

Provide a correct subproject locations here:
- [bin/build](io.chronobank.starter/tree/master/bin/build)

Update this config file:
- [ecosystem.config.js](io.chronobank.starter/tree/master/ecosystem.config.js)

Setup Nginx proxy using this config as an example:
- [etc/nginx/io.chronobank.conf](io.chronobank.starter/tree/master/etc/nginx/io.chronobank.conf)

Run build using command:
```
npm i
npm run build
```

## Dump and Restore

If you have a dump use it to setup mongo database:
```
mkdir /path/to/arch/$MONGO_DATABASE_NAME
tar -xf /path/to/arch/$MONGO_DATABASE_NAME.tar.gz -C /path/to/arch/$MONGO_DATABASE_NAME
mongorestore --db $MONGO_DATABASE_NAME /path/to/arch/$MONGO_DATABASE_NAME
```
If you need to make a dump:
```
mongodump --db $MONGO_DATABASE_NAME --out=/path/to/arch/
tar -zcvf /path/to/arch/$MONGO_DATABASE_NAME.tar.gz -C /path/to/arch/$MONGO_DATABASE_NAME .
```

## Launch
Run both front-end and back-end apps at once using one command:

```
pm2 start ecosystem.config.js
```

or in production environment:

```
pm2 start ecosystem.config.js --env production
```
