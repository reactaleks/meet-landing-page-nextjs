import NavComponent from "@/components/NavComponent";
import HeroComponent from "@/components/HeroComponent";
import ImageGalleryComponent from "@/components/ImageGalleryComponent";
import FeatureComponent from "@/components/FeatureComponent";
import FooterComponent from "@/components/FooterComponent";
import SectionNumberComponent from "@/components/SectionNumberComponent";

export default function Home() {
  return (
    <>
      <NavComponent />
      <main className=" min-h-screen">
        <section>
          <HeroComponent />
        </section>
        <section>
          <SectionNumberComponent sectionNumber={1}/>
          <ImageGalleryComponent />
        </section>
        <section>
          <SectionNumberComponent sectionNumber={2}/>
          <FeatureComponent />
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
