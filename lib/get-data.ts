import * as dataEs from './data-es'
import * as dataEn from './data-en'

export function getData(locale: string) {
  return locale === 'es' ? dataEs : dataEn
}
