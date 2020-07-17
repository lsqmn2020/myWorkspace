import https from './https.js'
import apiList from "./api.js"

const apiHelpers = {
  AjaxMoveiHot(data) {
    return https.httpGet(apiList.AjaxMoveiHot, data)
  }
}

export default apiHelpers;
