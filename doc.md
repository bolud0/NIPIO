# Mobile app

React Native Components are classified in three parts, (like is said in Atomic Design methodology): Atoms, Molecules and Organisms.
Application use react native router flux package for manipulation of the routes.

## Routes:
-Verify Number: Mount VerifyNumber component from /src/components/organisms/verify-number/index.js and after input phone number of user fetch post method on api/verifynumber

-Verify Code: Mount VerifyCode component from /src/componentc/organisms/verify-code/index.js and after input login code fetch api/verifycode

-Groups: Mount Groups component. Groups component is connected to GROUP_LIST reducer and render all groups. On enter Groups screen socket asks webscoket for last messages.

-GroupChat: Mount GroupChat component. GroupChat render all messages from GROUP_MESSAGES reducer.

-GroupCreate: Use GroupCreateForm component from /src/components/molecules/group-create-form/index.js. After input all fields fetch api/group/create endpoint.

-GroupUpdate: Use GroupUpdateForm component from /src/components/molecules/group-update-form/index.js. Admin can update name and description of group.

-GroupDetail: Use GroupDetail componen from /src/components/organisms/groupDetail/index.js. When component will mount application fetch infourmation about group from api/group/{id}/.

-Topics: Mount Topics component. Topics component is connected to TOPIC_LIST reducer and render all topics. On enter Topics screen socket asks webscoket for last messages.

-TopicChat: Mount TopicChat component. TopicChat render all messages from TOPIC_MESSAGES reducer.

-TopicCreate: Use TopicCreateForm component from /src/components/molecules/topic-create-form/index.js. After input all fields fetch api/topic/create endpoint.

-TopicUpdate: Use TopicUpdateForm component from /src/components/molecules/topic-update-form/index.js. Admin can update name and description of topic.

-TopicDetail: Use TopicDetail componen from /src/components/organisms/topicDetail/index.js. When component will mount application fetch infourmation about topic from api/topic/{id}/.

-Polls: Mount Polls component. Polls component is connected to POLL_LIST reducer and render all polls.

-PollCreate: Use TopicCreateForm component from /src/components/molecules/poll-create-form/index.js. After input all fields fetch api/poll/create endpoint.

-PollDetail: Use PollDetail component from /src/components/organisms/pollDetail/index.js. When component will mount application fetch infourmation about the poll from api/poll/{id}/.

-Profile: Mount Profile screen from /src/components/organisms/profile.js. On profile screen user can see information about him and upload user avatar.

-MeUpdate: MeUpdate component was used in two situations: when user wanna to change profile info and when user is first logged in.
