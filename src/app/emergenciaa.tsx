import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Emergencia() {
  const router = useRouter();

  const ligar = (numero: string) => {
    Linking.openURL(`tel:${numero}`);
  };

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
              Números importantes para situações de emergência
            </Text>
          </View>
        </View>

        {/* DESTAQUE */}
        <View style={styles.destaque}>
          <View style={styles.iconeDestaque}>
            <MaterialCommunityIcons
              name="phone-alert-outline"
              size={38}
              color="#D71920"
            />
          </View>

          <View style={styles.destaqueTexto}>
            <Text style={styles.destaqueTitulo}>Precisa de ajuda?</Text>
            <Text style={styles.destaqueDescricao}>
              Em uma situação de emergência, procure ajuda profissional.
            </Text>
          </View>
        </View>

        {/* NÚMEROS */}
        <Text style={styles.secaoTitulo}>Números de emergência</Text>

        <View style={styles.card}>

          {/* SAMU */}
          <Pressable
            style={styles.item}
            onPress={() => ligar('192')}
          >
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="ambulance"
                size={27}
                color="#D71920"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>SAMU</Text>
              <Text style={styles.itemDescricao}>
                Atendimento médico de emergência
              </Text>
            </View>

            <View style={styles.numero}>
              <Text style={styles.numeroTexto}>192</Text>
              <Ionicons
                name="call-outline"
                size={18}
                color="#D71920"
              />
            </View>
          </Pressable>

          <View style={styles.linha} />

          {/* BOMBEIROS */}
          <Pressable
            style={styles.item}
            onPress={() => ligar('193')}
          >
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="fire-truck"
                size={27}
                color="#D71920"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>Bombeiros</Text>
              <Text style={styles.itemDescricao}>
                Incêndios, resgates e emergências
              </Text>
            </View>

            <View style={styles.numero}>
              <Text style={styles.numeroTexto}>193</Text>
              <Ionicons
                name="call-outline"
                size={18}
                color="#D71920"
              />
            </View>
          </Pressable>

          <View style={styles.linha} />

          {/* POLÍCIA */}
          <Pressable
            style={styles.item}
            onPress={() => ligar('190')}
          >
            <View style={styles.iconeItem}>
              <Ionicons
                name="shield-outline"
                size={27}
                color="#D71920"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>Polícia Militar</Text>
              <Text style={styles.itemDescricao}>
                Situações de emergência e segurança
              </Text>
            </View>

            <View style={styles.numero}>
              <Text style={styles.numeroTexto}>190</Text>
              <Ionicons
                name="call-outline"
                size={18}
                color="#D71920"
              />
            </View>
          </Pressable>

          <View style={styles.linha} />

          {/* DEFESA CIVIL */}
          <Pressable
            style={styles.item}
            onPress={() => ligar('199')}
          >
            <View style={styles.iconeItem}>
              <MaterialCommunityIcons
                name="shield-alert-outline"
                size={27}
                color="#D71920"
              />
            </View>

            <View style={styles.itemTexto}>
              <Text style={styles.itemTitulo}>Defesa Civil</Text>
              <Text style={styles.itemDescricao}>
                Situações de risco e desastres
              </Text>
            </View>

            <View style={styles.numero}>
              <Text style={styles.numeroTexto}>199</Text>
              <Ionicons
                name="call-outline"
                size={18}
                color="#D71920"
              />
            </View>
          </Pressable>

        </View>

        {/* AVISO */}
        <View style={styles.aviso}>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color="#D71920"
          />

          <Text style={styles.avisoTexto}>
            Toque em um número para iniciar uma ligação.
          </Text>
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
    fontSize: 12,
    lineHeight: 17,
    color: '#718096',
  },

  numero: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numeroTexto: {
    fontSize: 17,
    fontWeight: '800',
    color: '#D71920',
    marginBottom: 3,
  },

  linha: {
    height: 1,
    backgroundColor: '#EDF1F5',
  },

  aviso: {
    marginTop: 18,
    backgroundColor: '#FFF4F4',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avisoTexto: {
    flex: 1,
    marginLeft: 12,
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
  },
});