import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Notificacao = {
  id: string;
  periodo: 'Hoje' | 'Ontem';
  titulo: string;
  mensagem: string;
  hora: string;
  icone?: 'notifications' | 'phone-portrait';
};

const NOTIFICACOES: Notificacao[] = [
  { id: '1', periodo: 'Hoje', titulo: 'Alerta de emergência', mensagem: 'Um contato de emergência foi acionado.', hora: '08:45' },
  { id: '2', periodo: 'Hoje', titulo: 'Check-in realizado', mensagem: 'Você está bem. Obrigado por nos informar.', hora: '07:30' },
  { id: '3', periodo: 'Hoje', titulo: 'Lembrete de segurança', mensagem: 'Mantenha seus dados sempre atualizados.', hora: '07:10' },
  { id: '4', periodo: 'Ontem', titulo: 'Atualização app', mensagem: 'Nova versão disponível com melhorias.', hora: '18:20', icone: 'phone-portrait' },
  { id: '5', periodo: 'Ontem', titulo: 'Dicas de segurança', mensagem: 'Confira nossas dicas para proteção.', hora: '12:00' },
];

export default function Notificacoes() {
  const router = useRouter();
  const [lidas, setLidas] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton} accessibilityLabel="Voltar">
          <Ionicons name="chevron-back" size={27} color="#121212" />
        </Pressable>
        <Text style={styles.title}>Notificações</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {(['Hoje', 'Ontem'] as const).map((periodo) => (
          <View key={periodo}>
            <Text style={styles.periodo}>{periodo}</Text>
            {NOTIFICACOES.filter((notificacao) => notificacao.periodo === periodo).map((notificacao) => (
              <View key={notificacao.id} style={[styles.card, lidas && styles.cardLido]}>
                <View style={styles.iconCircle}>
                  <Ionicons name={notificacao.icone ?? 'notifications'} size={20} color="#FFFFFF" />
                </View>
                <View style={styles.textArea}>
                  <Text style={styles.cardTitle}>{notificacao.titulo}</Text>
                  <Text style={styles.cardMessage}>{notificacao.mensagem}</Text>
                </View>
                <Text style={styles.time}>{notificacao.hora}</Text>
              </View>
            ))}
          </View>
        ))}

        <Pressable style={styles.readButton} onPress={() => setLidas(true)} disabled={lidas}>
          <Ionicons name={lidas ? 'checkmark-done' : 'checkmark-done-outline'} size={17} color="#C51207" />
          <Text style={styles.readButtonText}>{lidas ? 'Todas as notificações foram lidas' : 'Marcar todas como lidas'}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F8FE' },
  header: { height: 68, marginTop: 16, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backButton: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' },
  headerSpacer: { width: 34 },
  title: { color: '#111111', fontSize: 16, fontWeight: '800' },
  content: { paddingHorizontal: 13, paddingTop: 18, paddingBottom: 30 },
  periodo: { color: '#111111', fontSize: 13, fontWeight: '800', marginBottom: 8, marginTop: 9 },
  card: { minHeight: 62, borderWidth: 1, borderColor: '#B8B8B8', backgroundColor: '#FFFFFF', borderRadius: 13, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 9, marginBottom: 6 },
  cardLido: { opacity: 0.66 },
  iconCircle: { width: 27, height: 27, borderRadius: 14, backgroundColor: '#C51207', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  textArea: { flex: 1, paddingVertical: 8, paddingRight: 5 },
  cardTitle: { color: '#171717', fontSize: 12, fontWeight: '800', marginBottom: 2 },
  cardMessage: { color: '#707070', fontSize: 12, fontWeight: '600', lineHeight: 17 },
  time: { alignSelf: 'flex-start', marginTop: 7, color: '#333333', fontSize: 9 },
  readButton: { minHeight: 42, marginTop: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingHorizontal: 14 },
  readButtonText: { color: '#C51207', fontSize: 12, fontWeight: '800' },
});
