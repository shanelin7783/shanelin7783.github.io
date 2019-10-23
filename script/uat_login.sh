#!/usr/bin/expect -f


set password "cj6yj/3ru/ xu3"
spawn ssh root@10.10.10.54 -p 3322
expect {
  "*yes/no" { send "yes\r"; exp_continue}
  "*password:" { send "$password\r"}
}
interact
