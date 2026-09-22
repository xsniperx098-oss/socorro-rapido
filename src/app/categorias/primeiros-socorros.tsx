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

export default function PrimeirosSocorros() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

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
                Primeiros socorros
              </Text>

              <Text style={styles.subtitulo}>
                Orientações para agir com segurança
              </Text>
            </View>
          </View>

          {/* INTRODUÇÃO */}
          <View style={styles.destaque}>
            <View style={styles.iconeDestaque}>
              <MaterialCommunityIcons
                name="medical-bag"
                size={42}
                color="#E52335"
              />
            </View>

            <View style={styles.destaqueTexto}>
              <Text style={styles.destaqueTitulo}>
                O que são primeiros socorros?
              </Text>

              <Text style={styles.destaqueDescricao}>
                São cuidados iniciais prestados a uma pessoa
                em uma situação de emergência, enquanto ela
                não recebe atendimento profissional.
              </Text>
            </View>
          </View>

          {/* COMO AGIR */}
          <Text style={styles.secaoTitulo}>
            Como agir
          </Text>

          <View style={styles.card}>

            {/* ITEM 1 */}
            <View style={styles.item}>
              <View style={styles.numero}>
                <Text style={styles.numeroTexto}>1</Text>
              </View>

              <View style={styles.itemTexto}>
                <Text style={styles.itemTitulo}>
                  Mantenha a calma
                </Text>

                <Text style={styles.itemDescricao}>
                  Respire fundo e tente manter a situação
                  sob controle.
                </Text>
              </View>
            </View>

            <View style={styles.linha} />

            {/* ITEM 2 */}
            <View style={styles.item}>
              <View style={styles.numero}>
                <Text style={styles.numeroTexto}>2</Text>
              </View>

              <View style={styles.itemTexto}>
                <Text style={styles.itemTitulo}>
                  Verifique o local
                </Text>

                <Text style={styles.itemDescricao}>
                  Antes de ajudar, observe se existe algum
                  perigo para você ou para a pessoa.
                </Text>
              </View>
            </View>

            <View style={styles.linha} />

            {/* ITEM 3 */}
            <View style={styles.item}>
              <View style={styles.numero}>
                <Text style={styles.numeroTexto}>3</Text>
              </View>

              <View style={styles.itemTexto}>
                <Text style={styles.itemTitulo}>
                  Avalie a situação
                </Text>

                <Text style={styles.itemDescricao}>
                  Observe o estado da pessoa e procure
                  identificar o que aconteceu.
                </Text>
              </View>
            </View>

            <View style={styles.linha} />

            {/* ITEM 4 */}
            <View style={styles.item}>
              <View style={styles.numero}>
                <Text style={styles.numeroTexto}>4</Text>
              </View>

              <View style={styles.itemTexto}>
                <Text style={styles.itemTitulo}>
                  Procure ajuda
                </Text>

                <Text style={styles.itemDescricao}>
                  Quando necessário, procure atendimento
                  profissional o mais rápido possível.
                </Text>
              </View>
            </View>

          </View>

          {/* ATENÇÃO */}
          <View style={styles.atencao}>

            <View style={styles.atencaoIcone}>
              <Ionicons
                name="warning-outline"
                size={29}
                color="#D71920"
              />
            </View>

            <View style={styles.atencaoTexto}>
              <Text style={styles.atencaoTitulo}>
                Atenção
              </Text>

              <Text style={styles.atencaoDescricao}>
                Primeiros socorros não substituem o
                atendimento de profissionais de saúde.
              </Text>
            </View>

          </View>

          {/* EMERGÊNCIA */}
          <View style={styles.emergencia}>

            <View style={styles.emergenciaIcone}>
              <Ionicons
                name="call"
                size={27}
                color="#FFFFFF"
              />
            </View>

            <View style={styles.emergenciaTexto}>
              <Text style={styles.emergenciaTitulo}>
                Em uma emergência
              </Text>

              <Text style={styles.emergenciaDescricao}>
                Procure ajuda profissional imediatamente.
              </Text>
            </View>

          </View>

        </ScrollView>

        {/* MENU INFERIOR */}
        <View style={styles.bottomMenu}>

          {/* INÍCIO */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/tabs')}
          >
            <View style={styles.menuIcon}>
              <Ionicons
                name="home-outline"
                size={26}
                color="#718096"
              />
            </View>

            <Text style={styles.menuText}>
              Início
            </Text>
          </Pressable>

          {/* CATEGORIAS */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/categorias')}
          >
            <View style={styles.menuIcon}>
              <MaterialCommunityIcons
                name="view-grid-outline"
                size={26}
                color="#E52335"
              />
            </View>

            <Text style={styles.activeText}>
              Categorias
            </Text>
          </Pressable>

          {/* CONFIGURAÇÃO */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/configuracao')}
          >
            <View style={styles.menuIcon}>
              <Ionicons
                name="settings-outline"
                size={26}
                color="#718096"
              />
            </View>

            <Text style={styles.menuText}>
              Configuração
            </Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FC',
  },

  screen: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 120,
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

  numero: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E52335',
    alignItems: 'center',
    justifyContent: 'center',
  },

  numeroTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
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
    backgroundColor: '#FFE1E1',
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

  emergencia: {
    marginTop: 15,
    backgroundColor: '#E52335',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  emergenciaIcone: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#C91D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emergenciaTexto: {
    flex: 1,
    marginLeft: 13,
  },

  emergenciaTitulo: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  emergenciaDescricao: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    color: '#FFE9EC',
  },

  bottomMenu: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 10,

    height: 88,
    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingBottom: 3,

    zIndex: 100,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,

    elevation: 8,
  },

  menuItem: {
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuIcon: {
    width: 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },

  menuText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
    color: '#718096',
  },

  activeText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
    color: '#E52335',
  },
});