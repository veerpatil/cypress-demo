podman build -t cypress-allure-java11 .


podman run --rm -d \
  --name nginx-server \
  -v $(pwd):/usr/share/nginx/html:ro \
  -p 8080:80 \
  nginx