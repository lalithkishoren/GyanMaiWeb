import HeroHeadline  from '../components/home/HeroHeadline';
import IntroSection   from '../components/home/IntroSection';
import HeroQuadrant   from '../components/home/HeroQuadrant';
import AcatFlow       from '../components/home/AcatFlow';
import ResearchStrip  from '../components/home/ResearchStrip';
import SchoolsStrip   from '../components/home/SchoolsStrip';
import HomeCta        from '../components/home/HomeCta';

export default function Home() {
  return (
    <main>
      <HeroHeadline />
      <IntroSection />
      <HeroQuadrant />
      <AcatFlow />
      <ResearchStrip />
      <SchoolsStrip />
      <HomeCta />
    </main>
  );
}
