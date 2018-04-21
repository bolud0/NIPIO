### ROUTES WITHOUT TOKEN

headers looks like:   ` 'Content-Type': 'application/json' `
```
/auth/verifynumber 
method: POST
body:{
    number: "+381651337"
}
response: {
    "success":"true/false",
    "message":"SMS_SEND"  // INVALID_NUMBER
}

/auth/verifycode
method: POST
body: {
    number: "+381651337",
    code: "123123"
}
response: {
    "success": "true/false",
    "message":"SUCCESS_VERIFY_CODE", //  INVALID_NUMBER, INVALID_CODE
    "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz"
}

/auth/resetcode
method POST
body:{
    number: "+381651337"
}
response: {
    "success":"true/false",
    "message":"SMS_SEND" //  INVALID_NUMBER, INVALID_CODE
}

```
### ROUTES WHERE IS TOKEN REQUIRED

headers looks like:   ` 'Content-Type': 'application/json', 'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz' `

#### GROUP

```
/group/create
method: POST
body: {
    title: "Jungle code dev",
    description: "Group chat for nipio development app",
    members: ["+381621337", "+11312"]
}
response: {
    "success": "true/false",
    "message": "GROUP_SUCCESS_CREATED" // GROUP_CREATE_FAILED
}

/group/:id
method: GET
response: {
    "_id": "5a3a7b74bec40d1d587ba95d",
    "title": "Jungle code dev",
    "description": "Group chat for nipio development app",
    "created_at": "1910199191",
    "admin": "5a355b24baca131a13c92019"
}

/group/:id/update
method: PATCH
body: {
    "description": "Group chat for dev-ops configuration of nipio app"
}
response: {
    "success": "true/false",
    "message": "GROUP_SUCCESS_UPDATED" // GROUP_UPDATE_FAILED
}

/group/:id/remove
method: DELETE
response: {
    "success": "true/false",
    "message": "GROUP_SUCCESS_REMOVED" // GROUP_REMOVE_FAILED
}

/group/:id/members
method: GET
response: {
    "success": "true/false",
    "members": [
        {
            "number": "+381651337",
            "first_name": "wex",
            "last_name": "test",
            "registrated": "true/false"
        }, {
            "number": "+381651337",
            "first_name": "moki",
            "last_name": "ding",
            "registrated": "true/false"
        } {
            "number": "+3816555333",
            "first_name": "Tesa",
            "last_name": "Tesanovic",
            "registrated": "true/false"
        }, {
            "number": "+38163123123",
            "first_name": "Dzoni",
            "last_name": "Bravo",
            "registrated": "true/false"
        }
    ]
}

/group/:id/topics
method: GET
response: {
    "success": "true/false",
    "topics": [
      {
        "title": "Socket Server",
        "description": "Socket.io+Redis",
        "admin": "moki",
      }, {
        "title": "react-native app",
        "description": "react-native+redux+socket",
        "admin": "wex",
      }
    ]
}

```

#### ME
```
/me
method: GET
response: {
    "_id": "5a3c1537bec40d1d587ba961",
    "number": "+38166111123",
    "first_name": "Samurai",
    "last_name": "Black",
    "reg_date": "1513782178",
    "avatar_url": "http://minio.com/default"
}

/me/update
method: PATCH
body: {
    "last_name": "Jack"
}
response: {
    "success": "true/false",
    "message": "USER_SUCCESS_UPDATED" //  USER_UPDATE_FAILED
}

/me/groups
method: GET
response: {
  "success": "true",
  "groups": [
    {
      "id": "5a41b46bbec40d1d587ba962",
      "title": "Test Grupa",
      "description": "Opis test grupe",
      "created_at": "1514254268",
      "admin": "5a41a9628ca0da33672c0612",
    },
    {
      "id": "5a41c3fdbec40d1d587ba963",
      "title": "Test Grupa 2",
      "description": "Ovoo je druga grupa",
      "created_at": "1544254268",
      "admin": "5a41a9628ca0da33672c0612",
    }
  ]
}

```

#### TOPIC

```
/topic/create
method: POST
body: {
    title: "Socket Server",
    description: "Socket.io+Redis",
    members: ["+381621337", "+11312"]
}
response: {
    "success": "true/false",
    "message": "TOPIC_SUCCESS_CREATED" // TOPIC_CREATE_FAILED
}

/topic/:id
method: GET
response: {
    "success": "true/false",
    "topic": {
        "group_id": "123121",
        "title": "Socket Server",
        "description": "Socket.io+Redis",
        "exp_time": "2017-12-23T19:43:06", //ISO 8601
        "admin": "moki",
    },
}

/topic/:id/members
method: GET
response: {
    "success": "true/false",
    "members": [
        {
            "number": "+381651337",
            "first_name": "wex",
            "last_name": "test",
            "registrated": "true/false"
        }, {
            "number": "+381651337",
            "first_name": "moki",
            "last_name": "ding",
            "registrated": "true/false"
        }
    ]
}

/topic/:id/update
method: PATCH
body: {
    "description": "WebSocket+Redis"
}
response: {
    "success": "true/false",
    "message": "TOPIC_SUCCESS_UPDATED" // TOPIC_UPDATE_FAILED
}

/topic/:id/remove
method: DELETE
response: {
    "success": "true/false",
    "message": "TOPIC_SUCCESS_REMOVED" // TOPIC_REMOVE_FAILED
}
```

#### POLL

```
/poll/create
method: POST
body: {
    "question": "Wich framework use to data caching",
    "options": ["loki.js", "redis"],
    "exp": "2017-12-23T22:39:41" // ISO 8601
}
response: {
    "success": "true/false",
    "message": "POLL_SUCCESS_CREATED" // POLL_CREATE_FAILED
}

/poll/:id
method: GET
response: {
    "success": "true/false",
    "poll": {
        "topic_id": "123121",
        "question": "Wich framework use to data caching",
        "options": ["loki.js", "redis"]
        "admin": "moki"
    }
}

/poll/:id/update
method: PATCH
body: {
    "exp": "2017-12-28T22:00:00" // ISO 8601
}
response: {
    "success": "true/false",
    "message": "POLL_SUCCESS_UPDATED" // POLL_UPDATE_FAILED
}

/poll/:id/remove
method: DELETE
response: {
    "success": "true/false",
    "message": "POLL_SUCCESS_REMOVED" // POLL_REMOVE_FAILED
}
```

#### MESSAGES

```
/messages/group/:id //id of last message in my list
method: GET
response: {
    "success": "true/false",
    "messages": [
      {
        "id": "3213",
        "sender": "wex",
        "message": "Test message",
        "time": "2017-12-23T22:39:41"
      },{
        "id": "123",
        "sender": "moki",
        "message": "Test message 2",
        "time": "2017-12-23T22:39:41" // ISO 8601
      }
    ] 
}
```

