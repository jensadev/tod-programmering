const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const mila = require('markdown-it-link-attributes');
const markdownItAnchor = require('markdown-it-anchor');
const glob = require('fast-glob');
const emojiReadTime = require('@11tyrocks/eleventy-plugin-emoji-readtime');
const fs = require('fs');

const Image = require('@11ty/eleventy-img');

const parseTransform = require('./src/transforms/parse-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

function imageShortcode(src, alt, sizes='100vw') {
    let options = {
        widths: [300, 600],
        outputDir: './dist/img',
    };

    // generate images, while this is async we don’t wait
    Image(src, options);

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };
    // get metadata even the images are not fully generated
    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
    eleventyConfig.addLiquidShortcode('image', imageShortcode);
    eleventyConfig.addJavaScriptFunction('image', imageShortcode);
};

module.exports = (eleventyConfig) => {
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(emojiReadTime, {
        emoji: '📕',
        label: 'minuters läsning',
        wpm: 160,
        bucketSize: 3,
    });

    eleventyConfig.addWatchTarget('./src/sass/');
    eleventyConfig.addWatchTarget('./src/js/');

    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/fonts');
    eleventyConfig.addPassthroughCopy('./src/favicon.ico');

    // eleventyConfig.addPassthroughCopy({'./src/assets/icons': 'icons'});

    // Filters
    glob.sync(['src/filters/*.js']).forEach((file) => {
        let filters = require('./' + file);
        Object.keys(filters).forEach((name) =>
            eleventyConfig.addFilter(name, filters[name])
        );
    });

    // Shortcodes
    glob.sync(['src/shortcodes/*.js']).forEach((file) => {
        let shortcodes = require('./' + file);
        Object.keys(shortcodes).forEach((name) => {
            eleventyConfig.addShortcode(name, shortcodes[name]);
        });
    });

    eleventyConfig.addNunjucksShortcode('image', imageShortcode);

    // PairedShortcodes
    glob.sync(['src/paired-shortcodes/*.js']).forEach((file) => {
        let pairedShortcodes = require('./' + file);
        Object.keys(pairedShortcodes).forEach((name) =>
            eleventyConfig.addPairedShortcode(name, pairedShortcodes[name])
        );
    });

    // Collections
    eleventyConfig.addCollection('tod', (collection) => {
        return [...collection.getFilteredByGlob('./src/**/*.md')];
    });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
    })
        .use(markdownItAnchor, {
            permalink: true,
            permalinkClass: 'anchor',
            permalinkSymbol: '#',
            permalinkSpace: false,
            permalinkBefore: false,
            level: [1, 2, 3],
            slugify: (s) =>
                s
                    .trim()
                    .toLowerCase()
                    .replace(/[\s+~\/]/g, '-')
                    .replace(/[().`,%·'"!?¿:@*]/g, ''),
        })
        .use(mila, {
            pattern: /^https:/,
            attrs: {
                target: '_blank',
                rel: 'noopener',
            },
        });
    eleventyConfig.setLibrary('md', markdownLibrary);

    eleventyConfig.setUseGitIgnore(false);

    // 404
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: (err, bs) => {
                bs.addMiddleware('*', (req, res) => {
                    const content_404 = fs.readFileSync('dist/404.html');
                    // Add 404 http status code in request header.
                    res.writeHead(404, {
                        'Content-Type': 'text/html; charset=UTF-8',
                    });
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });

    // Transforms
    eleventyConfig.addTransform('parse', parseTransform);

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
        passthroughFileCopy: true,
    };
};
