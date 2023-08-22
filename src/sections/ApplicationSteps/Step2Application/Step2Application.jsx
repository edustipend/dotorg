import React, { useState } from 'react';
import LaptopStipend from '../../../components/LaptopStipend';
import CourseStipend from '../../../components/CourseStipend';
import DataStipend from '../../../components/DataStipend';
import { constant } from './Internals/constants';
const { LAPTOP, DATA, COURSE } = constant

export const Step2Application = () => {

  const [selection] = useState(LAPTOP)

  return (
    <>
      {
        (() => {
          switch (selection) {
            case LAPTOP:
              return <LaptopStipend />;
            case DATA:
              return <DataStipend />;
            case COURSE:
              return <CourseStipend />;
            default:
              return <LaptopStipend />
          }
        })()
      }
    </>
  );
};
