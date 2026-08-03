export const colors = {
  light: {
    text: '#121924',
    textMuted: '#495469',
    line: 'rgba(18, 25, 36, 0.12)',
    brand: '#138a79',
    highlight: '#ffb250',
  },
  dark: {
    text: '#ecf3ff',
    textMuted: '#adc0dd',
    line: 'rgba(236, 243, 255, 0.14)',
    brand: '#21c6af',
    highlight: '#ffd591',
  },
}

export function getThemeColors() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  return isDark ? colors.dark : colors.light
}
