import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://fmasfbzzxasyuwngibea.supabase.co';

const supabaseKey = 'sb_publishable_eslwv-SQ3tFrg6441f7bjg_NNviSAVw';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);