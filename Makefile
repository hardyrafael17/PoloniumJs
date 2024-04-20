NAME =PoloniumJs
VERSION =1.1.0

all: stop install start

install: stop
	kpackagetool6 -t KWin/Script -s $(NAME) \
		&& kpackagetool6 -t KWin/Script -u . \
		|| kpackagetool6 -t KWin/Script -i . 

start: stop
	sleep 0.2 
	kwriteconfig6 --file kwinrc --group Plugins --key $(NAME)Enabled true
	qdbus org.kde.KWin /KWin reconfigure

stop: 
	kwriteconfig6 --file kwinrc --group Plugins --key $(NAME)Enabled false
	qdbus org.kde.KWin /KWin reconfigure

test: install
	kwriteconfig6 --file kwinrc --group Plugins --key $(NAME)Enabled false && qdbus org.kde.KWin /KWin reconfigure && kwriteconfig6 --file kwinrc --group Plugins --key $(NAME)Enabled true && qdbus org.kde.KWin /KWin reconfigure

stopKwinScript:
	dbus-send --session --dest=org.kde.KWin /Scripting org.kde.kwin.Scripting.unloadScript string:'$(NAME)'

startKwinScript:
	dbus-send --session --dest=org.kde.KWin /Scripting org.kde.kwin.Scripting.loadScript string:'$(NAME)'

# lint:
# 	npx eslint "src/**"
# 	./scripts/sonarqube.sh

# res: $(PKGDIR)
# 	cp -f res/metadata.json $(PKGDIR)/
# 	cp -f res/main.xml $(PKGDIR)/contents/config/
# 	cp -f res/config.ui $(PKGDIR)/contents/ui/
# 	cp -f res/main.js $(PKGDIR)/contents/code/
# 	sed -i "s/%VERSION%/$(VERSION)/" $(PKGDIR)/metadata.json
# 	sed -i "s/%NAME%/$(NAME)/" $(PKGDIR)/metadata.json

# src: polonium.mjs $(PKGDIR)
# 	mv -f polonium.mjs $(PKGDIR)/contents/code/main.mjs
# 	cp -f src/qml/* $(PKGDIR)/contents/ui/

# polonium.mjs:
# 	npm install
# 	npx esbuild --bundle src/index.ts --outfile=polonium.mjs --format=esm --platform=neutral

# $(PKGDIR):
# 	mkdir -p $(PKGDIR)
# 	mkdir -p $(PKGDIR)/contents/code
# 	mkdir $(PKGDIR)/contents/config
# 	mkdir $(PKGDIR)/contents/ui
