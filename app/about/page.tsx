import Image from "next/image";
import { HeartHandshake, CircleDollarSign, UsersRound } from "lucide-react";
import OurValue from "../_components/OurValue";
import TeamMember from "../_components/TeamMember";

const page = () => {
  const teamMembers = [
    {
      avatar: "/avatar.png",
      name: "Morariu Alexandru-Gabriel",
      role: "Tech",
    },
    {
      avatar: "/avatar.png",
      name: "Gabriel-Alexandru Morariu",
      role: "Marketing",
    },
    {
      avatar: "/avatar.png",
      name: "Alexandru-Gabriel Morariu",
      role: "Sales",
    },
    {
      avatar: "/avatar.png",
      name: "Morariu Gabriel-Alexandru",
      role: "Designer",
    },
    {
      avatar: "/avatar.png",
      name: "Morariu Alexandru Gabriel",
      role: "Operations",
    },
  ];
  return (
    <div className="max-w-[1500px] mx-auto text-center">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-[#353535] my-4 mt-24 md:text-5xl">
          Our Purpose
        </h1>
        <h2 className="font-bold text-blue-gray-700 my-4 md:text-2xl">
          Empowering people to end global hunger
        </h2>
        <p className="text-[#353535] leading-8 mx-8 2xl:text-[1.25rem]">
          We’re here to end global hunger. And we’re guessing you are too.
          That’s why we were founded in 2015 under the United Nations World Food
          Programme — to make fighting hunger accessible to everyone. Because
          with just RON 3.50 and a few taps on your phone, you can share your
          meal with someone in need.
        </p>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Copii saraci care au nevoie de ajutor"
        width={1000}
        height={1000}
        className="h-[300px] w-[300px] sm:h-[400px] sm:w-[500px] md:h-[500px] md:w-[650px] xl:w-[800px] rounded-lg shadow-xl border-2 border-blue-gray-600/50 object-cover mx-auto my-6"
      />
      <div className="max-w-[1024px] lg:mx-auto mx-8 my-8 bg-[#F5F5F5] rounded-xl border-2 border-blue-gray-600/50 px-6 py-4">
        <p className="text-2xl text-blue-gray-700 my-4">
          There’s one thing we’ll never stop believing in
        </p>
        <h3 className="text-3xl font-bold text-[#353535] my-4">
          Together, we can be the generation that ends global hunger.
        </h3>
        <p className="text-gray-700 mb-4">
          There are 783 million hungry people in the world. But hunger is
          entirely solvable. Every day, people around the world are sharing
          their meal, and the United Nations World Food Programme is on the
          frontlines ensuring it reaches those most in need. Imagine the
          collective impact we could have if we all shared the meal.
        </p>
      </div>
      <h4 className="text-4xl font-bold text-[#353535] my-4">Our Values</h4>
      <p className="text-blue-gray-700 text-2xl mx-8 mb-8">
        A few important things we live by
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:max-w-[1300px] xl:mx-auto gap-6 my-8">
        <OurValue
          icon={<HeartHandshake size={80} className="text-blue-gray-800" />}
          value="Open and honest"
          description="We want you to know how your donation is used and the impact you’re having around the world."
        />
        <OurValue
          icon={<CircleDollarSign size={80} className="text-blue-gray-800" />}
          value="Every shared meal counts"
          description="Give what you can — whether it’s one meal or one year of meals — and know that it makes a difference."
        />
        <OurValue
          icon={<UsersRound size={80} className="text-blue-gray-800" />}
          value="We’re in it together"
          description="We want fighting hunger to be inclusive so that anyone, anywhere, can share the meal."
        />
      </div>
      <h5 className="text-4xl font-bold text-[#353535] my-4">Our team</h5>
      <p className="text-blue-gray-700 text-2xl mx-8 mb-8">
        Some of the most inspiring, passionate people we know
      </p>
      <div className="overflow-x-auto max-w-[1500px]">
        <div className="flex flex-space-4 gap-10 mx-12 lg:justify-center">
          {teamMembers.map((m, index) => (
            <TeamMember
              avatar={m.avatar}
              name={m.name}
              role={m.role}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
