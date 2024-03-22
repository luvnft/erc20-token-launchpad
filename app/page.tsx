import ContractCard from "@/components/ContractCard";
import SdkDeploy from "@/components/sdk-deploy";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-[1rem]">
      <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tigh mt-[3rem] lg:text-5xl">
        Base (Sepolia) Memecoin Launchpad
      </h1>
      <div className="flex justify-center items-center gap-2">
        <SdkDeploy />
      </div>
      <ContractCard />
    </main>
  );
}
