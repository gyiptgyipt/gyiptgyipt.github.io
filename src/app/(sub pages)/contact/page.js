import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the Yantarar Wizard with the force
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Enter the orbit of wonder and transmit your thoughts across the stars. 
            Whether you&apos;re initiating interstellar alliances, decoding galactic enigmas, or recounting voyages through the void, your messages are stardust etched in time. 
            Use the console below to beam your dispatch into the cosmic network and listen for the echoes of the universe to answer.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
