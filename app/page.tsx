import getConfig from "next/config";
import { StepsBanner } from "@/components/StepsBanner";
import { SkipCard } from "@/components/SkipCard";
import { SkipDrawer } from "@/components/SkipDrawer";
import { SkipType } from "@/types/SkipType";

export default async function Home({ searchParams }:
  Readonly<{ searchParams: Promise<{ skipSize: number }> }>) {
  const { serverRuntimeConfig } = getConfig();
  const wewantwasteConfig = serverRuntimeConfig.wewantwaste;
  const backendUrl = wewantwasteConfig.apiEndpoint;

  const data: SkipType[] = await (await fetch(backendUrl)).json();
  const { skipSize } = await searchParams
  return (
    <div
      className="min-h-screen w-full bg-[#121212] flex flex-col items-center pb-5">
      <StepsBanner
        activeStep={3} />
      <h3
        className="text-white text-lg mt-4">
        Choose Your Skip Size
      </h3>
      <h1
        className="text-white text-2xl mt-2">
        Select the skip size that best suits your needs
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-[90%] px-4">
        {data.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selectedSkip={skipSize} />
        ))}
      </div>
      <SkipDrawer
        skips={data} />
    </div>
  );
}
