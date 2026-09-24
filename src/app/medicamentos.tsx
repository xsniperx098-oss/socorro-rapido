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

export default function Medicamentos() {
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
          <Text style={styles.titulo}>Medicamentos</Text>
          <Text style={styles.subtitulo}>
            Uso seguro
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
              name="medical-outline"
              size={29}
              color="#4A63E7"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.introTitulo}>
              Medicamentos
            </Text>

            <Text style={styles.introTexto}>
              Informações importantes para um uso mais seguro.
            </Text>
          </View>
        </View>

        {/* USO CORRETO */}
        <Card
          icone="checkmark-circle-outline"
          titulo="Uso correto"
          aberto={aberto === 'uso'}
          onPress={() => alternar('uso')}
        >
          <Text style={styles.destaque}>
            💊 Antes de usar
          </Text>

          <Lista texto="Confira o nome e a validade do medicamento." />
          <Lista texto="Siga a orientação da bula ou de um profissional de saúde." />
          <Lista texto="Respeite a dose e o horário indicados." />
          <Lista texto="Não compartilhe medicamentos com outras pessoas." />
        </Card>

        {/* ESQUECEU A DOSE */}
        <Card
          icone="time-outline"
          titulo="Esqueci uma dose"
          aberto={aberto === 'dose'}
          onPress={() => alternar('dose')}
        >
          <Text style={styles.texto}>
            O que fazer pode depender do medicamento.
          </Text>

          <Lista texto="Consulte a bula para saber a orientação específica." />
          <Lista texto="Se tiver dúvidas, procure um profissional de saúde." />

          <Text style={styles.alerta}>
            Não dobre a próxima dose por conta própria para compensar uma dose esquecida.
          </Text>
        </Card>

        {/* EFEITOS */}
        <Card
          icone="warning-outline"
          titulo="Efeitos indesejados"
          aberto={aberto === 'efeitos'}
          onPress={() => alternar('efeitos')}
        >
          <Text style={styles.texto}>
            Alguns medicamentos podem causar efeitos indesejados.
          </Text>

          <Lista texto="Leia a bula para conhecer possíveis efeitos." />
          <Lista texto="Observe qualquer reação diferente após o uso." />
          <Lista texto="Procure orientação profissional se os sintomas forem preocupantes." />
        </Card>

        {/* ALERGIA */}
        <Card
          icone="alert-circle-outline"
          titulo="Reação alérgica"
          aberto={aberto === 'alergia'}
          onPress={() => alternar('alergia')}
        >
          <Text style={styles.destaque}>
            🚨 Atenção aos sinais graves
          </Text>

          <Lista texto="Inchaço no rosto, boca ou garganta." />
          <Lista texto="Dificuldade para respirar." />
          <Lista texto="Desmaio ou alteração importante do estado de consciência." />

          <Text style={styles.alertaGrande}>
            Em uma reação grave, procure atendimento de emergência.
          </Text>
        </Card>

        {/* INTOXICAÇÃO */}
        <Card
          icone="skull-outline"
          titulo="Uso em excesso ou intoxicação"
          aberto={aberto === 'intoxicacao'}
          onPress={() => alternar('intoxicacao')}
        >
          <Text style={styles.alertaGrande}>
            ⚠️ Não espere os sintomas aparecerem.
          </Text>

          <Lista texto="Procure ajuda imediatamente." />
          <Lista texto="Tenha a embalagem ou o nome do medicamento em mãos." />
          <Lista texto="Não provoque vômito por conta própria." />
        </Card>

        {/* ARMAZENAMENTO */}
        <Card
          icone="archive-outline"
          titulo="Como guardar"
          aberto={aberto === 'guardar'}
          onPress={() => alternar('guardar')}
        >
          <Lista texto="Mantenha os medicamentos fora do alcance de crianças." />
          <Lista texto="Observe as instruções de armazenamento da embalagem." />
          <Lista texto="Não utilize medicamentos vencidos." />
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
            Reação grave ou possível intoxicação?
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
          Informações educativas. Medicamentos devem ser usados
          conforme orientação adequada.
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
            color="#4A63E7"
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
  return (
    <View style={styles.lista}>
      <Ionicons
        name="checkmark-circle-outline"
        size={19}
        color="#4A63E7"
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
    backgroundColor: '#EEF0FF',
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
    backgroundColor: '#EEF0FF',
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
    marginTop: 13,
    marginBottom: 10,
  },

  alertaGrande: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#B42318',
    marginTop: 10,
    marginBottom: 8,
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

