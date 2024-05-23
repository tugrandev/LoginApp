import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
      <FontAwesome name= {"user"} size= {30} color={"black"}>

      </FontAwesome>
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
    height: 119,
  },

  merhabaContainer: {},

  merhabaText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626"
  },

  signContainer: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626"
  }

})