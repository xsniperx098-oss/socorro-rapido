import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
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

  // =========================
  // BUSCA
  // =========================

  const [textoBusca, setTextoBusca] = useState('');

  const resultados = useMemo(() => {
    const texto = textoBusca.trim().toLowerCase();

    if (!texto) {
      return [];
    }

    const itens = [
      {
        titulo: 'Ferimentos',
        descricao: 'Cuidados para cortes, machucados e ferimentos.',
        rota: '/ferimentos',
        icone: 'medical-bag' as const,
      },
      {
        titulo: 'Queimaduras',
        descricao: 'Orientações para situações envolvendo queimaduras.',
        rota: '/queimaduras',
        icone: 'fire' as const,
      },
      {
        titulo: 'Medicamentos',
        descricao: 'Informações e cuidados relacionados a medicamentos.',
        rota: '/medicamentos',
        icone: 'pill' as const,
      },
      {
        titulo: 'Picadas',
        descricao: 'Cuidados em situações envolvendo picadas.',
        rota: '/picadas',
        icone: 'bug-outline' as const,
      },
    ];

    return itens.filter((item) => {
      const titulo = item.titulo.toLowerCase();
      const descricao = item.descricao.toLowerCase();

      return (
        titulo.includes(texto) ||
        descricao.includes(texto)
      );
    });
  }, [textoBusca]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        {/* =========================
            CONTEÚDO QUE ROLA
        ========================= */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >

          {/* =========================
              TOPO VERMELHO + ONDA + MALETA
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
              TEXTO
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
              value={textoBusca}
              onChangeText={setTextoBusca}
              returnKeyType="search"
            />

            <Ionicons
              name="mic-outline"
              size={27}
              color="#53677D"
            />

          </View>

          {/* =========================
              RESULTADOS DA BUSCA
          ========================= */}

          {textoBusca.trim().length > 0 && (
            <View style={styles.resultadosContainer}>

              <Text style={styles.resultadosTitulo}>
                Resultados
              </Text>

              {resultados.length > 0 ? (
                resultados.map((item) => (
                  <Pressable
                    key={item.titulo}
                    style={styles.resultadoCard}
                    onPress={() => router.push(item.rota as any)}
                  >

                    <View style={styles.resultadoIcone}>
                      <MaterialCommunityIcons
                        name={item.icone}
                        size={25}
                        color="#E52335"
                      />
                    </View>

                    <View style={styles.resultadoTexto}>
                      <Text style={styles.resultadoTitulo}>
                        {item.titulo}
                      </Text>

                      <Text style={styles.resultadoDescricao}>
                        {item.descricao}
                      </Text>
                    </View>

                    <Ionicons
                      name="chevron-forward"
                      size={22}
                      color="#8799AA"
                    />

                  </Pressable>
                ))
              ) : (
                <View style={styles.semResultado}>
                  <Ionicons
                    name="search-outline"
                    size={34}
                    color="#AAB5C1"
                  />

                  <Text style={styles.semResultadoTitulo}>
                    Nenhum resultado encontrado
                  </Text>

                  <Text style={styles.semResultadoDescricao}>
                    Tente pesquisar por outro termo.
                  </Text>
                </View>
              )}

            </View>
          )}

          {/* =========================
              CATEGORIAS
          ========================= */}

          {textoBusca.trim().length === 0 && (
            <>
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

            </>
          )}

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
     CONTEÚDO
  ========================= */

  content: {
    paddingBottom: 125,
  },

  /* =========================
     TOPO VERMELHO
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

    marginBottom: 20,
  },

  searchInput: {
    flex: 1,

    marginLeft: 13,

    fontSize: 17,

    color: '#172337',
  },

  /* =========================
     RESULTADOS
  ========================= */

  resultadosContainer: {
    marginHorizontal: 24,
    marginBottom: 20,
  },

  resultadosTitulo: {
    fontSize: 20,
    fontWeight: '800',
    color: '#172337',
    marginBottom: 12,
  },

  resultadoCard: {
    minHeight: 75,

    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    marginBottom: 10,

    paddingHorizontal: 14,
    paddingVertical: 12,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#E5EAF0',
  },

  resultadoIcone: {
    width: 48,
    height: 48,

    borderRadius: 14,

    backgroundColor: '#FFE9EC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  resultadoTexto: {
    flex: 1,
    marginLeft: 13,
    marginRight: 8,
  },

  resultadoTitulo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#172337',
  },

  resultadoDescricao: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    color: '#718096',
  },

  semResultado: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,

    paddingVertical: 28,
    paddingHorizontal: 20,

    alignItems: 'center',
  },

  semResultadoTitulo: {
    marginTop: 10,

    fontSize: 15,
    fontWeight: '800',

    color: '#53677D',

    textAlign: 'center',
  },

  semResultadoDescricao: {
    marginTop: 5,

    fontSize: 13,

    color: '#8799AA',

    textAlign: 'center',
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
