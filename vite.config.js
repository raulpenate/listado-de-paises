import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import { AntDesignVueResolver } from 'vite-plugin-components'
// This fixed the css issue :O, thanks evan you!!
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      customComponentResolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
