
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

export default function EsqueciSenha() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [carregando, setCarregando] = useState(false);

  const enviarLink = async () => {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Digite seu e-mail.');
      return;
    }

    setCarregando(true);

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
      {
        redirectTo: 'socorrorapido://redefinir-senha',
      }
    );

    setCarregando(false);

    if (error) {
      Alert.alert(
        'Não foi possível enviar',
        'Verifique o e-mail informado e tente novamente.'
      );
      return;
    }

    Alert.alert(
      'Link enviado!',
      'Verifique seu e-mail para continuar a recuperação da senha.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.iconContainer}>
          <Ionicons
            name="mail-outline"
            size={46}
            color="#E52335"
          />
        </View>

        <Text style={styles.title}>
          Esqueci minha senha
        </Text>

        <Text style={styles.description}>
          Informe seu e-mail para receber o link de recuperação.
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#53677D"
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#8799AA"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <Pressable
          style={[
            styles.button,
            carregando && styles.buttonDisabled,
          ]}
          onPress={enviarLink}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>
              Enviar link
            </Text>
          )}
        </Pressable>

        <Pressable
          style={styles.voltar}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.voltarText}>
            Voltar para início
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F7FC',
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    alignItems: 'center',
    paddingTop: 90,
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFE9EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 34,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#172337',
    textAlign: 'center',
    marginBottom: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#53677D',
    textAlign: 'center',
    maxWidth: 330,
    marginBottom: 38,
  },

  inputContainer: {
    width: '100%',
    height: 64,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D9E0E8',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 13,
    fontSize: 17,
    color: '#172337',
  },

  button: {
    width: '100%',
    height: 64,
    backgroundColor: '#E52335',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },

  voltar: {
    marginTop: 38,
    paddingVertical: 10,
  },

  voltarText: {
    color: '#E52335',
    fontSize: 16,
    fontWeight: '700',
  },

});
