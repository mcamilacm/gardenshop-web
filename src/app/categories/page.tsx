import Header from '../components/layout/Header/Header';

import CategoryCardsHero from '../components/layout/CategoryCardsHero/page';

const Categories = () => {
  return (
    <div>
      <Header></Header>
      <CategoryCardsHero

title="De Plantas"
subtitle="Paraíso"
imageUrl ="/img/hero-gardener.svg"
altName ="Planting Flowers"


      
      ></CategoryCardsHero>


    </div>
  );
};

export default Categories;
