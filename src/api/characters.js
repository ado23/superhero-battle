const allCharacters = [
  {
    id: 1,
    name: "A-Bomb",
    slug: "1-a-bomb",
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'8", "203 cm"],
      weight: ["980 lb", "441 kg"],
      eyeColor: "Yellow",
      hairColor: "No Hair"
    },
    biography: {
      fullName: "Richard Milhouse Jones",
      alterEgos: "No alter egos found.",
      aliases: ["Rick Jones"],
      placeOfBirth: "Scarsdale, Arizona",
      firstAppearance: "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    work: {
      occupation: "Musician, adventurer, author; formerly talk show host",
      base: "-"
    },
    connections: {
      groupAffiliation:
        "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
      relatives:
        "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg"
    }
  },
  {
    id: 2,
    name: "Abe Sapien",
    slug: "2-abe-sapien",
    powerstats: {
      intelligence: 88,
      strength: 28,
      speed: 35,
      durability: 65,
      power: 100,
      combat: 85
    },
    appearance: {
      gender: "Male",
      race: "Icthyo Sapien",
      height: ["6'3", "191 cm"],
      weight: ["145 lb", "65 kg"],
      eyeColor: "Blue",
      hairColor: "No Hair"
    },
    biography: {
      fullName: "Abraham Sapien",
      alterEgos: "No alter egos found.",
      aliases: ["Langdon Everett Caul", "Abraham Sapien", "Langdon Caul"],
      placeOfBirth: "-",
      firstAppearance: "Hellboy: Seed of Destruction (1993)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    work: {
      occupation: "Paranormal Investigator",
      base: "-"
    },
    connections: {
      groupAffiliation: "Bureau for Paranormal Research and Defense",
      relatives: "Edith Howard (wife, deceased)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg"
    }
  },
  {
    id: 3,
    name: "Abin Sur",
    slug: "3-abin-sur",
    powerstats: {
      intelligence: 50,
      strength: 90,
      speed: 53,
      durability: 64,
      power: 99,
      combat: 65
    },
    appearance: {
      gender: "Male",
      race: "Ungaran",
      height: ["6'1", "185 cm"],
      weight: ["200 lb", "90 kg"],
      eyeColor: "Blue",
      hairColor: "No Hair"
    },
    biography: {
      fullName: "",
      alterEgos: "No alter egos found.",
      aliases: ["Lagzia"],
      placeOfBirth: "Ungara",
      firstAppearance: "Showcase #22 (October, 1959)",
      publisher: "DC Comics",
      alignment: "good"
    },
    work: {
      occupation: "Green Lantern, former history professor",
      base: "Oa"
    },
    connections: {
      groupAffiliation: "Green Lantern Corps, Black Lantern Corps",
      relatives:
        "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg"
    }
  },
  {
    id: 4,
    name: "Abomination",
    slug: "4-abomination",
    powerstats: {
      intelligence: 63,
      strength: 80,
      speed: 53,
      durability: 90,
      power: 62,
      combat: 95
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'8", "203 cm"],
      weight: ["980 lb", "441 kg"],
      eyeColor: "Green",
      hairColor: "No Hair"
    },
    biography: {
      fullName: "Emil Blonsky",
      alterEgos: "No alter egos found.",
      aliases: ["Agent R-7", "Ravager of Worlds"],
      placeOfBirth: "Zagreb, Yugoslavia",
      firstAppearance: "Tales to Astonish #90",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    work: {
      occupation: "Ex-Spy",
      base: "Mobile"
    },
    connections: {
      groupAffiliation:
        "former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
      relatives: "Nadia Dornova Blonsky (wife, separated)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/4-abomination.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/4-abomination.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/4-abomination.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/4-abomination.jpg"
    }
  },
  {
    id: 5,
    name: "Abraxas",
    slug: "5-abraxas",
    powerstats: {
      intelligence: 88,
      strength: 63,
      speed: 83,
      durability: 100,
      power: 100,
      combat: 55
    },
    appearance: {
      gender: "Male",
      race: "Cosmic Entity",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "Blue",
      hairColor: "Black"
    },
    biography: {
      fullName: "Abraxas",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "Within Eternity",
      firstAppearance: "Fantastic Four Annual #2001",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    work: {
      occupation: "Dimensional destroyer",
      base: "-"
    },
    connections: {
      groupAffiliation: "Cosmic Beings",
      relatives: 'Eternity ("Father")'
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/5-abraxas.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/5-abraxas.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/5-abraxas.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/5-abraxas.jpg"
    }
  },
  {
    id: 88,
    name: "Bird-Brain",
    slug: "88-bird-brain",
    powerstats: {
      intelligence: 25,
      strength: 10,
      speed: 35,
      durability: 28,
      power: 21,
      combat: 42
    },
    appearance: {
      gender: "-",
      race: null,
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "-",
      hairColor: "-"
    },
    biography: {
      fullName: "",
      alterEgos: "No alter egos found.",
      aliases: ["Bird-Boy"],
      placeOfBirth: "-",
      firstAppearance: "The New Mutants #56 (October, 1987)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    work: {
      occupation: "-",
      base: "-"
    },
    connections: {
      groupAffiliation: "New Mutants, Ani-Mate",
      relatives: "-"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/88-bird-brain.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/88-bird-brain.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/88-bird-brain.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/88-bird-brain.jpg"
    }
  },
  {
    id: 92,
    name: "Bishop",
    slug: "92-bishop",
    powerstats: {
      intelligence: 63,
      strength: 14,
      speed: 23,
      durability: 75,
      power: 100,
      combat: 65
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'6", "198 cm"],
      weight: ["275 lb", "124 kg"],
      eyeColor: "Brown",
      hairColor: "No Hair"
    },
    biography: {
      fullName: "Lucas Bishop",
      alterEgos: "No alter egos found.",
      aliases: ["Archbishop"],
      placeOfBirth:
        "A mutant relocation camp in an undisclosed location on an alternate 21st Century Earth",
      firstAppearance: "Uncanny X-Men #282 (November, 1991)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    work: {
      occupation:
        "(current) Adventurer, (former) Commander in the XSE (Xavier's Security Enforcers)",
      base:
        "Formerly Xavier Institute for Higher Learning, Salem Center, Westchester County, New York"
    },
    connections: {
      groupAffiliation:
        "\"Clean City\"; formerly Stryfe; X-Men; X.S.E. (Storm's team); X-Treme X-Men; X.S.E. (Hecate'e's team); The Twelve",
      relatives:
        "Burnum Bishop (father, deceased), Kadee Bishop (mother, deceased), Shard (sister, deceased), unnamed grandmother, Gateway (great-grandfather), Aliyah Bishop (alternate reality daughter);"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/92-bishop.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/92-bishop.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/92-bishop.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/92-bishop.jpg"
    }
  },
  {
    id: 93,
    name: "Bizarro",
    slug: "93-bizarro",
    powerstats: {
      intelligence: 38,
      strength: 95,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 85
    },
    appearance: {
      gender: "Male",
      race: "Bizarro",
      height: ["6'3", "191 cm"],
      weight: ["345 lb", "155 kg"],
      eyeColor: "Black",
      hairColor: "Black"
    },
    biography: {
      fullName: "Bizarro",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "-",
      firstAppearance: "Superboy Vol. 1 #68 (1958)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    work: {
      occupation: "-",
      base: "Bizarro World"
    },
    connections: {
      groupAffiliation:
        "Superman Revenge Squad; Bizarros of Bizarro World; former associate of the Secret Society of Super-Villains; Joker League of Anarchy; former partner of Batzarro",
      relatives:
        "Bizarro-Lois No. 1 (wife, Pre-Crisis only), Bizarro, Jr. (son, Pre-Crisis only), Bizarro-Lois, Jr. (daughter, Pre-Crisis only)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/93-bizarro.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/93-bizarro.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/93-bizarro.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/93-bizarro.jpg"
    }
  },
  {
    id: 95,
    name: "Black Adam",
    slug: "95-black-adam",
    powerstats: {
      intelligence: 88,
      strength: 100,
      speed: 92,
      durability: 100,
      power: 100,
      combat: 56
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["6'3", "191 cm"],
      weight: ["250 lb", "113 kg"],
      eyeColor: "Brown",
      hairColor: "Black"
    },
    biography: {
      fullName: "Teth-Adam",
      alterEgos: "No alter egos found.",
      aliases: ["Hassan Bari", "Theo Adam", "Mighty Adam", "Khem-Adam"],
      placeOfBirth: "Kahndaq, Egypt",
      firstAppearance: "Marvel Family #1 (December, 1945)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    work: {
      occupation: "-",
      base: "Mobile; Formerly Kahndaq; Fawcett City; New York City"
    },
    connections: {
      groupAffiliation:
        "None; Formerly the Black Marvel Family, Society of Villains, Injustice Society, Justice Society of America",
      relatives:
        "Shiruta (wife, deceased), Gon and Hurut (sons, deceased) Theo Adam (descendant, currently in control of his body), Sarah Primm (descendant, Theo's sister), Adrianna Tomaz (wife. deceased), Amon Tomaz (brother-in-law, deceased)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/95-black-adam.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/95-black-adam.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/95-black-adam.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/95-black-adam.jpg"
    }
  },
  {
    id: 96,
    name: "Black Bolt",
    slug: "96-black-bolt",
    powerstats: {
      intelligence: 75,
      strength: 67,
      speed: 100,
      durability: 84,
      power: 100,
      combat: 56
    },
    appearance: {
      gender: "Male",
      race: "Inhuman",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      eyeColor: "Blue",
      hairColor: "Black"
    },
    biography: {
      fullName: "Blackagar Boltagon",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "Attilan, Atlantic Ocean",
      firstAppearance: "Fantastic Four #45 (December, 1965)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    work: {
      occupation: "King of the Inhumans",
      base: "Attilan, Blue Area of the Moon"
    },
    connections: {
      groupAffiliation:
        "Universal Inhumans; Inhuman Royal Family; formerly Illuminati",
      relatives:
        "Medusa (wife and first cousin), Ahura (son), Agon (father, deceased), Rynda(mother, deceased), Maximus (brother), Crystal (sister-in-law), Gorgon, Karnak, Triton (cousins)"
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/96-black-bolt.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/96-black-bolt.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/96-black-bolt.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/96-black-bolt.jpg"
    }
  }
];

export default allCharacters;
