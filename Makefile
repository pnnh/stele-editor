all : build

DIR := $(CURDIR)

build :
	npm run build

publish : build
	npm publish --access public

clean :
	-rm -f ./dist
	-rm -f ./lib
