import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  flex,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: "#d4d6d9",
        flex: 1,
      }}>
        <View
          style={{
            backgroundColor: "#04923c",
            width: "100%",
            height: 60,
          }}
        />
        <Image
          style={{
            width: 30,
            height: 20,
            position: "absolute",
            left: 25,
            top: 20,
          }}
          source={
            require("./assets/menu.png")
          }
        />
        <Image
          style={{
            width: 20,
            height: 30,
            position: "absolute",
            right: 20,
            top: 15,
            tintColor: "#fff"
          }}
          source={
            require("./assets/ellipsis.png")
          }
        />
        <Text
          style={{
            color: "#04923c",
            fontSize: 20,
            fontWeight: "bold",
            top: 20,
            left: 20,
          }}
        >TFP RECOMENDATION
        </Text>
        <View style={styles.picture}>
          <Image
            style={{
              zIndex: 1,
              width: 375,
              height: "70%",
              left: 6,
              top: 6,
            }}
            source={
              require("./assets/food.jpg")
            }
          />
          <Text
            style={{
              color: "#333",
              fontWeight: "bold",
              fontSize: 35,
              top: 20,
              left: 20,
            }}>Healthy Food</Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              top: 20,
              left: 20,
            }}
          >
            Health is state of complete physical
            </Text>
          <Image
            style={{
              width: "100%",
              height: "11%",
              top: 25,
            }}
            source={
              require("./assets/rating.png")
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  picture: {
    // flex: 0,
    height: "80%",
    width: "90%",
    backgroundColor: "#04923c",
    top: 40,
    left: 20,
    zIndex: -1,
  }
});
