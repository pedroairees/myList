# MyList

Parte superior do app MyList, feita em React Native com Expo e TypeScript: cabeçalho com a logo, campo de texto, botão de adicionar e os contadores de itens criados e concluídos.

Nesta etapa só existe a estrutura e a estilização. Nada é funcional ainda: o botão não tem ação e os contadores são valores fixos.

## Pré-requisitos

- [Node.js](https://nodejs.org) 20 ou superior (já inclui o npm)
- Para rodar no celular: o app **Expo Go** ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))
- Para rodar em emulador: Android Studio (Android) ou Xcode (iOS, somente macOS)

## Instalação

```bash
git clone https://github.com/Leonardolraf/mylist.git
cd mylist
npm install
```

## Como rodar

O projeto usa o Expo, então não há etapa de compilação manual: o Metro Bundler compila o código ao iniciar.

### No celular (Expo Go)

```bash
npm start
```

Leia o QR code que aparece no terminal com o Expo Go (Android) ou com a câmera (iOS). O celular e o computador precisam estar na mesma rede.

### No navegador

```bash
npm run web
```

### Em emulador

```bash
npm run android
```

```bash
npm run ios
```

## Verificação de tipos

```bash
npx tsc --noEmit
```

## Estrutura

```
App.tsx                  carrega as fontes e renderiza a tela Home
src/
  assets/                logo e ícone exportados do Figma (SVG)
  components/
    Header/              cabeçalho com a logo
    Input/               campo de texto
    Button/              botão de adicionar
    Counter/             label com a quantidade de itens
  global/styles/theme.ts cores e fontes do protótipo
  screens/Home/          tela que junta os componentes
```

Cada componente fica em uma pasta com `index.tsx` (estrutura) e `styles.ts` (estilos).
