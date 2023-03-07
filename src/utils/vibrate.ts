export default (vibrateTime?: number): void => {
  if (Boolean(window.navigator.vibrate)) {
    window.navigator.vibrate(vibrateTime || 500)
  }
}
