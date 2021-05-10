## Change action.yml

Replaces values in a file

## How to build
```
npm run package
git push origin main
git tag -a v1.x.x -m "v1.x.x"; git push --tags
```

## How to use

```yaml
uses: aspencapital/replace-in-file-actions@v1
with:
  FILES: 'path/to/file',
  FROM: /foo/g,
  TO: 'bar',
```
