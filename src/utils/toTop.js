export default () => {
  window?.history?.replaceState(null, null, '/')
  window?.scrollTo({ top: 0, behavior: 'smooth' })
}
