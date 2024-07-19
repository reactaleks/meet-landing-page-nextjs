import NavComponent from "@/components/NavComponent";
import HeroComponent from "@/components/HeroComponent";
import ImageGalleryComponent from "@/components/ImageGalleryComponent";
import FeatureComponent from "@/components/FeatureComponent";
import FooterComponent from "@/components/FooterComponent";

export default function Home() {
  return (
    <>
      <NavComponent />
      <main className=" min-h-screen">
        <section>
          <HeroComponent />
        </section>
        <section className="relative">
          <ImageGalleryComponent />
        </section>
        <section>
          <FeatureComponent />
        </section>
      </main>
      <FooterComponent />
    </>
  );
}
