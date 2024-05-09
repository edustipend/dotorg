import { useState } from 'react';
import { func, array, object } from 'prop-types';
import Button from '../../../components/Button';
import { Calendar, DropDown, Person } from '../../../components/Icons';
import styles from '../Reports.module.css';
import { TestId } from '../constants';

export const Filter = ({ handleAddOptions, activeOption, handleShowResults }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const showResults = () => {
    handleShowResults();
    setShowDropDown(false);
  };
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTop} onClick={() => setShowDropDown((prev) => !prev)} data-testid={TestId.FILTER_BTN}>
        <h1 className={styles.label}> Filters</h1>
        <DropDown className={showDropDown ? styles.rotate : styles.rotateAlt} />
      </div>
      <div className={showDropDown ? styles.showDropDown : styles.hideDropDown} data-testid={TestId.DROP_DOWN}>
        <div className={styles.category}>
          <h1 className={styles.categoryLabel}>Year</h1>
          <div
            className={`${styles.filteredOption} ${activeOption.year === 2022 ? styles.activeOption : ''}`}
            onClick={() => {
              handleAddOptions(2022, 'year');
              setShowDropDown(false);
            }}>
            <Calendar />
            <span className={styles.year}>2022</span>
          </div>
          <div
            className={`${styles.filteredOption} ${activeOption.year === 2023 ? styles.activeOption : ''}`}
            onClick={() => {
              handleAddOptions(2023, 'year');
              setShowDropDown(false);
            }}>
            <Calendar />
            <span className={styles.year}>2023</span>
          </div>
          <div
            className={`${styles.filteredOption} ${activeOption.year === 2024 ? styles.activeOption : ''}`}
            onClick={() => {
              handleAddOptions(2024, 'year');
              setShowDropDown(false);
            }}>
            <Calendar />
            <span className={styles.year}>2024</span>
          </div>
        </div>
        <div className={styles.category}>
          <h1 className={styles.categoryLabel}>Category</h1>
          <div
            className={`${styles.filteredOption} ${activeOption.category === 'Applications' ? styles.activeOption : ''}`}
            onClick={() => {
              handleAddOptions('Applications', 'category');
              setShowDropDown(false);
            }}>
            <Person />
            <span className={styles.year}>Applications</span>
          </div>
          <div
            className={`${styles.filteredOption} ${activeOption.category === 'Beneficiaries' ? styles.activeOption : ''}`}
            onClick={() => {
              handleAddOptions('Beneficiaries', 'category');
              setShowDropDown(false);
            }}>
            <Person />
            <span className={styles.year}>Beneficiaries</span>
          </div>
        </div>

        <Button label="Show results" className={styles.resultBtn} onClick={showResults} />
      </div>
    </div>
  );
};

Filter.propTypes = {
  handleAddOptions: func,
  handleShowResults: func,
  options: array,
  activeOption: object
};
