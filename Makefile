build:
	@rm -rf dist
	@cp -r src/resources dist
	@cp LICENSE package.json dist/
	@npm install --only=prod --prefix ./dist
	@npx tsc
	@rm dist/package.json dist/package-lock.json

run:
	@node dist/index.js

watch:
	@npx tsc --watch

test:
	@INPUT_SERVERS="github: {id: test}" \
	INPUT_INCLUDE="['spring-releases','github']" \
	INPUT_REPOSITORIES="central: {ignore: true}" \
	INPUT_PATH=".m2/settings.xml" \
	node dist/index.js