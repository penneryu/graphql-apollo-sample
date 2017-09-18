This sample is for reference [graphql](http://www.infoq.com/cn/articles/turbocharge-react-graphql?utm_source=infoq&utm_medium=related_content_link&utm_campaign=relatedContent_articles_clk)

## run
- npm install
- node index.js

## query
open url http://localhost:3001/graphiql

### query the record with id 1

- input QUERY

```
query person($id: ID) {
  person(id: $id) {
    id
    firstName
    lastName
    age
    phone
    isMobile
    bestFriend {
      id
      firstName
    }
  }
}
```
- input VARIABLES

```
{
  "id": 1
}
```

## mutation
- open url http://localhost:3001/graphiql

### add new record

- input QUERY

```
mutation person($input: PersonInput) {
  person(input: $input) {
    id
    firstName
    lastName
    age
    phone
    isMobile
    bestFriend {
      id
      firstName
    }
  }
}
```
- input VARIABLES

```
{
  "input": {
    "firstName": "Peng",
    "lastName": "Yu",
    "age": 18,
    "phone": "12345678",
    "isMobile": true
  }
}
```

### update record with id 1

The query is the same as above

- input VARIABLES

```
{
  "input": {
  	"id": 1,
    "firstName": "PengPeng",
    "lastName": "Yu",
    "age": 18,
    "phone": "12345678",
    "isMobile": true
  }
}
```