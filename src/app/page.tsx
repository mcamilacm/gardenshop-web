//import Image from "next/image";
//import styles from "./page.module.css";
import { Poppins } from 'next/font/google';
import Header from './components/layout/Header/Header';
import Hero from "./home/Hero/Hero";

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <Header></Header>
      <Hero></Hero>
      <p>hola</p>
    </main>
  )
}
