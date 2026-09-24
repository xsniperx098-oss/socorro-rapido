import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Picadas() {
  const router = useRouter();
  const [aberto, setAberto] = useState<string | null>(null);

  const alternar = (item: string) => {
    setAberto(aberto === item ? null : item);
  };

  const ligarSAMU = () => {
    Alert.alert(
      'Emergência',
      'Deseja ligar para o SAMU (192)?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Ligar',
          onPress: () => Linking.openURL('tel:192'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Pressable
          style={styles.voltar}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#111" />
        </Pressable>

        <View>
          <Text style={styles.titulo}>Picadas</Text>
          <Text style={styles.subtitulo}>
            Primeiros cuidados
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >

        {/* INTRO */}
        <View style={styles.intro}>
          <View style={styles.iconeIntro}>
            <Ionicons
              name="bug-outline"
              size={29}
              color="#4C8A3F"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.introTitulo}>
              Picadas
            </Text>

            <Text style={styles.introTexto}>
              Toque em uma opção para ver os cuidados.
            </Text>
          </View>
        </View>

        {/* INSETO */}
        <Card
          icone="bug-outline"
          titulo="Picada de inseto"
          aberto={aberto === 'inseto'}
          onPress={() => alternar('inseto')}
        >
          <Text style={styles.destaque}>
            🦟 Reação local
          </Text>

          <Lista texto="Lave o local com água e sabão." />
          <Lista texto="Evite coçar a região." />
          <Lista texto="Observe se vermelhidão ou inchaço estão aumentando." />
        </Card>

        {/* ABELHA / MARIMBONDO */}
        <Card
          icone="alert-outline"
          titulo="Abelha ou marimbondo"
          aberto={aberto === 'abelha'}
          onPress={() => alternar('abelha')}
        >
          <Text style={styles.destaque}>
            🐝 Atenção ao ferrão
          </Text>

          <Lista text="" />

          <Text style={styles.texto}>
            Se houver um ferrão visível, procure orientação adequada
            para removê-lo sem apertar a região.
          </Text>

          <Text style={styles.alerta}>
            Observe a pessoa após a picada, principalmente se já
            apresentou alergia anteriormente.
          </Text>
        </Card>

        {/* COBRA */}
        <Card
          icone="warning-outline"
          titulo="Picada de cobra"
          aberto={aberto === 'cobra'}
          onPress={() => alternar('cobra')}
        >
          <Text style={styles.alertaGrande}>
            🚨 Procure atendimento imediatamente.
          </Text>

          <Lista texto="Mantenha a pessoa calma e em repouso." />
          <Lista texto="Evite movimentos desnecessários." />
          <Lista texto="Procure atendimento médico o quanto antes." />
        </Card>

        {/* ARANHA / ESCORPIÃO */}
        <Card
          icone="bug-outline"
          titulo="Aranha ou escorpião"
          aberto={aberto === 'aranha'}
          onPress={() => alternar('aranha')}
        >
          <Text style={styles.destaque}>
            ⚠️ Observe os sintomas
          </Text>

          <Lista texto="Lave o local com água e sabão." />
          <Lista texto="Procure atendimento se houver dor intensa ou outros sintomas importantes." />
          <Lista texto="Em crianças, procure orientação médica rapidamente quando houver suspeita de picada de escorpião." />
        </Card>

        {/* ALERGIA */}
        <Card
          icone="alert-circle-outline"
          titulo="Reação alérgica"
          aberto={aberto === 'alergia'}
          onPress={() => alternar('alergia')}
        >
          <Text style={styles.alertaGrande}>
            🚨 Sinais de emergência
          </Text>

          <Lista texto="Dificuldade para respirar." />
          <Lista texto="Inchaço no rosto, boca ou garganta." />
          <Lista texto="Desmaio ou alteração importante da consciência." />

          <Text style={styles.alerta}>
            Esses sinais podem indicar uma reação grave e precisam
            de atendimento de emergência.
          </Text>
        </Card>

        {/* O QUE NÃO FAZER */}
        <Card
          icone="close-circle-outline"
          titulo="O que não fazer"
          aberto={aberto === 'naoFazer'}
          onPress={() => alternar('naoFazer')}
        >
          <Lista texto="Não faça cortes ou perfurações no local da picada." />
          <Lista texto="Não tente sugar o veneno." />
          <Lista texto="Não aplique substâncias caseiras." />
          <Lista texto="Não aperte ou faça torniquete sem orientação profissional." />
        </Card>

        {/* EMERGÊNCIA */}
        <View style={styles.emergencia}>
          <Ionicons
            name="call-outline"
            size={30}
            color="#FFFFFF"
          />

          <Text style={styles.emergenciaTitulo}>
            Emergência
          </Text>

          <Text style={styles.emergenciaTexto}>
            Reação grave ou picada de animal peçonhento?
          </Text>

          <Pressable
            style={styles.botaoSAMU}
            onPress={ligarSAMU}
          >
            <Ionicons
              name="call"
              size={19}
              color="#D62828"
            />

            <Text style={styles.textoSAMU}>
              Ligar para o SAMU — 192
            </Text>
          </Pressable>
        </View>

        <Text style={styles.rodape}>
          Informações educativas. Em situações graves,
          procure atendimento profissional.
        </Text>

      </ScrollView>
    </View>
  );
}

function Card({
  icone,
  titulo,
  aberto,
  onPress,
  children,
}: {
  icone: any;
  titulo: string;
  aberto: boolean;
  onPress: () => void;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.card}>
      <Pressable
        style={styles.cardCabecalho}
        onPress={onPress}
      >
        <View style={styles.cardIcone}>
          <Ionicons
            name={icone}
            size={23}
            color="#4C8A3F"
          />
        </View>

        <Text style={styles.cardTitulo}>
          {titulo}
        </Text>

        <Ionicons
          name={aberto ? 'chevron-up' : 'chevron-down'}
          size={21}
          color="#777"
        />
      </Pressable>

      {aberto && (
        <View style={styles.cardConteudo}>
          {children}
        </View>
      )}
    </View>
  );
}

