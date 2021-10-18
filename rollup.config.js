import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'
import dts from 'rollup-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true
  },
  external: ['react'],
  plugins: rollupPlugins()
},
//,
{
  input: 'src/index.d.ts',
  output: [{ file: 'dist/my-library.d.ts' }],
  plugins: rollupPlugins()
}
]

function rollupPlugins () {
  return [
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs(),
    nodeResolve(),
    scss(),
    // dts(),
    visualizer({
      filename: 'dist/status.html'
    })
  ]
}
