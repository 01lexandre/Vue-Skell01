export default (to, from) => {
  window.document.title = 'VueSkell01'
  if (to.meta.title !== undefined) {
    window.document.title = to.meta.title + ' | ' + process.env.APP_NAME
  }
}
