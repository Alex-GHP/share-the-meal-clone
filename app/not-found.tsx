import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mx-8">
      <FileQuestion width={250} height={250} />
      <h1 className="text-7xl font-bold">Oops!</h1>
      <h2 className="text-[1.35rem] md:text-3xl font-semibold text-red-700">
        404 - Pagina nu a fost găsită
      </h2>
      <p className="text-center md:text-2xl md:max-w-6xl font-semibold">
        Nu am putut găsi pagina pe care o cauți. Poate ai introdus greșit adresa
        sau aceasta nu mai există. Te rugăm să verifici și să încerci din nou!
      </p>
      <Link href="/">
        <Button className="bg-red-700 md:text-[1.2rem]">Inapoi Acasă</Button>
      </Link>
    </div>
  );
};

export default NotFound;
