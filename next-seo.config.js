const title = 'RWD Space';
const description = `Hi! I'm a Frontend Engineer. Born and live in Bengkulu City, Bengkulu, Indonesia.`;
const siteUrl = '';

const SEO = {
    titleTemplate: `%s | ${title}`,
    defaultTitle: title,
    description,
    canonical: siteUrl,
    openGraph: {
        type: 'website',
        site_name: title,
        url: siteUrl,
        title,
        description,
        images: [{
            url: `${siteUrl}/logo.png`,
            alt: title,
            width: 1200,
            height: 630,
        }, ],
    },
    twitter: {
        cardType: 'summary_large_image',
        handle: '@rolandopranata',
        site: '@rolandopranata',
    },
    additionalMetaTags: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'apple-mobile-web-app-title', content: 'RWD Space' },
        { name: 'application-name', content: 'RWD Space' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#2a61cc' },
    ],
};

export default SEO;