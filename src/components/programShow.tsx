import React, { useState } from 'react'
import {UserResource} from "@clerk/types"
import CornerElements from './CornerElements'
import { CardHeader, CardTitle } from './ui/card'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { Users } from 'lucide-react'


type RandomUser = {
  _id: string;
  name: string;
  email: string;
  image?: string;
  clerkId: string;
  _creationTime: number;
};

type ProgramShowProps = {
  user: UserResource | null | undefined;
  randomUser: RandomUser;
};

const ProgramShow = ({ user, randomUser }: ProgramShowProps) => {
  if (!user || !randomUser) return null;

  return (
    <CardHeader className="pt-6 px-5">
      <div className="bg-[#0D1117] rounded-xl p-4 border border-[#1F2937]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl font-semibold">
            {randomUser.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-white font-semibold">
              {randomUser.name}
              <span className="text-sky-400">.exe</span>
            </p>
            <p className="text-sm text-gray-400">{randomUser.email}</p>
          </div>
        </div>
      </div>
    </CardHeader>
  );
};

export default ProgramShow;