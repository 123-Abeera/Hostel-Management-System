import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const UserProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const [favQuotation, setFavQuotation] = useState('');
  const [userUID, setUserUID] = useState(''); // State variable to store the user UID

  useEffect(() => {
    // Fetch user UID (Replace this with the actual code to get the user UID)
    const fetchedUserUID = 'ReplaceWithCurrentUserUID';
    setUserUID(fetchedUserUID);

    // Fetch user profile data from Firestore when the component mounts
    const fetchUserProfile = async () => {
      try {
        const userProfileSnapshot = await firestore().collection('userProfiles').doc(fetchedUserUID).get();
        const userProfileData = userProfileSnapshot.data();

        // If user profile data exists, update the state variables
        if (userProfileData) {
          setFirstName(userProfileData.firstName || '');
          setLastName(userProfileData.lastName || '');
          setAboutYou(userProfileData.aboutYou || '');
          setFavQuotation(userProfileData.favQuotation || '');
        }
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    };

    fetchUserProfile();
  }, []); // Run this effect only once when the component mounts

  const saveUserProfile = async () => {
    try {
      // Get the current user's UID from the authentication system
      // Replace this with the actual code to get the user UID

      // Store user profile data in Firestore
      await firestore().collection('userProfiles').doc(userUID).set({
        firstName,
        lastName,
        aboutYou,
        favQuotation,
      });

      // Show alert when the user profile is successfully saved
      Alert.alert('Success', 'User profile saved successfully!');
      console.log('User profile saved successfully!');
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };

  const updateUserProfile = async () => {
    try {
      // Update user profile data in Firestore
      await firestore().collection('userProfiles').doc(userUID).update({
        firstName,
        lastName,
        aboutYou,
        favQuotation,
      });

      // Show alert when the user profile is successfully updated
      Alert.alert('Success', 'User profile updated successfully!');
      console.log('User profile updated successfully!');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="About You"
        value={aboutYou}
        onChangeText={(text) => setAboutYou(text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Favorite Quotation"
        value={favQuotation}
        onChangeText={(text) => setFavQuotation(text)}
        multiline
      />

      <Button title="Save" onPress={saveUserProfile} />

      <Button title="Update" onPress={updateUserProfile} />

      {/* Additional UI or components can be added as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UserProfileScreen;
