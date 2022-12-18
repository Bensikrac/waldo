declare namespace NodeJS {
  interface ProcessEnv {
    DISCORD_CLIENT_ID: string;
    GITHUB_CLIENT_ID: string;
    GOOGLE_CLIENT_ID: string;
    BTLNET_CLIENT_ID: string;
    FB_CLIENT_ID: string;
    TWITCH_CLIENT_ID: string;
    REDIS_URL: string;
    RATELIMIT_MAX_REQUESTS: number;
    RATELIMIT_DURATION: number;
    YOUTUBE_API_KEY: string;
    CLOUDFLARE_TURNSTILE_SECRET: string;
    CLOUDFLARE_TURNSTILE_SITE_KEY: string;
  }
}
declare namespace NodeJS {
  interface ProcessEnv {
    DISCORD_CLIENT_SECRET: string;
    GITHUB_CLIENT_SECRET: string;
    GOOGLE_CLIENT_SECRET: string;
    BTLNET_CLIENT_SECRET: string;
    FB_CLIENT_SECRET: string;
    TWITCH_CLIENT_SECRET: string;
    REDIS_PORT: number;
    RATELIMIT_MAX_REQUESTS: number;
    RATELIMIT_DURATION: number;
    YOUTUBE_API_KEY: string;
    CLOUDFLARE_TURNSTILE_SECRET: string;
    CLOUDFLARE_TURNSTILE_SITE_KEY: string;
  }
}
