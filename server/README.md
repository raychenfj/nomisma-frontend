# Json Server


## link:

production: http://raychenfj.me:3004

## Run It
```bash
npm run start
```

## Deploy with Docker
```bash
bash publish.sh
```

## APIs

This simple json server provide a REST contract API

| url | method |description |
|------|------|------|
| /contracts | GET |list all contracts |
| /contracts/:id | GET | get a contract detail |
| /contracts | POST | create a new contract |
| /contracts/:id | PUT | update a contract |
| /contracts/:id | DELETE | delete a contract |


## Docs
[json-server](https://github.com/typicode/json-server)
