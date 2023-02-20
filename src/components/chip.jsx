export default ({ text, classes = '' }) => (
  <button
    className={
      'glassButton font-light px-2 text-xs text-custom-color-1 grow-0 ' +
      classes
    }
  >
    {text}
  </button>
)
