import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import UnoCSS from 'unocss/vite';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      {
        name: 'treat-js-files-as-jsx',
        async transform(code, id) {
          if (!id.match(/src\/.*\.js$/)) return null;

          // Use the exposed transform from vite, instead of directly
          // transforming with esbuild
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic'
          });
        }
      },
      UnoCSS(),
      react()
    ],
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx'
        }
      }
    },
    define: {
      'process.env.NODE_ENV': `"${mode}"`
    },
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        components: path.resolve(__dirname, './src/components')
      }
    }
  };
});
