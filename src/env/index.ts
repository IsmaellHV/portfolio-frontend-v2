const env = import.meta.env;

export const ENVIRONMENT = {
  API_URL: env.PUBLIC_API_URL ?? '',
  APP: {
    TITLE: env.PUBLIC_APP_TITLE ?? 'Portfolio Website',
    DESCRIPTION: env.PUBLIC_APP_DESCRIPTION ?? 'Personal portfolio website',
    KEYWORDS: env.PUBLIC_APP_KEYWORDS ?? 'portfolio,web,developer',
    AUTHOR: env.PUBLIC_APP_AUTHOR ?? 'Portfolio Owner',
    URL: env.PUBLIC_APP_URL ?? '',
  },
  SOCIAL: {
    GITHUB: env.PUBLIC_SOCIAL_GITHUB ?? '',
    LINKEDIN: env.PUBLIC_SOCIAL_LINKEDIN ?? '',
    TWITTER: env.PUBLIC_SOCIAL_TWITTER ?? '',
  },
  META: {
    OG_IMAGE: env.PUBLIC_META_OG_IMAGE ?? '/logo.png',
  },
};
