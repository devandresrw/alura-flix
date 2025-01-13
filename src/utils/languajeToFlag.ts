type LanguageCode = 'af' | 'am' | 'ar' | 'be' | 'bg' | 'bn' | 'bo' | 'bs' | 'ca' | 'cn' | 'cs' | 'da' | 'de' | 'dz' | 'el' | 'en' | 'es' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'he' | 'hi' | 'hr' | 'hu' | 'hy' | 'id' | 'is' | 'it' | 'ja' | 'jv' | 'ka' | 'kk' | 'km' | 'kn' | 'ko' | 'ku' | 'ky' | 'la' | 'lo' | 'lt' | 'lv' | 'mg' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'mt' | 'my' | 'ne' | 'nl' | 'no' | 'pa' | 'pl' | 'ps' | 'pt' | 'ro' | 'ru' | 'sd' | 'sh' | 'si' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sw' | 'ta' | 'te' | 'th' | 'tl' | 'tn' | 'tr' | 'tt' | 'uk' | 'ur' | 'uz' | 'vi' | 'xh' | 'yo' | 'zh' | 'zu' | 'ga' | 'gl' | 'gu' | 'ko' | 'pa' | 'ta' | 'te' | 'xx' | 'zh' | 'zu';

export const languageToFlag: Record<LanguageCode, string> = {
  af: '🇿🇦', // Afrikáans
  am: '🇪🇹', // Amhárico
  ar: '🇸🇦', // Árabe
  be: '🇧🇾', // Bielorruso
  bg: '🇧🇬', // Búlgaro
  bn: '🇧🇩', // Bengalí
  bo: '🏳️', // Tibetano
  bs: '🇧🇦', // Bosnio
  ca: '🇪🇸', // Catalán
  cn: '🇨🇳', // Chino
  cs: '🇨🇿', // Checo
  da: '🇩🇰', // Danés
  de: '🇩🇪', // Alemán
  dz: '🏳️', // Dzongkha
  el: '🇬🇷', // Griego
  en: '🇬🇧', // Inglés
  es: '🇪🇸', // Español
  et: '🇪🇪', // Estonio
  eu: '🏴', // Vasco
  fa: '🇮🇷', // Persa
  fi: '🇫🇮', // Finlandés
  fr: '🇫🇷', // Francés
  ga: '🇮🇪', // Irlandés
  gl: '🇪🇸', // Gallego
  gu: '🇮🇳', // Guyaratí
  he: '🇮🇱', // Hebreo
  hi: '🇮🇳', // Hindi
  hr: '🇭🇷', // Croata
  hu: '🇭🇺', // Húngaro
  id: '🇮🇩', // Indonesio
  is: '🇮🇸', // Islandés
  it: '🇮🇹', // Italiano
  ja: '🇯🇵', // Japonés
  jv: '🇮🇩', // Javanés
  ka: '🇬🇪', // Georgiano
  kk: '🇰🇿', // Kazajo
  km: '🇰🇭', // Jemer
  kn: '🇮🇳', // Canarés
  ko: '🇰🇷', // Coreano
  ku: '🇹🇷', // Kurdo
  la: '🏳️', // Latín
  lt: '🇱🇹', // Lituano
  lv: '🇱🇻', // Letón
  mk: '🇲🇰', // Macedonio
  ml: '🇮🇳', // Malayalam
  mn: '🇲🇳', // Mongol
  mr: '🇮🇳', // Maratí
  ms: '🇲🇾', // Malayo
  nl: '🇳🇱', // Holandés
  no: '🇳🇴', // Noruego
  pa: '🇮🇳', // Panyabí
  pl: '🇵🇱', // Polaco
  ps: '🇦🇫', // Pastún
  pt: '🇵🇹', // Portugués
  ro: '🇷🇴', // Rumano
  ru: '🇷🇺', // Ruso
  sh: '🇷🇸', // Serbocroata
  si: '🇱🇰', // Cingalés
  sk: '🇸🇰', // Eslovaco
  sr: '🇷🇸', // Serbio
  sv: '🇸🇪', // Sueco
  ta: '🇮🇳', // Tamil
  te: '🇮🇳', // Telugu
  th: '🇹🇭', // Tailandés
  tl: '🇵🇭', // Tagalo
  tn: '🇧🇼', // Setsuana
  tr: '🇹🇷', // Turco
  tt: '🇷🇺', // Tártaro
  uk: '🇺🇦', // Ucraniano
  ur: '🇵🇰', // Urdu
  vi: '🇻🇳', // Vietnamita
  xx: '🌐', // Desconocido
  yo: '🇳🇬', // Yoruba
  zh: '🇨🇳', // Chino
  zu: '🇿🇦',
  hy: "",
  ky: "",
  lo: "",
  mg: "",
  mt: "",
  my: "",
  ne: "",
  sd: "",
  sl: "",
  sq: "",
  sw: "",
  uz: "",
  xh: ""
};

export const getLanguageFlag = (languageCode: string): string => {
  return languageToFlag[languageCode.toLowerCase() as LanguageCode] || '🌐';
};