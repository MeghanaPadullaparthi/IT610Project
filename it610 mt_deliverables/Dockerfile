FROM node:14-alpine
WORKDIR /app
COPY . ./
RUN npm install && npm run build
RUN yarn install --frozen-lockfile
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
