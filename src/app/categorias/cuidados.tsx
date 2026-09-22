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

export default function Cuidados() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.voltar}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={27} color="#172337" />
          </Pressable>

          <View style={styles.headerTexto}>
            <Text style={styles.titulo}>Cuidados especiais</Text>
            <Text style={styles.subtitulo}>
              Atenção extra em diferentes situações
            </Text>
          </View>
        </View>

        <View style={styles.destaque}>
          <View style={styles.iconeDestaque}>
            <MaterialCommunityIcons
              name="account-heart-outline"
              size={42}
              color="#E98235"
            />
          </View>

          <View style={styles.destaqueTexto}>
            <Text style={styles.destaqueTitulo}>
              O que são cuidados especiais?
            </Text>

            <Text style={styles.destaqueDescricao}>
              São cuidados que precisam de atenção adicional
              de acordo com a situação e as necessidades de cada pessoa.
            </Text>
          </View>
        </View>

        <Text style={styles.secaoTitulo}>
          Cuidados importantes
        </Text>

        <View style={styles.card}>
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="account-check-outline"
                size={27}
                color="#E98235"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Observe as necessidades
              </Text>

              <Text style={styles.itemDescricao}>
                Cada pessoa pode precisar de cuidados diferentes.
                Observe a situação antes de agir.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="hand-heart-outline"
                size={27}
                color="#E98235"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Tenha cuidado ao ajudar
              </Text>

              <Text style={styles.itemDescricao}>
                Evite movimentos desnecessários e procure agir
                com calma e atenção.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="account-voice"
                size={27}
                color="#E98235"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Escute e comunique-se
              </Text>

              <Text style={styles.itemDescricao}>
                Converse com a pessoa e procure entender
                o que ela está sentindo ou precisando.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="medical-bag"
                size={27}
                color="#E98235"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Procure ajuda profissional
              </Text>

              <Text style={styles.itemDescricao}>
                Quando a situação exigir, procure atendimento
                de profissionais de saúde.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.atencao}>
          <View style={styles.atencaoIcone}>
            <Ionicons
              name="information-circle-outline"
              size={29}
              color="#E98235"
            />
          </View>

          <View style={styles.atencaoTexto}>
            <Text style={styles.atencaoTitulo}>
              Atenção
            </Text>

            <Text style={styles.atencaoDescricao}>
              Em situações que apresentem risco, priorize a
              segurança e procure ajuda profissional.
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
    fontSize: 26,
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
    backgroundColor: '#FFF1E6',
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
    backgroundColor: '#FFF1E6',
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
    backgroundColor: '#FFF1E6',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  atencaoIcone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FFE5D1',
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
    color: '#E98235',
  },

  atencaoDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
});