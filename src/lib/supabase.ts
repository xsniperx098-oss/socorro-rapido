import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const supabaseUrl = 'https://fmasfbzzxasyuwngibea.supabase.co';

const supabaseKey = 'sb_publishable_eslwv-SQ3tFrg6441f7bjg_NNviSAVw';
const podePersistirSessao =
  Platform.OS !== 'web' || typeof window !== 'undefined';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      // A renderização estática da web ocorre no servidor, onde `window`
      // e o armazenamento do navegador não existem.
      storage: podePersistirSessao ? AsyncStorage : undefined,
      autoRefreshToken: podePersistirSessao,
      persistSession: podePersistirSessao,
      detectSessionInUrl: podePersistirSessao,
    },
  }
);
