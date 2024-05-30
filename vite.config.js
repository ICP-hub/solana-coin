import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'vite-plugin-node-stdlib-browser';
import { polyfillNode } from 'esbuild-plugin-polyfill-node';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({

resolve: {
   alias: {
     crypto: 'crypto-browserify',
     buffer:'buffer'
   },
   
 },
 build: {
    rollupOptions: {
        plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    },
},

  plugins: [react(),],
  define: {
    'process.env.RECEIVER_WALLET_ADDRESS': `"${process.env.RECEIVER_WALLET_ADDRESS}"`
  },
  optimizeDeps: {
    include: ['buffer'],
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true,
                crypto:true
            }),
            // nodePolyfills(
            //     {
                
            //     }
            // )
        ]
    }
  },
  server:{
    port: 3002
  }
})
