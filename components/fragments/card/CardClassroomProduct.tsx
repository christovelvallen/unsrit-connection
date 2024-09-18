'use client';

import Image from 'next/image';
import { UserCircle } from '@phosphor-icons/react';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { extendVariants } from '@nextui-org/system';

export type BgColorType = 'blue' | 'yellow' | 'red' | 'green';

export interface DataProps {
  id: string;
  title: string;
  author: string;
  sks: number;
  prodi: string[];
  bgColor?: BgColorType;
}

export const CardCustom = extendVariants(Card, {
  variants: {
    color: {
      default: {
        base: 'bg-content1 text-foreground',
      },
      blue: {
        base: 'bg-gradient-to-b from-primary/40 via-primary/80 to-primary text-white',
      },
      yellow: {
        base: 'bg-gradient-to-b from-warning/40 via-warning/80 to-warning text-white',
      },
      red: {
        base: 'bg-gradient-to-b from-danger/40 via-danger/80 to-danger text-white',
      },
      green: {
        base: 'bg-gradient-to-b from-success/40 via-success/80 to-success text-white',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export const CardClassroomProduct = ({ data }: { data: DataProps }) => {
  return (
    <CardCustom
      isFooterBlurred
      color={data.bgColor || 'default'}
      className="h-[200px] w-full max-w-[250px] lg:h-[250px]"
    >
      <CardHeader className="absolute top-0 z-10 p-2">
        <div className="flex flex-wrap gap-1 pr-4">
          <Chip
            size="sm"
            className="h-[20px] border border-divider text-[11px]"
          >
            {data.sks} SKS
          </Chip>
          {data.prodi?.map((prodi, index) => (
            <Chip
              key={index}
              size="sm"
              className="h-[20px] border border-divider text-[11px]"
            >
              {prodi}
            </Chip>
          ))}
        </div>
      </CardHeader>
      <div className="absolute -right-4 bottom-12">
        <Image
          priority
          src={'/assets/draw-course.svg'}
          alt=""
          width={200}
          height={200}
          className="z-0 w-full scale-80 object-cover"
        />
      </div>
      <CardFooter className="absolute bottom-0 z-10 bg-black/5 p-0">
        <div className="p-2">
          <p className="line-clamp-3 text-sm font-semibold uppercase leading-tight">
            {data.title}
          </p>
          <div className="mt-1 flex flex-1 items-center gap-1">
            <UserCircle size={14} weight="fill" />
            <div className="grid grid-cols-1">
              <p className="truncate text-xs">{data.author}</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </CardCustom>
  );
};
