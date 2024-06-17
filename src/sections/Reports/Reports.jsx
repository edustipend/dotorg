import React, { useContext, useEffect, useState } from 'react';
import { Chart, File_Icon, Insight, close, Close } from '../../assets';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Modal from '../../components/Modal';
import { BTN, HEAD_TEXT, SUB_TEXT, TestId, getFilteredReports, reports } from './constants';
import { ModalContext } from '../../context/ModalContext';
import Pagination from './internals/Pagination';
import { Filter } from './internals/Filter';
import styles from './Reports.module.css';

export const Reports = () => {
  const [options, setOptions] = useState([]);
  const [activeOption, setActiveOption] = useState({ year: null, category: null });
  const [filteredReports, setFilteredReports] = useState([]);
  const [page, setPage] = useState(0);
  const [selectedReport, setSelectedReport] = useState(null);
  const { setIsActive } = useContext(ModalContext) || {};
  const isMobile = window.innerWidth < 768;

  const data = filteredReports.length > 0 ? filteredReports : reports;
  const filteredOptions = options.filter((opt) => opt !== null);

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

  const handleShowModal = (report) => {
    setSelectedReport(report);
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
    <div className={styles.container} data-testid={TestId.REPORT_DOC}>
      <Container>
        <div className={styles.desc}>
          <h1 data-testid={TestId.HEAD_TEXT}>{HEAD_TEXT}</h1>
          <p data-testid={TestId.SUB_TEXT}>{SUB_TEXT}</p>
        </div>
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

          <div className={styles.reports} data-testid={TestId.REPORTS}>
            {data.slice(page * 3, (page + 1) * 3).map((report) =>
              report.map((r, i) => (
                <div className={styles.reportCard} key={r.title}>
                  <img src={i % 2 ? Chart : Insight} alt="insight" />
                  <div className={styles.content}>
                    <h1>{r.title}</h1>
                    <h2>{r.date}</h2>

                    {isMobile ? (
                      <a href={r.link} target="_blank" rel="noreferrer">
                        <Button label={BTN.label} icon={File_Icon} iconPosition={BTN.iconPosition} size={BTN.size} className={styles.reportBtn} />
                      </a>
                    ) : (
                      <Button
                        label={BTN.label}
                        icon={File_Icon}
                        iconPosition={BTN.iconPosition}
                        size={BTN.size}
                        onClick={() => handleShowModal(r)}
                        dataTest={TestId.REPORT_BTN}
                      />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          <Pagination currentPage={page + 1} totalPages={Math.ceil(data.length / 3)} onPageChange={handlePageChange} />
        </div>
      </Container>
      {selectedReport && (
        <Modal className={styles.modalWrapper} datatest={TestId.MODAL}>
          <div className={styles.modalContent}>
            <iframe src={selectedReport.link} title="pdf" className={styles.frame}></iframe>
            <img
              src={Close}
              alt="close"
              onClick={() => {
                setIsActive(false);
                setSelectedReport(null);
              }}
              className={styles.closeModal}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
