import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro'

// https://astro.build/config
export default defineConfig({
    integrations: [
        storyblok({
            accessToken: '6GVL6oKXkQld33TqWp6ofgtt',
            components: {
                catPost: 'storyblok/CatPost',
                page: 'storyblok/Page',
                catPostList: 'storyblok/CatPostList',
            },
            apiOptions: {
                region : '',
            },
        })
    ]
});
