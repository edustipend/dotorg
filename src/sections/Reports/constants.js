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
      date: `${month}, ${year}`,
      link: links[0]
    },
    {
      title: 'Applications Report',
      date: `${month}, ${year}`,
      link: links[1]
    },
    {
      title: 'Beneficiaries Report',
      date: `${month}, ${year}`,
      link: links[2]
    }
  ];
}

const HOST_URL = 'https://firebasestorage.googleapis.com/v0/b/edustipenddotorg.appspot.com/o/';
export const reports = [
  generateReports('August', 2022, [
    `${HOST_URL}2022%2F08%2FEdustipend%20Beneficiaries%20List%20-%20August%202022.pdf?alt=media&token=d4e58a63-a2f5-4b90-97f5-7f584802fd2e`,
    `${HOST_URL}2022%2F08%2FEdustipend%20Applications%20Report%20-%20August%202022.pdf?alt=media&token=425e2a66-d92c-4d2f-a82d-77b1ff4e1203`
  ]),
  generateReports('September', 2022, [
    `${HOST_URL}2022%2F09%2FEdustipend%20Beneficiaries%20List%20-%20September%202022.pdf?alt=media&token=41288028-1547-46c5-9b3a-4c4ce7eb3639`,
    `${HOST_URL}2022%2F09%2FEdustipend%20Applications%20Report%20-%20September%202022.pdf?alt=media&token=851c9918-a5a1-43da-8760-9b318d6fdab5`,
    `${HOST_URL}2022%2F09%2FEdustipend%20Beneficiaries%20Report%20-%20September%202022.pdf?alt=media&token=8a6f0326-0fee-40d3-b873-5aeb01fc66b5`
  ]),
  generateReports('October', 2022, [
    `${HOST_URL}2022%2F10%2FEdustipend%20Beneficiaries%20List%20-%20October%202022.pdf?alt=media&token=ce807c5c-5d17-4440-b90e-18f371cab860`,
    `${HOST_URL}2022%2F10%2FEdustipend%20Applications%20Report%20-%20October%202022.pdf?alt=media&token=9dcd66b5-825c-4e08-94eb-497017bf1d1f`,
    `${HOST_URL}2022%2F10%2FEdustipend%20Beneficiaries%20Report%20-%20October%202022.pdf?alt=media&token=df90017b-99da-4530-b779-65697f69dd22`
  ]),
  generateReports('November', 2022, [
    `${HOST_URL}2022%2F11%2FEdustipend%20Beneficiaries%20List%20-%20November%202022.pdf?alt=media&token=2d68cf92-45e0-47ba-b6fb-94b18e9241e9`,
    `${HOST_URL}2022%2F11%2FEdustipend%20Applications%20Report%20-%20November%202022.pdf?alt=media&token=c796e10e-ff9b-42c9-99fd-ad199acb541f`,
    `${HOST_URL}2022%2F11%2FEdustipend%20Beneficiaries%20Report%20-%20November%202022.pdf?alt=media&token=2748724a-f570-40e1-88f2-b3078a0424c3`
  ]),
  generateReports('December', 2022, [
    `${HOST_URL}2022%2F12%2FEdustipend%20Beneficiaries%20List%20-%20December%202022.pdf?alt=media&token=b6ef2d4d-36e6-4587-9e91-4365f39609c9`,
    `${HOST_URL}2022%2F12%2FEdustipend%20Applications%20Report%20-%20December%202022.pdf?alt=media&token=a580338f-9a1f-4188-9d56-ab473e67b759`,
    `${HOST_URL}2022%2F12%2FEdustipend%20Beneficiaries%20Report%20-%20December%202022.pdf?alt=media&token=3077e683-398e-4a11-9edf-2213cb11dae3`
  ]),
  generateReports('January', 2023, [
    `${HOST_URL}2023%2F01%2FEdustipend%20Beneficiaries%20List%20-%20January%202023.pdf?alt=media&token=48b90a4e-e442-462b-9f0b-6d7deadea0ee`,
    `${HOST_URL}2023%2F01%2FEdustipend%20Applications%20Report%20-%20January%202023.pdf?alt=media&token=97cab7b1-f3ab-405f-8b2d-3dd40062b95f`,
    `${HOST_URL}2023%2F01%2FEdustipend%20Beneficiaries%20Report%20-%20January%202023.pdf?alt=media&token=85cc5099-6951-44d1-9e05-30d898251559`
  ]),
  generateReports('February', 2023, [
    `${HOST_URL}2023%2F02%2FEdustipend%20Beneficiaries%20List%20-%20February%202023.pdf?alt=media&token=4b213791-d4df-4722-8f0c-96db4616d9bc`,
    `${HOST_URL}2023%2F02%2FEdustipend%20Applications%20Report%20-%20February%202023.pdf?alt=media&token=e37472f7-4faa-4454-88b0-6fe140b4de45`,
    `${HOST_URL}2023%2F02%2FEdustipend%20Beneficiaries%20Report%20-%20February%202023.pdf?alt=media&token=2a2880cb-b45e-4960-a8b6-26f98a451343`
  ]),
  generateReports('March', 2023, [
    `${HOST_URL}2023%2F03%2FEdustipend%20Beneficiaries%20List%20-%20March%202023.pdf?alt=media&token=677fef18-5f93-4469-a342-280eff9dafdb`,
    `${HOST_URL}2023%2F03%2FEdustipend%20Applications%20Report%20-%20March%202023.pdf?alt=media&token=6011b8fd-d309-478b-a56f-3485703a4628`,
    `${HOST_URL}2023%2F03%2FEdustipend%20Beneficiaries%20Report%20-%20March%202023.pdf?alt=media&token=060c2967-14f4-44a8-8c2b-f335826015bc`
  ]),
  generateReports('April', 2023, [
    `${HOST_URL}2023%2F04%2FEdustipend%20Beneficiaries%20List%20-%20April%202023.pdf?alt=media&token=233f274b-02e3-42af-8d6a-ba8a69654907`,
    `${HOST_URL}2023%2F04%2FEdustipend%20Applications%20Report%20-%20April%202023.pdf?alt=media&token=f6f8b767-d991-4f69-bc5c-efafab05623e`
  ]),
  generateReports('May', 2023, [
    `${HOST_URL}2023%2F05%2FEdustipend%20Beneficiaries%20List%20-%20May%202023.pdf?alt=media&token=e38c0ede-2f13-4e53-96b9-4e31e8f52c5c`,
    `${HOST_URL}2023%2F05%2FEdustipend%20Applications%20Report%20-%20May%202023.pdf?alt=media&token=a4ffe21e-5090-4ca8-b740-0493aef2be3f`,
    `${HOST_URL}2023%2F05%2FEdustipend%20Beneficiaries%20Report%20-%20May%202023.pdf?alt=media&token=746bf432-4d0d-4c6b-aed5-3ae4db9486b6`
  ]),
  generateReports('June', 2023, [
    `${HOST_URL}2023%2F06%2FEdustipend%20Beneficiaries%20List%20-%20June%202023.pdf?alt=media&token=b239932a-374a-4052-af17-1e56d452897a`,
    `${HOST_URL}2023%2F06%2FEdustipend%20Applications%20Report%20-%20June%202023.pdf?alt=media&token=56a0d244-23a3-4c6f-bbf4-fa5d745b18e0`,
    `${HOST_URL}2023%2F06%2FEdustipend%20Beneficiaries%20Report%20-%20June%202023.pdf?alt=media&token=d7ec7f88-058e-45ce-a240-6a514b3952be`
  ]),
  generateReports('July', 2023, [
    `${HOST_URL}2023%2F07%2FEdustipend%20Beneficiaries%20List%20-%20July%202023.pdf?alt=media&token=3f9566b0-2a50-4013-b92d-2c677d2db538`,
    `${HOST_URL}2023%2F07%2FEdustipend%20Applications%20Report%20-%20July%202023.pdf?alt=media&token=8e15d11c-7b4c-4174-8d33-3d0942b331f5`,
    `${HOST_URL}2023%2F07%2FEdustipend%20Beneficiaries%20Report%20-%20July%202023.pdf?alt=media&token=838b4219-afbd-4f2f-89cc-f105a1c25b82`
  ]),
  // generateReports('August', 2023, [`${HOST_URL}`, `${HOST_URL}`, `${HOST_URL}`]),
  // generateReports('September', 2023, [`${HOST_URL}`, `${HOST_URL}`, `${HOST_URL}`]),
  // generateReports('October', 2023, [`${HOST_URL}`, `${HOST_URL}`, `${HOST_URL}`]),
  // generateReports('November', 2023, [`${HOST_URL}`, `${HOST_URL}`, `${HOST_URL}`]),
  // generateReports('December', 2023, [`${HOST_URL}`, `${HOST_URL}`, `${HOST_URL}`]),
  generateReports('January', 2024, [
    `${HOST_URL}2024%2F01%2FEdustipend%20Beneficiaries%20List%20-%20January%202024.pdf?alt=media&token=4c9ba3c2-1723-4b5a-a77b-27af3773716a`,
    `${HOST_URL}2024%2F01%2FEdustipend%20Applications%20Report%20-%20January%202024.pdf?alt=media&token=72c9cc62-bed1-43c9-bba3-c6bc234cdf82`,
    `${HOST_URL}2024%2F01%2FEdustipend%20Beneficiaries%20Report-%20January%202024.pdf?alt=media&token=056cdd86-274a-4da4-a5bb-1f16e7f9f862`
  ]),
  generateReports('February', 2024, [
    `${HOST_URL}2024%2F02%2FEdustipend%20Beneficiaries%20List%20-%20February%202024.pdf?alt=media&token=7f26bd0a-2ed3-49fa-a6a6-1ab89027e85b`,
    `${HOST_URL}2024%2F02%2FEdustipend%20Applications%20Report%20-%20February%202024.pdf?alt=media&token=2c9d7b1e-0f4c-4050-adb9-50c610fdbdfe`,
    `${HOST_URL}2024%2F02%2FEdustipend%20Beneficiaries%20Report%20-%20February%202024.pdf?alt=media&token=89abdcee-6f21-4535-aa31-78c22e84df48`
  ]),
  generateReports('March', 2024, [
    `${HOST_URL}2024%2F03%2FEdustipend%20Beneficiaries%20List%20-%20March%202024.pdf?alt=media&token=d1ab9472-8088-41ef-b4f9-f2276b58a85c`,
    `${HOST_URL}2024%2F03%2FEdustipend%20Applications%20Report%20-%20March%202024.pdf?alt=media&token=bf3e687d-c9a6-4809-8a5e-80d4f26ebc1f`,
    ``
  ])
  // generateReports('April', 2024, [`${HOST_URL}`, `${HOST_URL}`, `${HOST_URL}`])
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
