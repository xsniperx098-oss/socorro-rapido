import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

type Genero = 'Masculino' | 'Feminino';

export default function EditarPerfil() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState<Genero>('Masculino');
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    const carregarPerfil = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.replace('/login');
        return;
      }

      const dados = user.user_metadata ?? {};
      setNome(dados.nome ?? dados.name ?? '');
      setEmail(user.email ?? '');
      setTelefone(dados.telefone ?? dados.celular ?? '');
      setDataNascimento(dados.data_nascimento ?? '');
      setGenero(dados.genero === 'Feminino' ? 'Feminino' : 'Masculino');
      setCarregando(false);
    };

    carregarPerfil();
  }, [router]);

  const salvar = async () => {
    const nomeFormatado = nome.trim();
    const emailFormatado = email.trim().toLowerCase();

    if (!nomeFormatado || !emailFormatado) {
      Alert.alert('Atenção', 'Informe seu nome completo e e-mail.');
      return;
    }

    setSalvando(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setSalvando(false);
      router.replace('/login');
      return;
    }

    const atualizacao: {
      data: Record<string, string>;
      email?: string;
    } = {
      data: {
        nome: nomeFormatado,
        telefone: telefone.trim(),
        celular: telefone.trim(),
        data_nascimento: dataNascimento.trim(),
        genero,
      },
    };

    if (emailFormatado !== user.email) {
      atualizacao.email = emailFormatado;
    }

    const { error } = await supabase.auth.updateUser(atualizacao);
    setSalvando(false);

    if (error) {
      Alert.alert('Erro', error.message);
      return;
    }

    Alert.alert(
      'Alterações salvas',
      atualizacao.email
        ? 'Se necessário, confirme a alteração do e-mail na sua caixa de entrada.'
        : 'Seus dados foram atualizados.',
      [{ text: 'OK', onPress: () => router.back() }],
    );
  };

  if (carregando) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" color="#C51005" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton} accessibilityLabel="Voltar">
              <Ionicons name="chevron-back" size={27} color="#111111" />
            </Pressable>
            <Text style={styles.title}>Editar perfil</Text>
            <View style={styles.headerSpacer} />
          </View>

          <View style={styles.avatar}>
            <Ionicons name="person" size={73} color="#BE1005" />
          </View>

          <Campo icone="person-circle-outline" rotulo="Nome completo" value={nome} onChangeText={setNome} autoCapitalize="words" />
          <Campo icone="mail-outline" rotulo="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          <Campo icone="call-outline" rotulo="Telefone" value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
          <Campo icone="calendar-outline" rotulo="Data de nascimento" value={dataNascimento} onChangeText={setDataNascimento} placeholder="DD/MM/AAAA" keyboardType="numeric" />

          <View style={styles.genderField}>
            <Ionicons name="information-circle-outline" size={23} color="#D31A10" />
            <Text style={styles.genderLabel}>Gênero</Text>
            <View style={styles.genderOptions}>
              {(['Masculino', 'Feminino'] as Genero[]).map((opcao) => (
                <Pressable key={opcao} onPress={() => setGenero(opcao)} style={[styles.genderOption, genero === opcao && styles.genderOptionActive]}>
                  <Text style={[styles.genderText, genero === opcao && styles.genderTextActive]}>{opcao}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <Pressable style={[styles.saveButton, salvando && styles.saveButtonDisabled]} onPress={salvar} disabled={salvando}>
            <Text style={styles.saveText}>{salvando ? 'SALVANDO...' : 'Salvar alterações'}</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Campo({ icone, rotulo, placeholder, ...inputProps }: { icone: keyof typeof Ionicons.glyphMap; rotulo: string; placeholder?: string } & React.ComponentProps<typeof TextInput>) {
  return (
    <View style={styles.field}>
      <Ionicons name={icone} size={23} color="#D31A10" />
      <View style={styles.fieldText}>
        <Text style={styles.label}>{rotulo}</Text>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#777" {...inputProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F8FE' },
  flex: { flex: 1 },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F8FE' },
  content: { paddingHorizontal: 15, paddingTop: 18, paddingBottom: 30 },
  header: { height: 68, marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 },
  backButton: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' },
  headerSpacer: { width: 34 },
  title: { color: '#080808', fontSize: 15, fontWeight: '800' },
  avatar: { width: 92, height: 92, borderRadius: 46, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECD7DB', marginBottom: 19 },
  field: { minHeight: 41, borderWidth: 1, borderColor: '#A5A5A5', borderRadius: 6, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, marginBottom: 10 },
  fieldText: { flex: 1, alignSelf: 'stretch', justifyContent: 'center', marginLeft: 8 },
  label: { color: '#151515', fontSize: 10, lineHeight: 12 },
  input: { color: '#161616', padding: 0, fontSize: 12, lineHeight: 15, minHeight: 17 },
  genderField: { minHeight: 41, borderWidth: 1, borderColor: '#A5A5A5', borderRadius: 6, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', paddingLeft: 8, paddingRight: 8, marginBottom: 42 },
  genderLabel: { color: '#151515', fontSize: 10, marginLeft: 8, alignSelf: 'flex-start', marginTop: 6 },
  genderOptions: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 4, marginTop: 10 },
  genderOption: { minWidth: 80, height: 17, paddingHorizontal: 8, borderRadius: 10, backgroundColor: '#D7D7D7', alignItems: 'center', justifyContent: 'center' },
  genderOptionActive: { backgroundColor: '#C51207' },
  genderText: { color: '#111', fontSize: 12 },
  genderTextActive: { color: '#FFFFFF', fontWeight: '600' },
  saveButton: { height: 34, borderRadius: 6, backgroundColor: '#C51207', alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 },
  saveButtonDisabled: { opacity: 0.6 },
  saveText: { color: '#FFFFFF', fontSize: 12, fontWeight: '800' },
});
