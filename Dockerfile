# ships with npm 11
FROM node:22-slim

WORKDIR /app

# Keep the container running
CMD ["tail", "-f", "/dev/null"]