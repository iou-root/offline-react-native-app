import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#1699F2', // orange
  secondary: '#003580', // gray
  warning: '#ffe79a',
  danger: '#DC4C64',
  red: '#FF1717',
  success: '#14A44D',
  lightGray2: "#F5F5F8",
  transparentSuccess: '#8bf1b3',
  transparentDanger: '#e67e8f',
  lightGray1: "#DDDDDD",
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  white2: "#FBFBFB",
  textButton: '#FFFAFA',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'rgba(255, 255, 255, 0)',
  transparentBlack1: 'rgba(0, 0, 0, 0.2)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
  darkgray: '#898C95',
  
  // custom
  success900: "#136A4A",
  success800: "#23825F",
  success700: "#36AB80",
  success600: "#6FCAA8",
  success500: "#A9DCC9",
  success400: "#D0EDDF",
  success300: "#EAF7F1",
  success200: "#F5FBF8",
  success100: "#FAFDFC",
  
  gray900: "#8A94A6",
  gray800: "#98A1B1",
  gray700: "#A7AEBB",
  gray600: "#B0B7C3",
  gray500: "#C9CED6",
  gray400: "#E1E4E8",
  gray300: "#F1F2F4",
  gray200: "#F7F8F9",
  gray100: "#FAFBFB",
  
  black900: "#0A1F44",
  black800: "#14284B",
  black700: "#283A5B",
  black600: "#364766",
  black500: "#455571",
  black400: "#4E5D78",
  black300: "#596780",
  black200: "#627088",
  black100: "#717D92",
  
  info900: "#01408F",
  info800: "#026DD6",
  info700: "#0284FE",
  info600: "#4BA7FE",
  info500: "#83C3FE",
  info400: "#B3DAFF",
  info300: "#DCEEFF",
  info200: "#EEF7FF",
  info100: "#F8FBFF",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  semiRadius: 10,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
    color: COLORS.darkgray,
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
    color: COLORS.darkgray,
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
    color: COLORS.darkgray,
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
    color: COLORS.darkgray,
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
    color: COLORS.darkgray,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
    color: COLORS.darkgray,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
    color: COLORS.darkgray,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
    color: COLORS.darkgray,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
    color: COLORS.darkgray,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
