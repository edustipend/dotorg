// gtm.js
const userInteraction = (event, eventCat, btnPurpose, btnLabel) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: event,
    eventCategory: eventCat,
    eventAction: btnPurpose,
    eventLabel: btnLabel
  });
};

const pageView = (location, title) => {
  document.title = title;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'customPageView',
    pageLocation: location,
    pageTitle: title
  });
};

export { userInteraction, pageView };
