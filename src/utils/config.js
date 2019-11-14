/**
 * 系统参数配置
 * @type {{}}
 */
let config = {}

if (process.env.NODE_ENV === 'production') {
  config.domain = 'http://www.prices.biz'
} else if (process.env.NODE_ENV === 'development') {
  config.domain = 'http://test.prices.biz'
  // config.domain = 'http://139.129.89.247:9000'
  // config.domain = 'http://localhost:8989'
} else {
  config.domain = ''
}

export default config
