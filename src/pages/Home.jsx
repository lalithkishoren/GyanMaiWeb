import HeroHeadline    from '../components/home/HeroHeadline';
import IntroSection     from '../components/home/IntroSection';
import HeroQuadrant     from '../components/home/HeroQuadrant';
import AcatFlow         from '../components/home/AcatFlow';
import ResearchSection  from '../components/home/ResearchSection';
import HomeCta          from '../components/home/HomeCta';

export default function Home() {
  return (
    <main>
      <HeroHeadline />
      <IntroSection />
      <HeroQuadrant />
      <AcatFlow />
      <ResearchSection />
      <HomeCta />
    </main>
  );
}
