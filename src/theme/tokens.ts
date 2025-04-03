export const brandColors = {
  primary: '#0067b8',
  primaryLight: '#3389c6',
  primaryDark: '#005293',
  primaryDarker: '#003d6d',
  orange: '#F14F21',
  orangeLight: '#F37350',
  orangeDark: '#C13F1A',
  green: '#7EB900',
  greenLight: '#98C733',
  greenDark: '#659400',
  yellow: '#FEB800',
  yellowLight: '#FEC633',
  yellowDark: '#CB9300',
  gray: '#727272',
  grayLight: '#8E8E8E',
  grayDark: '#5B5B5B',
};

// Semantic color mapping
export const semanticColors = {
  success: brandColors.green,
  warning: brandColors.yellow,
  error: brandColors.orange,
  info: brandColors.primary,
  neutral: brandColors.gray,
};

// Background gradients
export const gradients = {
  primaryGradient: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.primaryDarker})`,
  successGradient: `linear-gradient(135deg, ${brandColors.green}, ${brandColors.greenDark})`,
  warningGradient: `linear-gradient(135deg, ${brandColors.yellow}, ${brandColors.yellowDark})`,
  errorGradient: `linear-gradient(135deg, ${brandColors.orange}, ${brandColors.orangeDark})`,
}; 