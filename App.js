import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDWa2yQef7M7xUiTW10srZPx9VFgYHpNIY",
  authDomain: "react-firebase-535c8.firebaseapp.com",
  databaseURL: "https://react-firebase-535c8.firebaseio.com",
  projectId: "react-firebase-535c8",
  storageBucket: "react-firebase-535c8.appspot.com",
  
};
firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form , Input, Item, Button, Label, Icon } from 'native-base';

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      email :'',
      password: ''
    }

  }


  signUpUser = (email, password) => {
      try{
        if (this.state.password.length< 6){
          alert("Please enter atleast 6 charecters.")
          return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
      catch(error){
        console.log(error.toString())
      }
  }

  loginUser = (email, password) => {
    try{
       firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
         console.log(user)
       })
    }
    catch(error){
      console.log(error.toString())
    }
  }



  render() {
    return (
    
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
          <Label>Email</Label>
          <Input autoCorrect= {false} autoCapitalize="none" onChangeText={(email)=> this.setState({email})} />
          </Item>
          <Item floatingLabel>
          <Label>Password</Label>
          <Input autoCorrect= {false} autoCapitalize="none" secureTextEntry={true} onChangeText={(password)=> this.setState({password})}/>
          </Item>
          <Button rounded full success style={{ marginTop: 10}} onPress={()=> this.loginUser(this.state.email, this.state.password)}>
          <Text style={{ color: 'white'}}>Login</Text>
          </Button>
          <Button rounded full primary style={{ marginTop: 10}} onPress={()=> this.signUpUser(this.state.email, this.state.password)}>
          <Text style={{ color: 'white'}} >SignUp</Text>
          </Button>
          </Form>
       </Container> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 10,
    justifyContent: 'center',
  },
});
