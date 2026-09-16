
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

  // CARREGAR DADOS DO USUÁRIO
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

  // SAIR DA CONTA
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
            const { error } =
              await supabase.auth.signOut();

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

        {/* CONTEÚDO */}
        <View style={styles.contentArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >

            {/* TÍTULO */}
            <Text style={styles.title}>
              Configurações
            </Text>

            {/* CARTÃO DO PERFIL */}
            <View style={styles.profileCard}>

              <View style={styles.profileTop}>

                <View style={styles.avatar}>
                  <Ionicons
                    name="person"
                    size={38}
                    color="#12355B"
                  />
                </View>

                <View style={styles.profileInfo}>

                  <Text style={styles.profileName}>
                    {nome || 'Usuário'}
                  </Text>

                  <Text style={styles.profileEmail}>
                    {email || 'E-mail não disponível'}
                  </Text>

                  <View style={styles.secureBadge}>
                    <Ionicons
                      name="shield-checkmark"
                      size={14}
                      color="#178B35"
                    />

                    <Text style={styles.secureText}>
                      Conta segura
                    </Text>
                  </View>

                </View>

              </View>

              {/* ATALHOS */}
              <View style={styles.shortcuts}>

                {/* EDITAR PERFIL */}
                <Pressable
                  style={styles.shortcut}
                  onPress={() =>
                    Alert.alert(
                      'Editar perfil',
                      'Tela em desenvolvimento.'
                    )
                  }
                >
                  <Ionicons
                    name="person-outline"
                    size={28}
                    color="#111111"
                  />

                  <Text style={styles.shortcutText}>
                    Editar perfil
                  </Text>
                </Pressable>

                <View style={styles.shortcutDivider} />

                {/* NOTIFICAÇÕES */}
                <Pressable
                  style={styles.shortcut}
                  onPress={() =>
                    Alert.alert(
                      'Notificações',
                      'Tela em desenvolvimento.'
                    )
                  }
                >
                  <Ionicons
                    name="notifications-outline"
                    size={28}
                    color="#111111"
                  />

                  <Text style={styles.shortcutText}>
                    Notificação
                  </Text>
                </Pressable>

                <View style={styles.shortcutDivider} />

                {/* SEGURANÇA */}
                <Pressable
                  style={styles.shortcut}
                  onPress={() =>
                    Alert.alert(
                      'Segurança',
                      'Tela em desenvolvimento.'
                    )
                  }
                >
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={28}
                    color="#111111"
                  />

                  <Text style={styles.shortcutText}>
                    Segurança
                  </Text>
                </Pressable>

              </View>

            </View>

            {/* PREFERÊNCIAS E INFORMAÇÕES */}
            <Text style={styles.sectionTitle}>
              Preferências e informações
            </Text>

            <View style={styles.optionsCard}>

              {/* PREFERÊNCIAS DE SAÚDE */}
              <Pressable
                style={styles.option}
                onPress={() =>
                  Alert.alert(
                    'Preferências de saúde',
                    'Tela em desenvolvimento.'
                  )
                }
              >
                <Ionicons
                  name="medkit-outline"
                  size={27}
                  color="#111111"
                />

                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>
                    Preferências de saúde
                  </Text>

                  <Text style={styles.optionSubtitle}>
                    Alergias, condições e medicamentos
                  </Text>
                </View>

                <Ionicons
                  name="chevron-down"
                  size={24}
                  color="#111111"
                />
              </Pressable>

              <View style={styles.optionDivider} />

              {/* HISTÓRICO */}
              <Pressable
                style={styles.option}
                onPress={() =>
                  Alert.alert(
                    'Histórico de acessos',
                    'Tela em desenvolvimento.'
                  )
                }
              >
                <Ionicons
                  name="list-outline"
                  size={27}
                  color="#111111"
                />

                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>
                    Histórico de acessos
                  </Text>

                  <Text style={styles.optionSubtitle}>
                    Veja os conteúdos que você acessou
                  </Text>
                </View>

                <Ionicons
                  name="chevron-down"
                  size={24}
                  color="#111111"
                />
              </Pressable>

              <View style={styles.optionDivider} />

              {/* CENTRAL DE AJUDA */}
              <Pressable
                style={styles.option}
                onPress={() =>
                  Alert.alert(
                    'Central de ajuda',
                    'Tela em desenvolvimento.'
                  )
                }
              >
                <Ionicons
                  name="help-circle-outline"
                  size={27}
                  color="#111111"
                />

                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>
                    Central de ajuda
                  </Text>

                  <Text style={styles.optionSubtitle}>
                    Dúvidas frequentes e suporte
                  </Text>
                </View>

                <Ionicons
                  name="chevron-down"
                  size={24}
                  color="#111111"
                />
              </Pressable>

              <View style={styles.optionDivider} />

              {/* SOBRE O APP */}
              <Pressable
                style={styles.option}
                onPress={() =>
                  Alert.alert(
                    'Sobre o app',
                    'Socorro Rápido\nVersão 1.0.0'
                  )
                }
              >
                <Ionicons
                  name="information-circle-outline"
                  size={27}
                  color="#111111"
                />

                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>
                    Sobre o app
                  </Text>

                  <Text style={styles.optionSubtitle}>
                    Versão 1.0.0
                  </Text>
                </View>

                <Ionicons
                  name="chevron-down"
                  size={24}
                  color="#111111"
                />
              </Pressable>

              <View style={styles.optionDivider} />

              {/* COMPARTILHAR */}
              <Pressable
                style={styles.option}
                onPress={() =>
                  Alert.alert(
                    'Compartilhar o app',
                    'Em breve você poderá compartilhar o Socorro Rápido.'
                  )
                }
              >
                <Ionicons
                  name="share-outline"
                  size={27}
                  color="#111111"
                />

                <View style={styles.optionText}>
                  <Text style={styles.optionTitle}>
                    Compartilhar o app
                  </Text>

                  <Text style={styles.optionSubtitle}>
                    Indique para amigos e familiares
                  </Text>
                </View>

                <Ionicons
                  name="chevron-down"
                  size={24}
                  color="#111111"
                />
              </Pressable>

            </View>

            {/* SAIR DA CONTA */}
            <Pressable
              style={styles.logoutButton}
              onPress={sairDaConta}
            >
              <Text style={styles.logoutText}>
                SAIR DA CONTA
              </Text>
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
    paddingHorizontal: 12,
    paddingTop: 28,
    paddingBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 18,
  },

  profileCard: {
    backgroundColor: '#C7D3E1',
    borderWidth: 1,
    borderColor: '#8499B1',
    borderRadius: 12,
    overflow: 'hidden',
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#AABBCD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 13,
  },

  profileName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111111',
  },

  profileEmail: {
    fontSize: 12,
    color: '#111111',
    marginTop: 3,
  },

  secureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#D7F5D9',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginTop: 5,
  },

  secureText: {
    fontSize: 10,
    color: '#178B35',
    fontWeight: '700',
    marginLeft: 3,
  },

  shortcuts: {
    height: 68,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  shortcut: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  shortcutText: {
    fontSize: 11,
    color: '#111111',
    fontWeight: '600',
  },

  shortcutDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#BDBDBD',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111111',
    marginTop: 20,
    marginBottom: 10,
  },

  optionsCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 10,
    overflow: 'hidden',
  },

  option: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  optionText: {
    flex: 1,
    marginLeft: 12,
    marginRight: 5,
  },

  optionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#111111',
  },

  optionSubtitle: {
    fontSize: 11,
    color: '#333333',
    marginTop: 3,
  },

  optionDivider: {
    height: 1,
    backgroundColor: '#BDBDBD',
  },

  logoutButton: {
    height: 52,
    backgroundColor: '#F49A9F',
    borderWidth: 1,
    borderColor: '#E52335',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  },

  logoutText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#A80000',
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