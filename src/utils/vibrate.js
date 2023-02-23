export default (vibrateTime) => {
  if (Boolean(window.navigator.vibrate)) {
    window.navigator.vibrate(vibrateTime || 500)
  }
}
