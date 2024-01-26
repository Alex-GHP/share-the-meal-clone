import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  avatar: string;
};

const TeamMember = ({ name, role, avatar }: Props) => {
  return (
    <div>
      <div className="bg-[#f5f5f5] rounded-full border-2 border-blue-gray-800 w-32 h-32 mx-auto mb-3">
        <Image
          src={avatar}
          alt="team member"
          width={100}
          height={100}
          className="w-32 h-32 rounded-full"
        />
      </div>
      <p className="font-bold text-[#353535]">{name}</p>
      <span className="text-blue-gray-800">{role}</span>
    </div>
  );
};

export default TeamMember;
