export interface AssetCredit {
  id: string;
  name: string;
  creator: string;
  license: string;
  sourceUrl: string;
  usage: string;
}

export const assetCredits: AssetCredit[] = [
  {
    id: 'cormorant-garamond',
    name: 'Cormorant Garamond Font',
    creator: 'Christian Thalmann (Catharsis Fonts)',
    license: 'SIL Open Font License 1.1',
    sourceUrl: 'https://fonts.google.com/specimen/Cormorant+Garamond',
    usage: 'Primary editorial serif typography for names and headings',
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display Font',
    creator: 'Claus Eggers Sørensen',
    license: 'SIL Open Font License 1.1',
    sourceUrl: 'https://fonts.google.com/specimen/Playfair+Display',
    usage: 'Ceremonial section titles',
  },
  {
    id: 'dm-sans',
    name: 'DM Sans Font',
    creator: 'Colophon Foundry, Jonny Pinhorn',
    license: 'SIL Open Font License 1.1',
    sourceUrl: 'https://fonts.google.com/specimen/DM+Sans',
    usage: 'Clean legible body and utility text',
  },
  {
    id: 'allura',
    name: 'Allura Calligraphic Font',
    creator: 'TypeSETit (Rob Leuschke)',
    license: 'SIL Open Font License 1.1',
    sourceUrl: 'https://fonts.google.com/specimen/Allura',
    usage: 'Restrained calligraphic script flourishes',
  },
  {
    id: 'monogram-ia',
    name: 'Isha & Ashish Monogram',
    creator: 'Original Bespoke Vector',
    license: 'Proprietary Project Asset',
    sourceUrl: 'Internal project SVG',
    usage: 'Wax seal and card identity mark',
  },
  {
    id: 'botanical-foliage',
    name: 'Botanical Corner & Leaflet Ornaments',
    creator: 'Curated CC0 Vector Collection',
    license: 'Public Domain / CC0',
    sourceUrl: 'https://svgrepo.com',
    usage: 'Invitation corners, borders and section transitions',
  },
  {
    id: 'ambient-audio-synth',
    name: 'Harmonic Ambient Wedding Harp Synthesizer',
    creator: 'Web Audio API Procedural Synth Engine',
    license: 'MIT',
    sourceUrl: 'Internal procedural audio engine',
    usage: 'Discreet optional audio accompaniment',
  },
];
