import React, { useEffect, useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const MuhuratCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(WEDDING_DATA.date.isoString).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCalendar = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Royal Indian Botanical Experience//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:Wedding: ${WEDDING_DATA.bride.name} & ${WEDDING_DATA.groom.name}`,
      `DESCRIPTION:The royal wedding ceremony of ${WEDDING_DATA.bride.name} and ${WEDDING_DATA.groom.name} at ${WEDDING_DATA.venue.name}.`,
      `LOCATION:${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}`,
      'DTSTART:20261217T121000Z',
      'DTEND:20261217T163000Z',
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Isha_Ashish_Wedding_17Dec2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="scene-block reveal"
      style={{
        textAlign: 'center',
        padding: '20px 0',
      }}
      aria-label="Auspicious Muhurat and Countdown"
    >
      <div className="section-title-wrap reveal delay-1">
        <p className="section-eyebrow">Auspicious Muhurat</p>
        <h2 className="section-main-title">Wedding Date &amp; Time</h2>
      </div>

      {/* Date & Time Monumental Badge */}
      <div
        className="reveal delay-2"
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          background: 'rgba(179, 145, 85, 0.12)',
          border: '1px solid rgba(179, 145, 85, 0.5)',
          padding: '10px 22px',
          borderRadius: '30px',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.15rem, 3.2vw, 1.55rem)',
          color: 'var(--color-forest-deep)',
          fontWeight: 700,
          margin: '0 auto 12px',
          boxShadow: '0 2px 10px rgba(179, 145, 85, 0.15)',
        }}
      >
        <span>{WEDDING_DATA.date.fullFormatted}</span>
        <span>•</span>
        <span>{WEDDING_DATA.time.display}</span>
      </div>

      <p
        className="reveal delay-2"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.8125rem, 2.2vw, 0.95rem)',
          color: 'var(--color-ink-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '24px',
        }}
      >
        {WEDDING_DATA.time.periodName} ({WEDDING_DATA.time.timezone})
      </p>

      {/* Countdown Grid */}
      <div
        className="reveal delay-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginBottom: '26px',
        }}
      >
        {[
          { label: 'Days', val: timeLeft.days },
          { label: 'Hours', val: timeLeft.hours },
          { label: 'Mins', val: timeLeft.minutes },
          { label: 'Secs', val: timeLeft.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="countdown-box"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(179, 145, 85, 0.4)',
              borderRadius: '14px',
              padding: '16px 6px',
              boxShadow: '0 4px 16px rgba(22, 41, 32, 0.05)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5.8vw, 3.2rem)',
                color: 'var(--color-forest-deep)',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {String(item.val).padStart(2, '0')}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.6875rem, 1.8vw, 0.8125rem)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-muted)',
                marginTop: '8px',
                fontWeight: 700,
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Add to Calendar Button */}
      <div className="reveal delay-4">
        <button
          onClick={handleDownloadCalendar}
          className="btn-royal-secondary"
          style={{ width: '100%', maxWidth: '340px' }}
        >
          📅 Save Date to Calendar (.ics)
        </button>
      </div>
    </section>
  );
};
