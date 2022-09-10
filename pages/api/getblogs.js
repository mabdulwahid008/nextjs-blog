// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')

  let blogfile = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // console.log(element);

    let p = await fs.promises.readFile('blogdata/' + element)
    blogfile.push(JSON.parse(p))
  }
  res.status(200).send(blogfile)
}
