export default (i18nLng: string): string =>
  /^es(-.*)?$/.test(i18nLng) ? 'es' : 'en'
