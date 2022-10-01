postman collection

1-> https://www.getpostman.com/collections/0d1240030544e0ba7377
2-> https://www.getpostman.com/collections/d41b96ccd504cf79a3c9



 1 -> To register a User
  input curl ->  curl --location --request POST 'localhost:5000/auth/register' \
                    --header 'Content-Type: application/json' \
                    --data-raw '{
                        "name":"aditya",
                        "email":"aditya101@gmail.com",
                        "password":"@Kush1998"
                    }'
  output -> {
    "success": true,
    "message": "User registered successfully",
    "data": {
        "name": "aditya",
        "email": "aditya101@gmail.com",
        "password": "@Kush1998",
        "_id": "63381416c55fa7567ebd9f69",
        "createdAt": "2022-10-01T10:19:02.388Z",
        "updatedAt": "2022-10-01T10:19:02.388Z",
        "__v": 0
    }
}

2 -> to login a user

  input curl -> curl --location --request POST 'localhost:5000/auth/login' \
                --header 'Content-Type: application/json' \
                --data-raw '
                {    "email":"aditya101@gmail.com",
                    "password":"@Kush1998"
                }'
  output -> 
    {
    "message": "Sign in successful, here is your token",
    "success": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4MTQxNmM1NWZhNzU2N2ViZDlmNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJAS3VzaDE5OTgiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJfX3YiOjAsImlhdCI6MTY2NDYxOTU1NX0.MfBf0y6i1wESOZHAgfSF3qHK4L17_e3pKSsDl7wW5fU"
    }
}

3 -> API to create shortLink (token is compulsary for this api)
  input curl ->
    curl --location --request POST 'localhost:5000/shortlink/create' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4MTQxNmM1NWZhNzU2N2ViZDlmNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJAS3VzaDE5OTgiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJfX3YiOjAsImlhdCI6MTY2NDYxOTU1NX0.MfBf0y6i1wESOZHAgfSF3qHK4L17_e3pKSsDl7wW5fU' \
--header 'Content-Type: application/json' \
--data-raw '{
    "shortlink":"o/facebook",
    "description":"facebook link",
    "url":"https://facebook.com"
}'

output curl ->
  {
    "success": true,
    "message": "Link created successfully",
    "data": {
        "shortlink": "o/facebook",
        "description": "facebook link",
        "url": "https://facebook.com",
        "tags": [],
        "author": "63381416c55fa7567ebd9f69",
        "_id": "633814e1c55fa7567ebd9f77",
        "createdAt": "2022-10-01T10:22:25.466Z",
        "updatedAt": "2022-10-01T10:22:25.466Z",
        "__v": 0
    }
}

4 -> to delete any shortlink (pass id of shortlink in params)
  input curl -> 
  curl --location --request DELETE 'localhost:5000/shortlink/delete/:{id of shortlink}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4MTQxNmM1NWZhNzU2N2ViZDlmNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJAS3VzaDE5OTgiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJfX3YiOjAsImlhdCI6MTY2NDYxOTU1NX0.MfBf0y6i1wESOZHAgfSF3qHK4L17_e3pKSsDl7wW5fU'

5 -> get list of all shortlink of a particular user which is short on the basis of parameter like shortlink or description
  
  input curl ->

    curl --location --request GET 'localhost:5000/shortlink/allshortcuts/:{parameter on the basis of which your want to sort like description or shortlink name}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3ZjBkYzYzODU1ZGFhMWJmZmFkZDUiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExNEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IkBLdXNoMTk5OCIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMDFUMDc6NDg6NDQuNDc2WiIsInVwZGF0ZWRBdCI6IjIwMjItMTAtMDFUMDc6NDg6NDQuNDc2WiIsIl9fdiI6MCwiaWF0IjoxNjY0NjEzNTY4fQ.EKTG1P0L5MQ2kQtqfy_W7A652WwnBrKK7ZdYRlXcJxA'
 
  output ->
   {
    "success": true,
    "message": "Link fetch successfully",
    "data": [
        {
            "_id": "633814e1c55fa7567ebd9f77",
            "shortlink": "o/facebook",
            "description": "facebook link",
            "tags": [],
            "author": "63381416c55fa7567ebd9f69",
            "createdAt": "2022-10-01T10:22:25.466Z",
            "updatedAt": "2022-10-01T10:22:25.466Z",
            "__v": 0
        },
        {
            "_id": "63381f1b8a40275f79cc7ac9",
            "shortlink": "o/google",
            "description": "facebook link",
            "tags": [],
            "author": "63381416c55fa7567ebd9f69",
            "createdAt": "2022-10-01T11:06:03.715Z",
            "updatedAt": "2022-10-01T11:06:03.715Z",
            "__v": 0
        }
    ]
}
  
6 -> get all sortlink based on pattern of description which you are giving

 input curl ->
 curl --location --request GET 'localhost:5000/shortlink/searchbydescription/:{pattern}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4MTQxNmM1NWZhNzU2N2ViZDlmNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJAS3VzaDE5OTgiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJfX3YiOjAsImlhdCI6MTY2NDYxOTU1NX0.MfBf0y6i1wESOZHAgfSF3qHK4L17_e3pKSsDl7wW5fU'

 output -> 
 {
    "message": "Links by sorted order",
    "data": [
        {
            "_id": "633814e1c55fa7567ebd9f77",
            "shortlink": "o/facebook",
            "description": "facebook link",
            "url": "https://facebook.com",
            "tags": [],
            "author": "63381416c55fa7567ebd9f69"
        },
        {
            "_id": "63381f1b8a40275f79cc7ac9",
            "shortlink": "o/google",
            "description": "facebook link",
            "url": "https://facebook.com",
            "tags": [],
            "author": "63381416c55fa7567ebd9f69"
        }
    ]
}

7 ->  get all sortlink based on pattern of shortlink which you are giving
   input curl ->
      curl --location --request GET 'localhost:5000/shortlink/searchbyshortlink/:{pattern}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4MTQxNmM1NWZhNzU2N2ViZDlmNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJAS3VzaDE5OTgiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJfX3YiOjAsImlhdCI6MTY2NDYxOTU1NX0.MfBf0y6i1wESOZHAgfSF3qHK4L17_e3pKSsDl7wW5fU'

8 -> to get data of any shortlink based on their id

  input curl ->
    curl --location --request GET 'localhost:5000/shortlink/getlink/:{id}' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4MTQxNmM1NWZhNzU2N2ViZDlmNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJhZGl0eWExMDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiJAS3VzaDE5OTgiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTAxVDEwOjE5OjAyLjM4OFoiLCJfX3YiOjAsImlhdCI6MTY2NDYxOTU1NX0.MfBf0y6i1wESOZHAgfSF3qHK4L17_e3pKSsDl7wW5fU'