# graphql-tools config debug

related issue: https://github.com/ardatan/graphql-import/issues/601

There are 2 graphQL files: `index.graphql` and `territoires.graphql`.

index.graphql :

```
# import * from 'territoires.graphql'

type Query {
  pays: [Pays]
}
```

territoires.graphql

```
type Departement {
  id: ID!
}

type Region {
  id: ID!
  departements: [Departement]
}

type Pays {
  id: ID!
  regions: [Region]
}
```

The error is

```
/node_modules/graphql/validation/validate.js:108
throw new Error(errors.map(function (error) {
          ^
Error: Unknown type "Departement".
```

If I don't use a separate file and put everything in `index.graphql` like so, there is no error:

```
type Query {
  pays: [Pays]
}

type Departement {
  id: ID!
}

type Region {
  id: ID!
  departements: [Departement]
}

type Pays {
  id: ID!
  regions: [Region]
}
```
