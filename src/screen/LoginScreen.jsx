import { Image, ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { userApi } from '../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre gereklidir');
      return;
    }

    try {
      const result = await userApi({
        username: username,
        password: password,
      });

      console.log('API Result:', result);
      console.log('Kullanıcı adı:',username);
      console.log('Şifre:', password);

      if (result.status === 200) {
        await AsyncStorage.setItem("AccessToken", result.data.token);
        navigation.replace("ProductList");
      } else {
        Alert.alert('Hata', 'Geçersiz kullanıcı adı veya şifre');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Hata', 'Bir hata oluştu');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.merhabaContainer}>
        <Text style={styles.merhabaText}>Merhaba</Text>
      </View>
      <View>
        <Text style={styles.signContainer}>Hesabınıza giriş yapın</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder='Telefon No'
          
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder='Şifre'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Text style={styles.forgotPass}>Şifremi unuttum</Text>
      <View style={styles.signInButtonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.signInButton}>
          <Text style={styles.signIn}>Giriş yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
            <AntDesign name={"arrowright"} size={24} color={"white"} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Hesabınız yok mu? {""}
          <Text style={{ textDecorationLine: "underline" }}>Oluşturun.</Text>
        </Text>
      </TouchableOpacity>
      <ImageBackground
        source={require("../assets/bottomVector.png")}
        style={styles.bottomImage}
      />
    </View>
  );
};

export default LoginScreen;

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

  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 70,
    marginBottom: 40,
    width: "90%",
    justifyContent: "flex-end"
  },

  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
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
    marginTop: 123,
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