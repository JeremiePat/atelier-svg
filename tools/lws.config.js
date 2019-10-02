const fs = require('fs').promises;
const path = require('path');
const sass = require('koa-compile-sass')
const root = path.resolve(__dirname, '..')

class SassMiddleware {
  middleware (options) {
    return sass({
      root: options.root || root
    })
  }
}

const markdown = require('markdown-it')
const layout = path.join(root, 'tools', 'readme', 'readme.html')

class MarkDownMiddleware {
  middleware (options) {
    const md = markdown(({
      html:    'html'    in options ? options.html    : true,
      breaks:  'breaks'  in options ? options.breaks  : false,
      linkify: 'linkify' in options ? options.linkify : true,
    }))

    return async (ctx, next) => {
      await next()
      console.log(ctx.path)

      if (/exercice\/.+\.md$/.test(ctx.path)) {
        console.log('MARKDOWN')
        const filepath = path.resolve(path.join(root, ctx.path))
        const content = md.render(await fs.readFile(filepath, 'utf8'))

        ctx.set('Content-Type', 'text/html; charset=utf-8')
        ctx.status = 200;
        ctx.body = (await fs
          .readFile(layout, 'utf8'))
          .replace(/\{\{\s*content\s*\}\}/, content)
      }
    }
  }
}

module.exports = {
  port: 8080,
  directory: root,
  stack: [
    'lws-basic-auth',
    'lws-body-parser',
    'lws-request-monitor',
    'lws-log',
    'lws-cors',
    'lws-json',
    'lws-compress',
    'lws-rewrite',
    'lws-blacklist',
    'lws-conditional-get',
    'lws-mime',
    SassMiddleware,
    MarkDownMiddleware,
    'lws-range',
    'lws-static',
    'lws-index',
  ]
}
