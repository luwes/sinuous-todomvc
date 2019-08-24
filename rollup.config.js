import bundleSize from 'rollup-plugin-size';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
	bundleSize(),
	babel({
    plugins: [['sinuous/babel-plugin-htm']]
  }),
	resolve()
];

if (process.env.production) {
	plugins.push(terser());
}

export default {
	input: 'src/index.js',
  watch: {
    clearScreen: false
  },
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	},
	plugins
};
