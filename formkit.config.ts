import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin('fk-436d413b56e', inputs)

export default defineFormKitConfig(() => ({
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses }
}))
