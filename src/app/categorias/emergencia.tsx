import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Emergencia() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* CABEÇALHO */}
        <View style={styles.header}>
          <Pressable style={styles.voltar} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={27} color="#172337" />
          </Pressable>

          <View style={styles.headerTexto}>
            <Text style={styles.titulo}>Emergência</Text>
            <Text style={styles.subtitulo}>
              Saiba como agir com segurança em situações de emergência
            </Text>
          </View>
        </View>

        {/* DESTAQUE */}
        <View style={styles.destaque}>
          <View style={styles.iconeDestaque}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={38}
              color="#D71920"
            />
          </View>

          <View style={styles.destaqueTexto}>
            <Text style={styles.destaqueTitulo}>Em uma emergência</Text>
            <Text style={styles.destaqueDescricao}>
              Situações de emergência exigem calma, atenção e ajuda profissional.
            </Text>
          </View>
        </View>

        {/* SEÇÃO */}
        <Text style={styles.secaoTitulo}>Como agir</Text>

        <View style={styles.card}>
          {/* ITEM 1 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <Ionicons name="heart-outline" size={26} color="#D71920" />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>Mantenha a calma</Text>
              <Text style={styles.itemDescricao}>
                Respire e tente manter a situação sob controle.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* ITEM 2 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <Ionicons name="eye-outline" size={26} color="#D71920" />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>Observe o ambiente</Text>
              <Text style={styles.itemDescricao}>
                Verifique se existe algum perigo antes de se aproximar.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* ITEM 3 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <Ionicons name="call-outline" size={26} color="#D71920" />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>Peça ajuda</Text>
              <Text style={styles.itemDescricao}>
                Procure ajuda de adultos ou profissionais e informe o que aconteceu.
              </Text>
            </View>
          </View>

          <View style={styles.linha} />

          {/* ITEM 4 */}
          <View style={styles.item}>
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="medical-bag"
                size={26}
                color="#D71920"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>
                Siga orientações profissionais
              </Text>
              <Text style={styles.itemDescricao}>
                Siga as instruções recebidas e evite ações que possam aumentar o risco.
              </Text>
            </View>
          </View>
        </View>

        {/* ATENÇÃO */}
        <View style={styles.atencao}>
          <View style={styles.atencaoIcone}>
            <MaterialCommunityIcons
              name="shield-alert-outline"
              size={27}
              color="#D71920"
            />
          </View>

          <View style={styles.atencaoTexto}>
            <Text style={styles.atencaoTitulo}>Priorize a segurança</Text>
            <Text style={styles.atencaoDescricao}>
              Em uma emergência, procure atendimento profissional o mais rápido
              possível.
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
    backgroundColor: '#FFF',
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
    backgroundColor: '#FFF',
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
    backgroundColor: '#FFE7E7',
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
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
    backgroundColor: '#FFE7E7',
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
    backgroundColor: '#FFF4F4',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  atencaoIcone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FFE7E7',
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
    color: '#D71920',
  },

  atencaoDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
});