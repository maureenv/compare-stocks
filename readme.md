# Stock Comparer

## Access static app
```
cd out
serve -p 8080
```

## Deploy to Github
```
npm run build
npm run export
```
commit the build
```
git subtree push --prefix out origin gh-pages
```
