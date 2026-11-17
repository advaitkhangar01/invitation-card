# HOSTINGER UBUNTU VPS DEPLOYMENT GUIDE
## Premium Interactive Wedding Invitation Website — Isha & Ashish

This guide provides end-to-end instructions for deploying the static wedding invitation website to a **Hostinger Ubuntu VPS** using **Nginx**, **Git**, and **Let's Encrypt SSL**.

---

### 1. Prerequisites on Hostinger Ubuntu VPS
Connect to your VPS via SSH:
```bash
ssh root@YOUR_SERVER_IP
```

Ensure basic packages and Nginx are installed:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx curl git ufw certbot python3-certbot-nginx
```

Configure the firewall:
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

Install Node.js (v20+ or v22+ LTS) via NodeSource if you wish to build directly on the server:
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v && npm -v
```

---

### 2. Deployment Architecture & Directory Layout
We deploy the application as a high-performance static build served directly by Nginx. No persistent Node.js background process (like PM2) is required.

```text
/var/www/wedding-invitation/
├── dist/                # Production build artifacts (index.html, assets/)
├── deploy/              # Deployment script & Nginx templates
└── package.json
```

---

### 3. Step-by-Step Server Setup

#### Step 3.1: Clone or Copy Project Files
From your local machine, copy the project or clone the repository to the VPS:
```bash
# Example using rsync from your local machine:
rsync -avz --exclude 'node_modules' --exclude '.git' ./ root@YOUR_SERVER_IP:/var/www/wedding-invitation/
```

Or clone directly via Git on the server:
```bash
cd /var/www
git clone <YOUR_GIT_REPO_URL> wedding-invitation
cd wedding-invitation
```

#### Step 3.2: Build the Production Distribution
```bash
cd /var/www/wedding-invitation
npm ci
npm run build
```
Verify that `/var/www/wedding-invitation/dist` contains `index.html` and the `assets/` directory.

#### Step 3.3: Configure Permissions
```bash
sudo chown -R www-data:www-data /var/www/wedding-invitation/dist
sudo chmod -R 755 /var/www/wedding-invitation/dist
```

---

### 4. Nginx Server Configuration

Copy the provided Nginx configuration to `/etc/nginx/sites-available/`:
```bash
sudo cp /var/www/wedding-invitation/deploy/nginx.conf /etc/nginx/sites-available/wedding-invitation
```

Open and edit the domain name:
```bash
sudo nano /etc/nginx/sites-available/wedding-invitation
```
Replace `yourdomain.com www.yourdomain.com` with the actual domain name pointed to the VPS IP address.

Enable the configuration and reload Nginx:
```bash
sudo ln -sf /etc/nginx/sites-available/wedding-invitation /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

### 5. SSL / HTTPS Setup with Let's Encrypt (Certbot)
Once your domain's DNS `A` records point to your VPS IP:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
Certbot will automatically verify domain ownership, issue a trusted Let's Encrypt SSL certificate, and configure automatic HTTPS redirection.

Verify automatic renewal:
```bash
sudo certbot renew --dry-run
```

---

### 6. Automated One-Command Deployments
To update the live site in the future, use the automated script in `deploy/deploy.sh`:
```bash
chmod +x /var/www/wedding-invitation/deploy/deploy.sh
sudo /var/www/wedding-invitation/deploy/deploy.sh
```

---

### 7. Rollback Instructions
Every deployment executed with `deploy.sh` automatically archives the previous `dist` folder to `/var/www/wedding-invitation-backups/YYYYMMDD_HHMMSS`.

To immediately roll back to a prior release:
```bash
# 1. Identify previous backup timestamp
ls -l /var/www/wedding-invitation-backups/

# 2. Restore backup to active dist
sudo cp -r /var/www/wedding-invitation-backups/20261116_120000/dist/* /var/www/wedding-invitation/dist/

# 3. Reload Nginx
sudo systemctl reload nginx
```

---

### 8. Troubleshooting
| Symptom | Cause | Solution |
|---|---|---|
| **403 Forbidden** | Incorrect folder permissions | Run `sudo chown -R www-data:www-data /var/www/wedding-invitation/dist` and `chmod -R 755 /var/www/wedding-invitation/dist`. |
| **404 on Refresh** | Nginx missing `try_files` rule | Confirm `try_files $uri $uri/ /index.html;` exists in `nginx.conf`. |
| **Assets Not Updating** | Browser aggressive caching | The build uses content-hashed filenames (`index-BzutvDIt.js`). Ensure HTML has `no-cache` headers as configured in `nginx.conf`. |
