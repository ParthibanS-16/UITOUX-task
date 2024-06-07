import Image from "next/image";
import HomePage from "./components/homePage";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="bg-white" >
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-1 pb-2">
        <HomePage />
      </main>
      <Footer />
    </div>

  );
}
