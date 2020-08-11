import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native'


const SignUp = () => {
  const [userInformation, setUserInformation] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: ''
  });
  const [signedUp, setSignedUp] = useState(false);

  function handleUserInfoChange(event, textInput) {
    const value = event.target.value
    setUserInformation({
      ...userInformation,
      [textInput]: value
    })
  }

  const submitLoginInformation = () => {
    console.log(userInformation)
    Keyboard.dismiss();
  }

  return (
    <View>
      <TextInput
        type="text"
        name="username"
        placeholder="Username"
        onChangeText={handleUserInfoChange}
        value={userInformation.username}
      />
      <TextInput
        placeholder="Password"
        type="text"
        name="password"
        secureTextEntry={true}
        selectTextOnFocus={true}
        onChangeText={password => setUserInformation(password, userInformation.password)}
        value={userInformation.password}
      />
      <TextInput
        placeholder="Email"
        type="text"
        name="email"
        onChangeText={email => setUserInformation(email, userInformation.email)}
        value={userInformation.email}
      />
      <TextInput
      name="phoneNumber"
        placeholder="Phone Number"
        keyboardType="number-pad"
        onChangeText={phoneNumber => setUserInformation(phoneNumber, userInformation.phoneNumber)}
        value={userInformation.phoneNumber}
      />
      <Button title="Submit" onPress={submitLoginInformation} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default SignUp;


 // function handleChange(event) {
  //   const name = event.target && event.target.name;
  //   const value = event.target && event.target.value;

  //   setUserInformation({
  //     [name]: value
  //   })
  // }