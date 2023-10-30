import React from 'react';
import Select from '../../Select';
import { donation } from '../Step2/constants';

import styles from './Recurring.module.css';
import Input from '../../Input';
import { useDispatch, useSelector } from 'react-redux';
import { setDonationFrequency, setStartDate } from '../../../store/reducers/DonationReducer';

export const Recurring = () => {
  const dispatch = useDispatch((state) => state.donation);
  const { donationFrequency, startDate } = useSelector((state) => state.donation);
  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <Select
        value={donationFrequency}
        dispatchType={setDonationFrequency}
        label={donation.frequencyLabel}
        options={donation.frequency}
        className={styles.select}
      />

      <Input
        label="Date"
        placeholder="Pick Start  Date and Month"
        type={'date'}
        value={startDate}
        onChange={(e) => dispatch(setStartDate(e.target.value))}
        min={today}
      />
    </>
  );
};
