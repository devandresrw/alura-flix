
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/utils/Hero")
  .then((mod) => mod.default),
  { ssr: true, });
export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Hero />
    </div>
  );
}
