import React, {useCallback, useState} from 'react';
import Realm from 'realm';
import {useApp, useEmailPasswordAuth, useAuthResult, useAuth } from '@realm/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Alert, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {Input, Button} from '@rneui/base';
import {colors} from './Colors';
import icons from './constants/icons';
import { realmContext } from './RealmContext';
import { COLORS } from './constants/theme';
import images from './constants/images';



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
  const app = useApp();

  // state values for toggable visibility of features in the UI
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isInSignUpMode, setIsInSignUpMode] = useState(false);
  
  



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
    const { email, password, firstName, lastName, dateOfBirth, role, phone } = values;
    try {
      const reg = await app.emailPasswordAuth.registerUser(values)
      .then(res => {
        console.log(res, "SUCCESS")
        setIsInSignUpMode(false)
        return res
      })
      .catch(err => {
        console.log(err, 'Error')
        return
      });
      
    } catch (error: any) {
      Alert.alert(`Failed to sign up: ${error?.message}`);
    }
  }, [signIn, app, values]);
  
  
  console.log(isInSignUpMode)

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#021024',justifyContent: 'center',}}>
    <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderWidth: 1, padding: 10, width: 110, height: 110,  backgroundColor: COLORS.white2, borderColor: COLORS.white2, top: '9%', borderRadius: 666, zIndex: 2}}>
      <Image source={icons.mongodb} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
    </View>
      <View style={{...styles.viewWrapper, borderWidth: .6, borderColor: COLORS.gray900, margin: 22, height: isInSignUpMode ? '90%' : '50%', backgroundColor: '#001e2b', borderTopRightRadius: 60, borderBottomLeftRadius: 60, borderTopLeftRadius: 10, borderBottomRightRadius: 10}}>
              {/* <ImageBackground source={images.loyverse} resizeMode='contain' style={{flex: 1, position: 'absolute', height: '100%', width: '100%', opacity: .3, bottom: '50%', borderBottomRightRadius: 14,  }}>
      </ImageBackground> */}
      
        {/* <Text style={{...styles.title, marginLeft: 10, marginBottom: 20, marginTop: 150, fontWeight: '600', fontSize: 18}}>{ isInSignUpMode ? 'Business Registration:' : ''}</Text> */}
       {/*  <Text style={styles.subtitle}>
          Please log in or register with a Device Sync user account. This is
          separate from your Atlas Cloud login.
        </Text> */}
        
        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{ fontWeight: '500', fontSize: 12, color: COLORS.white2,}}>
          Email
        </Text>
          <Text style={{ color: COLORS.red}}>*</Text>
        </View> 
        <Input
          placeholder="business@mail.com"
          placeholderTextColor={COLORS.darkgray}
          onChangeText={(text) => setValues({...values, email: text})}
          autoCapitalize="none"
          inputStyle={{color: COLORS.white2, fontWeight: '400'}}
          labelStyle={{ fontWeight: '400'}}
        />
        
        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{ fontWeight: '500', fontSize: 12, color: COLORS.white2 }}>
          Password
        </Text>
          <Text style={{ color: COLORS.red}}>*</Text>
        </View>
        <Input
          placeholder="must contain 6 or more characters"
          placeholderTextColor={COLORS.darkgray}
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
            <Image source={passwordHidden ? icons.hideEye : icons.showEye} style={{height: 0, width: 20,}}/>
            </TouchableOpacity>
          }
        />
        {isInSignUpMode ? (
          <>
        
        <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{ fontWeight: '500', fontSize: 12, color: COLORS.white2 }}>
          Store name
        </Text>
          <Text style={{ color: COLORS.red}}>*</Text>
        </View> 
        <Input
          placeholder="Business name"
          onChangeText={(text) => setValues({...values, email: text})}
          autoCapitalize="none"
          placeholderTextColor={COLORS.darkgray}
        />
        
        {/* <View style={{ alignSelf: 'flex-start',  width: '50%', flexDirection: 'row'}}>
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
          </View> */}
        <View style={{  alignItems: 'center'}}>
          <Text style={{  marginBottom: 30, marginTop: 30, textAlign: 'center', color: COLORS.white}}>
            I have read the terms and agree with the <Text style={{ color: COLORS.primary, textDecorationLine: 'underline'}}>terms of use</Text> and <Text style={{ color: COLORS.primary, textDecorationLine: 'underline'}}>
            privacy policy</Text>
          </Text>
        
            <Button
              title="SUBMIT"
              disabled={!values.email || !values.password ? true : false}
              buttonStyle={styles.mainButton}
              onPress={onPressSignUp}
              />
            <Button
              title="Already have an account? Log In"
              type="clear"
              titleStyle={{...styles.secondaryButton, color: COLORS.white2}}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
              />
              </View>
          </>
        ) : (
          <>
          <View style={{ flex: 1, alignSelf: 'center'}}>
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
              </View>
          </>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 32
    
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
