"use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Header ()  {
    return (

        <header className={styles.header}>
            
            <Link href='/'>
            <img className={styles.img_logo}src ="/images/BeachLogo.png" alt="logo"></img>
            </Link>

            <nav className={styles.nav}>
                <div className={styles.menu}>
                    <Link className={styles.link} href='/'>Accueil</Link>
                    <Link className={styles.link} href='/Categories'>Catégories</Link>
                    <Link className={styles.link} href='/Articles'>Articles</Link>
                    {/* <Link href='/Admin/Create'>Création</Link>*/}
                    {/*<Link href='/Admin/Users'>Gestion des utilisateurs</Link>*/}
                    <Link className={styles.link} href='/Favorites'>Favoris</Link>
                </div>

                <div className={styles.account}>
                    <Link className= {styles.link}href='/Login'>Connexion / Inscription</Link>
                    <Link className={styles.link}href='/About'>À propos</Link>
                     {/*<Link href='/Account'>Mon Compte</Link>*/}
                </div>
            </nav>

        </header>
    )
}
