import { prisma } from "@/db/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const goals = await prisma.goals.findMany();
  let goalsCompleted = 0;
  goals.map((g) => {
    if (g.moneyDonated >= g.moneyGoal) goalsCompleted++;
  });
  const urgentGoal = await prisma.goals.findFirst({
    where: {
      urgent: true,
    },
  });
  const {
    _sum: { supporters },
  } = await prisma.goals.aggregate({
    _sum: {
      supporters: true,
    },
  });
  const {
    _sum: { moneyDonated },
  } = await prisma.goals.aggregate({
    _sum: {
      moneyDonated: true,
    },
  });

  return (
    <>
      <h1 className="font-bold text-2xl text-[#353535] text-center my-4 mx-10 sm:text-4xl">
        Fight poverty among helpless children through the DonorHub application.
      </h1>
      <p className="text-center mb-8 mx-10 text-[#353535] text-2xl">
        Simply browse through our fundraising goals and donate to the causes
        that matter to you.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 max-w-[1100px] mx-auto">
        <Link href={`/campaigns/${urgentGoal?.id}`}>
          <div className="bg-white border-2 border-[#353535] rounded-lg shadow-lg w-[330px] md:w-[500px] h-[500px] my-4 mx-auto hover:scale-110 transition duration-300">
            <Image
              className="object-cover w-full h-[350px] rounded-lg"
              src={urgentGoal?.coverImageUrl!}
              alt="Image of an urgent fundraising case"
              width={1000}
              height={1000}
            />
            <div className="p-4 flex flex-col my-2 ml-3">
              <button className="text-[#353535] font-semibold w-36 bg-yellow-400 py-3 active:bg-yellow-300 hover:scale-105 transition duration-300 mb-3 rounded-lg">
                Donate now
              </button>
              <p className="text-2xl text-[#353535]">
                <span className="text-red-500 font-bold">Urgent: </span>
                {urgentGoal?.title}
              </p>
            </div>
          </div>
        </Link>
        <div className="hover:scale-110 transition duration-300 bg-white w-[330px] md:w-[500px] mx-auto border-2 border-[#353535] rounded-lg shadow-lg my-4">
          <h3 className="text-center font-bold text-3xl my-4 text-[#353535]">
            Our impact
          </h3>
          <Image
            src="/romania.png"
            alt="image of Romania"
            width={300}
            height={300}
            className="mx-auto"
          ></Image>
          <div className="flex flex-col items-center my-10 font-semibold gap-3 text-2xl">
            <p>
              Money donated:{" "}
              <span className="text-blue-500 ">{moneyDonated}</span>
            </p>
            <p>
              Total supporters:{" "}
              <span className="text-yellow-400 drop-shadow-sm">
                {supporters}
              </span>
            </p>
            <p>
              Goals completed:{" "}
              <span className="text-red-500 drop-shadow-sm">
                {goalsCompleted}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
