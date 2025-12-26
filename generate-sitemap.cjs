const { writeFileSync } = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://portfolio-site-5o3.pages.dev",
  });

  sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
  sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
  sitemap.write({ url: "/projects", changefreq: "monthly", priority: 0.8 });
  sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.7 });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  writeFileSync("./public/sitemap.xml", data.toString());

  console.log("Sitemap generated successfully 🚀");
}

generateSitemap();
