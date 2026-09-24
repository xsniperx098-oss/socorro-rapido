
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

export default function Queimaduras() {
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
          <Text style={styles.titulo}>Queimaduras</Text>
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
              name="flame-outline"
              size={29}
              color="#E85D04"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.introTitulo}>
              Queimaduras
            </Text>

            <Text style={styles.introTexto}>
              Toque em uma opção para ver os cuidados.
            </Text>
          </View>
        </View>

        {/* PRIMEIROS CUIDADOS */}
        <Card
          icone="water-outline"
          titulo="Primeiros cuidados"
          aberto={aberto === 'cuidados'}
          onPress={() => alternar('cuidados')}
        >
          <Text style={styles.destaque}>
            💧 Resfrie a região
          </Text>

          <Passo texto="Coloque a área afetada sob água corrente em temperatura ambiente." />
          <Passo texto="Mantenha a região sob água por alguns minutos." />
          <Passo texto="Retire objetos ou acessórios próximos da área, se não estiverem presos à pele." />

          <Text style={styles.alerta}>
            Em queimaduras importantes, procure atendimento médico.
          </Text>
        </Card>

        {/* BOLHAS */}
        <Card
          icone="ellipse-outline"
          titulo="Bolhas"
          aberto={aberto === 'bolhas'}
          onPress={() => alternar('bolhas')}
        >
          <Text style={styles.alertaGrande}>
            ⚠️ Não estoure as bolhas.
          </Text>

          <Passo texto="Proteja a região sem esfregar." />
          <Passo texto="Evite romper a pele da queimadura." />
          <Passo texto="Procure orientação médica quando a queimadura for extensa ou grave." />
        </Card>

        {/* O QUE NÃO FAZER */}
        <Card
          icone="close-circle-outline"
          titulo="O que não fazer"
          aberto={aberto === 'naoFazer'}
          onPress={() => alternar('naoFazer')}
        >
          <Lista texto="Não coloque gelo diretamente sobre a queimadura." />
          <Lista texto="Não passe pasta de dente, manteiga, óleo ou outras substâncias caseiras." />
          <Lista texto="Não esfregue a região afetada." />
          <Lista texto="Não estoure as bolhas." />
        </Card>

        {/* TIPOS */}
        <Card
          icone="information-circle-outline"
          titulo="Tipos de queimadura"
          aberto={aberto === 'tipos'}
          onPress={() => alternar('tipos')}
        >
          <Text style={styles.destaque}>
            🔥 Queimadura térmica
          </Text>

          <Text style={styles.texto}>
            Pode acontecer pelo contato com fogo, líquidos quentes,
            vapor ou objetos aquecidos.
          </Text>

          <Text style={styles.destaque}>
            ⚡ Queimadura elétrica
          </Text>

          <Text style={styles.texto}>
            Pode ocorrer após contato com eletricidade e pode exigir
            avaliação médica mesmo quando a lesão externa parece pequena.
          </Text>

          <Text style={styles.destaque}>
            🧪 Queimadura química
          </Text>

          <Text style={styles.texto}>
            Pode ser causada pelo contato com determinadas substâncias
            químicas e precisa de cuidados específicos.
          </Text>
        </Card>

        {/* QUANDO PROCURAR AJUDA */}
        <Card
          icone="alert-circle-outline"
          titulo="Quando procurar ajuda?"
          aberto={aberto === 'ajuda'}
          onPress={() => alternar('ajuda')}
        >
          <Text style={styles.destaque}>
            🚨 Procure atendimento se houver:
          </Text>

          <Lista texto="Queimadura extensa." />
          <Lista texto="Queimadura profunda." />
          <Lista texto="Queimadura no rosto ou região genital." />
          <Lista texto="Queimadura causada por eletricidade." />
          <Lista texto="Queimadura química." />
          <Lista texto="Sinais de dificuldade para respirar." />
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
            Queimadura grave ou situação de risco?
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

/* CARD */

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
            color="#E85D04"
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

/* PASSO */

function Passo({ texto }: { texto: string }) {
  return (
    <View style={styles.passo}>
      <View style={styles.bolinha} />

      <Text style={styles.passoTexto}>
        {texto}
      </Text>
    </View>
  );
}

/* LISTA */

function Lista({ texto }: { texto: string }) {
  return (
    <View style={styles.lista}>
      <Ionicons
        name="checkmark-circle-outline"
        size={19}
        color="#E85D04"
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
    backgroundColor: '#FFF0E5',
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
    backgroundColor: '#FFF0E5',
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

  alertaGrande: {
    fontSize: 16,
    fontWeight: '800',
    color: '#B42318',
    marginTop: 14,
    marginBottom: 10,
  },

  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
    marginBottom: 12,
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

  passo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },

  bolinha: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#E85D04',
    marginTop: 7,
    marginRight: 9,
  },

  passoTexto: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
  },

  lista: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  listaTexto: {
    flex: 1,
    fontSize: 14,
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
