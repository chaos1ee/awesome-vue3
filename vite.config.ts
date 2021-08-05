import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import { injectHtml } from 'vite-plugin-html'

const resolve = (...pathSegments: string[]) => {
  return path.resolve(__dirname, ...pathSegments)
}

const prefix = `monaco-editor/esm/vs`

export default defineConfig(({ mode }) => {
  const envDir = resolve('.envs')
  const env = loadEnv(mode, envDir)

  return {
    name: 'App',
    envDir,
    plugins: [
      vue(),
      injectHtml({
        injectData: {
          title: env.VITE_DOCUMENT_TITLE,
        },
      }),
      vueI18n({
        include: resolve('src/locales/**'),
        compositionOnly: false,
      }),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: name => {
              name = name.slice(3)
              return `./src/styles/element-plus/${name}.css`
            },
            resolveComponent: name => {
              return `element-plus/lib/${name}`
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '/@': resolve('src'),
        '/components': resolve('src/components'),
        '/views': resolve('src/views'),
      },
    },
    server: {
      port: +env.VITE_PORT,
      proxy: {
        '/api': {
          target: 'http://localhost:4001',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      minify: 'esbuild',
      rollupOptions: {
        context: 'this',
        output: {
          manualChunks: {
            jsonWorker: [`${prefix}/language/json/json.worker`],
            editorWorker: [`${prefix}/editor/editor.worker`],
          },
        },
      },
    },
  }
})
