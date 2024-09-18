'use client';

import Image from 'next/image';
import { Star, UserCircle } from '@phosphor-icons/react';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

export interface DataProps {
  id: string;
  title: string;
  author: string;
  imgUrl: string;
  ratting: number;
}

export const CardCourseProduct = ({ data }: { data: DataProps }) => {
  return (
    <Card
      isFooterBlurred
      className="h-[200px] w-full max-w-[250px] lg:h-[250px]"
    >
      <CardHeader className="absolute top-0 z-10 p-2">
        <Chip
          variant="flat"
          size="sm"
          className="text-white"
          startContent={
            <Star weight="fill" size={16} className="text-warning" />
          }
        >
          {data.ratting}
        </Chip>
      </CardHeader>
      <Image
        priority
        src={data.imgUrl}
        alt=""
        width={200}
        height={200}
        className="z-0 h-full w-full -translate-y-6 scale-125 object-cover"
      />
      <CardFooter className="absolute bottom-0 z-10 bg-black/20 p-0">
        <div className="p-2">
          <p className="line-clamp-3 text-sm font-semibold uppercase leading-tight text-white">
            {data.title}
          </p>
          <div className="mt-1 flex flex-1 items-center gap-1">
            <UserCircle size={14} weight="fill" className="text-white" />
            <div className="grid grid-cols-1">
              <p className="truncate text-xs text-white">{data.author}</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
