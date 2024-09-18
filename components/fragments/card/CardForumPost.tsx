import { Avatar } from '@nextui-org/avatar';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

export const CardForumPost = () => {
  return (
    <Card className="max-w-sm">
      <CardHeader className="justify-between py-0 pt-3">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="sm"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex items-center gap-3">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Christovel Vallen
            </h4>
            {/* <h5 className="text-small tracking-tight text-default-400">
              @christovelvallen
            </h5> */}
            <Chip color="primary" size="sm">
              Pengumuman
            </Chip>
          </div>
        </div>
      </CardHeader>
      <CardBody className="py-0 pl-14 pr-3 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <div className="mt-1 flex flex-wrap gap-1">
          <Chip
            variant="light"
            color="primary"
            size="sm"
            className="border border-divider"
          >
            #Coding
          </Chip>
          <Chip
            variant="light"
            color="primary"
            size="sm"
            className="border border-divider"
          >
            #Fullstack
          </Chip>
          <Chip
            variant="light"
            color="primary"
            size="sm"
            className="border border-divider"
          >
            #ReactJS
          </Chip>
        </div>
      </CardBody>
      <CardFooter className="gap-3 py-3 pl-14 pr-3">
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-400">104 suka</p>
        </div>
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-400">
            52 balasan
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
