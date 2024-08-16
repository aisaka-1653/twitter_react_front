FROM node:21.7.1

RUN mkdir /myapp
WORKDIR /myapp

CMD ["npm","run","dev"]
