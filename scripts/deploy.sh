log=`git log -1 --pretty=%B`

if echo "${log}" | grep -q '^\[ci\] build online demo site$'; then     
  echo "No need to build"
  exit 0
else
  npm i
  npm run build
  git config --global user.email "dolymood@gmail.com"
  git config --global user.name "dolymood"
  git add .
  git commit -m "[ci] build online demo site"
  git push origin master
fi
