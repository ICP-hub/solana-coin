import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
          crypto: 'crypto-browserify',
        },
      },  
  pludefineConfiggins: [react()],
  define: {
    'process.env.RECEIVER_WALLET_ADDRESS': `"${process.env.RECEIVER_WALLET_ADDRESS}"`
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true
            })
        ]
    }
  },
  server:{
    port: 3002
  }
})
