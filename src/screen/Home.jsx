import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const data = [
  { key: '1', text: 'Kulaklık', image: require("../assets/productImages/kulaklik1.png")},
  { key: '2', text: 'Krem', image: require("../assets/productImages/krem.png")},
  { key: '3', text: 'Saat', image: require("../assets/productImages/saat.png")},
  { key: '4', text: 'Kulaklık', image: require("../assets/productImages/kulaklik2.png")},
];

const Home = () => {
  return (
    <View>
      <Text style={styles.kategoriText}>Kategoriler</Text>
      <Text style={styles.kesifText}>Keşfetmeye başla!</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.onecikanText}>Öne çıkanlar</Text>
      <Text style={styles.kesifText}>Öne çıkan ürünlere göz at!</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 15,
    padding: 20,
    backgroundColor: '#ddd',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  kategoriText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
  },
  onecikanText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
  },
  kesifText: {
    fontSize: 15,
    fontWeight: '300', // fontWeight 'light' yerine '300' olarak değiştirildi
    marginLeft: 10,
    marginTop: 5,
    color: 'grey',
  },
});

export default Home;
