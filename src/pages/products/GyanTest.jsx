import ProductTemplate from '../../components/shared/ProductTemplate';
import { products } from '../../data/products';

export default function GyanTest() {
  return <ProductTemplate product={products.find((p) => p.slug === 'gyantest')} />;
}
