// GA connection
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z919LB7J96');

// Function to send a custom event to Google Analytics
  function GAEvent(category, action, label, value) {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'event_value': value
    });
  }