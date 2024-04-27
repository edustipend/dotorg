import React, { useContext, useEffect, useState } from 'react';
import { Chart, File_Icon, Insight, close, Close } from '../../assets';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Modal from '../../components/Modal';
import styles from './Reports.module.css';
import { HEAD_TEXT, SUB_TEXT, getFilteredReports, reports } from './constants';
import { ModalContext } from '../../context/ModalContext';
import Pagination from './Pagination';
import { Filter } from './Filter';

export const Reports = () => {
  const [options, setOptions] = useState([]);
  const [activeOption, setActiveOption] = useState({ year: null, category: null });
  const [filteredReports, setFilteredReports] = useState([]);
  const [link, setLink] = useState(null);
  const [page, setPage] = useState(0);
  const { setIsActive } = useContext(ModalContext) || {};

  const data = filteredReports.length > 0 ? filteredReports : reports;

  const filteredOptions = options.filter((opt) => opt !== null);

  const pdfLink = link && link.name && URL.createObjectURL(link);

  const handleAddOptions = (value, category) => {
    category === 'year' ? setActiveOption((prev) => ({ ...prev, year: value })) : setActiveOption((prev) => ({ ...prev, category: value }));
    setPage(0);
  };

  const handleRemoveOption = (value) => {
    if (options.includes(value)) {
      activeOption.year === value ? setActiveOption((prev) => ({ ...prev, year: null })) : setActiveOption((prev) => ({ ...prev, category: null }));
      setOptions((prev) => prev.filter((p) => p !== value));
    }
  };

  const handleShowModal = () => {
    setIsActive((isActive) => !isActive);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage - 1);
  };

  const handleShowResults = () => {
    const filteredOptions = options.filter((opt) => opt !== null);
    setFilteredReports(getFilteredReports(filteredOptions));
  };

  useEffect(() => {
    setOptions(Object.values(activeOption));
  }, [activeOption]);

  useEffect(() => {
    const filteredOptions = options.filter((opt) => opt !== null);
    setFilteredReports(getFilteredReports(filteredOptions));
  }, [options]);

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.desc}>
          <h1>{HEAD_TEXT}</h1>
          <p>{SUB_TEXT}</p>
        </div>
        <input type="file" onChange={(e) => setLink(e.target.files[0])} />
        <div className={styles.reportsContainer}>
          <div className={styles.filters}>
            {filteredOptions.map((option) => (
              <div key={option} className={styles.option}>
                {option}
                <img src={close} alt="close" width={10} height={10} onClick={() => handleRemoveOption(option)} />
              </div>
            ))}
            <Filter handleAddOptions={handleAddOptions} activeOption={activeOption} handleShowResults={handleShowResults} options={options} />
          </div>

          <div className={styles.reports}>
            {data.slice(page * 3, (page + 1) * 3).map((report) =>
              report.map((r, i) => (
                <div className={styles.reportCard} key={r.title}>
                  <img src={i % 2 ? Chart : Insight} alt="insight" />
                  <div className={styles.content}>
                    <h1>{r.title}</h1>
                    <h2>{r.date}</h2>
                    <Button
                      label="View report"
                      icon={File_Icon}
                      iconPosition="back"
                      size="medium"
                      onClick={handleShowModal}
                      className={styles.reportBtn}
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          <Pagination currentPage={page + 1} totalPages={Math.ceil(data.length / 3)} onPageChange={handlePageChange} />
        </div>

        <Modal className={styles.modalWrapper}>
          <div className={styles.modalContent}>
            <iframe src={pdfLink ? pdfLink : '/'} title="pdf" className={styles.frame}></iframe>
            <img src={Close} alt="close" onClick={handleShowModal} className={styles.closeModal} />
          </div>
        </Modal>
      </Container>
    </div>
  );
};
