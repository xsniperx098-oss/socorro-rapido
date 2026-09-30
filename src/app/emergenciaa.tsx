import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  Linking,
  Alert,
  Share,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

export default function Emergencia() {
  const router = useRouter();

  const [localizacao, setLocalizacao] =
    useState<Location.LocationObject | null>(null);

  const [carregandoLocalizacao, setCarregandoLocalizacao] =
    useState(false);

  const ligar = (numero: string, nome: string) => {
    Alert.alert(
      `Ligar para ${nome}`,
      `Deseja ligar para ${numero}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Ligar',
          onPress: () => Linking.openURL(`tel:${numero}`),
        },
      ]
    );
  };

  const abrirAjuda = () => {
    Alert.alert(
      'Preciso de ajuda',
      'Escolha o serviço que você precisa:',
      [
        {
          text: 'SAMU — 192',
          onPress: () => ligar('192', 'SAMU'),
        },
        {
          text: 'Bombeiros — 193',
          onPress: () => ligar('193', 'Bombeiros'),
        },
        {
          text: 'Polícia — 190',
          onPress: () => ligar('190', 'Polícia'),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  const obterLocalizacao = async () => {
    try {
      setCarregandoLocalizacao(true);

      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Para encontrar sua localização, permita o acesso à localização nas configurações do celular.'
        );
        return;
      }

      const resultado =
        await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

      setLocalizacao(resultado);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível obter sua localização.'
      );
    } finally {
      setCarregandoLocalizacao(false);
    }
  };

  const compartilharLocalizacao = async () => {
    if (!localizacao) {
      Alert.alert(
        'Localização não encontrada',
        'Primeiro obtenha sua localização.'
      );
      return;
    }

    const latitude = localizacao.coords.latitude;
    const longitude = localizacao.coords.longitude;

    const link =
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    const mensagem =
      `🚨🆘 PRECISO DE AJUDA! 😰\n\n` +
      `📍 Minha localização:\n${link}`;

    try {
      await Share.share({
        message: mensagem,
        title: 'Enviar localização',
      });
    } catch (error) {
      console.log('Erro ao compartilhar:', error);

      Alert.alert(
        'Erro',
        'Não foi possível abrir o compartilhamento.'
      );
    }
  };

  const mostrarInformacoes = () => {
    Alert.alert(
      'Informações para o socorro',
      'Durante a ligação, tente informar:\n\n' +
        '• Onde você está\n' +
        '• O que aconteceu\n' +
        '• Quantas pessoas precisam de ajuda\n' +
        '• Se a pessoa está consciente\n' +
        '• Se a pessoa está respirando',
      [
        {
          text: 'Entendi',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topo}>
          <Pressable
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="#111111"
            />
          </Pressable>

          <View>
            <Text style={styles.titulo}>
              Emergência
            </Text>

            <Text style={styles.subtitulo}>
              Acesso rápido quando você precisar.
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.botaoAjuda}
          onPress={abrirAjuda}
        >
          <View style={styles.iconeAjuda}>
            <Ionicons
              name="call"
              size={30}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.textoAjuda}>
            <Text style={styles.tituloAjuda}>
              Preciso de ajuda
            </Text>

            <Text style={styles.descricaoAjuda}>
              Ligue rapidamente para um serviço de emergência.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#FFFFFF"
          />
        </Pressable>

        <Text style={styles.tituloSecao}>
          Ações rápidas
        </Text>

        <Pressable
          style={styles.card}
          onPress={obterLocalizacao}
        >
          <View style={styles.iconeCard}>
            <Ionicons
              name="location"
              size={25}
              color="#D62828"
            />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.nomeCard}>
              Minha localização
            </Text>

            <Text style={styles.descricaoCard}>
              {carregandoLocalizacao
                ? 'Obtendo localização...'
                : localizacao
                ? 'Localização encontrada.'
                : 'Toque para encontrar sua localização.'}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={21}
            color="#999999"
          />
        </Pressable>

        {localizacao && (
          <View style={styles.localizacaoBox}>
            <View style={styles.localizacaoCabecalho}>
              <Ionicons
                name="checkmark-circle"
                size={22}
                color="#2E7D32"
              />

              <Text style={styles.localizacaoTitulo}>
                Localização encontrada
              </Text>
            </View>

            <Text style={styles.coordenadas}>
              Latitude:{' '}
              {localizacao.coords.latitude.toFixed(6)}
            </Text>

            <Text style={styles.coordenadas}>
              Longitude:{' '}
              {localizacao.coords.longitude.toFixed(6)}
            </Text>

            <Pressable
              style={styles.botaoCompartilhar}
              onPress={compartilharLocalizacao}
            >
              <Ionicons
                name="share-social-outline"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.textoCompartilhar}>
                Enviar localização
              </Text>
            </Pressable>
          </View>
        )}

        <Pressable
          style={styles.card}
          onPress={mostrarInformacoes}
        >
          <View style={styles.iconeCard}>
            <Ionicons
              name="clipboard"
              size={25}
              color="#D62828"
            />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.nomeCard}>
              Informações para o socorro
            </Text>

            <Text style={styles.descricaoCard}>
              Saiba o que informar durante uma ligação.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={21}
            color="#999999"
          />
        </Pressable>

        <View style={styles.aviso}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#555555"
          />

          <Text style={styles.avisoTexto}>
            Em uma emergência, procure ajuda profissional o
            mais rápido possível.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  scroll: {
    padding: 20,
    paddingBottom: 35,
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  botaoVoltar: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  titulo: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111111',
  },

  subtitulo: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },

  botaoAjuda: {
    backgroundColor: '#D62828',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  iconeAjuda: {
    width: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  textoAjuda: {
    flex: 1,
  },

  tituloAjuda: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  descricaoAjuda: {
    fontSize: 12,
    lineHeight: 17,
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
  },

  tituloSecao: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 13,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconeCard: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  infoCard: {
    flex: 1,
  },

  nomeCard: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171717',
  },

  descricaoCard: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
    lineHeight: 17,
  },

  localizacaoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: -2,
    marginBottom: 12,
  },

  localizacaoCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  localizacaoTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2E7D32',
    marginLeft: 8,
  },

  coordenadas: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 4,
  },

  botaoCompartilhar: {
    height: 46,
    borderRadius: 14,
    backgroundColor: '#D62828',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },

  textoCompartilhar: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },

  aviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    padding: 14,
    marginTop: 10,
  },

  avisoTexto: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#555555',
    marginLeft: 9,
  },
});