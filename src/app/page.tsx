//import Image from "next/image";
//import styles from "./page.module.css";
import Header from './components/layout/Header/Header';
import Hero from "./home/Hero/Hero";
import CategoryCards from "./home/CategoryCards/CategoryCards";
import Footer from './components/layout/Footer/Footer';


export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <CategoryCards></CategoryCards>
  
      <Footer></Footer>
     
    </main>
  )
}
