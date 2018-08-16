import {Message} from 'element-ui'
const msg = {
  message: (msg, type) => {
    Message({
      message: msg,
      type: type,
      center: true,
      duration: 2 * 1000
    })
  }
}
export default msg
