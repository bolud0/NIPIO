## GROUP CHAT

```
state: {
  messages: []
}

props (groupid): {
  me,
  messages: state.messages.groups[groupid],
  title,
  groupId,
  resetGroupMessages,
  send
}

componentDidMount(props) {
  resetGroupMessages(groupid)
  ws.send(`getMessages=={"groupid": "${groupid}", "messageid": "${props.messages[props.messages.length].id}"}`);
}

componentWillReceiveProps(nextProps) {
  if(nextProps.messages.length > this.props.messages.length) {
    this.setState((previousState) => {
      return { 
        messages: 
          Gifted.chat.append(
            previousState.messages, 
            nextProps.messages.slice(this.props.messages.lenght)
          )
        }
    })
  }
}

onSend(messages = []) {
      send(groupid, me.id, messages);
}

render() {
  return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" hidden={true}/>
          <GiftedChat
              messages={this.state.messages}
              onSend={(messages) => this.onSend(messages)}
              inverted={false}
              user={{
                  _id: this.props.me.id
              }}
          />
      </View>
  );
}

```

## TOPIC CHAT

```
state: {
  messages: []
}

props (topicid): {
  me,
  messages: state.messages.topics[topicid],
  title,
  topicId,
  resetTopicMessages,
  send
}

componentDidMount(props) {
  resetTopicMessages(topicid)
  ws.send(`getMessages=={"topicid": "${topicid}", "messageid": "${props.messages[props.messages.length].id}"}`);
}

componentWillReceiveProps(nextProps) {
  if(nextProps.messages.length > this.props.messages.length) {
    this.setState((previousState) => {
      return { 
        messages: 
          Gifted.chat.append(
            previousState.messages, 
            nextProps.messages.slice(this.props.messages.lenght)
          )
        }
    })
  }
}

onSend(messages = []) {
      send(topicid, me.id, messages);
}

render() {
  return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" hidden={true}/>
          <GiftedChat
              messages={this.state.messages}
              onSend={(messages) => this.onSend(messages)}
              inverted={false}
              user={{
                  _id: this.props.me.id
              }}
          />
      </View>
  );
}

```
