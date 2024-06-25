import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	envDir: '../../',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js'
				// assetFileNames: ({ name }) => {
				// 	const ext = name?.split('.')[1]

				// 	switch (ext) {
				// 		case 'js':
				// 			return 'scripts/[name].[ext]'
				// 		case 'png':
				// 			return 'images/[name].[ext]'
				// 		default:
				// 			return '.'
				// 	}
				// }
			}
		}
	}
})
