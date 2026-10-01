/**
 * Tokens de design do MyList, extraídos do Figma.
 * Os nomes das cores são os mesmos dos estilos do protótipo.
 */
export const theme = {
  colors: {
    ciano: '#00CBCE', // label "Criadas"
    blue500: '#109AE5', // label "Concluídas"
    blue300: '#007CB5', // botão
    white200: '#F5F5F5', // número dos contadores
    gray300: '#7A7A7A', // placeholder do input
    gray500: '#333333', // fundo dos contadores
    gray700: '#262626', // fundo do input
    black500: '#181818', // fundo do cabeçalho
    black700: '#0D0D0D', // borda do input
    black900: '#0A0A0A', // fundo da tela
  },

  fonts: {
    regular: 'Inter_400Regular',
    bold: 'Inter_700Bold',
  },
} as const;
