export interface Planet {
  name: string;
  sanskritName: string;
  description: string;
  signification: string;
  element: string;
  gender: string;
  day: string;
  color: string;
  metal: string;
  direction: string;
  iconUrl: string;
  imageUrl: string;
  positiveEffects: string[];
  challengingEffects: string[];
  remedies: string[];
  mythology: string;
}

export const planets: Planet[] = [
  {
    name: "Sun (Surya)",
    sanskritName: "Surya",
    description: "The Sun represents the soul, the self, and the father figure. As the center of our solar system, the Sun is the life-giver, providing energy, warmth, and light. In Vedic astrology, the Sun is considered a royal planet that governs authority, power, and leadership.",
    signification: "The Sun signifies vitality, soul purpose, ego, health, willpower, authority, and male influences in our lives, particularly the father figure. It represents government positions, political power, and career paths that involve leadership and visibility.",
    element: "Fire",
    gender: "Male",
    day: "Sunday",
    color: "Copper Red",
    metal: "Gold",
    direction: "East",
    iconUrl: "https://images.pexels.com/photos/19801768/pexels-photo-19801768/free-photo-of-painting-of-a-golden-hindu-deity.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Strong leadership abilities",
      "Clear sense of purpose",
      "Vitality and good health",
      "Recognition and respect",
      "Self-confidence and courage"
    ],
    challengingEffects: [
      "Excessive pride or ego",
      "Authoritarian tendencies",
      "Health issues related to heart or eyes",
      "Father-related difficulties",
      "Problems with authority figures"
    ],
    remedies: [
      "Offer water to the rising Sun while reciting the Aditya Hridayam or Surya mantras",
      "Wear copper or gold on the ring finger",
      "Fast on Sundays",
      "Donate wheat, jaggery, copper or gold to temples or the needy",
      "Worship Lord Shiva, who is considered the lord of the Sun"
    ],
    mythology: "In Hindu mythology, Surya is depicted riding a chariot drawn by seven horses, symbolizing the seven days of the week and the seven colors of the rainbow. He is the son of sage Kashyapa and Aditi. Surya is often shown with a lotus flower in both hands, representing purity and divine beauty. The Surya Namaskar (Sun Salutation) yoga practice honors the Sun god."
  },
  {
    name: "Moon (Chandra)",
    sanskritName: "Chandra",
    description: "The Moon represents the mind, emotions, and the mother figure. It governs our emotional responses, intuition, and the unconscious mind. In Vedic astrology, the Moon is considered extremely important as it moves the fastest among all planets and directly influences our daily emotional state.",
    signification: "The Moon signifies the mind, emotions, motherhood, nurturing, comfort, sensitivity, imagination, and all things related to water and fluids. It represents our ability to care for others and our need for emotional security and comfort.",
    element: "Water",
    gender: "Female",
    day: "Monday",
    color: "White",
    metal: "Silver",
    direction: "Northwest",
    iconUrl: "https://images.pexels.com/photos/7683577/pexels-photo-7683577.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Emotional sensitivity and intuition",
      "Nurturing and caring nature",
      "Good imagination and creativity",
      "Strong connection with mother",
      "Adaptability and receptivity"
    ],
    challengingEffects: [
      "Emotional instability or mood swings",
      "Oversensitivity or hypersensitivity",
      "Mental stress and anxiety",
      "Mother-related issues",
      "Insomnia or digestive problems"
    ],
    remedies: [
      "Offer water to the Moon on Mondays while reciting Chandra mantras",
      "Wear silver, especially on Mondays",
      "Donate rice, milk, and white clothes to the needy",
      "Feed dogs, especially female dogs",
      "Worship Goddess Parvati, considered the deity of the Moon"
    ],
    mythology: "In Hindu mythology, Chandra (Moon) was born during the churning of the cosmic ocean. He is depicted riding a chariot drawn by antelopes. Chandra was married to the 27 daughters of Daksha (representing the 27 Nakshatras or lunar mansions), but he favored Rohini, causing jealousy among his other wives. Daksha cursed him to wane, but Lord Shiva partially relieved the curse, resulting in the waxing and waning phases of the Moon."
  },
  {
    name: "Mars (Mangal)",
    sanskritName: "Mangala",
    description: "Mars represents energy, courage, passion, and action. It governs our drive, determination, and physical strength. In Vedic astrology, Mars is considered a fiery and aggressive planet that influences our ability to fight for what we want and defend what we have.",
    signification: "Mars signifies energy, courage, siblings (especially brothers), fighting spirit, passion, aggression, land, property, and military pursuits. It represents our ability to take initiative, our competitive nature, and our capacity for direct action.",
    element: "Fire",
    gender: "Male",
    day: "Tuesday",
    color: "Red",
    metal: "Copper",
    direction: "South",
    iconUrl: "https://images.pexels.com/photos/19801768/pexels-photo-19801768/free-photo-of-painting-of-a-golden-hindu-deity.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/73910/mars-planet-red-space-73910.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Courage and bravery",
      "Physical strength and energy",
      "Leadership abilities",
      "Technical and mechanical skills",
      "Passionate and dynamic nature"
    ],
    challengingEffects: [
      "Aggression and anger issues",
      "Impulsiveness and recklessness",
      "Accidents and injuries",
      "Conflicts with siblings",
      "Property disputes or losses"
    ],
    remedies: [
      "Recite the Hanuman Chalisa or Mars mantras on Tuesdays",
      "Wear coral (moonga) or copper on the ring finger",
      "Donate red lentils, sweet dishes, copper items, or red clothing",
      "Feed monkeys or dogs",
      "Worship Lord Hanuman or Lord Kartikeya"
    ],
    mythology: "In Hindu mythology, Mangala (Mars) is known as Angaraka or Bhauma, the son of Earth (Bhumi). He is depicted as a red-complexioned deity riding a ram, symbolizing strength and fieriness. Mars is associated with Lord Kartikeya (also known as Murugan or Skanda), the commander of the army of the gods, and with Lord Hanuman, who embodies strength, courage, and devotion."
  },
  {
    name: "Mercury (Budha)",
    sanskritName: "Budha",
    description: "Mercury represents intellect, communication, analysis, and learning. It governs our mental abilities, curiosity, and the way we express ourselves through speech and writing. In Vedic astrology, Mercury is considered a versatile and adaptable planet that influences our rational thinking and problem-solving abilities.",
    signification: "Mercury signifies intelligence, communication, education, mathematics, business, trade, short journeys, childhood friends, and analytical abilities. It represents our cognitive processes, speech patterns, and our ability to understand and convey complex information.",
    element: "Earth",
    gender: "Neutral",
    day: "Wednesday",
    color: "Green",
    metal: "Bronze",
    direction: "North",
    iconUrl: "https://images.pexels.com/photos/7683577/pexels-photo-7683577.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Sharp intelligence and quick learning",
      "Excellent communication skills",
      "Good in mathematics and sciences",
      "Adaptability and versatility",
      "Business acumen and negotiation skills"
    ],
    challengingEffects: [
      "Overthinking and anxiety",
      "Nervousness and restlessness",
      "Speech problems or communicative disorders",
      "Indecisiveness and fickleness",
      "Skin problems or allergies"
    ],
    remedies: [
      "Recite Mercury mantras or Vishnu Sahasranama on Wednesdays",
      "Wear emerald (panna) on the little finger",
      "Donate green moong dal, green clothes, or books",
      "Feed green vegetables or grains to birds",
      "Worship Lord Vishnu"
    ],
    mythology: "In Hindu mythology, Budha (Mercury) is the son of Moon (Chandra) and Tara, the wife of Jupiter (Brihaspati). His birth was controversial as Tara had an affair with Chandra. Budha is depicted as green or emerald-colored, riding a lion or eagle, symbolizing intelligence and keen observation. He is considered intelligent and diplomatic, able to navigate complex situations with cleverness."
  },
  {
    name: "Jupiter (Guru)",
    sanskritName: "Brihaspati",
    description: "Jupiter represents wisdom, expansion, prosperity, and spirituality. It governs our ethical values, higher learning, and our capacity for growth and abundance. In Vedic astrology, Jupiter is considered the most benefic planet, bringing good fortune, knowledge, and spiritual guidance.",
    signification: "Jupiter signifies wisdom, knowledge, spirituality, philosophy, children, teachers, higher education, wealth, and expansion. It represents our moral compass, religious beliefs, and ability to see the bigger picture and pursue meaningful growth.",
    element: "Ether",
    gender: "Male",
    day: "Thursday",
    color: "Yellow",
    metal: "Gold",
    direction: "Northeast",
    iconUrl: "https://images.pexels.com/photos/19801768/pexels-photo-19801768/free-photo-of-painting-of-a-golden-hindu-deity.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Wisdom and good judgment",
      "Spiritual inclination and ethics",
      "Prosperity and wealth",
      "Good education and teaching abilities",
      "Blessed with children and good progeny"
    ],
    challengingEffects: [
      "Overoptimism or overconfidence",
      "Issues with children or fertility",
      "Educational challenges",
      "Financial overextension",
      "Religious dogmatism"
    ],
    remedies: [
      "Recite Jupiter mantras or Vishnu Sahasranama on Thursdays",
      "Wear yellow sapphire (pukhraj) on the index finger",
      "Donate yellow clothes, gram, turmeric, or gold",
      "Feed yellow food to cows or offer bananas at temples",
      "Worship Lord Vishnu or Lord Dakshinamurthy"
    ],
    mythology: "In Hindu mythology, Brihaspati (Jupiter) is the guru or preceptor of the gods. He is depicted as gold-colored, wearing yellow clothes, riding an elephant or a chariot drawn by eight horses. He is the son of Rishi Angiras and represents wisdom, sacred knowledge, and eloquence. Brihaspati is considered the personification of the planet Jupiter and is worshipped for knowledge and prosperity."
  },
  {
    name: "Venus (Shukra)",
    sanskritName: "Shukra",
    description: "Venus represents love, beauty, pleasure, and relationships. It governs our capacity for harmony, artistic appreciation, and sensual enjoyment. In Vedic astrology, Venus is considered a benefic planet that brings comfort, luxury, and balance to our lives.",
    signification: "Venus signifies love, marriage, relationships, beauty, art, luxury, comfort, vehicles, and sensual pleasures. It represents our capacity for enjoyment, our aesthetic sense, and our ability to create and maintain harmony in relationships.",
    element: "Water",
    gender: "Female",
    day: "Friday",
    color: "White",
    metal: "Silver",
    direction: "Southeast",
    iconUrl: "https://images.pexels.com/photos/7683577/pexels-photo-7683577.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/39562/the-sun-sun-fireball-solar-flare-39562.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Loving and harmonious relationships",
      "Artistic talents and creativity",
      "Beauty and attractive appearance",
      "Comfort and luxurious lifestyle",
      "Diplomatic and balanced nature"
    ],
    challengingEffects: [
      "Excessive indulgence and sensuality",
      "Marital problems or delays",
      "Vanity and materialism",
      "Issues with female relatives",
      "Kidney or reproductive system problems"
    ],
    remedies: [
      "Recite Venus mantras or Lakshmi mantras on Fridays",
      "Wear diamond (heera) or white sapphire on the middle finger",
      "Donate white clothes, rice, silver, or white flowers",
      "Feed cows with rice mixed with sugar",
      "Worship Goddess Lakshmi or Goddess Parvati"
    ],
    mythology: "In Hindu mythology, Shukra (Venus) is the son of Bhrigu and the guru of the asuras (demons). He is depicted as fair-complexioned, middle-aged, with a pleasant countenance, riding a white horse or a chariot drawn by eight horses. Shukra possessed the knowledge of Sanjivani Vidya, the ability to revive the dead. He is associated with fertility, reproduction, and material pleasures."
  },
  {
    name: "Saturn (Shani)",
    sanskritName: "Shani",
    description: "Saturn represents discipline, responsibility, limitations, and karmic lessons. It governs our capacity for hard work, perseverance, and facing life's challenges. In Vedic astrology, Saturn is considered a stern teacher who brings necessary tests to strengthen our character and resolve our karmic debts.",
    signification: "Saturn signifies discipline, responsibility, delay, old age, service, labor, longevity, grief, chronic illness, and karmic lessons. It represents the principle of limitation and structure in our lives, teaching us patience and perseverance through challenges.",
    element: "Air",
    gender: "Neutral",
    day: "Saturday",
    color: "Black, Dark Blue",
    metal: "Iron, Lead",
    direction: "West",
    iconUrl: "https://images.pexels.com/photos/19801768/pexels-photo-19801768/free-photo-of-painting-of-a-golden-hindu-deity.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/73910/mars-planet-red-space-73910.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Discipline and strong work ethic",
      "Responsibility and reliability",
      "Patience and perseverance",
      "Practical wisdom gained through experience",
      "Spiritual growth through overcoming challenges"
    ],
    challengingEffects: [
      "Delays and obstacles",
      "Depression or melancholy",
      "Physical ailments, especially related to bones and joints",
      "Separation or loneliness",
      "Financial difficulties or poverty"
    ],
    remedies: [
      "Recite Hanuman Chalisa or Saturn mantras on Saturdays",
      "Wear blue sapphire (neelam) or iron ring on the middle finger",
      "Donate black sesame seeds, oil, iron items, or black clothes",
      "Feed black dogs or crows",
      "Worship Lord Hanuman or Lord Shiva"
    ],
    mythology: "In Hindu mythology, Shani (Saturn) is the son of Surya (Sun) and Chhaya (Shadow). He is depicted as dark-complexioned, riding a crow or a chariot pulled by crows. Shani is known for his slow movement and is considered the greatest teacher and deliverer of justice in the planetary cabinet. His gaze is believed to be powerful, bringing tests and challenges to those it falls upon, ultimately leading to spiritual growth."
  },
  {
    name: "Rahu (North Node)",
    sanskritName: "Rahu",
    description: "Rahu represents obsession, illusion, and worldly desires. It is a shadow planet (mathematical point) that creates eclipses when aligned with the Sun and Moon. In Vedic astrology, Rahu is associated with material ambition, sudden changes, and unconventional paths that can lead to either great success or significant challenges.",
    signification: "Rahu signifies worldly desires, ambition, unconventional pursuits, foreign influences, technological advancements, and sudden unexpected events. It represents our insatiable cravings and the areas where we seek growth and expansion, often through unusual or revolutionary means.",
    element: "Air",
    gender: "Male",
    day: "Saturday",
    color: "Smoky, Black",
    metal: "Lead, Mixed Metals",
    direction: "Southwest",
    iconUrl: "https://images.pexels.com/photos/19801768/pexels-photo-19801768/free-photo-of-painting-of-a-golden-hindu-deity.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/39562/the-sun-sun-fireball-solar-flare-39562.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Material success and worldly achievements",
      "Innovative thinking and unconventional approaches",
      "Success in foreign lands or with foreign connections",
      "Technological aptitude and futuristic vision",
      "Sudden opportunities and lucky breaks"
    ],
    challengingEffects: [
      "Obsessions and addictions",
      "Confusion and deception",
      "Unrealistic ambitions or desires",
      "Sudden disruptions or changes",
      "Psychological disturbances or phobias"
    ],
    remedies: [
      "Recite Durga Saptashati or Rahu mantras",
      "Wear hessonite garnet (gomed) on the middle finger",
      "Donate brown or mixed colored clothes, sesame seeds, or lead items",
      "Feed crows or donate to orphanages",
      "Worship Lord Ganesha or Goddess Durga"
    ],
    mythology: "In Hindu mythology, Rahu is depicted as a serpent's head without a body. According to legend, when the gods and demons churned the cosmic ocean for amrita (the nectar of immortality), Rahu, a demon, disguised himself as a god to drink it. The Sun and Moon recognized him and alerted Vishnu, who severed his head with his discus. Since Rahu had already consumed some nectar, his severed head became immortal and is said to swallow the Sun and Moon periodically, causing eclipses."
  },
  {
    name: "Ketu (South Node)",
    sanskritName: "Ketu",
    description: "Ketu represents spiritual enlightenment, detachment, and past-life karmas. Like Rahu, it is a shadow planet (mathematical point) involved in eclipses. In Vedic astrology, Ketu is associated with spiritual growth, liberation from material desires, and the wisdom gained from past experiences.",
    signification: "Ketu signifies spirituality, moksha (liberation), psychic abilities, abstract thinking, detachment, isolation, and sudden disconnections. It represents our subconscious knowledge from past lives and areas where we need to detach and seek spiritual growth rather than material gain.",
    element: "Fire",
    gender: "Neutral",
    day: "Tuesday",
    color: "Smoky Brown",
    metal: "Mixed Metals",
    direction: "Northwest",
    iconUrl: "https://images.pexels.com/photos/7683577/pexels-photo-7683577.jpeg?auto=compress&cs=tinysrgb&h=350",
    imageUrl: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=600",
    positiveEffects: [
      "Spiritual insight and wisdom",
      "Liberation from material attachments",
      "Psychic abilities and intuition",
      "Healing abilities and interest in alternative medicines",
      "Technical and scientific knowledge"
    ],
    challengingEffects: [
      "Confusion and lack of direction",
      "Isolation or disconnection from others",
      "Escapist tendencies",
      "Sudden losses or separations",
      "Health issues, especially related to the digestive system"
    ],
    remedies: [
      "Recite Ganesha mantras or Ketu mantras",
      "Wear cat's eye gemstone (lehsunia) on the middle finger",
      "Donate multicolored clothes, grains, or mix metals",
      "Feed dogs or donate to orphanages",
      "Worship Lord Ganesha or Lord Ganesha"
    ],
    mythology: "In Hindu mythology, Ketu is depicted as a serpent's tail without a head, complementing Rahu. When Vishnu severed the demon Rahu's head while he was drinking the nectar of immortality, his body became Ketu. While Rahu represents materialistic desires, Ketu represents spiritual liberation and detachment. Ketu is often associated with Ganesha and represents wisdom that transcends ordinary understanding."
  }
];