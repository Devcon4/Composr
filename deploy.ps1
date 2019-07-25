# Build api docker image
cd api
docker build -t jheilbut/composr .
docker tag jheilbut/composr:latest jheilbut/composr:latest
docker push jheilbut/composr:latest

# Build client docker image
cd ../client
docker build -t jheilbut/composr-client .
docker tag jheilbut/composr-client:latest jheilbut/composr-client:latest
docker push jheilbut/composr-client:latest

# Build reverse proxy docker image
cd ..
docker build -t jheilbut/composr-reverseproxy .
docker tag jheilbut/composr-reverseproxy:latest jheilbut/composr-reverseproxy:latest
docker push jheilbut/composr-reverseproxy:latest

# Deploy to jeff.cen.centeva.com/composr
docker -H devdocker.cen.centeva.com:2376 stack deploy -c composr.yml jeff