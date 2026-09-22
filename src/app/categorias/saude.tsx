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

export default function Saude() {
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
            <Ionicons name="arrow-back" size={27} color="#172337" />
          </Pressable>

          <View style={styles.headerTexto}>
            <Text style={styles.titulo}>Saúde e bem-estar</Text>
            <Text style={styles.subtitulo}>
              Hábitos e cuidados para uma vida mais saudável
            </Text>
          </View>
        </View>

        {/* DESTAQUE */}
        <View style={styles.destaque}>
          <View style={styles.iconeDestaque}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={42}
              color="#E52335"
            />
          </View>

          <View style={styles.destaqueTexto}>
            <Text style={styles.destaqueTitulo}>
              Cuidar da saúde
            </Text>

            <Text style={styles.destaqueDescricao}>
              Pequenos hábitos no dia a dia podem contribuir
              para o bem-estar e para uma rotina mais saudável.
            </Text>
          </View>
        </View>

        {/* HÁBITOS */}
        <Text style={styles.secaoTitulo}>
          Cuidados no dia a dia
        </Text>

        <View style={styles.card}>
          {/* 1 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={27}
                color="#E52335"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Alimentação equilibrada
              </Text>

              <Text style={styles.itemDescricao}>
                Procure manter uma alimentação variada e
                equilibrada, de acordo com suas necessidades.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* 2 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="water-outline"
                size={27}
                color="#E52335"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Hidratação
              </Text>

              <Text style={styles.itemDescricao}>
                Beber água regularmente ajuda a manter o
                organismo funcionando adequadamente.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* 3 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="sleep"
                size={27}
                color="#E52335"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Sono adequado
              </Text>

              <Text style={styles.itemDescricao}>
                Ter uma rotina de sono adequada é importante
                para o descanso e o bem-estar.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* 4 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="run"
                size={27}
                color="#E52335"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Movimento e atividade
              </Text>

              <Text style={styles.itemDescricao}>
                Movimentar o corpo de forma adequada pode
                contribuir para a saúde e a disposição.
              </Text>
            </View>
          </View>
        </View>

        {/* ATENÇÃO */}
        <View style={styles.atencao}>
          <View style={styles.atencaoIcone}>
            <Ionicons
              name="heart-outline"
              size={29}
              color="#E52335"
            />
          </View>

          <View style={styles.atencaoTexto}>
            <Text style={styles.atencaoTitulo}>
              Cuide de você
            </Text>

            <Text style={styles.atencaoDescricao}>
              Se tiver dúvidas ou preocupações sobre sua saúde,
              procure orientação de um profissional.
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
    backgroundColor: '#FFE9EC',
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
    backgroundColor: '#FFE9EC',
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
    backgroundColor: '#FFE9EC',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  atencaoIcone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FFDADF',
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
    color: '#E52335',
  },

  atencaoDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
});