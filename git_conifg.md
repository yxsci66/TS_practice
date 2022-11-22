# Introduction of Git Config

Recommend:  [Pro Git](https://www.progit.cn/)

## Config code as default editor

`git config --global core.editor code`

## Init config

`git config --global user.name "YourName"`

`git config --global user.email YourEmail@example.com`

check config

`git config --list` OR `git config -e`

## Config automatically prune for a specific remote repository

`git config remote.origin.prune true`
