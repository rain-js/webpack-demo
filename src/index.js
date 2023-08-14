import { importEntry } from 'import-html-entry';

// const opts = {
//     fetch: {
//         fn: (...args) => window.fetch(...args),
//         autoDecodeResponse: true,
//     },
//     getPublicPath: (entry) => `${entry}/newPublicPath/`,
//     getTemplate: (tpl) => tpl.replace(/SOME_RULES/, '\n//Replaced\n'),
// }

// const entryOpts = {
//     styles: [
//         'https://unpkg.com/antd@3.13.6/dist/antd.min.css',
//     ],
//     scripts: [
//         'https://unpkg.com/react@16.4.2/umd/react.production.min.js'
//     ],
//     html: `<!DOCTYPE html>
//             <head>
//                 <meta charset="UTF-8">
//             </head>
//             <body>
//                 <div id="root"></div>
//             </body>
//         </html>`
// }

importEntry('./subApp/index.html')
    .then(res => {
      console.log('res', res)
        res.execScripts().then(exports => {
            console.log('exports', exports);
        })
});