import {
  Destinations,
  Faq,
  Footer,
  MainSection,
  TextSections,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-white">
      <MainSection />
      <TextSections />
      <Destinations />
      <Faq />
      <Footer />
    </main>
  );
}
