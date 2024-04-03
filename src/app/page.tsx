import {
  Destinations,
  Faq,
  Footer,
  MainSection,
  TextSections,
} from "@/components";

export default function Home() {
  return (
    <main>
      <MainSection />
      <TextSections />
      <Destinations />
      <Faq />
      <Footer />
    </main>
  );
}