function Lista({ texto }: { texto: string }) {
  if (!texto) return null;

  return (
    <View style={styles.lista}>
      <Ionicons
        name="checkmark-circle-outline"
        size={19}
        color="#4C8A3F"
      />

      <Text style={styles.listaTexto}>
        {texto}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 17,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },

  voltar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F1F2F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111111',
  },

  subtitulo: {
    fontSize: 13,
    color: '#777777',
    marginTop: 2,
  },

  conteudo: {
    padding: 18,
    paddingBottom: 40,
  },

  intro: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  iconeIntro: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#EEF7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  introTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111111',
  },

  introTexto: {
    fontSize: 13,
    color: '#777777',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    marginBottom: 11,
    overflow: 'hidden',
  },

  cardCabecalho: {
    minHeight: 70,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardIcone: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#EEF7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  cardTitulo: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#222222',
  },

  cardConteudo: {
    paddingHorizontal: 16,
    paddingBottom: 17,
    paddingTop: 2,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  destaque: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222222',
    marginTop: 13,
    marginBottom: 10,
  },

  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
    marginTop: 8,
    marginBottom: 10,
  },

  alertaGrande: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    color: '#B42318',
    marginTop: 13,
    marginBottom: 10,
  },

  alerta: {
    fontSize: 13,
    lineHeight: 19,
    color: '#8A5A00',
    backgroundColor: '#FFF8E8',
    padding: 11,
    borderRadius: 10,
    marginTop: 8,
  },

  lista: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },

  listaTexto: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
    marginLeft: 8,
  },

  emergencia: {
    backgroundColor: '#D62828',
    borderRadius: 19,
    padding: 20,
    alignItems: 'center',
    marginTop: 7,
  },

  emergenciaTitulo: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
    marginTop: 5,
  },

  emergenciaTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 15,
  },

  botaoSAMU: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoSAMU: {
    color: '#D62828',
    fontSize: 15,
    fontWeight: '800',
    marginLeft: 7,
  },

  rodape: {
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 16,
    color: '#888888',
    marginTop: 14,
  },
});
