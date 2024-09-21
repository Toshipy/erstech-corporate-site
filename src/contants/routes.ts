export const HOME = '/'
export const ABOUT = '/about'
export const SERVICE = '/service'
export const PRODUCTS = '/products'
export const CAREERS = '/careers'
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
  {
    href: `${PRODUCTS}`,
    label: 'Products',
  },
  {
    href: `${CAREERS}`,
    label: 'Careers',
  },
  {
    href: `${CONTACT}`,
    label: 'Contact us',
  },
]

export type ROUTES =
  | typeof HOME
  | typeof ABOUT
  | typeof SERVICE
  | typeof PRODUCTS
  | typeof CAREERS
  | typeof CONTACT
