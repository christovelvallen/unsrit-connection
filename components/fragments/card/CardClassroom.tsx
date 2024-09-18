'use client';

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@nextui-org/modal';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Chip } from '@nextui-org/chip';
import { DotsThreeVertical, UserCircle } from '@phosphor-icons/react';

export interface DataProps {
  id: string;
  title: string;
  author: string;
  sks: number;
  prodi: string[];
}

export const CardClassroom = ({ data }: { data: DataProps }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="p-3">
        <CardHeader className="p-0">
          <div className="flex w-full gap-3">
            <div className="flex-1">
              <p className="font-medium uppercase leading-tight">
                {data.title}
              </p>
            </div>
            <div>
              <Dropdown className="min-w-20">
                <DropdownTrigger className="cursor-pointer">
                  <DotsThreeVertical weight="bold" />
                </DropdownTrigger>
                <DropdownMenu className="p-0">
                  <DropdownItem
                    variant="light"
                    color="danger"
                    className="text-center text-danger"
                    onClick={onOpen}
                  >
                    Keluar
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <div className="flex flex-wrap gap-1">
            <Chip
              variant="light"
              size="sm"
              className="h-[20px] border border-divider text-[11px] leading-[0px]"
            >
              {data.sks} SKS
            </Chip>
            {data.prodi?.map((prodi, index) => (
              <Chip
                key={index}
                variant="light"
                size="sm"
                className="h-[20px] border border-divider text-[11px] leading-[0px]"
              >
                {prodi}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="p-0 pt-2">
          <div className="flex w-full gap-6">
            <div className="flex flex-1 items-center gap-1">
              <UserCircle
                size={16}
                weight="fill"
                className="text-default-500"
              />
              <div className="grid grid-cols-1">
                <p className="truncate text-sm text-default-500">
                  {data.author}
                </p>
              </div>
            </div>
            <div>
              <Button variant="flat" color="primary" radius="full" size="sm">
                Masuk kelas
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Modal
        hideCloseButton
        size="xs"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-3">
                <p className="text-center text-lg font-medium">
                  Apakah anda yakin ingin keluar dari kelas{' '}
                  <span className="font-bold">{data.title}</span>?
                </p>
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <Button color="primary" onPress={onClose}>
                    Ya, Terapkan
                  </Button>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Batalkan
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
