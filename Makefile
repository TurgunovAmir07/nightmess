#!make
include .env.production

docker-login:
	docker login -u ${DOCKER_LOGIN} -p ${DOCKER_PASSWORD}
build-client:
	docker build --build-arg VITE_SERVER_URL=${VITE_SERVER_URL} -t ${DOCKER_LOGIN}/${DOCKER_CLIENT_NAME}:deploy -f ./apps/client/Dockerfile ./apps/client
build-server:
	docker build -t ${DOCKER_LOGIN}/${DOCKER_SERVER_NAME}:deploy -f ./apps/server/Dockerfile ./apps/server
push-client:
	docker push ${DOCKER_LOGIN}/${DOCKER_CLIENT_NAME}:deploy
push-server:
	docker push ${DOCKER_LOGIN}/${DOCKER_SERVER_NAME}:deploy
deploy:
	make docker-login && make build-client && make build-server && make push-client && make push-server