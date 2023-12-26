/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState,useEffect} from 'react';
import {StyleSheet,Text,View,Alert,Button,TouchableOpacity,Image} from 'react-native';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import SocialMedia from '../../components/SocialMedia';
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const SignInScreen = ({navigation}) => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({});

const getErrors = (email, password) => {
    const errors = {};
    if (!email) {
      errors.email = 'Please Enter Email';
    } else if (!email.includes('@') || !email.includes('.com')) {
      errors.email = 'Please Enter Valid Email';
    }

    if (!password) {
      errors.password = 'Enter Password';
    } else if (password.length < 8) {
      errors.password = 'Enter Strong Password';
    }
   return errors;
  };


useEffect(() => {

GoogleSignin.configure({
  webClientId: '27882496381-9vc2effhplqbc6gbeii06k7vam61bd3n.apps.googleusercontent.com',
});

},[])

const onGoogleButtonPress = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken);
    console.log('Login Successfully with Google!');

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Google Sign-In Error', error);
    // You can choose to log the error or handle it in a different way
  }
};


const forgotPassword = () => {
    if (!email) {
      Alert.alert('Email is required for password reset.');
      return;
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Password Reset Email Sent',
          'Check your email for instructions to reset your password.'
        );
      })
      .catch((error) => {
        console.error('Password Reset Error', error);
        Alert.alert('Error', 'Failed to send password reset email. Please try again.');
      });
  };



const loginWithEmailAndPass = () => {

  const errors = getErrors(email, password );

    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(errors);
      console.log(errors);
    } else {
      setShowErrors(false);
      auth()
.signInWithEmailAndPassword( email,password)
.then(() =>  {

Alert.alert("Login Successfully!")
navigation.navigate("HomeScreen")

})
.catch(err => {

                 let errorMessage = '';

                         if (err.code === 'auth/user-not-found') {
                           errorMessage = 'Email does not exist. Please sign up.';
                         } else {
                           errorMessage = 'Incorrect email or password. Please try again.';
                           console.log(err);
                         }

                         Alert.alert('Error', errorMessage);

 })
}



};

  return (
    <View style={styles.inputsContainer}>

         <View style={styles.signupHeader}>
                        <Text style={styles.signupText}>Sign In</Text>
                        <Image source={require('../../assets/SocialMediaIcons/logo1.png')} style={styles.logo} />
                      </View>

      <Text style={styles.heading}>Email</Text>
      <MyTextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter E-mail or User Name"
      />
      {showErrors && errors.email && <Text style={{ color: 'red',width:390,marginBottom: 10 }}>{errors.email}</Text>}


      <Text style={styles.heading}>Password</Text>
      <MyTextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      />
      {showErrors && errors.password && <Text style={{ color: 'red',width:390,marginBottom: 10 }}>{errors.password}</Text>}

      <MyButton onPress={loginWithEmailAndPass} title="Login" />

          <Button onPress={onGoogleButtonPress} title="Login with Google" />





       <Text style={styles.alreadyHaveAccountText}>
              Forgot Password{' '}
              <Text style={styles.loginLink}  onPress={forgotPassword}>
                 Click here
              </Text>
            </Text>


      <View>
        <Text style={styles.or}>Or Sign in with</Text>
        <SocialMedia />
      </View>

      <Text style={styles.alreadyHaveAccountText}>
                    Don't have an account?{' '}
                    <Text style={styles.SignUpLink} onPress={() => navigation.navigate('SignUp')}>
                       Login
                    </Text>
                  </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    height: 550,

    backgroundColor: 'white',
    width: '100%',

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  or: {
    fontSize: 20,
    marginTop: 20,
     marginBottom: 70,
    color: 'black',
  },

  alreadyHaveAccountText: {
      marginTop: 10,
      fontSize: 16,
      color: 'black',
    },

    SignUpLink: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
      heading: {
        fontWeight: '800',
         marginRight: 10,
          width: 380,
        marginBottom: -15,
        color: 'black',
      },

       googleButton: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#4285F4', // Google Blue color
          padding: 10,
          borderRadius: 5,
          width: '80%', // Adjust the width as needed
          justifyContent: 'center',
        },
        buttonText: {
          color: '#FFFFFF',
          marginLeft: 10,
          fontSize: 18,
        },

         signupHeader: {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                },
                signupText: {
                  fontSize: 30,
                  fontWeight: '500',
                  marginRight: 10,
                  color: 'black',
                },
                logo: {
                  width: 50,
                  height: 50,
                },

});
