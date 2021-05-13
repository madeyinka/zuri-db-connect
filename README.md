# Zuri-DB-connect
Task on performing CRUD opertaions on db from node app

1. Create payload:
    endpoint: https://node-payload-app.herokuapp.com/create
    method: POST
    params: {name: $name,email: $email,country: country} 
    return (success): 
    {"message": "New payload added",
        "resp": {"name": $name,"email": $email,"country": $country,"_id": "xxxxxxxxxxxxxxxx","__v": 0}
    }

2. update payload:
    endpoint: https://node-payload-app.herokuapp.com/update/:id
    method: PUT
    params: {name: $name,email: $email,country: country} 
    return (success): 
    {"message": "New payload added",
        "resp": {"name": $name,"email": $email,"country": $country,"_id": "xxxxxxxxxxxxxxxx","__v": 0}
    }

3. fetch all payloads
    endpoint: https://node-payload-app.herokuapp.com/fetch   
    method: GET 
    return (success)
    {
        "payloads": [
            {
                "name": $name,
                "email": $email,
                "country": $country,
                "_id": "xxxxxxxxxxxxxxxxxxxx",
                "__v": 0
            },
            {
                "name": $name,
                "email": $email,
                "country": $country,
                "_id": "xxxxxxxxxxxxxxxxxxxx",
                "__v": 0
            }
        ]
    }

4. fetch single record
    endpoint: https://node-payload-app.herokuapp.com/single/:id
    method: GET,
    return (success)
    {
        "resp": [
            {
                "name": $name,
                "email": $email,
                "country": $country,
                "_id": "xxxxxxxxxxxxxxxxxxxx",
                "__v": 0
            }
        ]
    }

5. delete record
    endpoint: https://node-payload-app.herokuapp.com/delete/:id
    method: DELETE
    return (success): "record deleted"
