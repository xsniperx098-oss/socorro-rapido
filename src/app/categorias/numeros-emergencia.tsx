import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function NumerosEmergencia() {
  const router = useRouter();

  const ligar = (numero: string, nome: string) => {
    Alert.alert(
      `Ligar para ${nome}`,
      `Deseja ligar para ${numero}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Ligar',
          onPress: () => Linking.openURL(`tel:${numero}`),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topo}>
          <Pressable
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#111" />
          </Pressable>

          <View>
            <Text style={styles.titulo}>Números de emergência</Text>
            <Text style={styles.subtitulo}>
              Tenha ajuda rápida quando precisar.
            </Text>
          </View>
        </View>

        <Text style={styles.tituloSecao}>Serviços de emergência</Text>

        <Pressable
          style={styles.card}
          onPress={() => ligar('192', 'SAMU')}
        >
          <View style={styles.icone}>
            <Ionicons name="medical" size={25} color="#D62828" />
          </View>

          <View style={styles.info}>
            <Text style={styles.nome}>SAMU</Text>
            <Text style={styles.descricao}>Atendimento médico de urgência</Text>
          </View>

          <View style={styles.numero}>
            <Text style={styles.numeroTexto}>192</Text>
            <Ionicons name="call" size={18} color="#D62828" />
          </View>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => ligar('193', 'Bombeiros')}
        >
          <View style={styles.icone}>
            <Ionicons name="flame" size={25} color="#D62828" />
          </View>

          <View style={styles.info}>
            <Text style={styles.nome}>Bombeiros</Text>
            <Text style={styles.descricao}>Incêndios e resgates</Text>
          </View>

          <View style={styles.numero}>
            <Text style={styles.numeroTexto}>193</Text>
            <Ionicons name="call" size={18} color="#D62828" />
          </View>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => ligar('190', 'Polícia')}
        >
          <View style={styles.icone}>
            <Ionicons name="shield-checkmark" size={25} color="#D62828" />
          </View>

          <View style={styles.info}>
            <Text style={styles.nome}>Polícia</Text>
            <Text style={styles.descricao}>Emergências policiais</Text>
          </View>

          <View style={styles.numero}>
            <Text style={styles.numeroTexto}>190</Text>
            <Ionicons name="call" size={18} color="#D62828" />
          </View>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => ligar('199', 'Defesa Civil')}
        >
          <View style={styles.icone}>
            <Ionicons name="warning" size={25} color="#D62828" />
          </View>

          <View style={styles.info}>
            <Text style={styles.nome}>Defesa Civil</Text>
            <Text style={styles.descricao}>Situações de risco e desastres</Text>
          </View>

          <View style={styles.numero}>
            <Text style={styles.numeroTexto}>199</Text>
            <Ionicons name="call" size={18} color="#D62828" />
          </View>
        </Pressable>

        <Text style={styles.tituloSecao}>Meu contato de emergência</Text>

        <Pressable
          style={styles.contato}
          onPress={() =>
            Alert.alert(
              'Contato de emergência',
              'Aqui vamos adicionar a opção para cadastrar uma pessoa de confiança.'
            )
          }
        >
          <View style={styles.iconeContato}>
            <Ionicons name="person-add" size={25} color="#D62828" />
          </View>

          <View style={styles.info}>
            <Text style={styles.nome}>Adicionar contato</Text>
            <Text style={styles.descricao}>
              Cadastre alguém para ligar rapidamente.
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#888" />
        </Pressable>

        <View style={styles.aviso}>
          <Ionicons name="information-circle-outline" size={20} color="#555" />

          <Text style={styles.avisoTexto}>
            Em uma emergência grave, procure ajuda profissional o mais rápido
            possível.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  scroll: {
    padding: 20,
    paddingBottom: 35,
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  botaoVoltar: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  titulo: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111111',
  },

  subtitulo: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 13,
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171717',
  },

  descricao: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
  },

  numero: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  numeroTexto: {
    fontSize: 17,
    fontWeight: '800',
    color: '#D62828',
    marginBottom: 3,
  },

  contato: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  iconeContato: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  aviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    padding: 14,
  },

  avisoTexto: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#555555',
    marginLeft: 9,
  },
});
