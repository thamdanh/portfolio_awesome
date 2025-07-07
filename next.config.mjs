const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

console.log(`Next.config.ts print env variables`, process.env.NEXT_PUBLIC_SUPABASE_URL)

/** @type {import('next').NextConfig} */
const config = {
  // output: "export", // ✅ Enable static export 
};

export default config;