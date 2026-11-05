
export const cases = [
  {
    id: 1,
    title: "The Midnight Mansion",
    category: "MYSTERY",
    difficulty: "Medium",
    status: "Active",
    location: "Blackwood Estate",
    date: "October 24, 2026",

    description:
      "A valuable family journal disappeared from a locked mansion. Three people were present that evening. Can you uncover what happened?",

    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85",

    suspects: [
      {
        id: 1,
        name: "Eleanor",
        role: "House Manager",
        description: "Managed the estate for twelve years.",

        statement:
          "I was organizing the library that evening. I never entered the study.",

        question:
          "You said you never entered the study. Why does the visitor log show your name?",

        response:
          "I... I only went there to deliver some documents. I forgot to mention that.",

        clue:
          "Eleanor's visitor log confirms she entered the study at 9:15 PM."
      },

      {
        id: 2,
        name: "Arthur",
        role: "Family Relative",
        description: "A frequent visitor to the mansion.",

        statement:
          "I was in the garden. I heard nothing unusual.",

        question:
          "Why was a library key found among your belongings?",

        response:
          "I borrowed it earlier to return an old book. I should have returned it.",

        clue:
          "Arthur borrowed the library key before the journal disappeared."
      },

      {
        id: 3,
        name: "Victor",
        role: "Security Officer",
        description: "Responsible for the estate's security.",

        statement:
          "The security system was working normally all night.",

        question:
          "Why does the security record show a five-minute interruption?",

        response:
          "There was a routine system restart. I documented the interruption.",

        clue:
          "The security log records a system restart at 9:20 PM."
      }
    ],

    clues: [
      {
        id: 1,
        title: "The Torn Note",
        description:
          "A note found near the study door. It mentions the journal and a meeting at 9 PM.",
        type: "DOCUMENT",
        icon: "FileText"
      },

      {
        id: 2,
        title: "The Visitor Log",
        description:
          "The visitor log records Eleanor entering the study at 9:15 PM.",
        type: "RECORD",
        icon: "ClipboardList"
      },

      {
        id: 3,
        title: "The Library Key",
        description:
          "A spare key was recorded as borrowed by Arthur earlier that evening.",
        type: "OBJECT",
        icon: "KeyRound"
      },

      {
        id: 4,
        title: "Security Report",
        description:
          "A five-minute interruption appears in the security system records.",
        type: "DIGITAL",
        icon: "Monitor"
      }
    ],

    puzzle: {
      question:
        "The study clock stopped at 9:20. The visitor log shows Eleanor at 9:15. How many minutes passed between these two events?",

      answer: "5",

      hint: "Subtract 9:15 from 9:20."
    }
  }
];


export const initialProgress = {
  discovered: [],
  interrogated: [],
  connected: false,
  puzzleSolved: false,
  conclusion: "",
  completed: false
};
