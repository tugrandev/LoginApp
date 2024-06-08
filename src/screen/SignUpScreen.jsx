import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { registerApi } from '../api/registerApi'; // registerApi'yi import ediyoruz

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleGoBack = () => {
    navigation.navigate("Login");
  };

  const handleRegister = async () => {

    if (!username || !password || !confirmPassword) {
      Alert.alert("Hata", "LÜtfen tüm alanları doldurun!");
      return;
    } else if (password !== confirmPassword) {
      Alert.alert("Hata", "Şifreler uyuşmuyor");
      return;
    } 
  
    const data = {
      username: username,
      password: password,
    };
  
    const result = await registerApi(data);
    console.log("Register result:", result); // Gelen sonucu konsola yazdır
  
    if (result.status === 200) {
      Alert.alert("Başarılı", "Kayıt başarılı", [
        { text: "Tamam", onPress: () => navigation.navigate("Login") }
      ]);
    } else {
      Alert.alert("Kayıt başarısız", result || "Bilinmeyen bir hata oluştu.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="#262626" />
      </TouchableOpacity>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View>
        <Text style={styles.createAccount}>Hesap oluştur</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder='Telefon No'
          keyboardType='phone-pad'
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder='Şifre'
          keyboardType='numeric'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name={"locked"} size={24} color={"#9A9A9A"} style={styles.inputIcon} />
        <TextInput
          style={styles.TextInput}
          placeholder='Şifre tekrar'
          keyboardType='numeric'
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.signInButtonContainer}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.signIn}>Hesap oluştur</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
            <AntDesign name={"arrowright"} size={24} color={"white"} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/bottomVector.png")}
        style={styles.bottomImage}
      />
    </View>
  );
};

export default RegisterScreen;

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