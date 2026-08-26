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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  const router = useRouter ()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        {/* CONTEÚDO */}
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

          {/* BARRA DE PESQUISA */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search-outline"
              size={27}
              color="#111"
              style={styles.searchIcon}
            />

            <TextInput
              placeholder="O que aconteceu?"
              placeholderTextColor="#555"
              style={styles.searchInput}
            />
          </View>

          {/* CATEGORIAS */}
          <View style={styles.categories}>

            {/* FERIMENTOS */}
            <Pressable 
            style={styles.categoryCard}
            onPress={() => router.navigate('/ferimentos')}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="water"
                  size={58}
                  color="#E52335"
                />
              </View>

              <Text style={styles.categoryText}>
                Ferimentos
              </Text>
            </Pressable>

            {/* QUEIMADURAS */}
            <Pressable style={styles.categoryCard}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="flame"
                  size={62}
                  color="#EF3B48"
                />
              </View>

              <Text style={styles.categoryText}>
                Queimaduras
              </Text>
            </Pressable>

            {/* MEDICAMENTOS */}
            <Pressable style={styles.categoryCard}>
              <View style={styles.iconContainer}>
                <View style={styles.pill}>
                  <View style={styles.pillBlue} />
                  <View style={styles.pillLight} />
                </View>
              </View>

              <Text style={styles.categoryText}>
                Medicamentos
              </Text>
            </Pressable>

            {/* PICADAS */}
            <Pressable style={styles.categoryCard}>
              <View style={styles.iconContainer}>
                <Text style={styles.bee}>
                  🐝
                </Text>
              </View>

              <Text style={styles.categoryText}>
                Picadas
              </Text>
            </Pressable>

          </View>

          {/* BOTÃO DE EMERGÊNCIA */}
          <Pressable style={styles.emergencyButton}>

            <View style={styles.emergencyIcon}>
              <Ionicons
                name="warning"
                size={40}
                color="#111"
              />
            </View>

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
                size={25}
                color="#E52335"
              />
            </View>

          </Pressable>

        </ScrollView>

        {/* MENU INFERIOR */}
        <View style={styles.bottomMenu}>

          <Pressable style={styles.menuItem}>
            <Ionicons
              name="home"
              size={27}
              color="#E52335"
            />

            <Text style={[styles.menuText, styles.activeText]}>
              Início
            </Text>
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Ionicons
              name="search-outline"
              size={27}
              color="#777"
            />

            <Text style={styles.menuText}>
              Buscar
            </Text>
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Ionicons
              name="grid-outline"
              size={27}
              color="#777"
            />

            <Text style={styles.menuText}>
              Categorias
            </Text>
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Ionicons
              name="person-outline"
              size={27}
              color="#777"
            />

            <Text style={styles.menuText}>
              Perfil
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
    backgroundColor: '#F2F7FC',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 25,
  },

  /* CABEÇALHO */
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

  /* PESQUISA */
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

  searchIcon: {
    marginRight: 13,
  },

  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#111111',
  },

  /* CATEGORIAS */
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

  iconContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  /* ÍCONE DE MEDICAMENTO */
  pill: {
    width: 67,
    height: 35,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    transform: [{ rotate: '-45deg' }],
  },

  pillBlue: {
    flex: 1,
    backgroundColor: '#1597E5',
  },

  pillLight: {
    flex: 1,
    backgroundColor: '#A9DDF7',
  },

  /* ABELHA */
  bee: {
    fontSize: 58,
  },

  /* EMERGÊNCIA */
  emergencyButton: {
    height: 125,
    backgroundColor: '#E52335',
    borderRadius: 18,
    marginTop: 34,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  emergencyIcon: {
    width: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emergencyTextContainer: {
    flex: 1,
    marginLeft: 10,
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
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* MENU INFERIOR */
  bottomMenu: {
    height: 86,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5,
  },

  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
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