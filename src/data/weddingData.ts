/**
 * Verified Source of Truth for Isha Bawankule & Ashish Deshmukh Wedding Invitation.
 * All details strictly validated against Wedding_Invitation_Details_Checklist.xlsx
 */

export interface WeddingData {
  bride: {
    name: string;
    father: string;
    mother: string;
  };
  groom: {
    name: string;
    father: string;
    mother: string;
  };
  hosts: string;
  verbatimInvitationLine: string;
  date: {
    dayOfWeek: string;
    day: number;
    month: string;
    year: number;
    fullFormatted: string;
    isoString: string;
  };
  time: {
    display: string;
    periodName: string;
    timezone: string;
  };
  venue: {
    name: string;
    address: string;
    landmark: string;
    googleMapsUrl: string;
  };
  shloka: {
    sanskrit: string;
    english: string;
  };
  blessing: {
    quote: string;
    signOff: string;
  };
}

export const WEDDING_DATA: WeddingData = {
  bride: {
    name: "Isha Bawankule",
    father: "Mr. Bhudeo Bawankule",
    mother: "Mrs. Rekha Bawankle", // EXACT spelling from source checklist preserved
  },
  groom: {
    name: "Ashish Deshmukh",
    father: "Mr. Manikrao Deshmukh",
    mother: "Mrs. Nirmala Deshmukh",
  },
  hosts: "Isha & Ashish",
  verbatimInvitationLine: "We are Inviting you ", // EXACT trailing space verbatim
  date: {
    dayOfWeek: "Thursday",
    day: 17,
    month: "December",
    year: 2026,
    fullFormatted: "Thursday, 17 December 2026",
    isoString: "2026-12-17T17:40:00+05:30",
  },
  time: {
    display: "5:40 PM",
    periodName: "Twilight Goraj Muhurat",
    timezone: "IST (Asia/Kolkata)",
  },
  venue: {
    name: "Amrit Farms",
    address: "GUMTHALA NAGPUR (MH) 441111",
    landmark: "Near Gumthi/Koradi Road Area",
    googleMapsUrl: "https://maps.app.goo.gl/zbGfRrkW83LXk8qG8?g_st=ac",
  },
  shloka: {
    sanskrit: "॥ श्री गणेशाय नमः ॥",
    english: "With the divine grace and blessings of the Almighty",
  },
  blessing: {
    quote: "May the harmony of your souls be eternal, blessed with joy, laughter, and boundless peace.",
    signOff: "& The Bawankule & Deshmukh Families",
  },
};
