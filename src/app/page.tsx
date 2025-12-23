import { Description } from 'app/components/home/Description'
import { Hero } from 'app/components/home/Hero'
import { MainProducts } from 'app/components/home/MainProducts'

export default function Home() {
  return (
    <main>
      <h1>Hello Planet</h1>
        <Description />
        <Hero />
        <MainProducts />

    </main>
  );
}
