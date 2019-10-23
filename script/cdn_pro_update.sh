#!/usr/bin/expect -f


set ip 172.16.10.21
set password "2QHooauhnR"
spawn ssh ubuntu@$ip -p 3322 "cd static; ./cdn_pro_update.sh"
expect {
  "*yes/no" { send "yes\r"; exp_continue}
  "*password:" { send "$password\r"}
}
interact
