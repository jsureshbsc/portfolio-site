// Utility function (e.g., in src/utils/analytics.js)
export const trackWhatsAppClick = () => {
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      'event_category': 'Lead',
      'event_label': window.location.pathname,
      'value': 1
    });
  }
};

