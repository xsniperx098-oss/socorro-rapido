import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        {/* CONTEÚDO */}
        <View style={styles.contentArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >

            {/* CABEÇALHO */}
            <View style={styles.header}>
              <Text style={styles.title}>
                Olá! <Text style={styles.wave}>👋</Text>
              </Text>

              <Text style={styles.subtitle}>
                Como podemos ajudar?
              </Text>
            </View>

            {/* PESQUISA */}
            <View style={styles.searchContainer}>
              <Ionicons
                name="search-outline"
                size={26}
                color="#111111"
              />

              <TextInput
                placeholder="O que aconteceu?"
                placeholderTextColor="#555555"
                style={styles.searchInput}
              />
            </View>

            {/* CATEGORIAS */}
            <View style={styles.categories}>
          
              {/* FERIMENTOS */}
              <Pressable
                style={styles.categoryCard}
                onPress={() => router.push('/ferimentos')}
              >
                <Image
                  source={require('../../../assets/icones/ferimentos.png')}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />

                <Text style={styles.categoryText}>
                  Ferimentos
                </Text>
              </Pressable>

              {/* QUEIMADURAS */}
              <Pressable
                style={styles.categoryCard}
                onPress={() => router.push('/queimaduras')}
              >
                <Image
                  source={require('../../../assets/icones/queimaduras.png')}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />

                <Text style={styles.categoryText}>
                  Queimaduras
                </Text>
              </Pressable>

              {/* MEDICAMENTOS */}
              <Pressable
                style={styles.categoryCard}
                onPress={() => router.push('/medicamentos')}
              >
                <Image
                  source={require('../../../assets/icones/medicamentos.png')}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />

                <Text style={styles.categoryText}>
                  Medicamentos
                </Text>
              </Pressable>

              {/* PICADAS */}
              <Pressable
                style={styles.categoryCard}
                onPress={() => router.push('/picadas')}
              >
                <Image
                  source={require('../../../assets/icones/picadas.png')}
                  style={styles.categoryIcon}
                  resizeMode="contain"
                />

                <Text style={styles.categoryText}>
                  Picadas
                </Text>
              </Pressable>

            </View>

            {/* EMERGÊNCIA */}
            <Pressable
              style={styles.emergencyButton}
              onPress={() => router.push('/emergencia')}
            >

              <Image
                source={require('../../../assets/icones/emergencia.png')}
                style={styles.categoryIcon}
                resizeMode="contain"
              />

              <View style={styles.emergencyTextContainer}>
                <Text style={styles.emergencyTitle}>
                  Emergência
                </Text>

                <Text style={styles.emergencySubtitle}>
                  Precisa de ajuda imediata?
                </Text>
              </View>

              <View style={styles.arrowContainer}>
                <Ionicons
                  name="chevron-forward"
                  size={30}
                  color="#E52335"
                />
              </View>

            </Pressable>

          </ScrollView>
        </View>

        {/* MENU INFERIOR */}
        <View style={styles.bottomMenu}>

          {/* INÍCIO */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/tabs')}
          >
            <View style={styles.menuIcon}>
              <Ionicons
                name="home"
                size={26}
                color="#E52335"
              />
            </View>

            <Text style={[styles.menuText, styles.activeText]}>
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
                color="#777777"
              />
            </View>

            <Text style={styles.menuText}>
              Categorias
            </Text>
          </Pressable>

          {/* CONFIGURACAO */}
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/configuracao')}
          >
            <View style={styles.menuIcon}>
              <Ionicons
                name="settings-outline"
                size={26}
                color="#777777"
              />
            </View>

            <Text style={styles.menuText}>
              configuração
            </Text>
          </Pressable>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryIcon: {
    width: 90,
    height: 90,
  },

  container: {
    flex: 1,
    backgroundColor: '#F2F7FC',
  },

  screen: {
    flex: 1,
    backgroundColor: '#F2F7FC',
  },

  contentArea: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 18,
  },

  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#111111',
    lineHeight: 43,
  },

  wave: {
    fontSize: 32,
  },

  subtitle: {
    marginTop: 3,
    fontSize: 19,
    fontWeight: '700',
    color: '#111111',
  },

  searchContainer: {
    height: 62,
    borderWidth: 1.5,
    borderColor: '#BDBDBD',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 34,
  },

  searchInput: {
    flex: 1,
    marginLeft: 13,
    fontSize: 17,
    color: '#111111',
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },

  categoryCard: {
    width: '48%',
    height: 220,

    borderWidth: 1.5,
    borderColor: '#BDBDBD',
    borderRadius: 22,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',
  },

  categoryText: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  emergencyButton: {
    height: 125,

    backgroundColor: '#E52335',
    borderRadius: 18,

    marginTop: 34,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
  },

  emergencyIcon: {
    width: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emergencyTextContainer: {
    flex: 1,
    marginLeft: 8,
  },

  emergencyTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },

  emergencySubtitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
  },

  arrowContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomMenu: {
    height: 88,

    marginHorizontal: 12,
    marginBottom: 10,

    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingBottom: 3,

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

    color: '#777777',
  },

  activeText: {
    color: '#E52335',
  },
});

