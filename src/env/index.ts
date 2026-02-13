type RuntimeEnv = Record<string, string | undefined>;

const runtimeEnv: RuntimeEnv = (() => {
  const meta = import.meta as ImportMeta & { env?: RuntimeEnv };
  if (meta?.env) return meta.env;
  if (typeof process !== 'undefined') return process.env as RuntimeEnv;
  return {};
})();

const readEnv = (key: string, fallback = ''): string => {
  const value = runtimeEnv[key];
  return typeof value === 'string' ? value : fallback;
};

export const ENVIRONMENT = {
  API_URL: readEnv('PUBLIC_API_URL'),
  APP: {
    TITLE: readEnv('PUBLIC_APP_TITLE', 'Portfolio Website'),
    DESCRIPTION: readEnv('PUBLIC_APP_DESCRIPTION', 'Personal portfolio website'),
    KEYWORDS: readEnv('PUBLIC_APP_KEYWORDS', 'portfolio,web,developer'),
    AUTHOR: readEnv('PUBLIC_APP_AUTHOR', 'Portfolio Owner'),
    URL: readEnv('PUBLIC_APP_URL'),
  },
  SOCIAL: {
    GITHUB: readEnv('PUBLIC_SOCIAL_GITHUB'),
    LINKEDIN: readEnv('PUBLIC_SOCIAL_LINKEDIN'),
    TWITTER: readEnv('PUBLIC_SOCIAL_TWITTER'),
  },
  META: {
    OG_IMAGE: readEnv('PUBLIC_META_OG_IMAGE', '/logo.png'),
  },
};
