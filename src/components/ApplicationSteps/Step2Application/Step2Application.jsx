import { useSelector } from 'react-redux';
import LaptopStipend from '../../../components/RequestApplication/Internals/LaptopStipend';
import CourseStipend from '../../../components/RequestApplication/Internals/CourseStipend';
import DataStipend from '../../../components/RequestApplication/Internals/DataStipend';
import { constant } from './Internals/constants';
import { useScrollToTop } from '../../../ScrollToTop/ScrollToTop';
const { LAPTOP, DATA, COURSE } = constant;

export const Step2Application = () => {
  const { stipendCategory } = useSelector((state) => state.application);
  //scroll to the top on step mount
  const scrollOnRoute = useScrollToTop();

  return (
    <>
      {scrollOnRoute}
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
