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
import Svg, { Path } from 'react-native-svg';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        {/* =========================
            CONTEÚDO QUE ROLA
        ========================= */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          {/* =========================
              TOPO VERMELHO + ONDA + MALETA
              AGORA ROLA JUNTO COM A TELA
          ========================= */}

          <View style={styles.topSection}>

            <Svg
              width="100%"
              height="205"
              viewBox="0 0 400 205"
              preserveAspectRatio="none"
              style={styles.wave}
            >
              <Path
                d="
                  M 0 0
                  L 400 0
                  L 400 105
                  C 350 125, 315 125, 270 108
                  C 215 88, 175 55, 125 50
                  C 75 45, 35 58, 0 78
                  Z
                "
                fill="#E52335"
              />
            </Svg>

            <View style={styles.medicalBag}>
              <MaterialCommunityIcons
                name="medical-bag"
                size={82}
                color="#FFFFFF"
              />
            </View>

          </View>

          {/* =========================
              TEXTO NA PARTE BRANCA
          ========================= */}

          <View style={styles.header}>

            <Text style={styles.title}>
              Precisa de ajuda?
            </Text>

            <Text style={styles.subtitle}>
              Como podemos ajudar?
            </Text>

          </View>

          {/* =========================
              PESQUISA
          ========================= */}

          <View style={styles.searchContainer}>

            <Ionicons
              name="search-outline"
              size={27}
              color="#53677D"
            />

            <TextInput
              placeholder="O que aconteceu?"
              placeholderTextColor="#8799AA"
              style={styles.searchInput}
            />

            <Ionicons
              name="mic-outline"
              size={27}
              color="#53677D"
            />

          </View>

          {/* =========================
              CATEGORIAS
          ========================= */}

          <View style={styles.categories}>

            {/* FERIMENTOS */}

            <Pressable
              style={[
                styles.categoryCard,
                styles.ferimentosCard,
              ]}
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
              style={[
                styles.categoryCard,
                styles.queimadurasCard,
              ]}
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
              style={[
                styles.categoryCard,
                styles.medicamentosCard,
              ]}
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
              style={[
                styles.categoryCard,
                styles.picadasCard,
              ]}
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

          {/* =========================
              EMERGÊNCIA
          ========================= */}

          <Pressable
            style={styles.emergencyButton}
            onPress={() => router.push('/emergenciaa')}
          >

            <Image
              source={require('../../../assets/icones/emergencia.png')}
              style={styles.emergencyIcon}
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

        {/* =========================
            MENU INFERIOR FIXO
        ========================= */}

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
                color="#718096"
              />

            </View>

            <Text style={styles.menuText}>
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

  /* =========================
     TELA
  ========================= */

  container: {
    flex: 1,
    backgroundColor: '#F2F7FC',
  },

  screen: {
    flex: 1,
  },

  /* =========================
     CONTEÚDO QUE ROLA
  ========================= */

  content: {
    paddingBottom: 125,
  },

  /* =========================
     TOPO VERMELHO
     ROLA JUNTO COM A TELA
  ========================= */

  topSection: {
  height: 155,
  position: 'relative',
  backgroundColor: '#F2F7FC',
},

  wave: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 155,
},

  medicalBag: {
    position: 'absolute',

    top: 25,
    right: 22,

    width: 95,
    height: 95,

    alignItems: 'center',
    justifyContent: 'center',

    opacity: 0.20,
  },

  /* =========================
     CABEÇALHO
  ========================= */

  header: {
  paddingHorizontal: 24,
  marginTop: -2,
  marginBottom: 20,
},
  title: {
    fontSize: 32,

    fontWeight: '800',

    color: '#172337',

    lineHeight: 40,
  },

  subtitle: {
    marginTop: 4,

    fontSize: 19,

    fontWeight: '700',

    color: '#53677D',
  },

  /* =========================
     PESQUISA
  ========================= */

  searchContainer: {
    height: 62,

    marginHorizontal: 24,

    borderWidth: 1.5,

    borderColor: '#D9E0E8',

    borderRadius: 18,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    backgroundColor: '#FFFFFF',

    marginBottom: 30,
  },

  searchInput: {
    flex: 1,

    marginLeft: 13,

    fontSize: 17,

    color: '#172337',
  },

  /* =========================
     CATEGORIAS
  ========================= */

  categories: {
    marginHorizontal: 24,

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    rowGap: 16,
  },

  categoryCard: {
    width: '48%',

    height: 190,

    borderRadius: 22,

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,
  },

  ferimentosCard: {
    backgroundColor: '#F9DDDF',

    borderColor: '#F4B9BE',
  },

  queimadurasCard: {
    backgroundColor: '#FFF0D1',

    borderColor: '#F6D18B',
  },

  medicamentosCard: {
    backgroundColor: '#CFE8FA',

    borderColor: '#A9D3F0',
  },

  picadasCard: {
    backgroundColor: '#DDF1E3',

    borderColor: '#B8DFC3',
  },

  categoryIcon: {
    width: 90,

    height: 90,
  },

  categoryText: {
    marginTop: 14,

    fontSize: 18,

    fontWeight: '700',

    color: '#172337',
  },

  /* =========================
     EMERGÊNCIA
  ========================= */

  emergencyButton: {
    height: 125,

    backgroundColor: '#E52335',

    borderRadius: 18,

    marginTop: 30,

    marginHorizontal: 24,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 18,
  },

  emergencyIcon: {
    width: 68,

    height: 68,
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

  /* =========================
     MENU INFERIOR FIXO
  ========================= */

  bottomMenu: {
    position: 'absolute',

    left: 12,
    right: 12,
    bottom: 10,

    height: 88,

    borderRadius: 24,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingBottom: 3,

    zIndex: 100,

    elevation: 100,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.10,

    shadowRadius: 8,
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