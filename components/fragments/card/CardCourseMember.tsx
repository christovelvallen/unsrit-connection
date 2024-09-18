'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Progress } from '@nextui-org/progress';

export interface DataProps {
  id: string;
  title: string;
  progress: number;
}

export const CardCourseMember = ({ data }: { data: DataProps }) => {
  return (
    <Card className="p-3">
      <CardHeader className="p-0 pr-6">
        <p className="font-medium uppercase leading-tight">{data.title}</p>
      </CardHeader>
      <CardBody className="mt-2 p-0">
        <div className="flex w-full gap-3">
          <div className="flex flex-1 flex-col gap-1.5">
            <p className="text-sm leading-none text-default-500">
              Progress: {data.progress}%
            </p>
            <Progress
              value={data.progress}
              className="w-full"
              aria-label="Progress"
            />
          </div>
          <div className="flex items-end">
            <Button variant="flat" color="primary" radius="full" size="sm">
              Lanjut belajar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
