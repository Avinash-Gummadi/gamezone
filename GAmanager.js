// GA connection
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-SZFBCWJG55');


// Function to send a custom event to Google Analytics
  function GAEvent(category, action, label, value) {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'event_value': value
    });
  }

  // Example usage of the function
  GAEvent('Button Click', 'Click', 'Custom Button Click', 1);