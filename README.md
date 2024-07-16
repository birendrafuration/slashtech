
###  Run Locally Clone this Project

```
git@github.com:birendrafuration/slashtech.git
```
### Runs the project in the development mode

[http://localhost:3030](http://localhost:3030)

   
   
## API Endpoints


  #### To get all Favourites qoutes
```javascript
GET  http://localhost:3000/api/v1/qoute/favourites
```


  #### make Favourite
```javascript
POST  http://localhost:3000/api/v1/qoute/favourites

payload:

{
  "qauteId": "T6AMWsNRE5",
  "content": "Any sufficiently advanced technology is equivalent to magic.",
  "author": "Arthur C. Clarke", 
  "authorId": "1QYR63wh3",
  "authorSlug": "arthur-c-clarke"
}
```




