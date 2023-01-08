import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Navbar.module.css'

export const Navbar = () => {

    const { theme } = useTheme();

  return (
    <div className={ styles.navbar } style={{ backgroundColor: theme?.colors.gray100.value }}>
        <Image 
            src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
            alt='icono de la app'
            width={70}
            height={70}
        />

        <Link href={'/'} style={{ display: 'flex' }}>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
        
        <Spacer css={{ flex: 1 }} />

        <Link href={'/favoritos'}>
          <Text color='white'>Favoritos</Text>
        </Link>
    </div>
  )
}
