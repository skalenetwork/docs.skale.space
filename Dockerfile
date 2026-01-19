FROM node:24

WORKDIR /app

RUN npm install -g @mintlify/cli

# Copy your docs/project into the container
COPY . .

EXPOSE 4444

CMD ["sh", "-c", "CHOKIDAR_USEPOLLING=true mint dev --host 0.0.0.0 --port 4444"]
