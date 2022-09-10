import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

function Slug(props) {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(props.blog)

  // useEffect(()=>{
  //   if (!router.isReady) return;

  //   fetch(`http://localhost:3001/api/blog?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   })
  //   .then((parsed)=>{
  //     setBlog(parsed)
  //   })
  // },[router.isReady])
  
  return (
    <div className='content'>
      <style jsx>
        {`.content{
          margin : 30px 150px
        }`}
      </style>
      <Head>
        <title>Blog - {slug}</title>
      </Head>
       <h1>{blog.title}</h1>
       <p>{blog.content}</p>
    </div>
  )
}

export async function getServerSideProps(context) {

  let { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/blog?slug=${slug}`);
  let blog = await data.json()

  return {
    props: {blog}
  }
}

export default Slug