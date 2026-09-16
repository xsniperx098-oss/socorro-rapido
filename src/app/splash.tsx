
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

      {/* NOME DO APP */}
      <Text style={styles.title}>
        Socorro Rápido
      </Text>

      <Text style={styles.subtitle}>
        Cuidar também é agir rápido
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 210,
    height: 210,
    marginBottom: 20,
  },

  ambulanceContainer: {
    position: 'absolute',
    bottom: 150,
    left: -120,
  },

  ambulance: {
    fontSize: 55,
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
});