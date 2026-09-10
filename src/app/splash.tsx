import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Splash() {
  const router = useRouter();
  const ambulanceX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(ambulanceX, {
      toValue: width,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // Quando a ambulância chegar ao final
      router.replace('/login');
    });
  }, []);

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* AMBULÂNCIA */}
      <Animated.Text
        style={[
          styles.ambulance,
          {
         transform: [{ translateX: ambulanceX }, { scaleX: -1 }],
          },
        ]}
      >
        🚑
      </Animated.Text>

      {/* LINHA */}
      <View style={styles.line} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 230,
    height: 230,
  },

  ambulance: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    fontSize: 45,
  },

  line: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    height: 2,
    backgroundColor: '#BDBDBD',
  },
});