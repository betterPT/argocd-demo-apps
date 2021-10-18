from node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build
CMD [ "node", "dist/index.js" ]