import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const dados = [
  { id: '1', nome: 'Primeiros socorros', icon: 'medical' },
  { id: '2', nome: 'Ferimentos', icon: 'bandage' },
  { id: '3', nome: 'Queimaduras', icon: 'flame' },
  { id: '4', nome: 'Medicamentos', icon: 'medkit' },
  { id: '5', nome: 'Picadas', icon: 'bug' },
  { id: '6', nome: 'Engasgo', icon: 'alert-circle' },
];

export default function Buscar() {
  const router = useRouter();
  const [pesquisa, setPesquisa] = useState('');

  const resultados = dados.filter((item) =>
    item.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Buscar</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={24} color="#555" />

        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#777"
          value={pesquisa}
          onChangeText={setPesquisa}
        />

        {pesquisa.length > 0 && (
          <Pressable onPress={() => setPesquisa('')}>
            <Ionicons name="close" size={23} color="#555" />
          </Pressable>
        )}
      </View>

      <Text style={styles.resultados}>resultados</Text>

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <View style={styles.icone}>
              <Ionicons
                name={item.icon as any}
                size={27}
                color="#D71920"
              />
            </View>

            <Text style={styles.nome}>{item.nome}</Text>

            <Ionicons
              name="chevron-forward"
              size={21}
              color="#999"
            />
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.semResultado}>
            Nenhum resultado encontrado
          </Text>
        }
      />

      {/* MENU INFERIOR */}
      <View style={styles.menu}>

        {/* HOME */}
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push('/')}
        >
          <Ionicons name="home-outline" size={24} color="#777" />
          <Text style={styles.menuTexto}>Home</Text>
        </Pressable>

        {/* BUSCAR */}
        <Pressable style={styles.menuItem}>
          <Ionicons name="search" size={25} color="#D71920" />
          <Text style={[styles.menuTexto, styles.menuAtivo]}>
            Buscar
          </Text>
        </Pressable>

        {/* CATEGORIAS */}
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push('/categorias')}
        >
          <Ionicons name="grid-outline" size={24} color="#777" />
          <Text style={styles.menuTexto}>Categoria</Text>
        </Pressable>

        {/* PERFIL */}
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push('/perfil')}
        >
          <Ionicons name="person-outline" size={24} color="#777" />
          <Text style={styles.menuTexto}>Perfil</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 22,
  },

  searchBox: {
    height: 58,
    marginHorizontal: 22,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 14,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: '#222',
    marginLeft: 10,
  },

  resultados: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 10,
  },

  lista: {
    paddingHorizontal: 22,
    paddingBottom: 100,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    minHeight: 70,
    marginBottom: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  icone: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  nome: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  semResultado: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginTop: 30,
  },

  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuTexto: {
    fontSize: 11,
    color: '#777',
    marginTop: 3,
  },

  menuAtivo: {
    color: '#D71920',
    fontWeight: '600',
  },
});