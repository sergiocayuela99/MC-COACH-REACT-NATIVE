import React, {
  useState, 
  useEffect, 
  useLayoutEffect, 
  useCallback} from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';

//GIFTEDCHAT
import { GiftedChat, Bubble, Send, ActivityIndicator } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';

import { 
 collection, 
 addDoc, 
 orderBy, 
 query, 
 onSnapshot
} from 'firebase/firestore';
import { auth, database } from '../../firebase'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function ChatScreen () {
 const [messages, setMessages] = useState([]);

 useLayoutEffect(() => {
   const collectionRef = collection(database, 'chats2');
   const q = query(collectionRef);
   

   const unsubscribe = onSnapshot(q, querySnapshot => {
    setMessages(
      querySnapshot.docs.map(doc => ({
        _id: doc.data()._id,
        
        text: doc.data().text,
        user: doc.data().user
      }))
    );
  });

  return () => unsubscribe();
}, []);

 const onSend = useCallback((messages = []) => {
   setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

   const { _id,  text, user}  = messages[0];
   addDoc(collection(database, 'chats2'), {
     _id,
     
     text,
     user
   });
 }, []);


 function scrollToBottomComponent() {
  return (
    <View style={styles.bottomComponentContainer}>
      <IconButton icon='chevron-double-down' size={36} color='#F4D03F' />
    </View>
  );
}

function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}


function renderBubble(props) {
  return (
    <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#F4D03F'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='#F4D03F' />
        </View>
      </Send>
    );
  }

   return(
     <GiftedChat 
     messages={messages}
     onSend={messages => onSend(messages)}
     user={{
      _id: auth.currentUser?.email,
      avatar: 'https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=43d87915-2a04-44fa-9702-0382fad682e2'
    }}

     messagesContainerStyle={{
       backgroundColor: '#FFFFFF'
     }}
     placeholder='Escribe aqui...'
     renderBubble={renderBubble}
     showUserAvatar
     alwaysShowSend
     scrollToBottom
     scrollToBottomComponent={scrollToBottomComponent}
     //renderLoading={renderLoading}
     //renderSend={renderSend}
     />
   )
 }

 const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});