FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY hero-visual.html /usr/share/nginx/html/hero-visual.html
COPY hero-visual.css /usr/share/nginx/html/hero-visual.css
COPY style.css /usr/share/nginx/html/style.css
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
