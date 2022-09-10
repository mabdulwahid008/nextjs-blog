import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.containter}>
        <ul className={styles.nav}>
            <Link href='/'><li>Home</li></Link>
            <Link href='/blog'><li>Blogs</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar