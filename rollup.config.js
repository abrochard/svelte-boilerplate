import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      css: function (css) {
        css.write('public/main.css');
      },
    }),
    resolve({
      browser: true,
	  dedupe: ['svelte']
    }),
    commonjs(),
    json(),
    builtins()
  ]
};
