# TEST
全部單元測試

    npm run test
更新快照

    npm run test -u
TDD 開發

    npm run tdd
    
# CDN DEPLOY
### 推完內部prod之後執行
    ./script/cdn_pro_update.sh


### 給script權限
chmod 777 script/


### Release 
 
    npm run release -- --release-as "1.12.0"
 
 推tag 
    
    git push origin v1.12.0
 
 刪除本地tag

    git tag -d $(git tag -l)
