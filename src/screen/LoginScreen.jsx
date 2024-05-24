import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  return (
    <View style= {styles.container}>
      <View style= {styles.topImageContainer}>
        <Image
        source={require("../assets/topVector.png")}
        style= {styles.topImage}
        />
      </View>
      <View style= {styles.merhabaContainer}>
        <Text style= {styles.merhabaText}>Merhaba</Text>
      </View>
      <View>
        <Text style= {styles.signContainer}>Hesabınıza giriş yapın</Text>
      </View>
      <View style= {styles.inputContainer}>
        <FontAwesome name= {"user"} size= {24} color={"#9A9A9A"} style= {styles.inputIcon}/>
        <TextInput style= {styles.TextInput} placeholder='Telefon No'/>
      </View>
      <View style= {styles.inputContainer}>
        <Fontisto name= {"locked"} size= {24} color={"#9A9A9A"} style= {styles.inputIcon}/>
        <TextInput style= {styles.TextInput} placeholder='Şifre' secureTextEntry/>
      </View>
      <Text style= {styles.forgotPass}>Şifremi unuttum</Text>
      <View style= {styles.signInButtonContainer}>
        <Text style= {styles.signIn}>Giriş yap</Text>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
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

  signContainer: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626"
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

  signInButtonContainer: {},

  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  }

})