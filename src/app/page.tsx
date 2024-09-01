import { Button } from "@/components/button/button";
import { Container } from "@/components/container/container";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container>
      <div className="flex gap-16">
        <div className="w-3/5">
          <h1 className=" text-6xl font-bold ">
          Crypto payments for <span className=" text-text_blue">telegram bots</span>
          </h1>
          <p>Seamlessly accept crypto payments in your Telegram bots and services.</p>
          <Button>
            Get Started
          </Button>
        </div>
        <div className="w-2/5">

        </div>
      </div>
      </Container>
    </main>
  );
}
