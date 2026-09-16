import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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

      const emailFormatado = email.trim().toLowerCase();
      const nomeFormatado = nome.trim();
      const celularFormatado = celular.trim();

      // 1. Criar usuário no Authentication
      const { data, error } = await supabase.auth.signUp({
        email: emailFormatado,
        password: senha,
        options: {
          data: {
            nome: nomeFormatado,
            celular: celularFormatado,
          },
        },
      });

      if (error) {
        Alert.alert('Erro ao criar conta', error.message);
        return;
      }

      if (!data.user) {
        Alert.alert(
          'Erro',
          'O usuário não foi criado.'
        );
        return;
      }

      // 2. Verificar se o usuário está autenticado
      if (!data.session) {
        Alert.alert(
          'Atenção',
          'A conta foi criada, mas não foi possível iniciar a sessão.'
        );
        return;
      }

      // 3. Salvar os dados na tabela perfis
      const { error: perfilError } = await supabase
        .from('perfis')
        .insert({
          id: data.user.id,
          nome: nomeFormatado,
          email: emailFormatado,
        });

      if (perfilError) {
        console.log('ERRO AO SALVAR PERFIL:', perfilError);

        Alert.alert(
          'Erro ao salvar perfil',
          perfilError.message
        );
        return;
      }

      // 4. Tudo deu certo
      Alert.alert(
        'Conta criada!',
        'Sua conta foi criada e seus dados foram salvos.',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/login'),
          },
        ]
      );

    } catch (error) {
      console.log('ERRO GERAL:', error);

      Alert.alert(
        'Erro',
        'Não foi possível criar sua conta.'
      );
    } finally {
      setCarregando(false);
    }
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
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Crie sua conta
          </Text>

          <Text style={styles.subtitle}>
            Preencha seus dados para{'\n'}
            criar sua conta no Socorro Rápido
          </Text>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.form}>

          {/* NOME */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={21}
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

          {/* CELULAR */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="call-outline"
              size={21}
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

          {/* CONFIRMAR SENHA */}
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={21}
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
                  size={16}
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

  header: {
    alignItems: 'center',
    marginBottom: 35,
  },

  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 13,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 20,
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
    color: '#111111',
    paddingHorizontal: 12,
  },

  termsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 28,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  checkboxChecked: {
    backgroundColor: '#E00000',
    borderColor: '#E00000',
  },

  termsText: {
    fontSize: 12,
    color: '#555555',
  },

  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#E00000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
  },

  loginText: {
    fontSize: 12,
    color: '#555555',
    marginRight: 5,
  },

  loginLink: {
    fontSize: 12,
    color: '#E00000',
    fontWeight: 'bold',
  },
});