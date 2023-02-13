import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <Card />
      <Card />
      <Card />
    </View>

  );
}


const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.likeIcon} ></Image>
          <Image style={styles.carImage} source={require('./images/ferrari.png')}></Image>
        </View>
      </View>
      <View style={styles.cardDescription}>
        <Text style={styles.name}>BMW M4 Series</Text>
        <Text style={styles.rating}>Rating: 4.5</Text>
        <Text style={styles.price}>$155,000</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    margin: 7,
    padding: 10,
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  card: {
    width: "100%",
    height: 400,

  },

  container: {
    backgroundColor: '#DFDFDF',
    width: '100%',
    height: '50%',
    borderRadius: 15,


  },

  imageContainer: {
    margin: 10,
  },

  likeIcon: {

  },

  carImage: {
    width: '100%',
    height: '100%',

    objectFit: 'cover',
  },

  cardDescription: {

  },

  name: {
    fontWeight: "bold",
  },
  rating: {

  },

  price: {
    fontWeight: "bold",
  }

});