
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../lib/supabase';
import * as SecureStore from 'expo-secure-store';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  // CARREGAR E-MAIL E SENHA SALVOS
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const emailSalvo =
          await AsyncStorage.getItem('emailSalvo');

        const senhaSalva =
          await SecureStore.getItemAsync('senhaSalva');

        if (emailSalvo) {
          setEmail(emailSalvo);
        }

        if (senhaSalva) {
          setSenha(senhaSalva);
        }
      } catch (error) {
        console.log('Erro ao carregar dados:', error);
      }
    };

    carregarDados();
  }, []);

  // FAZER LOGIN
  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert(
        'Atenção',
        'Digite seu e-mail e sua senha.'
      );
      return;
    }

    try {
      setCarregando(true);

      const emailFormatado = email.trim().toLowerCase();

      // LOGIN REAL PELO SUPABASE
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: emailFormatado,
          password: senha,
        });

      if (error) {
        Alert.alert(
          'Login inválido',
          'E-mail ou senha incorretos.'
        );
        return;
      }

      if (!data.user) {
        Alert.alert(
          'Erro',
          'Não foi possível entrar na conta.'
        );
        return;
      }

      // SALVAR E-MAIL PARA O PRÓXIMO LOGIN
      await AsyncStorage.setItem(
        'emailSalvo',
        emailFormatado
      );

      // SALVAR SENHA NO ARMAZENAMENTO SEGURO
      await SecureStore.setItemAsync(
        'senhaSalva',
        senha
      );

      // ENTRAR NO APP
      router.replace('/tabs');

    } catch (error) {
      console.log('Erro ao fazer login:', error);

      Alert.alert(
        'Erro',
        'Não foi possível realizar o login.'
      );
    } finally {
      setCarregando(false);
    }
  };

  // BOTÕES DE LOGIN SOCIAL
  const loginSocial = (rede: string) => {
    Alert.alert(
      `${rede}`,
      `O login com ${rede} ainda será configurado.`
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* LOGO */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* TEXTO */}
        <Text style={styles.subtitle}>
          Faça login para continuar
        </Text>

        {/* FORMULÁRIO */}
        <View style={styles.form}>

          {/* E-MAIL */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={21}
              color="#555"
            />

            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#777"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* SENHA */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={21}
              color="#555"
            />

            <TextInput
              placeholder="Senha"
              placeholderTextColor="#777"
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          {/* ENTRAR */}
          <Pressable
            style={[
              styles.buttonEntrar,
              carregando && styles.buttonDisabled,
            ]}
            onPress={fazerLogin}
            disabled={carregando}
          >
            <Text style={styles.buttonEntrarText}>
              {carregando ? 'ENTRANDO...' : 'ENTRAR'}
            </Text>
          </Pressable>

          {/* OU */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />

            <Text style={styles.ou}>
              ou
            </Text>

            <View style={styles.line} />
          </View>

          {/* CRIAR CONTA */}
          <Pressable
            style={styles.buttonCadastro}
            onPress={() => router.push('/cadastro')}
          >
            <Text style={styles.buttonCadastroText}>
              Criar conta
            </Text>
          </Pressable>

          {/* ESQUECI SENHA */}
          <Pressable
            onPress={() => router.push('/esqueci-senha')}
          >
            <Text style={styles.forgotPassword}>
              Esqueci minha senha
            </Text>
          </Pressable>

          {/* LOGIN COM REDES SOCIAIS */}
          <View style={styles.socialContainer}>
            <Text style={styles.socialText}>
            
            </Text>

            <View style={styles.socialButtons}>

              {/* GOOGLE */}
              <Pressable
                style={styles.socialButton}
                onPress={() => loginSocial('Google')}
              >
                <Ionicons
                  name="logo-google"
                  size={25}
                  color="#DB4437"
                />
              </Pressable>

              {/* FACEBOOK */}
              <Pressable
                style={styles.socialButton}
                onPress={() => loginSocial('Facebook')}
              >
                <Ionicons
                  name="logo-facebook"
                  size={25}
                  color="#1877F2"
                />
              </Pressable>

              {/* APPLE */}
              <Pressable
                style={styles.socialButton}
                onPress={() => loginSocial('Apple')}
              >
                <Ionicons
                  name="logo-apple"
                  size={25}
                  color="#111111"
                />
              </Pressable>

            </View>
          </View>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 45,
  },

  logo: {
    width: 210,
    height: 210,
    alignSelf: 'center',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 13,
    color: '#111111',
    textAlign: 'center',
    marginBottom: 35,
  },

  form: {
    width: '100%',
  },

  inputContainer: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 17,
  },

  input: {
    flex: 1,
    height: 55,
    fontSize: 15,
    paddingHorizontal: 12,
    color: '#111111',
  },

  buttonEntrar: {
    width: '100%',
    height: 55,
    backgroundColor: '#E00000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonEntrarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  dividerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D0D0D0',
  },

  ou: {
    fontSize: 12,
    color: '#777',
    marginHorizontal: 12,
  },

  buttonCadastro: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonCadastroText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: 'bold',
  },

  forgotPassword: {
    color: '#E00000',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 22,
    textAlign: 'center',
  },

  socialContainer: {
    alignItems: 'center',
    marginTop: 30,
  },

  socialText: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 15,
  },

  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },

  socialButton: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});