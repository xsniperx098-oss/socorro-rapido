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

export default function Categorias() {
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
            <Text style={styles.titulo}>Categorias</Text>

            <Text style={styles.subtitulo}>
              Encontre orientações para diferentes situações
            </Text>
          </View>

          {/* PRIMEIROS SOCORROS */}
          <Pressable
            style={styles.card}
            onPress={() => router.push('/categorias/primeiros-socorros')}
          >
            <View
              style={[
                styles.icone,
                { backgroundColor: '#EAF2FF' },
              ]}
            >
              <MaterialCommunityIcons
                name="medical-bag"
                size={42}
                color="#2F6FED"
              />
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Primeiros socorros
              </Text>

              <Text style={styles.cardDescricao}>
                Cuidados iniciais em situações de emergência.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#718096"
            />
          </Pressable>

          {/* SINAIS E SINTOMAS */}
          <Pressable
            style={styles.card}
            onPress={() => router.push('/categorias/sinais')}
          >
            <View
              style={[
                styles.icone,
                { backgroundColor: '#F2ECFF' },
              ]}
            >
              <MaterialCommunityIcons
                name="clipboard-pulse-outline"
                size={42}
                color="#7654D6"
              />
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Sinais e sintomas
              </Text>

              <Text style={styles.cardDescricao}>
                Informações sobre sinais e sintomas comuns.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#718096"
            />
          </Pressable>

          {/* PREVENÇÃO */}
          <Pressable
            style={styles.card}
            onPress={() => router.push('/categorias/prevencao')}
          >
            <View
              style={[
                styles.icone,
                { backgroundColor: '#E9F8EF' },
              ]}
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={42}
                color="#269653"
              />
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Prevenção
              </Text>

              <Text style={styles.cardDescricao}>
                Cuidados para evitar acidentes e problemas de saúde.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#718096"
            />
          </Pressable>

          {/* CUIDADOS ESPECIAIS */}
          <Pressable
            style={styles.card}
            onPress={() => router.push('/categorias/cuidados')}
          >
            <View
              style={[
                styles.icone,
                { backgroundColor: '#FFF1E6' },
              ]}
            >
              <MaterialCommunityIcons
                name="account-heart-outline"
                size={42}
                color="#E98235"
              />
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Cuidados especiais
              </Text>

              <Text style={styles.cardDescricao}>
                Orientações para situações que exigem atenção especial.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#718096"
            />
          </Pressable>

          {/* SAÚDE E BEM-ESTAR */}
          <Pressable
            style={styles.card}
            onPress={() => router.push('/categorias/saude')}
          >
            <View
              style={[
                styles.icone,
                { backgroundColor: '#FFE9EC' },
              ]}
            >
              <MaterialCommunityIcons
                name="heart-pulse"
                size={42}
                color="#E52335"
              />
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Saúde e bem-estar
              </Text>

              <Text style={styles.cardDescricao}>
                Hábitos e cuidados para uma vida mais saudável.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#718096"
            />
          </Pressable>

          {/* EMERGÊNCIA */}
          <Pressable
            style={styles.card}
            onPress={() => router.push('/categorias/emergencia')}
          >
            <View
              style={[
                styles.icone,
                { backgroundColor: '#FFE7E7' },
              ]}
            >
              <MaterialCommunityIcons
                name="alert-circle-outline"
                size={42}
                color="#D71920"
              />
            </View>

            <View style={styles.cardTexto}>
              <Text style={styles.cardTitulo}>
                Emergência
              </Text>

              <Text style={styles.cardDescricao}>
                Orientações para situações que precisam de ajuda imediata.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#718096"
            />
          </Pressable>

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

            <Text
              style={[
                styles.menuText,
                styles.activeText,
              ]}
            >
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
    paddingTop: 25,
    paddingBottom: 120,
  },

  header: {
    marginBottom: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#172337',
  },

  subtitulo: {
    marginTop: 6,
    fontSize: 15,
    color: '#718096',
    lineHeight: 21,
  },

  card: {
    width: '100%',
    minHeight: 102,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 15,
    paddingHorizontal: 16,
    paddingVertical: 15,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  icone: {
    width: 68,
    height: 68,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTexto: {
    flex: 1,
    marginLeft: 15,
    marginRight: 8,
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: '800',
    color: '#172337',
  },

  cardDescricao: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 18,
    color: '#718096',
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
    color: '#E52335',
  },
});