command rm -fr ../UAT/build
command rm -fr ../UAT/static
value=`cat ./build/BUILD_ID`  
mkdir -p ../UAT/static/$value
command cp -r build ../UAT
command cp -r static ../UAT/static/$value/
command cp -r next.config.js ../UAT
command cp -r server.js ../UAT
command cp -r package-lock.json ../UAT
command cp -r package.json ../UAT
