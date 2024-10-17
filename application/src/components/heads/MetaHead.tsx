import Head from "next/head";
import { useRouter } from 'next/router';
import {BASE_URL} from "@config/processEnv";

type Props = {
    title?: string;
    description?: string;
    image?: string;
};


const MetaHead = (props: Props) => {
    const { locale, locales, asPath } = useRouter();
    const {
        title = '노기노기',
        description = '마비노기 놀이터',
        image ,
    } = props;

    const siteName = '노기노기';
    const logoUrl = '/android-chrome-512x512.png';

    const formatCurrentDate = () => {
        const now = new Date();
        const timeZoneOffset = -now.getTimezoneOffset();
        const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
        const offsetMinutes = Math.abs(timeZoneOffset) % 60;
        const sign = timeZoneOffset >= 0 ? '+' : '-';
        const formattedOffset = `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;

        const formattedDate = now.toISOString().replace(/\.\d{3}Z$/, '');

        return `${formattedDate}${formattedOffset}`;
    };

    const currentDate = formatCurrentDate();

    const siteConfig = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        name: title,
        description: description,
        keywords:
          '마비노기, 경매장, 마비노기 경매장, 오픈 API, api, 놀이터, dahoon06',
        url: BASE_URL,
        image: image,
        author: {
            '@type': 'Person',
            name: 'https://github.com/DaHoon06',
        },
        datePublished: currentDate,
        dateModified: currentDate,
        publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: {
                '@type': 'ImageObject',
                url: logoUrl,
            },
        },
        headline: title,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BASE_URL}${asPath}`,
        },
        inLanguage: locale,
        articleSection: title,
        articleBody: description,
        thumbnailUrl: image,
    }

    const hreflangLinks = locales?.map(lng => (
      <link key={lng} rel='alternate' hrefLang={lng} href={`${BASE_URL}/${lng}${asPath}`} />
    ));

    return (
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={siteConfig.keywords} />

        {/* Open Graph tags for Facebook, LinkedIn */}
        <meta property='og:locale' content={locale} />
        <meta name='geo.region' content={locale} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${BASE_URL}${asPath}`} />
        <meta property='og:image' content={image} />
        <meta property='og:image:alt' content={description} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* Article tags for publishing dates */}
        <meta property='article:published_time' content={currentDate} />
        <meta property='article:modified_time' content={currentDate} />
        <meta property='article:author' content={siteConfig.author.name} />

        {/* Twitter Card tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mycodings' />
        <meta name='twitter:creator' content='@mycodings' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:image:alt' content={description} />

        {/* Canonical URL */}
        <link rel='canonical' href={`${BASE_URL}${asPath}`} />
        <link rel='alternate' hrefLang='x-default' href={BASE_URL} />
        {hreflangLinks}

        {/* RSS */}
        <link rel='alternate' type='application/rss+xml' title='Noginogi RSS Feed' href='/api/rss' />

        {/* Structured data for SEO */}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(siteConfig, null, 2) }} />
    </Head>
  );
};

export default MetaHead;
