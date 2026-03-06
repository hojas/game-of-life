import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const messages = {
  en,
  zh,
}

const i18n = createI18n({
  locale: 'zh', // 默认语言为中文
  fallbackLocale: 'en', // 回退语言为英文
  messages,
})

export default i18n
