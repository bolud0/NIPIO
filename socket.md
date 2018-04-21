## Socket


### Actions
```
actions: {
  topicMessages: => INSERT_TOPIC_MESSAGES, {topicid, messages: []}
  groupMessages: => INSERT_GROUP_MESSAGES, {groupid, messages: []}
  topicSendMessages: => SEND_TOPIC_MESSAGES, {topicid, message: {}}
  groupSendMessages: => SEND_GROUP_MESSAGES, {groupid, message: {}}
  topicResetMessages: => RESET_TOPIC_MESSAGES, {topicid}
  groupResetMessages: => RESET_GROUP_MESSAGES, {groupid}
}
    
```

### Reducers 
```
INSERT_TOPIC_MESSAGES (topicid, messages):
  topics[topicid]: {
    count: count+ messages.length()
    messages: messages.concat(messages)
  }

INSERT_GROUP_MESSAGES (groupid, messages):
  groups[groupid]: {
    count: count+ messages.length()
    messages: messages.concat(messages)
  }
  
RESET_TOPIC_MESSAGES = (topicid):
  topics[topicid]: {
    count: 0,
    messages
  }

  
RESET_GROUP_MESSAGES (groupid):
  groups[groupid]: {
    count: 0,
    messages
  }
  
SEND_TOPIC_MESSAGES (topicid, message):
  topics[topicid]: {
    count,
    messages: messages.append(message)
  }

SEND_GROUP_MESSAGES (groupid, message):
  groups[groupid]: {
    count,
    messages: messages.append(message)
  }


```

### Redux
```
messages: {
  groups: {
    "groupid" : {
      count: int,
      messages: [
        {
          id,
          senderData: {
            username,
            number,
            avatarUrl
          }
        }
      ]
    }
  }
  topics: {
    "topicid" : {
      count: int,
      messages: [
        {
          id,
          senderData: {
            username,
            number,
            avatarUrl
          }
        }
      ]
    }
  }
}

```

