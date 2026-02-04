export const ENVIRONMENT = {
  API_URL: import.meta.env.PUBLIC_API_URL || '',
  APP: {
    TITLE: import.meta.env.PUBLIC_APP_TITLE || 'Portfolio Ismael Hurtado',
    DESCRIPTION: import.meta.env.PUBLIC_APP_DESCRIPTION || 'Full Stack Developer Portfolio',
    KEYWORDS: import.meta.env.PUBLIC_APP_KEYWORDS || '',
    AUTHOR: import.meta.env.PUBLIC_APP_AUTHOR || 'Ismael Hurtado',
    URL: import.meta.env.PUBLIC_APP_URL || 'https://ismaelhv.com',
  },
  SOCIAL: {
    GITHUB: import.meta.env.PUBLIC_SOCIAL_GITHUB || '',
    LINKEDIN: import.meta.env.PUBLIC_SOCIAL_LINKEDIN || '',
    TWITTER: import.meta.env.PUBLIC_SOCIAL_TWITTER || '',
  },
  META: {
    OG_IMAGE: import.meta.env.PUBLIC_META_OG_IMAGE || '/og-image.jpg',
  },
};
