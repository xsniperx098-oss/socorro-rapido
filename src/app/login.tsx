import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// E-MAIL E SENHA CORRETOS
const EMAIL_CORRETO = 'teste@gmail.com';
const SENHA_CORRETA = '123456';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // CARREGAR O E-MAIL SALVO
  useEffect(() => {
    const carregarEmail = async () => {
      try {
        const emailSalvo = await AsyncStorage.getItem('emailSalvo');

        if (emailSalvo) {
          setEmail(emailSalvo);
        }
      } catch (error) {
        console.log('Erro ao carregar e-mail:', error);
      }
    };

    carregarEmail();
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

    if (
      email.trim().toLowerCase() === EMAIL_CORRETO.toLowerCase() &&
      senha === SENHA_CORRETA
    ) {
      try {
        // Salva o primeiro e-mail usado corretamente
        const emailJaSalvo = await AsyncStorage.getItem('emailSalvo');

        if (!emailJaSalvo) {
          await AsyncStorage.setItem(
            'emailSalvo',
            email.trim()
          );
        }

        // Vai para o aplicativo
        router.replace('/tabs');

      } catch (error) {
        console.log('Erro ao salvar e-mail:', error);

        // Mesmo se houver erro ao salvar,
        // permite continuar para o aplicativo
        router.replace('/tabs');
      }

    } else {
      Alert.alert(
        'Login inválido',
        'E-mail ou senha incorretos.'
      );
    }
  };

  return (
    <View style={styles.container}>

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
            size={18}
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
            size={18}
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
          style={styles.buttonEntrar}
          onPress={fazerLogin}
        >
          <Text style={styles.buttonEntrarText}>
            ENTRAR
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

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 160,
    height: 160,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 10,
    color: '#111111',
    marginBottom: 25,
  },

  form: {
    width: '88%',
    alignItems: 'center',
  },

  inputContainer: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 12,
    paddingHorizontal: 8,
    color: '#111111',
  },

  buttonEntrar: {
    width: '100%',
    height: 40,
    backgroundColor: '#E00000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  buttonEntrarText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  dividerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D0D0D0',
  },

  ou: {
    fontSize: 9,
    color: '#777',
    marginHorizontal: 10,
  },

  buttonCadastro: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonCadastroText: {
    color: '#111111',
    fontSize: 11,
    fontWeight: 'bold',
  },

  forgotPassword: {
    color: '#E00000',
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 18,
  },
});