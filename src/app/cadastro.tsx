import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../lib/supabase';

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const criarConta = async () => {
    if (!nome || !email || !celular || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        'Atenção',
        'A senha precisa ter pelo menos 6 caracteres.'
      );
      return;
    }

    if (!aceitouTermos) {
      Alert.alert(
        'Atenção',
        'Aceite os termos para criar sua conta.'
      );
      return;
    }

    try {
      setCarregando(true);

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password: senha,
        options: {
          data: {
            nome: nome.trim(),
            celular: celular.trim(),
          },
        },
      });

      if (error) {
        Alert.alert('Erro ao criar conta', error.message);
        return;
      }

      if (data.user) {
        Alert.alert(
          'Conta criada!',
          'Sua conta foi criada com sucesso.',
          [
            {
              text: 'OK',
              onPress: () => router.replace('/login'),
            },
          ]
        );
      }
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível criar sua conta.'
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <View style={styles.container}>

      {/* TÍTULO */}
      <Text style={styles.title}>
        Cria conta
      </Text>

      <Text style={styles.subtitle}>
        Preencha seus dados para{'\n'}criar sua conta
      </Text>

      {/* NOME */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={18}
          color="#555"
        />

        <TextInput
          placeholder="Nome completo"
          placeholderTextColor="#777"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>

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

      {/* CELULAR */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="call-outline"
          size={18}
          color="#555"
        />

        <TextInput
          placeholder="Celular"
          placeholderTextColor="#777"
          style={styles.input}
          value={celular}
          onChangeText={setCelular}
          keyboardType="phone-pad"
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

      {/* CONFIRMAR SENHA */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={18}
          color="#555"
        />

        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#777"
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
      </View>

      {/* TERMOS */}
      <Pressable
        style={styles.termsContainer}
        onPress={() => setAceitouTermos(!aceitouTermos)}
      >
        <View
          style={[
            styles.checkbox,
            aceitouTermos && styles.checkboxChecked,
          ]}
        >
          {aceitouTermos && (
            <Ionicons
              name="checkmark"
              size={14}
              color="#FFFFFF"
            />
          )}
        </View>

        <Text style={styles.termsText}>
          Eu aceito os termos e condições
        </Text>
      </Pressable>

      {/* CRIAR CONTA */}
      <Pressable
        style={[
          styles.button,
          carregando && styles.buttonDisabled,
        ]}
        onPress={criarConta}
        disabled={carregando}
      >
        <Text style={styles.buttonText}>
          {carregando ? 'CRIANDO...' : 'CRIAR CONTA'}
        </Text>
      </Pressable>

      {/* JÁ TEM CONTA */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Já tem uma conta?
        </Text>

        <Pressable
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.loginLink}>
            Entrar
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
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 10,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 15,
    marginBottom: 25,
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
    marginBottom: 12,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 11,
    color: '#111111',
    paddingHorizontal: 8,
  },

  termsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 20,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  checkboxChecked: {
    backgroundColor: '#E00000',
    borderColor: '#E00000',
  },

  termsText: {
    fontSize: 9,
    color: '#555555',
  },

  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#E00000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  loginText: {
    fontSize: 9,
    color: '#555555',
    marginRight: 4,
  },

  loginLink: {
    fontSize: 9,
    color: '#E00000',
    fontWeight: 'bold',
  },
});