import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      
      {/* Simple Footer or extra spacing */}
      <div className="h-32" />
    </main>
  );
}
