# HOSTINGER UBUNTU VPS DEPLOYMENT GUIDE
## Premium Wedding Invitation Microsite — Isha Bawankule & Ashish Deshmukh

---

## 1. Prerequisites on Hostinger Ubuntu VPS

Ensure the VPS has:
- Ubuntu 20.04 / 22.04 LTS
- Node.js v18+ or v20+ LTS
- Nginx 1.18+
- Git

### 1.1 Quick System Setup Command
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

---

## 2. Server Directory & Nginx Setup

1. Copy the Nginx configuration:
```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/wedding-invitation
sudo ln -s /etc/nginx/sites-available/wedding-invitation /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

2. Clone or copy project repository to `/var/www/wedding-invitation`:
```bash
sudo mkdir -p /var/www/wedding-invitation
sudo chown -R $USER:$USER /var/www/wedding-invitation
```

---

## 3. Automated One-Command Deployment

Run the automated deployment script:
```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

---

## 4. Free SSL Setup via Let's Encrypt (Certbot)

To activate HTTPS with HTTP/2:
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
Certbot automatically configures the HTTPS block and auto-renewal cron.
