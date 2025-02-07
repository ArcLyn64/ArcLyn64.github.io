all: serve

update: package-lock.json

package-lock.json: package.json
	npm i

serve: update
	npx @11ty/eleventy --serve

clean:
	rm -r _site
