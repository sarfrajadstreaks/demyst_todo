FROM node:latest
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .  .
RUN npm install -g .
CMD ["sh", "-c", "todo && tail -f /dev/null"]

