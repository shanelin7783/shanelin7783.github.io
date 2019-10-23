if [ ! -d newBuild ]; then
    mkdir -p newBuild
    chmod 755 newBuild
else
    rm -fr newBuild
    mkdir -p newBuild
    chmod 755 newBuild
fi  

value=`cat ./build/BUILD_ID`  
mkdir -p newBuild/static/$value
command cp -r build newBuild
command cp -r static/* newBuild/static/$value
command cp -r next.config.js newBuild
command cp -r server.js newBuild
command cp -r package-lock.json newBuild
command cp -r package.json newBuild
command cp -r yarn.lock newBuild