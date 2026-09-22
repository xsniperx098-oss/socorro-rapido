import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

export default function Splash() {
  const router = useRouter();

  const position = useRef(new Animated.Value(-120)).current;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    async function verificarLogin() {
      const { data } = await supabase.auth.getSession();

      Animated.timing(position, {
        toValue: screenWidth + 120,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        if (data.session) {
          router.replace('/tabs');
        } else {
          router.replace('/login');
        }
      });
    }

    verificarLogin();
  }, []);

  return (
    <View style={styles.container}>

      {/* LOGO PRINCIPAL */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* NOME DO APP */}
      <Text style={styles.title}>
        Socorro Rápido
      </Text>

      <Text style={styles.subtitle}>
        Cuidar também é agir rápido
      </Text>

      {/* PISTA */}
      <View style={styles.pista}>
        <View style={styles.faixaCentral}>
          <View style={styles.traco} />
          <View style={styles.traco} />
          <View style={styles.traco} />
          <View style={styles.traco} />
          <View style={styles.traco} />
          <View style={styles.traco} />
        </View>
      </View>

      {/* AMBULÂNCIA ANIMADA */}
      <Animated.View
        style={[
          styles.ambulanceContainer,
          {
            transform: [
              { translateX: position },
              { scaleX: -1 },
            ],
          },
        ]}
      >
        <Text style={styles.ambulance}>
          🚑
        </Text>
      </Animated.View>

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
    width: 210,
    height: 210,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E52335',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#777777',
  },

  /* PISTA */
  pista: {
    position: 'absolute',
    bottom: 145,
    left: 0,
    right: 0,
    height: 8,
    backgroundColor: '#D7D7D7',
  },

  faixaCentral: {
    position: 'absolute',
    top: 2,
    left: 0,
    right: 0,
    height: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  traco: {
    width: 32,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },

  /* AMBULÂNCIA */
  ambulanceContainer: {
    position: 'absolute',
    bottom: 148,
    left: -120,
  },

  ambulance: {
    fontSize: 55,
  },
});