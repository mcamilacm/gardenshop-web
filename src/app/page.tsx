import Image from "next/image";
import styles from "./page.module.css";
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
})


export default function Home() {
  return (
   <main className= {poppins.className}>
    <p>hola</p>

   </main>
  
  );
}
