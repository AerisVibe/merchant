import {
  defineConfig
} from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// Element Plus 按需加载组件配置
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'

const ElementPlusResolverInstance = ElementPlusResolver.default || ElementPlusResolver

export default defineConfig({
  base: './', // index.html文件所在位置
  root: './', // js导入的资源路径，src
  publicDir: 'assets', // 静态资源目录路径
  resolve: {
    // 目录别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })]
    })
  ],
  server: {
    port: 8000,
    open: true,
    host: '0.0.0.0',
    strictPort: true,
    cors: false,
    proxy: {
      [process.env.VITE_BASE_API]: { // 需要代理的路径   例如 '/v1'
        target: `${process.env.VITE_BASE_PATH}:${process.env.VITE_SERVER_PORT}/`, // 代理到 目标路径
        changeOrigin: false,
        rewrite: path => path.replace(new RegExp('^' + process.env.VITE_BASE_API), ''),
      }
    }
  },
  build: {
    minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
    manifest: false, // 是否产出manifest.json
    sourcemap: false, // 是否产出sourcemap.json
    outDir: 'dist', // 产出目录
    rollupOptions: {
      // 自定义构建输出生产版本看这里 https: //rollupjs.org/configuration-options/
    }
  },
})
