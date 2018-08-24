const getters = {
  author: state => state.user.author,
  language: state => state.user.language,
  defaultMenu: state => state.menu.defaultMenu
}
export default getters
