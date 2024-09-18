export const HOME = '/'
export const ABOUT = '/about'
export const SERVICE = '/service'
// export const RECRUIT = '/recruit'
// export const BLOG = '/blog'
export const CONTACT = '/contact'

export const ERSTECH_ROUTES = [
  {
    href: `${ABOUT}`,
    label: 'Who we are',
  },
  {
    href: `${SERVICE}`,
    label: 'Service',
  },
  // {
  //   href: `${RECRUIT}`,
  //   label: 'Recruit',
  // },
  // {
  //   href: `${BLOG}`,
  //   label: 'Blog',
  // },
  {
    href: `${CONTACT}`,
    label: 'Contact us',
  },
]

export type ROUTES =
  | typeof HOME
  | typeof ABOUT
  | typeof SERVICE
  // | typeof RECRUIT
  // | typeof BLOG
  | typeof CONTACT
