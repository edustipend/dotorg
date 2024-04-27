export const HEAD_TEXT = 'Monthly Reports';
export const SUB_TEXT =
  'Explore our monthly Edustipend applications report and gain insight into how we have empowered the lives of thousands of learners';

// export const reports = [
//   {
//     january_2023: [
//       {
//         title: 'Beneficiaries List',
//         date: 'January, 2023',
//         link: ''
//       },
//       {
//         title: 'Applications Report',
//         date: 'January, 2023',
//         link: ''
//       },
//       {
//         title: 'Beneficiaries Report',
//         date: 'January, 2023',
//         link: ''
//       }
//     ]
//   },
//   {
//     february_2023: [
//       {
//         title: 'Beneficiaries List',
//         date: 'February, 2023',
//         link: ''
//       },
//       {
//         title: 'Applications Report',
//         date: 'February, 2023',
//         link: ''
//       },
//       {
//         title: 'Beneficiaries Report',
//         date: 'February, 2023',
//         link: ''
//       }
//     ]
//   },
//   {
//     march_2023: [
//       {
//         title: 'Beneficiaries List',
//         date: 'March, 2023',
//         link: ''
//       },
//       {
//         title: 'Applications Report',
//         date: 'March, 2023',
//         link: ''
//       },
//       {
//         title: 'Beneficiaries Report',
//         date: 'March, 2023',
//         link: ''
//       }
//     ]
//   },
//   {
//     april_2023: [
//       {
//         title: 'Beneficiaries List',
//         date: 'April, 2023',
//         link: ''
//       },
//       {
//         title: 'Applications Report',
//         date: 'April, 2023',
//         link: ''
//       },
//       {
//         title: 'Beneficiaries Report',
//         date: 'April, 2023',
//         link: ''
//       }
//     ]
//   }
//   // Repeat this structure for each month until April 2024
// ];

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

// Generate reports data from February 2023 to April 2024
export const reports = [
  generateReports('August', 2022, ['', '', '']),
  generateReports('September', 2022, ['', '', '']),
  generateReports('October', 2022, ['', '', '']),
  generateReports('November', 2022, ['', '', '']),
  generateReports('December', 2022, ['', '', '']),
  generateReports('January', 2023, ['', '', '']),
  generateReports('February', 2023, ['', '', '']),
  generateReports('March', 2023, ['', '', '']),
  generateReports('April', 2023, ['', '', '']),
  generateReports('May', 2023, ['', '', '']),
  generateReports('June', 2023, ['', '', '']),
  generateReports('July', 2023, ['', '', '']),
  generateReports('August', 2023, ['', '', '']),
  generateReports('September', 2023, ['', '', '']),
  generateReports('October', 2023, ['', '', '']),
  generateReports('November', 2023, ['', '', '']),
  generateReports('December', 2023, ['', '', '']),
  generateReports('January', 2024, ['', '', '']),
  generateReports('February', 2024, ['', '', '']),
  generateReports('March', 2024, ['', '', '']),
  generateReports('April', 2024, ['', '', ''])
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
