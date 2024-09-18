'use client';

import { CardsThree, NotePencil } from '@phosphor-icons/react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';

export interface DataProps {
  id: string;
  title: string;
}

export const CardCourseAuthor = ({ data }: { data: DataProps }) => {
  return (
    <Card className="p-3">
      <CardHeader className="p-0 pr-6">
        <p className="font-medium uppercase leading-tight">{data.title}</p>
      </CardHeader>
      <CardBody className="mt-2 p-0">
        <div className="flex w-full gap-3">
          <Button variant="flat" color="primary" radius="full" size="sm">
            <CardsThree size={16} /> Dashboard
          </Button>
          <Button variant="flat" color="primary" radius="full" size="sm">
            <NotePencil size={16} /> Editor
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
