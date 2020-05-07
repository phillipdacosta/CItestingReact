FROM cypress/base:10



# dependencies will be installed only if the package files change
COPY package.json package.json

RUN npm ci

COPY ./config ./config
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
CMD ["npm","run"]