


# Nomisma Frontend Code Challenge

> repo for nomisma frontend code challenge

## Overview

This is a project for nomisma frontend code challenge. Read the challenge guideline at docs section.

It contains two part mainly, one is contract with CRUD operation, another one is chart of exchange rate.

Build with `React`.

### Project Structure

.
|── server                     a simple json server backend attached to this project
|── src                        source code of frontend 
     |—— apis                  backend or 3rd-party apis
     |—— components            highly reusable components, not related to business
     |—— constants             constant variables can be reused
     |—— formatters            formatter
     |—— mock                  create mock data
     |—— pages                 pages
     |     |—— contract        pages for contract module
     |     |    |—— components components related to this module and business
     |     |
     |     |—— chart           pages for chart module
     |
     |—— styles                global styles


### Highlights

### Trade-Off

## Link
Development: http://raychenfj.me/nomisma/

Production: http://raychenfj.me/nomisma/

## How To Run It

1. Rename `config.example.js` to `config.js`

2. Fill `apiKey` for both development and production env in `config.js`

3. run `npm run start` and visit `http://localhost:3000/` in your browser

## How To Build
```bash
# build for development environment
npm run build:dev

# build for production environment
npm run build:pro
```

## How To Deploy
After building, copy the content in  `build` folder to a static server

## To Do / Improve
- [ ] Use router to navigate between pages
- [ ] Use Redux to store contract data
- [ ] Instead of calling the coin api directly from frontend, call it via a backend proxy can provide more flexibility and stability
- [ ] Loading animation for the chart
- [ ] Remove mock data
- [ ] Can easily exceeded the daily limits of coin api, upgrade the plan or use mock data while developing and testing
- [ ] Auto deploy when push, it's difficult to make it completely automatic when it's public while keep security
- [ ] Add Unit Test and E2E Test
- [ ] Use `axios` interceptor to handle request and response
- [ ] All the folders can separate into more sub folders and more files for different modules when the project size grows 

## Docs
[CoinAPI.io](https://docs.coinapi.io/)
[The exchange rate api](https://docs.coinapi.io/#exchange-rates)
[Guidelines](https://github.com/NomismaTech/coding-challenge-tools/blob/master/coding_challenge.md)

## Maintainer
(raychenfj)[https://github.com/raychenfj]
