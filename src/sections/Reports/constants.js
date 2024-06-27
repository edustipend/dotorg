export const HEAD_TEXT = 'Monthly Reports';
export const SUB_TEXT =
  'Explore our monthly Edustipend applications report and gain insight into how we have empowered the lives of thousands of learners';

// Helper function to generate reports data for a specific month
function generateReports(month, year, links) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = months.indexOf(month);
  // const monthYear = `${month.toLowerCase()}_${year}`;

  if (monthIndex === -1) {
    throw new Error('Invalid month name');
  }

  return [
    {
      title: 'Beneficiaries List',
      date: `${month} ${year}`,
      link: links[0]
    },
    {
      title: 'Applications Report',
      date: `${month} ${year}`,
      link: links[1]
    },
    {
      title: 'Beneficiaries Report',
      date: `${month} ${year}`,
      link: links[2]
    }
  ];
}

const HOST_URL = 'https://firebasestorage.googleapis.com/v0/b/edustipenddotorg.appspot.com/o/';
export const reports = [
  generateReports('August', 2022, [
    `${HOST_URL}2022%2F08%2FEdustipend%20Beneficiaries%20List%20-%20August%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F08%2FEdustipend%20Applications%20Report%20-%20August%202022.pdf?alt=media`
  ]),
  generateReports('September', 2022, [
    `${HOST_URL}2022%2F09%2FEdustipend%20Beneficiaries%20List%20-%20September%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F09%2FEdustipend%20Applications%20Report%20-%20September%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F09%2FEdustipend%20Beneficiaries%20Report%20-%20September%202022.pdf?alt=media`
  ]),
  generateReports('October', 2022, [
    `${HOST_URL}2022%2F10%2FEdustipend%20Beneficiaries%20List%20-%20October%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F10%2FEdustipend%20Applications%20Report%20-%20October%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F10%2FEdustipend%20Beneficiaries%20Report%20-%20October%202022.pdf?alt=media`
  ]),
  generateReports('November', 2022, [
    `${HOST_URL}2022%2F11%2FEdustipend%20Beneficiaries%20List%20-%20November%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F11%2FEdustipend%20Applications%20Report%20-%20November%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F11%2FEdustipend%20Beneficiaries%20Report%20-%20November%202022.pdf?alt=media`
  ]),
  generateReports('December', 2022, [
    `${HOST_URL}2022%2F12%2FEdustipend%20Beneficiaries%20List%20-%20December%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F12%2FEdustipend%20Applications%20Report%20-%20December%202022.pdf?alt=media`,
    `${HOST_URL}2022%2F12%2FEdustipend%20Beneficiaries%20Report%20-%20December%202022.pdf?alt=media`
  ]),
  generateReports('January', 2023, [
    `${HOST_URL}2023%2F01%2FEdustipend%20Beneficiaries%20List%20-%20January%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F01%2FEdustipend%20Applications%20Report%20-%20January%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F01%2FEdustipend%20Beneficiaries%20Report%20-%20January%202023.pdf?alt=media`
  ]),
  generateReports('February', 2023, [
    `${HOST_URL}2023%2F02%2FEdustipend%20Beneficiaries%20List%20-%20February%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F02%2FEdustipend%20Applications%20Report%20-%20February%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F02%2FEdustipend%20Beneficiaries%20Report%20-%20February%202023.pdf?alt=media`
  ]),
  generateReports('March', 2023, [
    `${HOST_URL}2023%2F03%2FEdustipend%20Beneficiaries%20List%20-%20March%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F03%2FEdustipend%20Applications%20Report%20-%20March%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F03%2FEdustipend%20Beneficiaries%20Report%20-%20March%202023.pdf?alt=media`
  ]),
  generateReports('April', 2023, [
    `${HOST_URL}2023%2F04%2FEdustipend%20Beneficiaries%20List%20-%20April%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F04%2FEdustipend%20Applications%20Report%20-%20April%202023.pdf?alt=media`
  ]),
  generateReports('May', 2023, [
    `${HOST_URL}2023%2F05%2FEdustipend%20Beneficiaries%20List%20-%20May%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F05%2FEdustipend%20Applications%20Report%20-%20May%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F05%2FEdustipend%20Beneficiaries%20Report%20-%20May%202023.pdf?alt=media`
  ]),
  generateReports('June', 2023, [
    `${HOST_URL}2023%2F06%2FEdustipend%20Beneficiaries%20List%20-%20June%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F06%2FEdustipend%20Applications%20Report%20-%20June%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F06%2FEdustipend%20Beneficiaries%20Report%20-%20June%202023.pdf?alt=media`
  ]),
  generateReports('July', 2023, [
    `${HOST_URL}2023%2F07%2FEdustipend%20Beneficiaries%20List%20-%20July%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F07%2FEdustipend%20Applications%20Report%20-%20July%202023.pdf?alt=media`,
    `${HOST_URL}2023%2F07%2FEdustipend%20Beneficiaries%20Report%20-%20July%202023.pdf?alt=media`
  ]),
  generateReports('January', 2024, [
    `${HOST_URL}2024%2F01%2FEdustipend%20Beneficiaries%20List%20-%20January%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F01%2FEdustipend%20Applications%20Report%20-%20January%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F01%2FEdustipend%20Beneficiaries%20Report-%20January%202024.pdf?alt=media`
  ]),
  generateReports('February', 2024, [
    `${HOST_URL}2024%2F02%2FEdustipend%20Beneficiaries%20List%20-%20February%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F02%2FEdustipend%20Applications%20Report%20-%20February%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F02%2FEdustipend%20Beneficiaries%20Report%20-%20February%202024.pdf?alt=media`
  ]),
  generateReports('March', 2024, [
    `${HOST_URL}2024%2F03%2FEdustipend%20Beneficiaries%20List%20-%20March%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F03%2FEdustipend%20Applications%20Report%20-%20March%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F03%2FEdustipend%20Beneficiaries%20Report%20-%20March%202024.pdf?alt=media`
  ]),
  generateReports('May', 2024, [
    `${HOST_URL}2024%2F05%2FEdustipend%20Beneficiaries%20List%20-%20May%202024.pdf?alt=media`,
    `${HOST_URL}2024%2F05%2FEdustipend%20Applications%20Report%20-%20May%202024.pdf?alt=media`
  ])
].reverse();

export const getFilteredReports = (options) => {
  const r = reports
    .map((report) => {
      const rs = report.filter((r) => {
        const res = [];

        for (let i = 0; i < options.length; i++) {
          const opt = options[i];

          if (options.length === 1) {
            if (r.date.includes(opt) || r.title.includes(opt)) {
              res.push(r);
            }
          } else {
            for (let j = i + 1; j < options.length; j++) {
              const opt2 = options[j];

              if ((r.date.includes(opt) && r.title.includes(opt2)) || (r.date.includes(opt2) && r.title.includes(opt))) {
                res.push(r);
              }
            }
          }
        }

        return res.length > 0 && res;
      });
      return rs.length > 0 && rs;
    })
    .filter((r) => r);

  return r;
};

export const BTN = {
  label: 'View report',
  size: 'medium',
  iconPosition: 'back'
};

export const TestId = {
  REPORT_DOC: 'report-document',
  HEAD_TEXT: 'head-text',
  SUB_TEXT: 'sub-text',
  REPORTS: 'reports',
  REPORT_BTN: 'report-btn',
  MODAL: 'modal',
  FILTER_BTN: 'filter-btn',
  DROP_DOWN: 'drop-down',
  PAGINATION_CONTAINER: 'pagination'
};
