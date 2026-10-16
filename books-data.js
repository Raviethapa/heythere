/* Review draft dataset: 100 titles; no reading status or ratings are assumed. */
const booksData = [
  {
    "id": "hi-001",
    "title": "गोदान",
    "author": "मुंशी प्रेमचंद",
    "language": "Hindi",
    "genre": "Novel",
    "why": "समाज, किसान जीवन, वर्ग और नैतिकता",
    "priority": "Core"
  },
  {
    "id": "hi-002",
    "title": "निर्मला",
    "author": "मुंशी प्रेमचंद",
    "language": "Hindi",
    "genre": "Novel",
    "why": "दहेज, विवाह और सामाजिक दबाव",
    "priority": "Core"
  },
  {
    "id": "hi-003",
    "title": "गबन",
    "author": "मुंशी प्रेमचंद",
    "language": "Hindi",
    "genre": "Novel",
    "why": "इच्छा, प्रतिष्ठा और आर्थिक नैतिकता",
    "priority": "Core"
  },
  {
    "id": "hi-004",
    "title": "कर्मभूमि",
    "author": "मुंशी प्रेमचंद",
    "language": "Hindi",
    "genre": "Novel",
    "why": "नागरिक जिम्मेदारी और सामाजिक परिवर्तन",
    "priority": "Core"
  },
  {
    "id": "hi-005",
    "title": "रंगभूमि",
    "author": "मुंशी प्रेमचंद",
    "language": "Hindi",
    "genre": "Novel",
    "why": "सत्ता, पूँजी और आम आदमी",
    "priority": "Core"
  },
  {
    "id": "hi-006",
    "title": "मानसरोवर (चयनित कहानियाँ)",
    "author": "मुंशी प्रेमचंद",
    "language": "Hindi",
    "genre": "Short stories",
    "why": "छोटे रूप में समाज और मनुष्य",
    "priority": "Core"
  },
  {
    "id": "hi-007",
    "title": "मैला आँचल",
    "author": "फणीश्वरनाथ रेणु",
    "language": "Hindi",
    "genre": "Novel",
    "why": "ग्रामीण भारत और लोकभाषा",
    "priority": "Core"
  },
  {
    "id": "hi-008",
    "title": "परती परिकथा",
    "author": "फणीश्वरनाथ रेणु",
    "language": "Hindi",
    "genre": "Novel",
    "why": "गाँव, बदलाव और सामुदायिक जीवन",
    "priority": "Core"
  },
  {
    "id": "hi-009",
    "title": "राग दरबारी",
    "author": "श्रीलाल शुक्ल",
    "language": "Hindi",
    "genre": "Satire",
    "why": "संस्थाएँ, राजनीति और व्यंग्य",
    "priority": "Core"
  },
  {
    "id": "hi-010",
    "title": "आधा गाँव",
    "author": "राही मासूम रज़ा",
    "language": "Hindi",
    "genre": "Novel",
    "why": "समुदाय, पहचान और विभाजन के बाद का समाज",
    "priority": "Core"
  },
  {
    "id": "hi-011",
    "title": "तमस",
    "author": "भीष्म साहनी",
    "language": "Hindi",
    "genre": "Novel",
    "why": "विभाजन, भय और साम्प्रदायिकता",
    "priority": "Core"
  },
  {
    "id": "hi-012",
    "title": "झूठा सच",
    "author": "यशपाल",
    "language": "Hindi",
    "genre": "Novel",
    "why": "विभाजन और नए राष्ट्र का निर्माण",
    "priority": "Core"
  },
  {
    "id": "hi-013",
    "title": "गुनाहों का देवता",
    "author": "धर्मवीर भारती",
    "language": "Hindi",
    "genre": "Novel",
    "why": "प्रेम, आदर्श और भावनात्मक चुनाव",
    "priority": "Core"
  },
  {
    "id": "hi-014",
    "title": "सूरज का सातवाँ घोड़ा",
    "author": "धर्मवीर भारती",
    "language": "Hindi",
    "genre": "Novel",
    "why": "कहानी कहने की कला और रिश्ते",
    "priority": "Core"
  },
  {
    "id": "hi-015",
    "title": "कितने पाकिस्तान",
    "author": "कमलेश्वर",
    "language": "Hindi",
    "genre": "Novel",
    "why": "इतिहास, सीमाएँ और सत्ता पर सवाल",
    "priority": "Core"
  },
  {
    "id": "hi-016",
    "title": "चित्रलेखा",
    "author": "भगवतीचरण वर्मा",
    "language": "Hindi",
    "genre": "Novel",
    "why": "पाप-पुण्य और नैतिक सापेक्षता",
    "priority": "Core"
  },
  {
    "id": "hi-017",
    "title": "त्यागपत्र",
    "author": "जैनेंद्र कुमार",
    "language": "Hindi",
    "genre": "Novel",
    "why": "व्यक्ति, स्वतंत्रता और समाज",
    "priority": "Core"
  },
  {
    "id": "hi-018",
    "title": "शेखर: एक जीवनी",
    "author": "अज्ञेय",
    "language": "Hindi",
    "genre": "Novel",
    "why": "आत्मचिन्तन और व्यक्तित्व",
    "priority": "Core"
  },
  {
    "id": "hi-019",
    "title": "आपका बंटी",
    "author": "मन्नू भंडारी",
    "language": "Hindi",
    "genre": "Novel",
    "why": "परिवार और बच्चे की दृष्टि",
    "priority": "Core"
  },
  {
    "id": "hi-020",
    "title": "महाभोज",
    "author": "मन्नू भंडारी",
    "language": "Hindi",
    "genre": "Novel",
    "why": "राजनीति और सत्ता का दुरुपयोग",
    "priority": "Core"
  },
  {
    "id": "hi-021",
    "title": "काशी का अस्सी",
    "author": "काशीनाथ सिंह",
    "language": "Hindi",
    "genre": "Novel",
    "why": "बनारस, भाषा और सामाजिक बदलाव",
    "priority": "Explore"
  },
  {
    "id": "hi-022",
    "title": "टोपी शुक्ला",
    "author": "राही मासूम रज़ा",
    "language": "Hindi",
    "genre": "Novel",
    "why": "दोस्ती, पहचान और पूर्वाग्रह",
    "priority": "Explore"
  },
  {
    "id": "hi-023",
    "title": "चंद्रकांता",
    "author": "देवकीनंदन खत्री",
    "language": "Hindi",
    "genre": "Fantasy serial",
    "why": "हिन्दी लोकप्रिय कथा की ऐतिहासिक मिसाल",
    "priority": "Explore"
  },
  {
    "id": "hi-024",
    "title": "वैशाली की नगरवधू",
    "author": "आचार्य चतुरसेन",
    "language": "Hindi",
    "genre": "Historical novel",
    "why": "प्राचीन भारत पर कथा-आधारित प्रवेश",
    "priority": "Explore"
  },
  {
    "id": "hi-025",
    "title": "वयं रक्षामः",
    "author": "आचार्य चतुरसेन",
    "language": "Hindi",
    "genre": "Historical fiction",
    "why": "मिथक और प्राचीन परम्पराओं की पुनर्कथा",
    "priority": "Explore"
  },
  {
    "id": "hi-026",
    "title": "कामायनी",
    "author": "जयशंकर प्रसाद",
    "language": "Hindi",
    "genre": "Epic poem",
    "why": "मन, भावना और दर्शन",
    "priority": "Explore"
  },
  {
    "id": "hi-027",
    "title": "आँसू",
    "author": "जयशंकर प्रसाद",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "विरह और संवेदना",
    "priority": "Explore"
  },
  {
    "id": "hi-028",
    "title": "यामा",
    "author": "महादेवी वर्मा",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "आत्मानुभूति और करुणा",
    "priority": "Explore"
  },
  {
    "id": "hi-029",
    "title": "श्रृंखला की कड़ियाँ",
    "author": "महादेवी वर्मा",
    "language": "Hindi",
    "genre": "Essays",
    "why": "स्त्री, समाज और स्वतंत्रता",
    "priority": "Explore"
  },
  {
    "id": "hi-030",
    "title": "रश्मिरथी",
    "author": "रामधारी सिंह दिनकर",
    "language": "Hindi",
    "genre": "Epic poem",
    "why": "कर्ण, गरिमा और सामाजिक न्याय",
    "priority": "Explore"
  },
  {
    "id": "hi-031",
    "title": "कुरुक्षेत्र",
    "author": "रामधारी सिंह दिनकर",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "युद्ध, शान्ति और नैतिक प्रश्न",
    "priority": "Explore"
  },
  {
    "id": "hi-032",
    "title": "मधुशाला",
    "author": "हरिवंश राय बच्चन",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "जीवन, प्रतीक और लय",
    "priority": "Explore"
  },
  {
    "id": "hi-033",
    "title": "निशा निमंत्रण",
    "author": "हरिवंश राय बच्चन",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "अकेलापन और आत्मचिन्तन",
    "priority": "Explore"
  },
  {
    "id": "hi-034",
    "title": "भारत-भारती",
    "author": "मैथिलीशरण गुप्त",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "राष्ट्र, इतिहास और आत्ममंथन",
    "priority": "Explore"
  },
  {
    "id": "hi-035",
    "title": "साकेत",
    "author": "मैथिलीशरण गुप्त",
    "language": "Hindi",
    "genre": "Epic poem",
    "why": "रामकथा को उर्मिला की दृष्टि से देखना",
    "priority": "Explore"
  },
  {
    "id": "hi-036",
    "title": "परिमल",
    "author": "सूर्यकांत त्रिपाठी निराला",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "आधुनिक हिन्दी कविता",
    "priority": "Explore"
  },
  {
    "id": "hi-037",
    "title": "अनामिका",
    "author": "सूर्यकांत त्रिपाठी निराला",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "स्वतंत्र काव्य-स्वर और प्रयोग",
    "priority": "Explore"
  },
  {
    "id": "hi-038",
    "title": "अंधेरे में",
    "author": "गजानन माधव मुक्तिबोध",
    "language": "Hindi",
    "genre": "Long poem",
    "why": "आत्म-संघर्ष और सामाजिक चेतना",
    "priority": "Explore"
  },
  {
    "id": "hi-039",
    "title": "चाँद का मुँह टेढ़ा है",
    "author": "गजानन माधव मुक्तिबोध",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "जटिल आधुनिकता और राजनीति",
    "priority": "Explore"
  },
  {
    "id": "hi-040",
    "title": "साये में धूप",
    "author": "दुष्यंत कुमार",
    "language": "Hindi",
    "genre": "Ghazal/poetry",
    "why": "जनभाषा, बेचैनी और सत्ता से सवाल",
    "priority": "Explore"
  },
  {
    "id": "hi-041",
    "title": "कविता के बहाने",
    "author": "कुँवर नारायण",
    "language": "Hindi",
    "genre": "Poetry/essays",
    "why": "कविता और मानवीय विवेक",
    "priority": "Explore"
  },
  {
    "id": "hi-042",
    "title": "प्रतिनिधि कविताएँ",
    "author": "नागार्जुन",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "लोकजीवन और राजनीतिक व्यंग्य",
    "priority": "Explore"
  },
  {
    "id": "hi-043",
    "title": "अकाल और उसके बाद",
    "author": "नागार्जुन",
    "language": "Hindi",
    "genre": "Poetry",
    "why": "भूख, श्रम और समाज",
    "priority": "Explore"
  },
  {
    "id": "hi-044",
    "title": "तमस के बाद: चयनित कहानियाँ",
    "author": "भीष्म साहनी",
    "language": "Hindi",
    "genre": "Short stories",
    "why": "इतिहास और रोजमर्रा के मनुष्य",
    "priority": "Explore"
  },
  {
    "id": "hi-045",
    "title": "परिंदे",
    "author": "निर्मल वर्मा",
    "language": "Hindi",
    "genre": "Short stories",
    "why": "एकाकीपन और सूक्ष्म मनोविज्ञान",
    "priority": "Explore"
  },
  {
    "id": "hi-046",
    "title": "वे दिन",
    "author": "निर्मल वर्मा",
    "language": "Hindi",
    "genre": "Novel",
    "why": "स्मृति, युवावस्था और विस्थापन",
    "priority": "Explore"
  },
  {
    "id": "hi-047",
    "title": "कुरु कुरु स्वाहा",
    "author": "मनोहर श्याम जोशी",
    "language": "Hindi",
    "genre": "Novel",
    "why": "प्रयोग, व्यंग्य और आधुनिक जीवन",
    "priority": "Explore"
  },
  {
    "id": "hi-048",
    "title": "हमजाद",
    "author": "मनोहर श्याम जोशी",
    "language": "Hindi",
    "genre": "Novel",
    "why": "पहचान और मनोवैज्ञानिक कथा",
    "priority": "Explore"
  },
  {
    "id": "hi-049",
    "title": "अज्ञेय: प्रतिनिधि कहानियाँ",
    "author": "अज्ञेय",
    "language": "Hindi",
    "genre": "Short stories",
    "why": "आधुनिक संवेदना और व्यक्ति",
    "priority": "Explore"
  },
  {
    "id": "hi-050",
    "title": "आवारा मसीहा",
    "author": "विष्णु प्रभाकर",
    "language": "Hindi",
    "genre": "Biography",
    "why": "शरतचन्द्र चट्टोपाध्याय का जीवन",
    "priority": "Explore"
  },
  {
    "id": "en-001",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "language": "English",
    "genre": "Fiction",
    "why": "Purpose, courage and the search for meaning",
    "priority": "Core"
  },
  {
    "id": "en-002",
    "title": "Atomic Habits",
    "author": "James Clear",
    "language": "English",
    "genre": "Behaviour",
    "why": "Small systems, consistency and habit design",
    "priority": "Core"
  },
  {
    "id": "en-003",
    "title": "Man’s Search for Meaning",
    "author": "Viktor E. Frankl",
    "language": "English",
    "genre": "Psychology/memoir",
    "why": "Meaning, responsibility and resilience",
    "priority": "Core"
  },
  {
    "id": "en-004",
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "language": "English",
    "genre": "Philosophy",
    "why": "Self-command and perspective",
    "priority": "Core"
  },
  {
    "id": "en-005",
    "title": "Letters from a Stoic",
    "author": "Seneca",
    "language": "English",
    "genre": "Philosophy",
    "why": "Time, adversity and practical ethics",
    "priority": "Core"
  },
  {
    "id": "en-006",
    "title": "The Republic",
    "author": "Plato",
    "language": "English",
    "genre": "Philosophy",
    "why": "Justice, education and political order",
    "priority": "Core"
  },
  {
    "id": "en-007",
    "title": "The Story of Philosophy",
    "author": "Will Durant",
    "language": "English",
    "genre": "Philosophy",
    "why": "A readable map of major thinkers",
    "priority": "Core"
  },
  {
    "id": "en-008",
    "title": "Sophie’s World",
    "author": "Jostein Gaarder",
    "language": "English",
    "genre": "Philosophical fiction",
    "why": "Philosophy through a story",
    "priority": "Core"
  },
  {
    "id": "en-009",
    "title": "The Art of Thinking Clearly",
    "author": "Rolf Dobelli",
    "language": "English",
    "genre": "Decision-making",
    "why": "Common cognitive errors",
    "priority": "Core"
  },
  {
    "id": "en-010",
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "language": "English",
    "genre": "Psychology",
    "why": "Judgment, bias and decisions",
    "priority": "Core"
  },
  {
    "id": "en-011",
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "language": "English",
    "genre": "Personal finance",
    "why": "Behaviour matters more than formulas",
    "priority": "Core"
  },
  {
    "id": "en-012",
    "title": "The Richest Man in Babylon",
    "author": "George S. Clason",
    "language": "English",
    "genre": "Personal finance",
    "why": "Classic lessons in saving and discipline",
    "priority": "Core"
  },
  {
    "id": "en-013",
    "title": "The Intelligent Investor",
    "author": "Benjamin Graham",
    "language": "English",
    "genre": "Investing",
    "why": "Value investing and margin of safety",
    "priority": "Core"
  },
  {
    "id": "en-014",
    "title": "The Little Book of Common Sense Investing",
    "author": "John C. Bogle",
    "language": "English",
    "genre": "Investing",
    "why": "Costs, diversification and long-term thinking",
    "priority": "Core"
  },
  {
    "id": "en-015",
    "title": "I Will Teach You to Be Rich",
    "author": "Ramit Sethi",
    "language": "English",
    "genre": "Personal finance",
    "why": "Practical systems for money management",
    "priority": "Core"
  },
  {
    "id": "en-016",
    "title": "Deep Work",
    "author": "Cal Newport",
    "language": "English",
    "genre": "Productivity",
    "why": "Focus in a distracted world",
    "priority": "Explore"
  },
  {
    "id": "en-017",
    "title": "So Good They Can’t Ignore You",
    "author": "Cal Newport",
    "language": "English",
    "genre": "Career",
    "why": "Skill-building over vague passion",
    "priority": "Explore"
  },
  {
    "id": "en-018",
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "language": "English",
    "genre": "Personal development",
    "why": "Principles, priorities and responsibility",
    "priority": "Explore"
  },
  {
    "id": "en-019",
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "language": "English",
    "genre": "Communication",
    "why": "Interpersonal awareness and influence",
    "priority": "Explore"
  },
  {
    "id": "en-020",
    "title": "Influence",
    "author": "Robert B. Cialdini",
    "language": "English",
    "genre": "Psychology",
    "why": "Persuasion and its ethical use",
    "priority": "Explore"
  },
  {
    "id": "en-021",
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "language": "English",
    "genre": "Design/technology",
    "why": "Human-centred systems and usability",
    "priority": "Explore"
  },
  {
    "id": "en-022",
    "title": "The Phoenix Project",
    "author": "Gene Kim, Kevin Behr and George Spafford",
    "language": "English",
    "genre": "Technology/business fiction",
    "why": "IT operations and systems thinking",
    "priority": "Explore"
  },
  {
    "id": "en-023",
    "title": "The Innovators",
    "author": "Walter Isaacson",
    "language": "English",
    "genre": "Technology history",
    "why": "People and collaboration behind computing",
    "priority": "Explore"
  },
  {
    "id": "en-024",
    "title": "The Code Book",
    "author": "Simon Singh",
    "language": "English",
    "genre": "Science/history",
    "why": "Cryptography and the history of codes",
    "priority": "Explore"
  },
  {
    "id": "en-025",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "language": "English",
    "genre": "History",
    "why": "A broad, debated synthesis of human history",
    "priority": "Explore"
  },
  {
    "id": "en-026",
    "title": "India After Gandhi",
    "author": "Ramachandra Guha",
    "language": "English",
    "genre": "Indian history",
    "why": "Modern India and its democratic experiment",
    "priority": "Explore"
  },
  {
    "id": "en-027",
    "title": "The Discovery of India",
    "author": "Jawaharlal Nehru",
    "language": "English",
    "genre": "Indian history",
    "why": "A nationalist intellectual’s view of India’s past",
    "priority": "Explore"
  },
  {
    "id": "en-028",
    "title": "The Argumentative Indian",
    "author": "Amartya Sen",
    "language": "English",
    "genre": "Essays/history",
    "why": "Pluralism, debate and Indian intellectual traditions",
    "priority": "Explore"
  },
  {
    "id": "en-029",
    "title": "An Era of Darkness",
    "author": "Shashi Tharoor",
    "language": "English",
    "genre": "Colonial history",
    "why": "A polemical account of British rule in India",
    "priority": "Explore"
  },
  {
    "id": "en-030",
    "title": "The Wonder That Was India",
    "author": "A. L. Basham",
    "language": "English",
    "genre": "Indian history",
    "why": "Classic introduction to ancient Indian civilisation",
    "priority": "Explore"
  },
  {
    "id": "en-031",
    "title": "The Last Mughal",
    "author": "William Dalrymple",
    "language": "English",
    "genre": "Indian history",
    "why": "Delhi and the 1857 uprising",
    "priority": "Explore"
  },
  {
    "id": "en-032",
    "title": "Midnight’s Children",
    "author": "Salman Rushdie",
    "language": "English",
    "genre": "Novel",
    "why": "Personal identity intertwined with modern India",
    "priority": "Explore"
  },
  {
    "id": "en-033",
    "title": "The God of Small Things",
    "author": "Arundhati Roy",
    "language": "English",
    "genre": "Novel",
    "why": "Family, caste and social boundaries",
    "priority": "Explore"
  },
  {
    "id": "en-034",
    "title": "The White Tiger",
    "author": "Aravind Adiga",
    "language": "English",
    "genre": "Novel",
    "why": "Class, ambition and inequality",
    "priority": "Explore"
  },
  {
    "id": "en-035",
    "title": "Train to Pakistan",
    "author": "Khushwant Singh",
    "language": "English",
    "genre": "Novel",
    "why": "Partition through one village",
    "priority": "Explore"
  },
  {
    "id": "en-036",
    "title": "A Fine Balance",
    "author": "Rohinton Mistry",
    "language": "English",
    "genre": "Novel",
    "why": "Friendship, power and social hardship",
    "priority": "Explore"
  },
  {
    "id": "en-037",
    "title": "The Guide",
    "author": "R. K. Narayan",
    "language": "English",
    "genre": "Novel",
    "why": "Identity, reinvention and moral ambiguity",
    "priority": "Explore"
  },
  {
    "id": "en-038",
    "title": "The Inheritance of Loss",
    "author": "Kiran Desai",
    "language": "English",
    "genre": "Novel",
    "why": "Migration, class and belonging",
    "priority": "Explore"
  },
  {
    "id": "en-039",
    "title": "Tomb of Sand",
    "author": "Geetanjali Shree, translated by Daisy Rockwell",
    "language": "English",
    "genre": "Novel/translation",
    "why": "Age, gender, borders and memory",
    "priority": "Explore"
  },
  {
    "id": "en-040",
    "title": "The Namesake",
    "author": "Jhumpa Lahiri",
    "language": "English",
    "genre": "Novel",
    "why": "Migration and belonging",
    "priority": "Explore"
  },
  {
    "id": "en-041",
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "language": "English",
    "genre": "Novella",
    "why": "Endurance, pride and defeat",
    "priority": "Explore"
  },
  {
    "id": "en-042",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "language": "English",
    "genre": "Novel",
    "why": "Justice, empathy and prejudice",
    "priority": "Explore"
  },
  {
    "id": "en-043",
    "title": "1984",
    "author": "George Orwell",
    "language": "English",
    "genre": "Dystopian fiction",
    "why": "Power, language and surveillance",
    "priority": "Explore"
  },
  {
    "id": "en-044",
    "title": "Animal Farm",
    "author": "George Orwell",
    "language": "English",
    "genre": "Political satire",
    "why": "Revolution and the corruption of ideals",
    "priority": "Explore"
  },
  {
    "id": "en-045",
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "language": "English",
    "genre": "Dystopian fiction",
    "why": "Comfort, control and freedom",
    "priority": "Explore"
  },
  {
    "id": "en-046",
    "title": "The Stranger",
    "author": "Albert Camus",
    "language": "English",
    "genre": "Novel",
    "why": "Absurdity and social expectation",
    "priority": "Explore"
  },
  {
    "id": "en-047",
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "language": "English",
    "genre": "Novel",
    "why": "Guilt, conscience and moral reasoning",
    "priority": "Explore"
  },
  {
    "id": "en-048",
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "language": "English",
    "genre": "Novel",
    "why": "Faith, doubt, freedom and responsibility",
    "priority": "Explore"
  },
  {
    "id": "en-049",
    "title": "The Little Prince",
    "author": "Antoine de Saint-Exupéry",
    "language": "English",
    "genre": "Fable",
    "why": "Friendship, attention and what matters",
    "priority": "Explore"
  },
  {
    "id": "en-050",
    "title": "Gitanjali",
    "author": "Rabindranath Tagore",
    "language": "English",
    "genre": "Poetry",
    "why": "Devotion, nature and inner life",
    "priority": "Explore"
  }
];
