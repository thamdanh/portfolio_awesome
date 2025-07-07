

console.log(`Next.config.ts print env variables`, process.env.NEXT_PUBLIC_SUPABASE_URL)

/** @type {import('next').NextConfig} */
const config = {
  // output: "export", // ✅ Enable static export 
};

export default config;