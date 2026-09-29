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

  const [localizacao, setLocalizacao] = useState<Location.LocationObject | null>(null);
  const [carregandoLocalizacao, setCarregandoLocalizacao] = useState(false);

  const ligar = (numero: string, nome: string) => {
    Alert.alert(
      `Ligar para ${nome}`,
      `Deseja ligar para ${nome} (${numero})?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Ligar',
          onPress: () => {
            Linking.openURL(`tel:${numero}`);
          },
        },
      ]
    );
  };

  const abrirAjuda = () => {
    Alert.alert(
      'Preciso de ajuda',
      'Escolha o serviço de emergência:',
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
          'Permita o acesso à localização para usar esta função.'
        );
        return;
      }

      const local = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocalizacao(local);
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
        'Obtenha sua localização primeiro.'
      );
      return;
    }

    const latitude = localizacao.coords.latitude;
    const longitude = localizacao.coords.longitude;

    const mapa =
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    const mensagem =
      `Preciso de ajuda.\n\nMinha localização:\n${mapa}`;

    try {
      await Share.share({
        message: mensagem,
      });
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível abrir o compartilhamento.'
      );
    }
  };

  const abrirMapa = () => {
    if (!localizacao) return;

    const latitude = localizacao.coords.latitude;
    const longitude = localizacao.coords.longitude;

    const mapa =
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    Linking.openURL(mapa);
  };

  const mostrarInformacoes = () => {
    Alert.alert(
      'Informações para o socorro',
      'Durante uma chamada de emergência, informe:\n\n' +
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
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topo}>
          <Pressable
            style={styles.botaoVoltar}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={25}
              color="#111"
            />
          </Pressable>

          <View>
            <Text style={styles.titulo}>Emergência</Text>
            <Text style={styles.subtitulo}>
              Ações rápidas quando você precisar
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.cardAjuda}
          onPress={abrirAjuda}
        >
          <View style={styles.iconeAjuda}>
            <Ionicons
              name="alert-circle"
              size={32}
              color="#fff"
            />
          </View>

          <View style={styles.textosAjuda}>
            <Text style={styles.tituloAjuda}>
              Preciso de ajuda
            </Text>

            <Text style={styles.subtituloAjuda}>
              Ligue rapidamente para um serviço de emergência
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#fff"
          />
        </Pressable>

        <Text style={styles.tituloSecao}>
          Ações rápidas
        </Text>

        <View style={styles.card}>
          <View style={styles.linhaTitulo}>
            <View style={styles.icone}>
              <Ionicons
                name="location"
                size={24}
                color="#e53935"
              />
            </View>

            <View style={styles.textos}>
              <Text style={styles.tituloCard}>
                Minha localização
              </Text>

              <Text style={styles.descricao}>
                Encontre sua localização atual para informar ou enviar.
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.botao}
            onPress={obterLocalizacao}
            disabled={carregandoLocalizacao}
          >
            <Ionicons
              name="locate"
              size={20}
              color="#fff"
            />

            <Text style={styles.textoBotao}>
              {carregandoLocalizacao
                ? 'Obtendo localização...'
                : 'Obter minha localização'}
            </Text>
          </Pressable>

          {localizacao && (
            <View style={styles.localizacaoBox}>
              <Text style={styles.localizacaoTitulo}>
                Localização encontrada
              </Text>

              <Text style={styles.coordenadas}>
                Latitude: {localizacao.coords.latitude.toFixed(6)}
              </Text>

              <Text style={styles.coordenadas}>
                Longitude: {localizacao.coords.longitude.toFixed(6)}
              </Text>

              <Pressable
                style={styles.botaoMapa}
                onPress={abrirMapa}
              >
                <Ionicons
                  name="map-outline"
                  size={20}
                  color="#e53935"
                />

                <Text style={styles.textoBotaoMapa}>
                  Ver no mapa
                </Text>
              </Pressable>

              <Pressable
                style={styles.botaoEnviar}
                onPress={compartilharLocalizacao}
              >
                <Ionicons
                  name="share-outline"
                  size={20}
                  color="#fff"
                />

                <Text style={styles.textoBotaoEnviar}>
                  Enviar localização
                </Text>
              </Pressable>
            </View>
          )}
        </View>

        <Pressable
          style={styles.card}
          onPress={mostrarInformacoes}
        >
          <View style={styles.linhaTitulo}>
            <View style={styles.icone}>
              <Ionicons
                name="information-circle"
                size={25}
                color="#e53935"
              />
            </View>

            <View style={styles.textos}>
              <Text style={styles.tituloCard}>
                Informações para o socorro
              </Text>

              <Text style={styles.descricao}>
                Veja o que é importante informar durante uma emergência.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#999"
            />
          </View>
        </Pressable>

        <View style={styles.aviso}>
          <Ionicons
            name="warning-outline"
            size={22}
            color="#d98200"
          />

          <Text style={styles.textoAviso}>
            Em uma emergência grave, procure ajuda imediatamente.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },

  conteudo: {
    padding: 20,
    paddingBottom: 35,
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  botaoVoltar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  titulo: {
    fontSize: 27,
    fontWeight: '800',
    color: '#111',
  },

  subtitulo: {
    fontSize: 14,
    color: '#777',
    marginTop: 3,
  },

  cardAjuda: {
    backgroundColor: '#e53935',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  iconeAjuda: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textosAjuda: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },

  tituloAjuda: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  subtituloAjuda: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },

  linhaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icone: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#fff1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textos: {
    flex: 1,
    marginLeft: 12,
  },

  tituloCard: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111',
  },

  descricao: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
    lineHeight: 18,
  },

  botao: {
    backgroundColor: '#e53935',
    borderRadius: 12,
    height: 48,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  localizacaoBox: {
    backgroundColor: '#f7f8fa',
    borderRadius: 14,
    padding: 14,
    marginTop: 14,
  },

  localizacaoTitulo: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
    marginBottom: 8,
  },

  coordenadas: {
    fontSize: 13,
    color: '#666',
    marginBottom: 3,
  },

  botaoMapa: {
    height: 46,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e53935',
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  textoBotaoMapa: {
    color: '#e53935',
    fontSize: 15,
    fontWeight: '700',
  },

  botaoEnviar: {
    height: 46,
    borderRadius: 12,
    backgroundColor: '#e53935',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  textoBotaoEnviar: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  aviso: {
    backgroundColor: '#fff8e8',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  textoAviso: {
    flex: 1,
    marginLeft: 10,
    color: '#795500',
    fontSize: 13,
    lineHeight: 18,
  },
});