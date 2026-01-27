import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Stefano Spoto",
  role: "Game Programmer",
  introduction: "Aspiring game developer specialized in Unity and Unreal Engine. I have experience with C#, C++ and Blueprint for developing game mechanics and systems.",
  description: "Hi, my name is Stefano! I've been playing video games for as long as I can remember and I've always wanted to make one. " +
  "Thanks to a fortuitous meeting I began to study game development and up to now I have made many games that helped me develop many skills. " +
  "Now I'm looking to join a company where I can refine those skills and most importantly make great games.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/CV_Stefano_Spoto.pdf`,
  links: {
    github: "https://github.com/StefanoSpoto",
    itchIO: "https://zio-stelvio.itch.io/",
    linkedIn: "https://www.linkedin.com/in/stefano-spoto-513241216/",
  }
};

export const games: Game[] = [
  {
    name: "Quest System",
    description: "A tool made entirely in C++ to help developers make quests and events for their games. It also includes a dedicated save system. It's intended to be used in both blueprints and C++.",
    genres: ["Tool"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/StefanoSpoto/Quest-System" },
    ],
    media: [
      { source: "/images/games/Quest-System/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=AcJ_ozKUyt0", type: MediaType.YouTube },
      { source: "/images/games/Quest-System/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Quest-System/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Quest-System/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Quest-System/Screenshot_5.png", type: MediaType.Image },
    ],
  },
  {
    name: "Mushroom Trip",
    description: "After a bad trip, explore a psychedelic world like a mushroom and break the musical curse in a precision roguelike platformer.",
    genres: ["Platformer", "Rogue-like"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://eventhorizonschool.itch.io/mushroom-trip" },
    ],
    media: [
      { source: "/images/games/Mushroom-Trip/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Mushroom-Trip/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Mushroom-Trip/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Mushroom-Trip/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Goblimancer",
    description: "A reverse tower defense game with roguelike mechanics where you control hordes of goblins that must destroy and conquer every area of the Kingdom.",
    genres: ["Strategy", "Rogue-like"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://eventhorizonschool.itch.io/goblimancer" },
    ],
    media: [
      { source: "/images/games/Goblimancer/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Goblimancer/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Goblimancer/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Goblimancer/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "OathBind",
    description: "You play as a priestess ascending a mystical tower, building your path floor by floor using magical glyphs.",
    genres: ["Puzzle", "Strategy"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://cursed-gamers.itch.io/the-oathbind" },
    ],
    media: [
      { source: "/images/games/OathBind/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/OathBind/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/OathBind/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Hubble",
    description: "The astronauts have lost all their water supplies. Guide the robot to collect all the floating water bubbles back inside the spaceship!",
    genres: ["Top-down", "Physics"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://zio-stelvio.itch.io/hubble" },
    ],
    media: [
      { source: "/images/games/Hubble/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Hubble/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Hubble/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Retrograde",
    description: "A platformer game where you talk and do missions for the NPCs.",
    genres: ["Platformer", "Narrative"],
    platforms: [Platform.Windows],
    engine: GameEngine.Godot,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://foreverexe.itch.io/retrogarde" },
    ],
    media: [
      { source: "/images/games/Retrograde/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Retrograde/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Retrograde/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Rhino Blocks",
    description: "A puzzle game aimed for kids where you place blocks to create a path to help the protagonist reach the goal. It's a clone of the original Pango Blocks.",
    genres: ["Puzzle", "Kids"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [ ],
    media: [
      { source: "/images/games/Rhino-Blocks/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Rhino-Blocks/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Rhino-Blocks/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Rhino-Blocks/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Rhino-Blocks/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/Rhino-Blocks/Screenshot_6.png", type: MediaType.Image },
      { source: "/images/games/Rhino-Blocks/Screenshot_7.png", type: MediaType.Image },
    ],
  },
  {
    name: "Vampire The Masquerade Pinball",
    description: "A Pinball game based on the universe of Vampire The Masquerade where the ball can be infused with Disciplines, gained by 7 different vampire clans.",
    genres: ["Pinball", "Arcade"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://eventhorizonschool.itch.io/vampire-pinball" },
    ],
    media: [
      { source: "/images/games/Vampire-Pinball/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=BfR-qglpk4k", type: MediaType.YouTube },
      { source: "/images/games/Vampire-Pinball/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Vampire-Pinball/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Vampire-Pinball/Screenshot_4.png", type: MediaType.Image },
    ],
  },
];