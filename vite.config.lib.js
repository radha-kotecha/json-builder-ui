import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist-lib',
        lib: {
            entry: 'src/lib.js',
            name: 'JsonBuilderUI',
            fileName: (format) => `lib.${format}.js`,
        },
        rollupOptions: {
            // ✅ Prevent bundling react, react-dom, and react-router-dom
            external: ['react', 'react-dom', 'react-router-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-router-dom': 'ReactRouterDOM',
                },
            },
        },
    },
});
