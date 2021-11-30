FROM nginx:latest
RUN mkdir /app
# копируем файлы фронта
COPY . /graph
# докидываем скрипт для ожидания запуска

# копируем конфиги nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx.conf /etc/nginx/nginx.conf
# открываем порты
EXPOSE 6000

CMD ["nginx", "-g", "daemon off;"]

