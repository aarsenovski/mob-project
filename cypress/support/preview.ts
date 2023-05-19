// NAMED EXPORT
export const previewList: Cypress.ViewportPreset[] = [
  'macbook-15',
  'iphone-x',
  'ipad-2',
]

export const getViewport = (viewport: string): Cypress.ViewportPreset => {
  if (viewport === 'DESKTOP') {
    return 'macbook-15'
  }
  else if (viewport === 'MOBILE') {
    return 'iphone-x'
  }
  else if (viewport === 'TABLET') {
    return 'ipad-2'
  }
}

// DEFAULT EXPORT
// const previewList: Cypress.ViewportPreset[] = ['iphone-6', 'iphone-x']
// export default previewList
