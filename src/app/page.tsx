import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Home () {
  return (
    <>
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
      <main className='main-home'>
        <section>
          <Image
            src='/fotoDePerfil3.jpg'
            alt='foto de perfil'
            width={300}
            height={400}
            sizes='100vw'
            priority
            className='fotoDePerfil-home'
          /> <br />
          <h2 className='experiencia-home'>
            EXPE <br />
            RIÊN <br />
            CIA
          </h2>
        </section>
        <section className='bio-home'> <h1>Desenvolvedor <br /> Full Stack & <br /> UI/UX Designer </h1>
          <p className='paragraph-main-home'>Localizado em Porto Velho 📍</p>
          <p className='paragraph-main-home description'>Desenvolvo pequenos projetos como o BikCraft <br/>
            utilizando apenas <strong>HTML</strong>, <strong>CSS</strong> e <strong>Javascript</strong>. Para <br/>
            aplicativos web como a rede social Dogs eu <br/>
            trabalhei no <strong>UX</strong> e <strong>UI Design</strong> do projeto.</p>
        </section>
      </main>

    </>
  )
}
