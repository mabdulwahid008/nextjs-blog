//http://localhost:3000/api/blog?slug=how-to-learn-nextjs

import * as fs from 'fs'

export default  function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
        if(err)
            console.log(err);
        else
         res.status(200).send(data)
    })
}