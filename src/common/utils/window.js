import { languages } from 'application/config/lang';
import { defaultLanguage } from 'common/utils/lang';

export const scrollToTop = config => window.scrollTo({ top: 0, behavior: 'smooth', ...config });

export const getBrowserLanguage = () => {
  const browserLanguage = window?.navigator?.language || window?.navigator?.userLanguage;
  if (browserLanguage.includes(languages.EN)) return languages.EN;
  if (browserLanguage.includes(languages.ES) || browserLanguage.includes(languages.CA)) return languages.ES;
  return defaultLanguage;
};
