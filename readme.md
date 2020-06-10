# graphql-tools config debug

circular dependencies were handled with `graphql-import`. When we migrate to `graphql-tools` it makes an error.

To try it with `graphql-tools`, clone this repo, install and `npm run dev`. It makes an error:

```
/dist/import/src/index.js:235
throw new Error(`Couldn't find type ${dependencyName} in any of the schemas.`);
                              ^
Error: Couldn't find type Enterprise in any of the schemas.
```

To try it with `graphql-import`, revert to the initial commit and `npm run dev`. It works.

related issue: https://github.com/ardatan/graphql-import/issues/601
