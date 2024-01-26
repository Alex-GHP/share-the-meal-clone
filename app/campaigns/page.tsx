import Image from "next/image";
import Link from "next/link";
import { UserIcon, GoalIcon } from "lucide-react";
import { prisma } from "@/db/prisma";
import { Goals } from "@prisma/client";

const CampaignsPage = async () => {
  const goals = await prisma.goals.findMany();
  return (
    <div className="mx-10">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mt-16">
        Choose where to donate
      </h1>
      <p className="sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-8 text-center">
        The UN World Food Program delivers the meals
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-6xl mx-auto mt-16 gap-10">
        {goals.map((g, index) => (
          <CampaignCard goal={g} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;

const CampaignCard = ({ goal }: { goal: Goals }) => {
  return (
    <Link href={`/campaigns/${goal.id}`}>
      <div className="border-2 bg-white rounded-lg mb-4 hover:scale-110 transition duration-500 shadow-lg">
        <h1 className="text-2xl font-bold px-6 pt-6">
          {goal.title} 
        </h1>
        <p className="mx-6 mb-6 mt-4 text-blue-500 hover:underline border-l border-blue-500 pl-2">
          Read more
        </p>
        <Image
          src={`${goal.coverImageUrl}`}
          alt={goal.description}
          width={1000}
          height={1000}
          className="w-full h-[300px] object-cover"
        ></Image>
        <div className="m-4 flex gap-8">
          <div className="flex font-semibold self-center items-center gap-2">
            <GoalIcon />
            <span>{goal.moneyGoal} RON</span>
          </div>
          <div className="flex gap-2 items-center font-semibold">
            <UserIcon />
            <span>{goal.supporters} supporters</span>
          </div>
        </div>
        <span className="mx-6 text-blue-500 text-[1.3rem] font-semibold">
          <b>{goal.moneyDonated} RON</b> donated
        </span>
        <button className="block border bg-blue-500 md:text-[1.2rem] hover:bg-blue-400 active:bg-blue-400 transition duration-300 text-white rounded-lg px-12 mx-auto w-5/6 py-3 font-bold my-6">
          Donate now
        </button>
      </div>
    </Link>
  );
};
