import React from 'react';
import { Image, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const YourImageComponent = ({ source }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={source}
        style={{ width: 200, height: 200, marginBottom: 20 }} // adjust the style as needed
      />
    </View>
  );
};

const OnBoardingScreen = ({ navigation }) => {
  const onDone = () => {
    // Navigate to the signup screen when onboarding is completed
    navigation.navigate('SignUp');
  };

  const pages = [
    {
      backgroundColor: '#6658ED',
      title: 'Quotation Generator App',
      image: <YourImageComponent source={require("../../assets/SocialMediaIcons/logo1.png")} />,
      subtitle: 'Welcome' ,
      description: 'Description of the first screen.',
    },
    {
      backgroundColor: '#63BFB6',
      image: <YourImageComponent source={require("../../assets/SocialMediaIcons/screen1.png")} />,
      title: 'Sign In & Explore Features',
      subtitle: 'Description of the second screen.',
    },
    {
      backgroundColor: '#6658ED',
      image: <YourImageComponent source={require("../../assets/SocialMediaIcons/screen33.png")} />,
      title: 'Get Started',
      subtitle: 'Description of the third screen.',
    },
  ];

  return (
    <Onboarding
      onDone={onDone}
      pages={pages}
      showSkip={false}
      controlStatusBar={false}
    />
  );
};

export default OnBoardingScreen;
