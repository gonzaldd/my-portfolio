export default (): void => {
  window?.history?.replaceState(null, "", '/')
  window?.scrollTo({ top: 0, behavior: 'smooth' })
}
