// Calgary Purity Test Questions
export const questions = [
  // Section 1: Getting to Campus (The Commuter Struggle)
  "Got rejected from Waterloo or UofT",
  "Skipped class because it was too cold to justify leaving the house",
  "Showed up to campus and immediately wanted to leave",
  "Went home right after class",
  'Complained about UofC being a "commuter school"',
  "Complained campus is dead but never joined a club",
  "Lost years of your life to Microsoft Autheticator",
  "Got lost on campus more than once",
  "Watched the CTrain doors close in your face and accepted your fate",
  "Commuted from Airdrie, Chestermere, or Okotoks",
  "Lived in the tunnels like a mole person during winter",
  "Complained about the UPass fee while using it almost daily",
  "Sprinted from University Station to Professional Faculties in under 5 minutes",
  'Got stuck on the Red Line for 30+ minutes due to "technical difficulties"',
  'Found a "secret" study spot that was never actually secret',
  "Nearly got taken out by a bike or scooter on the way to TFDL",
  "Waited over 20 minutes in the MacHall Tim Hortons line and stayed anyway",

  // Section 2: Academic Despair
  "Submitted an assignment at 11:59 PM",
  "Submitted an assignment at 12:01 AM and stared at the screen in silence",
  "Calculated the lowest possible grade needed on the final to pass",
  "Got a class-canceled notification and felt pure joy",
  'Said "It\'s only worth 10%" to cope',
  "Lied when someone asked how the midterm went",
  "Opened a grade and dissociated",
  "Watched a recorded lecture at 2x speed the night before the exam",
  "Zoned out for an entire 75-minute lecture",
  'Opened your laptop to "take notes" and scrolled Reddit instead',
  "Walked into the wrong classroom and stayed out of embarrassment",
  "Had a midterm with a class average below 50%",
  "Failed a midterm",
  "Failed a course",
  "Failed the same course twice",
  'Googled "how to drop out"',
  "Bought a $200 textbook and never opened it",
  "Applied for a deferral because you just couldn't do it",
  "Cried somewhere inside TFDL",

  // Section 3: Campus Landmarks & Legends
  "Had a spiritual experience eating a Bake Chef sub",
  "Witnessed the snow ducks",
  "Used TFDL to study or just people-watch",
  "Got lost in the Science Theatres maze",
  "Survived the MacHall lunch rush",
  "Adopted campus bunnies as emotional support animals",
  "Witnessed a deer casually strolling through campus",
  "Pulled an all-nighter at TFDL and watched the sunrise",
  "Nearly took flight in the wind tunnel between ICT and Eng",
  "Tried to find a room in Craigie Hall and gave up",
  "Experienced the eerie silence of the Law Library",
  "Watched an event at the Olympic Oval purely for the vibes",
  'Pressed the mysterious Earth Science "buttons" with no idea why',

  // Section 4: Social Life & The Calgary Experience
  "Played League of Legends or Valorant during a lecture",
  "Joined a club solely for free pizza or samosas",
  "Shot your shot with a classmate and now avoid eye contact weekly",
  "Pre-drank because downtown prices are criminal",
  "Ended up at Cowboys against your will",
  "Took the CTrain home at 2 AM and saw things you can't unsee",
  "Witnessed a fight at City Hall or University Station",
  "Attended a house party in Varsity or Brentwood",
  "Spotted a classmate's anonymous rant on r/UCalgary",
  "Wore Bermuda shorts in April for BSD",
  "Attended the Crowchild Classic at the Saddledome",
  "Bought a pitcher at The Den on a Thursday",
  "Lost your voice at a Dinos game",
  "Used a fake ID near campus",
  "Went to Stampede grounds during finals week",

  // Section 5: Weather & Environment
  "Experienced emotional whiplash from Chinook weather",
  "Got caught in a June hailstorm",
  "Walked the Plus-15 bridge while it swayed in the wind",
  "Slid down the icy hill near residence",
  "Wore a parka in the morning and a T-shirt by afternoon",
  "Felt your eyelashes freeze on the walk from the station",

  // Section 6: The Darker Side (Rice Purity Style)
  "Sat in a 400-person lecture and felt completely alone",
  "Endured a lecture beside someone who skipped deodorant",
  "Witnessed someone crying in the library and looked away",
  "Felt like everyone else was faking it too",
  "Told someone to shut up in TFDL without regret",
  "Witnessed a couple making out in the stacks",
  "Accepted suffering as your new normal",
  "Been drunk three or more nights in a row",
  "Went to class drunk or high",
  "Wrote an exam hungover",
  "Slept overnight in a campus building",
  "Vomited in a campus bathroom",
  "Been in a relationship with a TA",
  "Been in a relationship with a professor",
  "Stole something from campus",
  "Got in trouble with campus security",
  "Used weed or edibles on campus",
  "Wrote an exam while intoxicated",
  "Cried in a bathroom stall during a midterm",
  "Hooked up in a study room",
  "Cheated on an online quiz",
  "Plagiarized something and didn't get caught",
  'Got a "CG" on your transcript',
  "Sent an email to a the dean",
  "Faked a doctor's note",
  "Had a mental breakdown in the Dining Centre",
  "Considered transferring to MRU for an easier life",
  "Ghosted a group project",
  "Stole labeled food from a communal fridge",

  // Always the last one
  "Would still somehow do it all again",
];

// Score messages based on purity score ranges
export const scoreMessages = {
  observer: {
    title: "Campus Observer",
    description: "You attend class and leave. Emotionally untouched.",
  },
  functioning: {
    title: "Functioning Student",
    description:
      "You've seen things, but you still have plausible deniability.",
  },
  weathered: {
    title: "Academically Weathered",
    description: "Midterms changed you.",
  },
  tenured: {
    title: "Spiritually Tenured",
    description: "Campus trauma is now part of your personality.",
  },
  institutionalized: {
    title: "Institutionalized",
    description: "You are no longer the same person.",
  },
};

// School coding based on answer patterns
export const getSchoolCoding = (checkedItems) => {
  // Count specific question categories
  let leavesImmediately = 0;
  let quietSuffering = 0;

  // Questions about leaving immediately and campus complaints
  if (checkedItems.has(3)) leavesImmediately++; // Went home right after class (The Commuter Classic)
  if (checkedItems.has(5)) leavesImmediately++; // Complained campus is dead but never joined a club

  // Questions related to UCalgary traits (big lectures, suffering)
  if (checkedItems.has(85)) quietSuffering++; // Sat in a 400-person lecture and felt completely alone
  if (checkedItems.has(91)) quietSuffering++; // Accepted suffering as your new normal
  if (checkedItems.has(93)) quietSuffering++; // Felt like everyone else was faking it too

  if (leavesImmediately >= 1 && quietSuffering < 2) {
    return {
      title: "Spiritually MRU-coded",
      description:
        "Comfortable clothes. Efficient routines. Leaves immediately after class.",
    };
  } else if (quietSuffering >= 2) {
    return {
      title: "Spiritually UCalgary-coded",
      description:
        "Large lectures. Quiet suffering. Complains constantly. Still shows up.",
    };
  } else {
    return {
      title: "Spiritually Conflicted",
      description: "You contain multitudes. Campus cannot define you.",
    };
  }
};

export const getScoreMessage = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;

  if (percentage >= 85) return scoreMessages.observer;
  if (percentage >= 64) return scoreMessages.functioning;
  if (percentage >= 45) return scoreMessages.weathered;
  if (percentage >= 24) return scoreMessages.tenured;
  return scoreMessages.institutionalized;
};
