import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
    server:{
        port:5000,
        host:true
    },
    integrations: [image()],
});
