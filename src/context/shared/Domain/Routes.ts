export const AppRoutes = {
  home: {
    root: '/',
    about: '/#about',
    experience: '/#experience',
    projects: '/#projects',
  },
  projects: {
    root: '/projects',
    detail: (id: string) => `/projects/${id}`,
  },
} as const;

export type AppRouteType = typeof AppRoutes;
