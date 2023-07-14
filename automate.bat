@echo off
set subfolder=blog-react
cd %subfolder%
npm run build
cd ..
git add .
git commit -m "adding all the data"
git push -u origin main