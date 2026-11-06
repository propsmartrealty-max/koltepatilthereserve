#!/usr/bin/env node

/**
 * Antigravity Automated Search Engine Indexing Dispatcher
 * Submits the latest sitemap URLs to:
 * 1. Google Search Console Sitemap Ping Endpoint
 * 2. IndexNow Protocol (Bing, Yahoo, Yandex, Naver, Seznam)
 */

import https from 'https';

const DOMAIN = 'thereserve.koltepatil.digital';
const BASE_URL = `https://${DOMAIN}`;
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'koltepatilthereserve2026';

const HIGH_PRIORITY_URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/kolte-patil-the-reserve-price`,
  `${BASE_URL}/kolte-patil-the-reserve-brochure`,
  `${BASE_URL}/kolte-patil-the-reserve-floor-plans`,
  `${BASE_URL}/kolte-patil-the-reserve-rera`,
  `${BASE_URL}/kolte-patil-the-reserve-towers`,
  `${BASE_URL}/kolte-patil-the-reserve-construction-status`,
  `${BASE_URL}/kolte-patil-the-reserve-possession-date`,
  `${BASE_URL}/kolte-patil-the-reserve-master-layout`,
  `${BASE_URL}/kolte-patil-the-reserve-amenities`,
  `${BASE_URL}/kolte-patil-the-reserve-location`,
  `${BASE_URL}/kolte-patil-the-reserve-specifications`,
  `${BASE_URL}/kolte-patil-the-reserve-contact`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/insights`,
  `${BASE_URL}/compare/the-reserve-sinhgad-road-vs-kothrud-erandwane-properties`,
  `${BASE_URL}/compare/the-reserve-vs-life-republic-hinjewadi-mahalunge`,
  `${BASE_URL}/compare/the-reserve-vs-pride-purple-park-titan-hinjewadi`,
  `${BASE_URL}/compare/the-reserve-vs-mahindra-happinest-tathawade`,
  `${BASE_URL}/compare/the-reserve-vs-nanded-city-pune`,
  `${BASE_URL}/compare/the-reserve-vs-majestique-manhattan-sinhgad-road`,
  `${BASE_URL}/compare/the-reserve-vs-venkatesh-skydale-sinhgad-road`,
  `${BASE_URL}/guides/kothrud-erandwane-homebuyers-upgrade-guide-sinhgad-road`,
  `${BASE_URL}/guides/warje-karve-nagar-to-sinhgad-road-luxury-homes`,
  `${BASE_URL}/guides/pune-real-estate-market-micro-markets-ranking-2026`,
  `${BASE_URL}/guides/nri-homebuyer-guide-pune-real-estate-dubai-usa-singapore`,
  `${BASE_URL}/the-residences/2-bhk-pune`,
  `${BASE_URL}/the-residences/3-bhk-pune`,
  `${BASE_URL}/the-residences/4-bhk-pune`,
  `${BASE_URL}/the-residences/duplex-sky-villas-pune`,
  `${BASE_URL}/the-residences/vastu-compliant-homes`,
  `${BASE_URL}/location/sinhgad-road`,
  `${BASE_URL}/location/vadgaon-khurd`,
  `${BASE_URL}/location/nanded-fata`,
  `${BASE_URL}/location/mahalunge`,
  `${BASE_URL}/location/hinjewadi`,
  `${BASE_URL}/location/baner`,
  `${BASE_URL}/location/kothrud`,
  `${BASE_URL}/location/swargate`,
  `${BASE_URL}/investment/nri-homes-dubai-gulf-usa`,
];

function pingUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
    });
  });
}

function submitIndexNow(host, key, urlList) {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList,
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ service: 'IndexNow', status: res.statusCode, body: data });
      });
    });

    req.on('error', (err) => {
      resolve({ service: 'IndexNow', error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log(`[SEO Engine] Initializing automated indexing dispatch for ${DOMAIN}...`);
  console.log(`[SEO Engine] Target Sitemap: ${SITEMAP_URL}`);
  console.log(`[SEO Engine] Submitting ${HIGH_PRIORITY_URLS.length} high-priority canonical URLs...`);

  // 1. Google Sitemap & RSS Ping
  const googlePing = await pingUrl(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
  console.log(`[Google Sitemap Ping] Status: ${googlePing.status || googlePing.error}`);

  const googleRssPing = await pingUrl(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${BASE_URL}/rss.xml`)}`);
  console.log(`[Google RSS Ping] Status: ${googleRssPing.status || googleRssPing.error}`);

  // 2. Bing Sitemap & RSS Ping
  const bingPing = await pingUrl(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
  console.log(`[Bing Sitemap Ping] Status: ${bingPing.status || bingPing.error}`);

  const bingRssPing = await pingUrl(`https://www.bing.com/ping?sitemap=${encodeURIComponent(`${BASE_URL}/rss.xml`)}`);
  console.log(`[Bing RSS Ping] Status: ${bingRssPing.status || bingRssPing.error}`);

  // 3. IndexNow Batch Submission
  const indexNowResult = await submitIndexNow(DOMAIN, INDEXNOW_KEY, HIGH_PRIORITY_URLS);
  console.log(`[IndexNow] Status: ${indexNowResult.status || indexNowResult.error}`);

  console.log('[SEO Engine] Automated search engine dispatch cycle completed successfully.');
}

main().catch(console.error);
