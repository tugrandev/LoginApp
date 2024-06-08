import { Image, ImageBackground, StyleSheet, Text, TextInput, KeyboardAvoidingView ,View, Touchable, TouchableOpacityComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("Login")
  }

  return (
    <View style= {styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="#262626" />
      </TouchableOpacity>
      <View style= {styles.topImageContainer}>
        <Image
        source={require("../assets/topVector.png")}
        style= {styles.topImage}
        />
      </View>
      <View>
        <Text style= {styles.createAccount}>Product List</Text>
      </View>
      <View style= {styles.inputContainer}>
        <FontAwesome name= {"user"} size= {24} color={"#9A9A9A"} style= {styles.inputIcon}/>
        <TextInput style= {styles.TextInput} placeholder='Telefon No' keyboardType='phone-pad'/>
      </View>
      <View style= {styles.inputContainer}>
        <Fontisto name= {"locked"} size= {24} color={"#9A9A9A"} style= {styles.inputIcon}/>
        <TextInput style= {styles.TextInput} placeholder='Şifre' keyboardType='numeric' secureTextEntry/>
      </View>
      <View style= {styles.inputContainer}>
        <Fontisto name= {"locked"} size= {24} color={"#9A9A9A"} style= {styles.inputIcon}/>
        <TextInput style= {styles.TextInput} placeholder='Şifre tekrar' keyboardType='numeric' secureTextEntry/>
      </View>
      <View style= {styles.signInButtonContainer}>
        <Text style= {styles.signIn}>Hesap oluştur</Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
        <AntDesign name= {"arrowright"} size= {24} color={"white"}/>
        </LinearGradient>
      </View>
      <ImageBackground
      source={require("../assets/bottomVector.png")}
      style= {styles.bottomImage}
      />
    </View>
  );
};

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },

  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
 
  topImageContainer: {},

  topImage: {
    width: "100%",
    height: 125,
  },

  merhabaContainer: {},

  merhabaText: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 70, 
    fontWeight: "500",
    color: "#262626"
  },

  createAccount: {
    marginTop: 105,
    textAlign: "center",
    fontSize: 39,
    color: "#262626",
    fontWeight: "bold"
  },

  inputContainer: {
    backgroundColor: "#FFFFFF", 
    flexDirection: "row",
    borderRadius: 40,
    marginHorizontal: 40,
    marginVertical: 65,
    marginBottom: -30,
    marginLeft: 45,
    elevation: 5,
    alignItems: "center",
    borderWidth: 1, 
    borderColor: "#9A9A9A",
    width: 300,
    height: 50, 
    paddingHorizontal: 10, 
    
  },
  inputIcon: {
    marginLeft: 9, 
    marginRight: 5,
  },
  
  TextInput: {
    flex: 1,
    paddingHorizontal: 10,
    height: "100%", 
  },

  forgotPass: {
    color: "#BEBEBE",
    marginLeft: 230,
    marginTop: 45,
    width: "85%",
    fontSize: 15,
  },

  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 80,
    width: "90%",
    justifyContent: "flex-end"
  },

  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 150
  },

  linearGradient: {
    width: 56,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10
  },

  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginTop: 107,
  },

  bottomImageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  bottomImage: {
    height: 259,
    width: 200,
    marginLeft: -40,
    marginTop: -190
  }

})