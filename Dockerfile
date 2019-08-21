FROM node:8.16.0
RUN mkdir -p /opt/docks/my-project/apps/app-name
WORKDIR /opt/docks/my-project/apps/app-name
COPY . .
RUN npm install
EXPOSE 5105