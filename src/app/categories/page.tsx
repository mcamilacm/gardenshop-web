import CategoryCardsHero from "../components/CategoryCardsHero/ CategoryCardsHero.tsx";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Categories = () => {
  return (
    <div>
      <CategoryCardsHero
        title="De Plantas"
        subtitle="Paraíso"
        imageUrl="/img/hero-gardener.svg"
        altName="Planting Flowers"
      ></CategoryCardsHero>
      <ProductGrid />
    </div>
  );
};

export default Categories;
