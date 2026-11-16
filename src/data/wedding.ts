export interface WeddingDetails {
  bride: {
    fullName: string;
    preferredName?: string;
    parents: {
      father: string;
      mother: string;
    };
  };
  groom: {
    fullName: string;
    preferredName?: string;
    parents: {
      father: string;
      mother: string;
    };
  };
  hosts: string;
  wordingPreference: 'modern' | 'formal' | 'traditional' | 'casual';
  language: string;
  openingLine: string;
  invitationTopLabel: string;
  invitationSupportingLine: string;
  coupleSection: {
    smallHeading: string;
    mainTitle: string;
    supportingCopy: string;
  };
  familySection: {
    heading: string;
  };
  dateExperience: {
    smallLabel: string;
    date: number;
    month: string;
    year: number;
    day: string;
    ceremonyTime: string;
    supportingLine: string;
  };
  venue: {
    smallLabel: string;
    heading: string;
    name: string;
    address: string;
    addressArea: string;
    fullDisplayAddress: string;
    dateTimeString: string;
    buttonLabel: string;
    googleMapsUrl: string;
  };
  closing: {
    mainLine: string;
    names: string;
    dateString: string;
    closingLine: string;
    microcopy: string;
  };
  envelope: {
    smallLabel: string;
    mainInstruction: string;
    interactionInstruction: string;
    microcopy: string;
  };
}

export const weddingData: WeddingDetails = {
  bride: {
    fullName: 'Isha Bawankule',
    preferredName: 'Isha',
    parents: {
      father: 'Bhudeo Bawankule',
      // CRITICAL: Preserve exact spelling Rekha Bawankle from workbook without alteration
      mother: 'Rekha Bawankle',
    },
  },
  groom: {
    fullName: 'Ashish Deshmukh',
    preferredName: 'Ashish',
    parents: {
      father: 'Manikrao Deshmukh',
      mother: 'Nirmala Deshmukh',
    },
  },
  hosts: 'Isha & Ashish',
  wordingPreference: 'modern',
  language: 'English',
  openingLine: 'We are Inviting you',
  invitationTopLabel: 'WITH LOVE & JOY',
  invitationSupportingLine: 'to celebrate the beginning of our forever.',
  coupleSection: {
    smallHeading: 'TWO HEARTS, ONE BEAUTIFUL JOURNEY',
    mainTitle: 'Isha & Ashish',
    supportingCopy:
      'Together with our families, we invite you to be part of a day filled with love, laughter and new beginnings.',
  },
  familySection: {
    heading: 'WITH THE BLESSINGS OF OUR FAMILIES',
  },
  dateExperience: {
    smallLabel: 'SAVE THE DATE',
    date: 17,
    month: 'DECEMBER',
    year: 2026,
    day: 'THURSDAY',
    ceremonyTime: '5:40 PM',
    supportingLine: 'We look forward to celebrating with you.',
  },
  venue: {
    smallLabel: 'THE CELEBRATION',
    heading: 'The Wedding Venue',
    name: 'Amrit Farms',
    address: 'Gumthala, Nagpur (MH) 441111',
    addressArea: 'Near Gumthi / Koradi Road Area',
    fullDisplayAddress:
      'Amrit Farms, Gumthala, Nagpur (MH) 441111 (Near Gumthi/Koradi Road Area)',
    dateTimeString: '17 December 2026 · 5:40 PM',
    buttonLabel: 'GET DIRECTIONS',
    googleMapsUrl: 'https://maps.app.goo.gl/zbGfRrkW83LXk8qG8?g_st=ac',
  },
  closing: {
    mainLine: 'YOUR PRESENCE WILL MAKE OUR DAY EVEN MORE SPECIAL.',
    names: 'Isha & Ashish',
    dateString: '17 December 2026',
    closingLine: 'With love, we look forward to celebrating with you.',
    microcopy: 'A beautiful beginning. A lifetime together.',
  },
  envelope: {
    smallLabel: 'A SPECIAL INVITATION',
    mainInstruction: 'Something beautiful is waiting for you.',
    interactionInstruction: 'Tap to open',
    microcopy: 'A celebration of love, family & togetherness',
  },
};
