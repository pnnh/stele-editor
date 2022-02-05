import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import dts from 'rollup-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import strip from '@rollup/plugin-strip'

export default [{
  input: 'dist/index.js',
  output: {
    file: 'lib/index.js',
    format: 'esm',
    sourcemap: true
  },
  external: ['react'],
  plugins: [
    commonjs(),
    nodeResolve(),
    strip({
      include: ['**/*.(js|mjs|ts|tsx)'],
      debugger: true,
      functions: ['console.log', 'console.debug'],
      sourceMap: true
    }),
    visualizer({
      filename: 'dist/status.es.html'
    })
  ]
}, {
  input: 'dist/index.d.ts',
  output: [{ file: 'lib/index.d.ts' }],
  plugins: [
    dts()
  ]
}, {
  input: 'src/index.scss',
  plugins: [scss({ output: 'lib/index.css' })]
}
]
