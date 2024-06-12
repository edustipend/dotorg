// gtm.js
export function gtmEvent(event) {
  if (!window.dataLayer) return;
  window.dataLayer.push({ event });
}

const userInteraction = (eventCat, btnPurpose, btnLabel) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'user',
    eventCategory: eventCat,
    eventAction: btnPurpose,
    eventLabel: btnLabel
  });
};

export { userInteraction };
