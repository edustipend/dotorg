import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LaptopStipend from '../../../components/LaptopStipend';
import CourseStipend from '../../../components/CourseStipend';
import DataStipend from '../../../components/DataStipend';
import { constant } from './Internals/constants';
const { LAPTOP, DATA, COURSE } = constant

export const Step2Application = ({ setActiveStep }) => {

  const [selection] = useState(DATA)

  return (
    <>
      {
        (() => {
          switch (selection) {
            case LAPTOP:
              return <LaptopStipend setActiveStep={setActiveStep} />;
            case DATA:
              return <DataStipend setActiveStep={setActiveStep} />;
            case COURSE:
              return <CourseStipend setActiveStep={setActiveStep} />;
            default:
              return <LaptopStipend setActiveStep={setActiveStep} />
          }
        })()
      }
    </>
  );
};

Step2Application.propTypes = {
  setActiveStep: PropTypes.func
}

Step2Application.defaultProps = {
  setActiveStep: () => { }
}