import { format } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from "@config/processEnv";

const generateRssFeed = (locale: string) => {
  // 기본 언어가 ko일 경우에는 '/ko' 경로를 사용하지 않음
  const isDefaultLocale = locale === 'ko';
  const basePath = isDefaultLocale ? '' : `/${locale}`;

  const rssItems = [
    {
      title: '노기노기',
      description: '마비노기 놀이터',
      url: `${BASE_URL}${basePath}/post/1`, // 언어별 경로 처리
      image: `${BASE_URL}/android-chrome-512x512.png`,
      datePublished: new Date(),
    },
    // 추가적인 게시물 데이터도 여기서 처리할 수 있음
  ];

  const rssItemsXml = rssItems
    .map(item => {
      const date = format(new Date(item.datePublished), 'EEE, dd MMM yyyy HH:mm:ss O');
      return `
        <item>
          <title>${item.title}</title>
          <description><![CDATA[${item.description}]]></description>
          <link>${item.url}</link>
          <guid>${item.url}</guid>
          <pubDate>${date}</pubDate>
          <enclosure url="${item.image}" type="image/png" />
        </item>
      `;
    })
    .join('');

  const rssFeed = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Noginogi RSS Feed</title>
        <link>${BASE_URL}${basePath}</link>
        <description>마비노기 놀이터</description>
        <language>${locale}</language>
        <lastBuildDate>${format(new Date(), 'EEE, dd MMM yyyy HH:mm:ss O')}</lastBuildDate>
        ${rssItemsXml}
      </channel>
    </rss>
  `;

  return rssFeed;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { locale } = req.query; // locale 파라미터를 가져옴
    const rssFeed = generateRssFeed(Array.isArray(locale) ? locale[0] : locale || 'ko'); // 기본 언어는 ko로 설정

    res.setHeader('Content-Type', 'application/xml');
    res.write(rssFeed);
    res.end();
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    res.status(500).send('Error generating RSS feed.');
  }
};