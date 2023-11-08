import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (


    <div className="calendly-inline-widget bg-[#1e1b296c] w-full z-1" data-url="https://calendly.com/hqmediaagency/call-30m" style={{ minWidth: '220px', height: '700px' }}>

    </div>
  );
};

export default CalendlyWidget;
