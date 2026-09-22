import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Sinais() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Pressable
            style={styles.voltar}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={27}
              color="#172337"
            />
          </Pressable>

          <View style={styles.headerTexto}>
            <Text style={styles.titulo}>
              Sinais e sintomas
            </Text>

            <Text style={styles.subtitulo}>
              Entenda sinais que podem indicar alterações no corpo
            </Text>
          </View>
        </View>

        {/* DESTAQUE */}
        <View style={styles.destaque}>
          <View style={styles.iconeDestaque}>
            <MaterialCommunityIcons
              name="clipboard-pulse-outline"
              size={42}
              color="#7654D6"
            />
          </View>

          <View style={styles.destaqueTexto}>
            <Text style={styles.destaqueTitulo}>
              O que são sinais e sintomas?
            </Text>

            <Text style={styles.destaqueDescricao}>
              São manifestações que podem ajudar a perceber
              que algo diferente está acontecendo no organismo.
            </Text>
          </View>
        </View>

        {/* PRINCIPAIS SINAIS */}
        <Text style={styles.secaoTitulo}>
          Principais sinais
        </Text>

        <View style={styles.card}>

          {/* FEBRE */}
          <View style={styles.item}>
            <View
              style={[
                styles.itemIcone,
                { backgroundColor: '#FFF1E6' },
              ]}
            >
              <MaterialCommunityIcons
                name="thermometer"
                size={28}
                color="#E98235"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Febre
              </Text>

              <Text style={styles.itemDescricao}>
                Aumento da temperatura corporal que pode
                estar relacionado a diferentes situações.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* DOR */}
          <View style={styles.item}>
            <View
              style={[
                styles.itemIcone,
                { backgroundColor: '#FFE9EC' },
              ]}
            >
              <MaterialCommunityIcons
                name="emoticon-sad-outline"
                size={28}
                color="#E52335"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Dor
              </Text>

              <Text style={styles.itemDescricao}>
                Sensação desagradável que pode aparecer
                em diferentes partes do corpo.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* TONTURA */}
          <View style={styles.item}>
            <View
              style={[
                styles.itemIcone,
                { backgroundColor: '#F2ECFF' },
              ]}
            >
              <MaterialCommunityIcons
                name="rotate-orbit"
                size={28}
                color="#7654D6"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Tontura
              </Text>

              <Text style={styles.itemDescricao}>
                Sensação de desequilíbrio ou de que o
                ambiente está se movimentando.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* CANSAÇO */}
          <View style={styles.item}>
            <View
              style={[
                styles.itemIcone,
                { backgroundColor: '#E9F8EF' },
              ]}
            >
              <MaterialCommunityIcons
                name="battery-low"
                size={28}
                color="#269653"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Cansaço
              </Text>

              <Text style={styles.itemDescricao}>
                Sensação de falta de energia ou disposição
                para realizar atividades.
              </Text>
            </View>
          </View>

        </View>

        {/* ATENÇÃO */}
        <View style={styles.atencao}>
          <View style={styles.atencaoIcone}>
            <Ionicons
              name="information-circle-outline"
              size={29}
              color="#7654D6"
            />
          </View>

          <View style={styles.atencaoTexto}>
            <Text style={styles.atencaoTitulo}>
              Atenção
            </Text>

            <Text style={styles.atencaoDescricao}>
              Um sinal ou sintoma pode ter diferentes
              causas. Em caso de preocupação, procure
              orientação de um profissional de saúde.
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FC',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  voltar: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  headerTexto: {
    flex: 1,
  },

  titulo: {
    fontSize: 25,
    fontWeight: '800',
    color: '#172337',
  },

  subtitulo: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#718096',
  },

  destaque: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },

  iconeDestaque: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#F2ECFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  destaqueTexto: {
    flex: 1,
    marginLeft: 15,
  },

  destaqueTitulo: {
    fontSize: 17,
    fontWeight: '800',
    color: '#172337',
  },

  destaqueDescricao: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
    color: '#718096',
  },

  secaoTitulo: {
    marginTop: 27,
    marginBottom: 12,
    fontSize: 21,
    fontWeight: '800',
    color: '#172337',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
  },

  itemIcone: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTexto: {
    flex: 1,
    marginLeft: 14,
  },

  itemTitulo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#172337',
  },

  itemDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#718096',
  },

  linha: {
    height: 1,
    backgroundColor: '#EDF1F5',
  },

  atencao: {
    marginTop: 18,
    backgroundColor: '#F2ECFF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  atencaoIcone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#E5DAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  atencaoTexto: {
    flex: 1,
    marginLeft: 13,
  },

  atencaoTitulo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#7654D6',
  },

  atencaoDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
});