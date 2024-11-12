"use client";

import { Fragment } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';


import { Dialog, Transition, TransitionChild } from '@headlessui/react';



interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: 
  CarDetailsProps) => {
  return (
   <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild>
          <div className="fixed insent-0 bg-black bg-opacity-25" />
        </TransitionChild>
      </Dialog>
    </Transition>
   </>
  )
}

export default CarDetails


