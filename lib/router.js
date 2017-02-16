export default class {
  constructor(urls) {
    this.urls = urls
  }

  routes() {
    return async function (ctx, next) {
      await next()
    }
  }
}
