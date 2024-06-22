#!make
include .env.production

docker-login:
	docker login -u ${DOCKER_LOGIN} -p ${DOCKER_PASSWORD}
build-client:
	docker build --build-arg VITE_SERVER_URL=${VITE_SERVER_URL} --build-arg VITE_SERVER_STATIC_URL=${VITE_SERVER_STATIC_URL} -t ${DOCKER_LOGIN}/${DOCKER_CLIENT_NAME}:deploy -f ./apps/client/Dockerfile ./apps/client
build-server:
	docker build -t ${DOCKER_LOGIN}/${DOCKER_SERVER_NAME}:deploy -f ./apps/server/Dockerfile ./apps/server
build-webapp:
	docker build --build-arg VITE_SERVER_URL=${VITE_SERVER_URL} --build-arg VITE_APP_TYPE=telegram --build-arg VITE_SERVER_STATIC_URL=${VITE_SERVER_STATIC_URL} -t ${DOCKER_LOGIN}/${DOCKER_WEBAPP_NAME}:deploy -f ./apps/client/Dockerfile ./apps/client
push-client:
	docker push ${DOCKER_LOGIN}/${DOCKER_CLIENT_NAME}:deploy
push-server:
	docker push ${DOCKER_LOGIN}/${DOCKER_SERVER_NAME}:deploy
push-webapp:
	docker push ${DOCKER_LOGIN}/${DOCKER_WEBAPP_NAME}:deploy
deploy:
	make docker-login && make build-client && make build-server && make build-webapp && make push-client && make push-server && make push-webapp

up:
	docker compose up -d
stop:
	docker compose down