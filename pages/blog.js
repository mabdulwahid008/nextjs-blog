import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function blog(props) {
  const [blogs, setBlogs] = useState(props.blogs)
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/getblogs').then((p)=>{
  //     return p.json()
  //     .then((x)=>{
  //       setBlogs(x)
  //     })
  //   })
  // }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-js Blogs</title>
      </Head>
      <main>
        <div className={styles.blog}>
        <h2>All Blogs</h2>
        {blogs.map((blog)=>{
          return <div className={styles.blogItem} key={blog.title}>
              <Link href={`blogpost/${blog.slug}`}><h4>{blog.title}</h4></Link>
              <p>{blog.content.substr(0,70)}</p>
        </div>
        })}
          
        </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {

  let data = await fetch('http://localhost:3000/api/getblogs');
  let blogs = await data.json()

  return {
    props: {blogs}
  }
}

export default blog