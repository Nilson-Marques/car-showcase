"use client"

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButtom } from '.';
import { updateSearchParams } from '@/utils';


const ShowMore = ({ pageNumber, isNext}) => {
  const router = useRouter(); 
  
  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit",`${newLimit}`);

    router.push(newPathName);

  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && ( 
        <CustomButtom
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handelNavigation}
        
        />
      )

      }
    </div>
  )
}

export default ShowMore
