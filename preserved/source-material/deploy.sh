#!/usr/bin/env bash
# Hostinger Ubuntu VPS Automated Deployment Script
# Isha & Ashish Wedding Invitation Website

set -e

APP_DIR="/var/www/wedding-invitation"
BACKUP_DIR="/var/www/wedding-invitation-backups/$(date +%Y%m%d_%H%M%S)"

echo "=== Starting Wedding Invitation Production Deployment ==="

# Step 1: Create backup of current build if it exists
if [ -d "$APP_DIR/dist" ]; then
    echo "Creating backup of current deployment at $BACKUP_DIR..."
    mkdir -p "$BACKUP_DIR"
    cp -r "$APP_DIR/dist" "$BACKUP_DIR/"
fi

# Step 2: Ensure app directory exists
mkdir -p "$APP_DIR"
cd "$APP_DIR"

# Step 3: Install dependencies & build
echo "Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "Building production bundle..."
npm run build

# Step 4: Set permissions for Nginx
echo "Setting permissions..."
chown -R www-data:www-data "$APP_DIR/dist"
chmod -R 755 "$APP_DIR/dist"

# Step 5: Test and reload Nginx
echo "Testing Nginx configuration..."
nginx -t

echo "Reloading Nginx..."
systemctl reload nginx

echo "=== Deployment Successfully Completed! ==="
