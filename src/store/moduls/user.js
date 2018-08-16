import cookies from 'js-cookie'
const user = {
  // 创建一个对象来保存应用启动时的初始状态
  state: {
    author: '系统管理员',
    language: 'zh'
  },
  mutations: {
    UPDATE_AUTHOR: (state, author_) => { state.author = author_ },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      cookies.set('language', language)
    }
  },
  actions: {
    setLanguage ({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    updateAuthor ({ commit }, author) {
      commit('UPDATE_AUTHOR', author)
    }
  }
}
export default user
