interface LayoutProps {
  children: React.ReactNode;
}
import Image from "next/image";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="relative flex min-h-screen text-my-white/80">
        <Image
          src="/bg.webp"
          alt="bg"
          className="z-0 animate-pulse object-cover"
          fill
          priority
        />
        <div className="z-10 mx-auto min-h-screen w-full max-w-[512px]">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
