FROM node:14-alpine
RUN apk add --no-cache xvfb libstdc++ chromium harfbuzz nss freetype ttf-freefont font-noto-emoji shadow redis bash tzdata && rm -rf /var/cache/* && mkdir /var/cache/apk
COPY local.conf /etc/fonts/local.conf