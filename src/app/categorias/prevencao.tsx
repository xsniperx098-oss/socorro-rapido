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

export default function Prevencao() {
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
            <Text style={styles.titulo}>Prevenção</Text>

            <Text style={styles.subtitulo}>
              Cuidados para evitar acidentes e problemas de saúde
            </Text>
          </View>
        </View>

        {/* DESTAQUE */}
        <View style={styles.destaque}>
          <View style={styles.iconeDestaque}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={42}
              color="#269653"
            />
          </View>

          <View style={styles.destaqueTexto}>
            <Text style={styles.destaqueTitulo}>
              Por que a prevenção é importante?
            </Text>

            <Text style={styles.destaqueDescricao}>
              Pequenos cuidados no dia a dia podem ajudar
              a reduzir riscos e evitar situações perigosas.
            </Text>
          </View>
        </View>

        {/* CUIDADOS */}
        <Text style={styles.secaoTitulo}>
          Cuidados importantes
        </Text>

        <View style={styles.card}>
          {/* 1 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={27}
                color="#269653"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Conheça os riscos
              </Text>

              <Text style={styles.itemDescricao}>
                Observe o ambiente e identifique situações
                que possam oferecer algum perigo.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* 2 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="hand-wash-outline"
                size={27}
                color="#269653"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Mantenha bons hábitos
              </Text>

              <Text style={styles.itemDescricao}>
                Cuidados básicos de higiene e organização
                ajudam a manter um ambiente mais seguro.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* 3 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
              name="home-outline"
                size={27}
                color="#269653"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Cuide do ambiente
              </Text>

              <Text style={styles.itemDescricao}>
                Mantenha espaços organizados e fique atento
                a objetos ou situações que possam causar acidentes.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* 4 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="alert-circle-outline"
                size={27}
                color="#269653"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Não ignore sinais de perigo
              </Text>

              <Text style={styles.itemDescricao}>
                Ao perceber uma situação de risco, procure
                agir com cuidado e peça ajuda quando necessário.
              </Text>
            </View>
          </View>
        </View>

        {/* ATENÇÃO */}
        <View style={styles.atencao}>
          <View style={styles.atencaoIcone}>
            <Ionicons
              name="checkmark-circle-outline"
              size={29}
              color="#269653"
            />
          </View>

          <View style={styles.atencaoTexto}>
            <Text style={styles.atencaoTitulo}>
              Prevenir é cuidar
            </Text>

            <Text style={styles.atencaoDescricao}>
              A prevenção faz parte dos cuidados com a
              segurança e o bem-estar no dia a dia.
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
    fontSize: 27,
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
    backgroundColor: '#E9F8EF',
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

  iconeItem: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#E9F8EF',
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
    backgroundColor: '#E9F8EF',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  atencaoIcone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#D8F1E1',
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
    color: '#269653',
  },

  atencaoDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
});