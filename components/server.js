import MyImage1 from "@/public/shang-chi.jpg";
import MyImage2 from "@/public/justice-league.jpg";
import MyImage3 from "@/public/spiderman.jpg";
import MyImage4 from "@/public/smallville.jpg";
import MyImage5 from "@/public/the-flash.jpg";
import MyImage6 from "@/public/endgame.jpg";
import MyImage7 from "@/public/blue-bettle.jpg";
import MyImage8 from "@/public/black-adam.jpg";
import MyImage9 from "@/public/man-of-steal.jpg";
import MyImage10 from "@/public/after-earth.jpg";

export function getAllPost(id) {
  const Datas = [
    {
      id: "shang-chi",
      name: "Shang-chi and the legends of the ten rings",
      title:
        "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      download: MyImage1,
      url: "Images1.jpg",
    },
    {
      id: "justice-league",
      name: "Justice League",
      title:
        "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.",
      download: MyImage2,
      url: "Images2.jpg",
    },
    {
      id: "spiderman-into",
      name: "Spierman accross the spider-verse",
      title:
        "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
      download: MyImage3,
      url: "Images3.jpg",
    },
    {
      id: "smallville",
      name: "Smallville",
      title:
        "A young Clark Kent struggles to find his place in the world as he learns to harness his alien powers for good and deals with the typical troubles of teenage life in Smallville, Kansas.",
      download: MyImage4,
      url: "Images3.jpg",
    },
    {
      id: "the-flash",
      name: "The Flash",
      title:
        "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
      download: MyImage5,
      url: "Images3.jpg",
    },
    {
      id: "end-game",
      name: "End Game",
      title:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      download: MyImage6,
      url: "Images3.jpg",
    },
    {
      id: "blue-bettle",
      name: "Blue Bettle",
      title:
        "An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle.",
      download: MyImage7,
      url: "Images3.jpg",
    },
    {
      id: "black-adam",
      name: "Black adam",
      title:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      download: MyImage8,
      url: "Images3.jpg",
    },
    {
      id: "man-of-steal",
      name: "Man of steal",
      title:
        "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
      download: MyImage9,
      url: "Images3.jpg",
    },
    {
      id: "after-earth",
      name: "After Earth",
      title:
        "A crash landing leaves Kitai Raige and his father Cypher stranded on Earth, a millennium after events forced humanity's escape. With Cypher injured, Kitai must embark on a perilous journey to signal for help.",
      download: MyImage10,
      url: "Images3.jpg",
    },
  ];
  if (id) {
    return Datas.filter((post) => post.id == id);
  }
  return Datas;
}
