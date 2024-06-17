/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
	plugins: [react(), dts(), tsconfigPaths()],
	test: {
		include: ['./tests/*.{test,spec}.tsx'],
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./tests/.setup.ts'],
		alias: {
			'lib:': new URL('./src/lib/', import.meta.url).pathname,
		},
	},
	build: {
		target: 'esnext',
		minify: 'esbuild',
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'the-program-ui',
			formats: ['es'],
			fileName: 'main',
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'styled-components',
			],
		},
	},
});
