import React, {useCallback, useState} from 'react';
import Realm from 'realm';
import {useApp} from '@realm/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Alert, Image, TouchableOpacity} from 'react-native';
import {Input, Button} from '@rneui/base';
import {colors} from './Colors';
import icons from './constants/icons';

export function WelcomeView(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    email: String(),
    password: String(),
    firstName: String(),
    lastName: String(),
    phone: String(),
    dateOfBirth: new Date(),
    role: String()
  });

  // state values for toggable visibility of features in the UI
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isInSignUpMode, setIsInSignUpMode] = useState(true);

  const app = useApp();

  // signIn() uses the emailPassword authentication provider to log in
  const signIn = useCallback(async () => {
    const creds = Realm.Credentials.emailPassword(values);
    await app.logIn(creds);
  }, [app, values]);

  // onPressSignIn() uses the emailPassword authentication provider to log in
  const onPressSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(`Failed to sign in: ${error?.message}`);
    }
  }, [signIn]);

  // onPressSignUp() registers the user and then calls signIn to log the user in
  // const onPressSignUp = useCallback(async () => {
  //   try {
  //     await app.emailPasswordAuth.registerUser(values);
  //     await signIn();
  //   } catch (error: any) {
  //     Alert.alert(`Failed to sign up: ${error?.message}`);
  //   }
  // }, [signIn, app, values]);
  const onPressSignUp = useCallback(async () => {
    const { email, password} = values;
    try {
      await app.emailPasswordAuth.registerUser({email, password});
      
      await signIn();
      
      
      const user = app.currentUser;

      
      const newUser = await user?.functions.onUserCreation(values)
      .then(res => {
        console.log(res, "Success Response")
        return res;
      })
      .catch(err => {
        console.log(err, "Error Response")
        return err;
      })
      
      console.log(newUser, "newUser")
  
    } catch (error: any) {
      Alert.alert(`Failed to sign up: ${error?.message}`);
    }
  }, [signIn, app, values]);
  
  
  console.log(values)

  return (
    <SafeAreaProvider>
      <View style={styles.viewWrapper}>
        <Text style={styles.title}>My Sync App</Text>
        <Text style={styles.subtitle}>
          Please log in or register with a Device Sync user account. This is
          separate from your Atlas Cloud login.
        </Text>
        <Input
          placeholder="email"
          onChangeText={(text) => setValues({...values, email: text})}
          autoCapitalize="none"
        />
        <Input
          placeholder="password"
          onChangeText={(text) => setValues({...values, password: text})}
          secureTextEntry={passwordHidden}
          rightIcon={
           /*  <Button
              title={passwordHidden ? <Image src='' /> : 'Hide'}
              onPress={() => {
                setPasswordHidden(!passwordHidden);
              }}
            /> */
            <TouchableOpacity 
            onPress={() => {
              setPasswordHidden(!passwordHidden);
            }}
            style={{

              
            }}>
            <Image source={passwordHidden ? icons.hideEye : icons.showEye}/>
            </TouchableOpacity>
          }
        />
        <View style={{ alignSelf: 'flex-start',  width: '50%', flexDirection: 'row'}}>
          <Input
            placeholder="First name"
            onChangeText={(text) => setValues({...values, firstName: text})}
            autoCapitalize="words"
            style={{ maxWidth: '100%' }}
          />
          <Input
            placeholder="Last name"
            onChangeText={(text) => setValues({...values, lastName: text})}
            autoCapitalize="words"
            style={{ maxWidth: '100%' }}
          />
        </View>
        <View style={{ alignSelf: 'flex-start',  width: '50%', flexDirection: 'row'}}>
        
        <Input
            placeholder="Mobile #:"
            onChangeText={(text) => setValues({...values, phone: text})}
            keyboardType='phone-pad'
            autoCapitalize="none"
            style={{ maxWidth: '100%' }}
          />
          <Input
            placeholder="User role"
            onChangeText={(text) => setValues({...values, role: text})}
            autoCapitalize="none"
            style={{ maxWidth: '80%' }}
            />
          </View>
        {isInSignUpMode ? (
          <>
            <Button
              title="PROCEED"
              buttonStyle={styles.mainButton}
              onPress={onPressSignUp}
            />
            <Button
              title="Already have an account? Log In"
              type="clear"
              titleStyle={styles.secondaryButton}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        ) : (
          <>
            <Button
              title="Log In"
              buttonStyle={styles.mainButton}
              onPress={onPressSignIn}
            />
            <Button
              title="Don't have an account? Create Account"
              type="clear"
              titleStyle={styles.secondaryButton}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    padding: 10,
    color: 'gray',
    textAlign: 'center',
  },
  mainButton: {
    width: 350,
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    color: colors.primary,
  },
});
