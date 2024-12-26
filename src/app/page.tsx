import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CategoryCards from './Home/CategoryCards/CategoryCards';
import Hero from './Home/Hero/Hero';


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
