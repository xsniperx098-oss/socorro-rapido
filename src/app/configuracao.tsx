import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { supabase } from '../lib/supabase';

export default function Configuracao() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    const carregarUsuario = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setEmail(user.email || '');

        const nomeSalvo =
          user.user_metadata?.nome ||
          user.user_metadata?.name ||
          '';

        setNome(nomeSalvo);
      }
    };

    carregarUsuario();
  }, []);

  const sairDaConta = async () => {
    Alert.alert(
      'Sair da conta',
      'Deseja realmente sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            const { error } = await supabase.auth.signOut();

            if (error) {
              Alert.alert(
                'Erro',
                'Não foi possível sair da conta.'
              );
              return;
            }

            router.replace('/login');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >

          {/* TOPO */}
          <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons
                name="chevron-back"
                size={32}
                color="#111111"
              />
            </Pressable>

            <Text style={styles.title}>
              Configurações
            </Text>
          </View>

          {/* PERFIL */}
          <View style={styles.profileArea}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {nome
                  ? nome
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()
                  : 'U'}
              </Text>
            </View>

            <Text style={styles.profileName}>
              {nome || 'Usuário'}
            </Text>

            <Text style={styles.profileEmail}>
              {email || 'E-mail não disponível'}
            </Text>

          </View>

          {/* ATALHOS */}
          <View style={styles.shortcuts}>

            <Pressable
              style={styles.shortcut}
              onPress={() =>
                Alert.alert(
                  'Editar perfil',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.shortcutCircle}>
                <Ionicons
                  name="pencil-outline"
                  size={27}
                  color="#D71920"
                />
              </View>

              <Text style={styles.shortcutText}>
                Editar perfil
              </Text>
            </Pressable>

            <Pressable
              style={styles.shortcut}
              onPress={() =>
                Alert.alert(
                  'Notificações',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.shortcutCircle}>
                <Ionicons
                  name="notifications-outline"
                  size={27}
                  color="#D71920"
                />
              </View>

              <Text style={styles.shortcutText}>
                Notificações
              </Text>
            </Pressable>

            <Pressable
              style={styles.shortcut}
              onPress={() =>
                Alert.alert(
                  'Privacidade e segurança',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.shortcutCircle}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={27}
                  color="#D71920"
                />
              </View>

              <Text style={styles.shortcutText}>
                Privacidade e segurança
              </Text>
            </Pressable>

          </View>

          {/* CONTA */}
          <Text style={styles.sectionTitle}>
            CONTA
          </Text>

          <View style={styles.card}>

            <Pressable
              style={styles.option}
              onPress={() =>
                Alert.alert(
                  'Dados pessoais',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="person-outline"
                  size={25}
                  color="#D71920"
                />
              </View>

              <Text style={styles.optionTitle}>
                Dados pessoais
              </Text>

              <Ionicons
                name="chevron-forward"
                size={23}
                color="#777777"
              />
            </Pressable>

          </View>

          {/* APLICATIVO */}
          <Text style={styles.sectionTitle}>
            APLICATIVO
          </Text>

          <View style={styles.card}>

            <Pressable
              style={styles.option}
              onPress={() =>
                Alert.alert(
                  'Notificações',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color="#D71920"
                />
              </View>

              <Text style={styles.optionTitle}>
                Notificações
              </Text>

              <Ionicons
                name="chevron-forward"
                size={23}
                color="#777777"
              />
            </Pressable>

            <View style={styles.divider} />

            <Pressable
              style={styles.option}
              onPress={() =>
                Alert.alert(
                  'Preferências',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="settings-outline"
                  size={25}
                  color="#D71920"
                />
              </View>

              <Text style={styles.optionTitle}>
                Preferências
              </Text>

              <Ionicons
                name="chevron-forward"
                size={23}
                color="#777777"
              />
            </Pressable>

          </View>

          {/* SUPORTE */}
          <Text style={styles.sectionTitle}>
            SUPORTE
          </Text>

          <View style={styles.card}>

            <Pressable
              style={styles.option}
              onPress={() =>
                Alert.alert(
                  'Central de ajuda',
                  'Tela em desenvolvimento.'
                )
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="help-circle-outline"
                  size={25}
                  color="#D71920"
                />
              </View>

              <Text style={styles.optionTitle}>
                Central de ajuda
              </Text>

              <Ionicons
                name="chevron-forward"
                size={23}
                color="#777777"
              />
            </Pressable>

            <View style={styles.divider} />

            <Pressable
              style={styles.option}
              onPress={() =>
                Alert.alert(
                  'Sobre o app',
                  'Socorro Rápido\nVersão 1.0.0'
                )
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="information-circle-outline"
                  size={25}
                  color="#D71920"
                />
              </View>

              <Text style={styles.optionTitle}>
                Sobre o app
              </Text>

              <Ionicons
                name="chevron-forward"
                size={23}
                color="#777777"
              />
            </Pressable>

            <View style={styles.divider} />

            <Pressable
              style={styles.option}
              onPress={() =>
                Alert.alert(
                  'Compartilhar o app',
                  'Em breve você poderá compartilhar o Socorro Rápido.'
                )
              }
            >
              <View style={styles.optionIcon}>
                <Ionicons
                  name="share-social-outline"
                  size={25}
                  color="#D71920"
                />
              </View>

              <Text style={styles.optionTitle}>
                Compartilhar o app
              </Text>

              <Ionicons
                name="chevron-forward"
                size={23}
                color="#777777"
              />
            </Pressable>

          </View>

          {/* SAIR */}
          <Pressable
            style={styles.logoutButton}
            onPress={sairDaConta}
          >
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#D71920"
            />

            <Text style={styles.logoutText}>
              Sair da conta
            </Text>
          </Pressable>

        </ScrollView>

        {/* BARRA INFERIOR — MANTIDA */}
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
                color="#777777"
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
                color="#777777"
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
                name="settings"
                size={26}
                color="#E52335"
              />
            </View>

            <Text style={[styles.menuText, styles.activeText]}>
              configuração
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
    backgroundColor: '#FFFFFF',
  },

  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 25,
  },

 header: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 18,
  paddingTop: 12,
},

backButton: {
  width: 38,
  height: 38,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 5,
},

title: {
  fontSize: 28,
  fontWeight: '800',
  color: '#111111',
  marginTop: 3,
},

  profileArea: {
    alignItems: 'center',
    marginTop: 5,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: '#FFD6D9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 39,
    fontWeight: '800',
    color: '#D71920',
  },

  profileName: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111111',
    marginTop: 12,
  },

  profileEmail: {
    fontSize: 17,
    color: '#666666',
    marginTop: 3,
  },

  shortcuts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 8,
  },

  shortcut: {
    width: '31%',
    alignItems: 'center',
  },

  shortcutCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#FFE1E3',
    borderWidth: 1.5,
    borderColor: '#E52335',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shortcutText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#111111',
    fontWeight: '600',
    marginTop: 8,
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666666',
    marginTop: 20,
    marginBottom: 9,
    letterSpacing: 0.3,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },

  option: {
    minHeight: 66,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  optionIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#FFE3E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  optionTitle: {
    flex: 1,
    fontSize: 17,
    color: '#111111',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginLeft: 70,
  },

  logoutButton: {
    height: 55,
    borderRadius: 28,
    backgroundColor: '#FFE0E2',
    borderWidth: 1,
    borderColor: '#E52335',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 10,
  },

  logoutText: {
    color: '#D71920',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
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