#!/bin/bash
cd /home/matrixpharmacorp/htdocs/matrixpharmacorp.com || exit

# Pull latest code
git pull origin main

# Install dependencies
npm install

# Build project
npm run build

# Restart PM2
pm2 restart all
