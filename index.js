import React,{ useState,useEffect} from 'react';
import {View, Text,TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 from react-native-vector-icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tts from 'react-native-tts';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';


Tts.setDefaultLanguage('en-GB');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.5);

const index = ({ navigation }) => {

const [Quote, setQuote] = useState('Loading...');
const [Author, setAuthor] = useState('Loading...');
const [isLoading, setIsLoading] = useState(false);
 const randomQuote = () => {
    setIsLoading(true);
     fetch("https://api.quotable.io/random")
       .then((res) => res.json())
       .then((result) => {
       //  console.log(result.content);
         // Move console.log inside the .then() callback
          setQuote(result.content); // Set the quote content
                 setAuthor(result.author);
                 // Set the author
                 setIsLoading(false);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
          console.log("Full API response:", error.response);
       });
   };

  useEffect(() => {
    // Check if the selected voice is available

    randomQuote();

    }, []);

const speakNow = () => {
   Tts.stop();
   Tts.speak(Quote);
}

const copyToClipboard = () => {
Clipboard.setString('Quote');
Snackbar.show({
text: 'Quote copied!',
duration: Snackbar.LENGTH_SHORT,
});

};

const  tweetNow = () => {
const url = "https://twitter.com/intent/tweet?text=" + Quote;
Linking.openURL(url);
};

 const handleFloatButtonClick = () => {
    // Navigate to the MapScreen when the button is pressed
    navigation.navigate('UserProfileScreen');
  };

return (
     <View
       style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#5372F0',
       }}>

       <View
         style={{
           width: '90%',
           backgroundColor: '#fff',
           borderRadius: 20,
           padding: 20,
         }}>
         <Text
           style={{
             textAlign: 'center',
             fontSize: 26,
             fontWeight: '600',
             color: '#333',
             marginBottom: 20,
           }}>
           Quote of the Day
         </Text>
         <FontAwesome name="quote-left" style={{fontSize:20,marginBottom:-12}} color="#000" />
           <Text
                               style={{
                               color: '#000',
                                fontSize: 16,
                                lineHeight: 26,
                                letterSpacing: 1.1,
                                fontWeight: '400',
                                textAlign: 'center',
                                marginBottom: 10,
                                paddingHorizontal: 30,
                           }}>
                        {Quote}
                           </Text>
                           <FontAwesome name="quote-right" style={{fontSize:20,textAlign:'right',marginTop:-20,marginBottom:20}} color="#000" />
                             <Text
                                     style={{
                                       textAlign: 'right',
                                       fontWeight: '300',
                                       fontStyle: 'italic',
                                       fontSize: 16,
                                       color: '#000',
                                     }}>
                                   {Author}
                                   </Text>



   <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor:  isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)'  ,
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
            { isLoading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>



          <View style={{ flexDirection:'row',justifyContent:'space-around' }}>

            < TouchableOpacity
            onPress={speakNow}
               style={{
               borderWidth:2,
                borderColor: '#5372F0',
                borderRadius: 50,
                 padding: 15,
                }}>
             <FontAwesome name="volume-up" size={22} color="#5372F0" />
           </TouchableOpacity>

 < TouchableOpacity
                               onPress={copyToClipboard}
                                 style={{
                                 borderWidth:2,
                                  borderColor: '#5372F0',
                                  borderRadius: 50,
                                   padding: 15,
                                  }}>
                               <FontAwesome name="copy" size={22} color="#5372F0" />
                             </TouchableOpacity>


            < TouchableOpacity
                        onPress={tweetNow}
                          style={{
                          borderWidth:2,
                           borderColor: '#5372F0',
                           borderRadius: 50,
                            padding: 15,
                           }}>
                        <FontAwesome name="twitter" size={22} color="#5372F0" />
                      </TouchableOpacity>




           </View>




         </View>


           <TouchableOpacity
                                           onPress={handleFloatButtonClick}
                                           style={{
                                             position: 'absolute',
                                             bottom: 10,
                                             right: 15,
                                             backgroundColor: 'white',
                                             elevation: 10,
                                             width: 60,
                                             height: 60,
                                             borderRadius: 30,
                                             alignItems: 'center',
                                           }}>
                                           <Icon name="place" type="material" size={32} color={'#E11584'} />
                                           <Text style={{ color: '#F9629F', textAlign: 'center' }}>Setting</Text>
                                         </TouchableOpacity>




        </View>
 )


}

export default index;

