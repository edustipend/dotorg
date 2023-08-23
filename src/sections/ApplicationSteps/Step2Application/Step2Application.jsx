import { useSelector } from 'react-redux';
import LaptopStipend from '../../../components/RequestApplication/LaptopStipend';
import CourseStipend from '../../../components/RequestApplication/CourseStipend';
import DataStipend from '../../../components/RequestApplication/DataStipend';
import { constant } from './Internals/constants';
const { LAPTOP, DATA, COURSE } = constant;

export const Step2Application = () => {
  const { stipendCategory } = useSelector((state) => state.application);

  return (
    <>
      {(() => {
        switch (stipendCategory) {
          case LAPTOP:
            return <LaptopStipend />;
          case DATA:
            return <DataStipend />;
          case COURSE:
            return <CourseStipend />;
          default:
            return <LaptopStipend />;
        }
      })()}
    </>
  );
};
