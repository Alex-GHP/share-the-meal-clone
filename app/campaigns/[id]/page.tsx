import { prisma } from "@/db/prisma";
import Image from "next/image";
import {
  UserIcon,
  HelpCircleIcon,
  BanknoteIcon,
  MapPinIcon,
} from "lucide-react";
import ImageCarousel from "@/app/_components/ImageCarousel";
import Link from "next/link";
import DonateForm from "@/app/_components/DonateForm";

const CampaignSinglePage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  if (!id) return <div>invalid</div>;
  const goal = await prisma.goals.findFirst({
    where: {
      id: id,
    },
  });

  const googleMapsUrl = `https://www.google.com/maps?q=${goal?.locationLat},${goal?.locationLng}`;

  if (!goal) return <div>not found</div>;
  const imagesArray = goal.galleryImages.split(",");

  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold text-center my-12 mx-10">
        Help this case
      </h1>
      <div className="lg:mx-auto mx-10 max-w-[1000px]">
        <div className="bg-white border-2 border-[#353535] rounded-lg shadow-lg mb-6 p-12 h-fit mt-6">
          <DonateForm goal={goal} />
        </div>
        <div>
          <div className="bg-white border-2 border-[#353535] rounded-lg shadow-lg mb-6 md:flex">
            <Image
              src={goal.coverImageUrl}
              alt="orfan"
              width={1000}
              height={1000}
              className="w-[500px] h-[400px] object-cover rounded-md"
            />
            <div className="flex flex-col sm:justify-center self-center my-4 gap-2 pr-6">
              <div className="flex flex-row ml-10 gap-2 items-center">
                <UserIcon />
                <span className="text-2xl">
                  <b>{goal.supporters}</b> supporters
                </span>
              </div>
              <div className="flex text-2xl flex-row ml-10 gap-2 items-center">
                <BanknoteIcon />
                <p>
                  <b>{goal.moneyDonated}</b> RON donated
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#353535] rounded-lg shadow-lg my-6">
            <div className="p-10 bg-white rounded-lg">
              <h2 className="text-4xl">Overview</h2>
              <br />
              <p className="text-2xl font-bold text-gray-900">
                {goal.description}
              </p>
              <br />
              <p className="text-2xl text-gray-800">{goal.longDescription}</p>
            </div>
          </div>
          <div className="mx-auto">
            <ImageCarousel imagesArray={imagesArray} />
            {goal.locationName && (
              <h2 className="text-center text-4xl font-bold mt-6">
                {goal.locationName}
              </h2>
            )}
            <div className="flex justify-center items-center gap-2 mt-4">
              <Link
                href={googleMapsUrl}
                className="text-blue-500 active:text-blue-400 underline hover:scale-105 flex gap-2
                          transition duration-300"
                target="_blank"
              >
                <MapPinIcon />
                <p>View on google maps</p>
              </Link>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center mt-6 border-2 border-[#353535] p-8 rounded-lg shadow-lg gap-2">
            <HelpCircleIcon size={96} />
            <h3 className="text-2xl">How can we help?</h3>
            <p>
              <a
                href="mailto:alex.morariu.dev@gmail.com"
                className="text-blue-500 active:text-blue-400 font-bold hover:underline"
              >
                Contact us
              </a>{" "}
              with any payment related questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSinglePage;
