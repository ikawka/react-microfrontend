# Micro-frontend experiment

This simulates react with micro frontend implementation. The idea is to mount different apps in one "Container App", which seamlessly merges two react applications together in one single application to avoid becoming a monolith.

## With regards to CSS

`styled-components/macro` is recommended to be used in each of the application to avoid styling conflicts. Global styling is only recommended in the container.

## Production

This has not been tested in any production environment.

This requires docker to run, make sure that ports `3000`, `3001` and `3002` are free.

1. Build app one: `cd app-one` then `yarn install && yarn build`
2. Build app two: `cd app-two` then `yarn install && yarn build`
3. Build Container: `cd container` then `yarn install && yarn build`
4. Run docker-compose in the project roon `docker-compose up -d`

browse: `http://localhost:3000`
