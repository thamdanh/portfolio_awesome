const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const config = {
  // output: "export", // ✅ Enable static export 
  images: {
    unoptimized: true, // ✅ Required for <Image /> to work in static HTML
  },
  basePath: "/porfolio", // MUST match your GitHub repo name
  assetPrefix: "/porfolio", // Ensures assets resolve correctly
};

export default config;