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
  const requestPrefix = env.VITE_REQUEST_PREFIX

  return {
    name: 'Wod',
    envDir,
    plugins: [
      vue(),
      vueI18n({
        include: resolve('src/locales/**'),
        defaultSFCLang: 'yaml',
      }),
      injectHtml({
        injectData: { title: env.VITE_DOCUMENT_TITLE },
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
        [requestPrefix]: {
          target: 'http://kg-wod-gm-dev.kingsgroup.cn:33005',
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + requestPrefix), ''),
        },
      },
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            jsonWorker: [`${prefix}/language/json/json.worker`],
            cssWorker: [`${prefix}/language/css/css.worker`],
            htmlWorker: [`${prefix}/language/html/html.worker`],
            tsWorker: [`${prefix}/language/typescript/ts.worker`],
            editorWorker: [`${prefix}/editor/editor.worker`],
          },
        },
      },
    },
  }
})
