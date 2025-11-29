import Header from "@/components/Header";
import Current from "@/components/Current";
import Links from "@/components/Links";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Current />
      <Links />
    </div>
  );
}
