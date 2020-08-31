ARG NODE_VERSION=12.6
ARG APP_DIR=/opt/diary-frontend

# Creates the builder image and fetch dependencies
FROM node:$NODE_VERSION as build

ARG APP_DIR
WORKDIR $APP_DIR

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

FROM node:$NODE_VERSION as lint

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=build $APP_DIR/ .

CMD ["yarn", "run", "eslint", "src/**/*.js"]

# # Unit tests
# FROM node:$NODE_VERSION as unit-test

# ARG APP_DIR
# WORKDIR $APP_DIR

# COPY --from=build $APP_DIR/ .

# CMD ["yarn", "test", "--watchAll", "false"]

# Build the app
FROM node:$NODE_VERSION as release

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=build $APP_DIR/ .

RUN yarn build

# Serve files with nginx
FROM nginx:latest as serve

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=release $APP_DIR/build/ /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/