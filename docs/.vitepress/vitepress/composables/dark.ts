import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'el-theme-appearance',
  valueLight: 'light',
})

export const toggleDark = useToggle(isDark)
