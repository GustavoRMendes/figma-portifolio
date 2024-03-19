import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <header className='header-home'>
      <div>
        <h1 className='logo-home'>
          <Link href='/' className='link-logo-home'>Mendes</Link>  
        </h1>
      </div>
      <nav className='navbar-home'>
        <Link href='/experiencia' className='link-home'>Experiência</Link>
        <Link href='/formacao' className='link-home'>Formação</Link>
        <Link href='/contato' className='link-home'>Contato</Link>
      </nav>
    </header>
  )
}
