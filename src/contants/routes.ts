export const HOME = '/'
export const ABOUT = '/about'
export const SERVICE = '/service'
export const RECRUIT = '/recruit'
export const BLOG = '/blog'
export const CONTACT = '/contact'

export const ERSTECH_ROUTES = [
  {
    href: `${HOME}`,
    label: 'Home',
  },
  {
    href: `${ABOUT}`,
    label: 'About',
  },
  {
    href: `${SERVICE}`,
    label: 'Service',
  },
  {
    href: `${RECRUIT}`,
    label: 'Recruit',
  },
  {
    href: `${BLOG}`,
    label: 'Blog',
  },
  {
    href: `${CONTACT}`,
    label: 'Contact',
  },
]

export type ROUTES =
  | typeof HOME
  | typeof ABOUT
  | typeof SERVICE
  | typeof RECRUIT
  | typeof BLOG
  | typeof CONTACT
