# Utiliser l'image officielle Node.js LTS
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le code source
COPY server.js ./

# Exposer le port de l'application
EXPOSE 3200

# Démarrer l'application
CMD ["npm", "start"]
