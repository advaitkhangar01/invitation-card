import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const FormalInvitation: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '16px 0',
      }}
      aria-label="Formal Wedding Invitation"
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-gold-deep)',
          fontWeight: 600,
          marginBottom: '14px',
        }}
      >
        Under the Grace of Elders & Ancestors
      </p>

      {/* Bride's Parents Blessing */}
      <div
        style={{
          background: 'rgba(35, 59, 50, 0.03)',
          border: '1px solid rgba(185, 154, 98, 0.28)',
          borderRadius: '12px',
          padding: '18px 16px',
          marginBottom: '16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            color: 'var(--color-forest-deep)',
            lineHeight: 1.35,
            fontWeight: 600,
          }}
        >
          {WEDDING_DATA.bride.father}
          <br />
          &amp; {WEDDING_DATA.bride.mother}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-ink-muted)',
            marginTop: '6px',
            letterSpacing: '0.04em',
          }}
        >
          Cordially invite your gracious presence to celebrate the wedding of their daughter
        </p>
      </div>

      {/* Verbatim Invitation Line */}
      <div style={{ margin: '22px 0' }}>
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontStyle: 'italic',
            color: 'var(--color-forest-rich)',
            letterSpacing: '0.02em',
            fontWeight: 600,
          }}
        >
          “ {WEDDING_DATA.verbatimInvitationLine} ”
        </p>
      </div>

      {/* Groom's Parents Blessing */}
      <div
        style={{
          background: 'rgba(35, 59, 50, 0.03)',
          border: '1px solid rgba(185, 154, 98, 0.28)',
          borderRadius: '12px',
          padding: '18px 16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-ink-muted)',
            letterSpacing: '0.04em',
            marginBottom: '4px',
          }}
        >
          Together with
        </p>
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            color: 'var(--color-forest-deep)',
            lineHeight: 1.35,
            fontWeight: 600,
          }}
        >
          {WEDDING_DATA.groom.father}
          <br />
          &amp; {WEDDING_DATA.groom.mother}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-ink-muted)',
            marginTop: '4px',
            letterSpacing: '0.04em',
          }}
        >
          Parents of the Groom
        </p>
      </div>
    </section>
  );
};
