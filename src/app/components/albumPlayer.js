export default function AlbumPlayer({ albumId }) {
    // API?
    const albumData = {

        1: {
            name: 'Ants From Up There',
            artist: 'Black Country, New Road',
            songs: [
                'Intro',
                'Chaos Space Marine',
                'Concorde',
                'Bread Song',
                'Good Will Hunting',
                'Haldern',
                "Mark's Theme",
                'The Place Where He Inserted the Blade',
                'Snow Globes',
                'Basketball Shoes'
            ],
            durations: [
                '0:54',
                '3:36',
                '6:03',
                '6:21',
                '4:57',
                '5:05',
                '2:47',
                '7:13',
                '9:13',
                '12:37'
            ],
        },
        2: {
            name: "Illinois",
            artist: "Sufjan Stevens",
            songs: [
                "Concerning the UFO Sighting Near Highland, Illinois",
                "The Black Hawk War, or, How to Demolish an Entire Civilization and Still Feel Good About Yourself in the Morning, or, We Apologize for the Inconvenience, but You're Going to Have to Leave Now, or, 'I Have Fought the Big Knives and Will Continue to Fight Them Until They Are Off Our Lands!'",
                "Come On! Feel the Illinoise!",
                "John Wayne Gacy, Jr.",
                "Jacksonville",
                "A Short Reprise for Mary Todd, Who Went Insane, but for Very Good Reasons",
                "Decatur, or, Round of Applause for Your Stepmother!",
                "One Last 'Whoo-Hoo!' for the Pullman",
                "Chicago",
                "Casimir Pulaski Day",
                "To the Workers of the Rock River Valley Region, I Have an Idea Concerning Your Predicament",
                "The Man of Metropolis Steals Our Hearts",
                "Prairie Fire That Wanders About",
                "A Conjunction of Drones Simulating the Way in Which Sufjan Stevens Has an Existential Crisis in the Great Godfrey Maze",
                "The Predatory Wasp of the Palisades Is Out to Get Us!",
                "They Are Night Zombies!! They Are Neighbors!! They Have Come Back From the Dead!! Ahhhh!",
                "Let's Hear That String Part Again, Because I Don't Think They Heard It All the Way Out in Bushnell",
                "In This Temple as in the Hearts of Man for Whom He Saved the Earth",
                "The Seer's Tower",
                "The Tallest Man, the Broadest Shoulders",
                "Riffs and Variations on a Single Note for Jelly Roll, Earl Hines, Louis Armstrong, Baby Dodds, and the King of Swing, to Name a Few",
                "Out of Egypt, Into the Great Laugh of Mankind, and I Shake the Dirt From My Sandals as I Run"
            ],
            durations: [
                "2:08",
                "2:14",
                "6:45",
                "3:19",
                "5:24",
                "0:47",
                "3:03",
                "0:06",
                "6:04",
                "5:53",
                "1:40",
                "6:17",
                "2:11",
                "0:19",
                "5:23",
                "5:09",
                "0:40",
                "0:35",
                "3:53",
                "7:02",
                "0:46",
                "4:21"
            ]
        },
        3: {
            name: "The Glow Pt. 2",
            artist: "The Microphones",
            songs: [
                "I Want Wind to Blow",
                "The Glow Pt. 2",
                "The Moon",
                "Headless Horseman",
                "My Roots Are Strong and Deep",
                "Instrumental",
                "The Mansion",
                "[unlisted]",
                "(Something)",
                "I'll Not Contain You",
                "The Gleam Pt. 2",
                "Map",
                "You'll Be in the Air",
                "I Want to Be Cold",
                "I Am Bored",
                "I Felt My Size",
                "Instrumental",
                "I Felt Your Shape",
                "Samurai Sword",
                "My Warm Blood"
            ],
            durations: [
                "5:32",
                "4:58",
                "5:17",
                "3:10",
                "1:53",
                "1:38",
                "3:33",
                "1:46",
                "2:53",
                "2:50",
                "1:58",
                "5:00",
                "2:41",
                "1:41",
                "1:36",
                "2:19",
                "1:56",
                "1:55",
                "4:07",
                "9:27"
            ]
        },
        4: {
            name: "White Pony",
            artist: "Deftones",
            songs: [
                "Feiticeira",
                "Digital Bath",
                "Elite",
                "RX Queen",
                "Street Carp",
                "Teenager",
                "Knife Prty",
                "Korea",
                "Passenger",
                "Change (In the House of Flies)",
                "Pink Maggit"
            ],
            durations: [
                "3:09",
                "4:15",
                "4:01",
                "4:27",
                "2:41",
                "3:20",
                "4:49",
                "3:23",
                "6:07",
                "4:59",
                "7:32"
            ]
        },
        5: {
            name: "For The First Time",
            artist: "Black Country, New Road",
            songs: [
                "Instrumental",
                "Athens, France",
                "Science Fair",
                "Sunglasses",
                "Track X",
                "Opus"
            ],
            durations: [
                "5:27",
                "6:22",
                "6:20",
                "9:50",
                "4:44",
                "8:01"
            ]
        },
        6: {
            name: "Deathconsciousness",
            artist: "Have a Nice Life",
            songs: [
                "The Plow That Broke the Plains",
                "A Quick One Before the Eternal Worm Devours Connecticut",
                "Bloodhail",
                "The Big Gloom",
                "Hunter",
                "Telefony",
                "Who Would Leave Their Son Out in the Sun?",
                "There Is No Food",
                "The Future",
                "Waiting for Black Metal Records to Come in the Mail",
                "Holy Fucking Shit: 40,000",
                "Deep, Deep",
                "I Don't Love",
                "Earthmover"
            ],
            durations: [
                "7:53",
                "5:38",
                "5:40",
                "8:03",
                "8:06",
                "9:45",
                "4:38",
                "5:19",
                "4:00",
                "6:17",
                "6:29",
                "5:26",
                "6:13",
                "11:28"
            ]
        },
        7: {
            name: "Masked Dancers: Concern in So Many Things You Forget Where You Are",
            artist: "The Brave Little Abacus ",
            songs: [
                "I See It Too.",
                "\"But I Won't Always Be on the Receiving End!\"",
                "A Map of the Stars",
                "Waiting for Your Return, Like Running Backwards",
                "(Through Hallways)",
                "\"He Never Existed in the First Place\"",
                "Born Again So Many Times You Forget You Are",
                "(Underground)",
                "Remember to Wave (When Looking Down From the Clouds)",
                "It's a Lot. It's Seamless."
            ],
            durations: [
                "9:49",
                "1:07",
                "3:52",
                "1:01",
                "3:20",
                "3:55",
                "10:08",
                "8:35",
                "3:37",
                "3:59"
            ]
        },
        8: {
            name: "Soundtracks for the Blind",
            artist: "Swans",
            songs: [
                "Red Velvet Corridor",
                "I Was a Prisoner in Your Skull",
                "Helpless Child",
                "Live Through Me",
                "Yum-Yab Killers",
                "The Beautiful Days",
                "Volcano",
                "Mellothumb",
                "All Lined Up",
                "Surrogate 2",
                "How They Suffer",
                "Animus",
                "Red Velvet Wound",
                "The Sound",
                "Her Mouth Is Filled With Honey",
                "Blood Section",
                "Hypogirl",
                "Minus Something",
                "Empathy",
                "I Love You This Much",
                "YRP",
                "Fan's Lament",
                "Secret Friends",
                "The Final Sacrifice",
                "YRP 2",
                "Surrogate Drone"
            ],
            durations: [
                "3:04",
                "6:39",
                "15:47",
                "2:31",
                "5:07",
                "7:49",
                "5:19",
                "2:45",
                "4:48",
                "1:51",
                "5:52",
                "10:42",
                "2:02",
                "13:11",
                "3:18",
                "2:39",
                "2:44",
                "4:14",
                "6:45",
                "7:23",
                "7:46",
                "1:28",
                "3:08",
                "10:27",
                "2:09",
                "2:09"
            ]
        },
    };

    const album = albumData[albumId];

    const handlePlay = (song) => {
        console.log(`Playing ${song}`);
    };

    if (!album) {
        return <div>Album not found</div>;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100 rounded mb-4" src={`/a${albumId}.png`} alt={album.name} />
                    <h2 className="text-2xl font-bold">{album.name}</h2>
                    <p>{album.artist}</p>
                </div>
                <div className="col-md-8" style={{height:'600px', overflow:'scroll'}}>
                    <table className="table table-bordered">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Duration</th>
                                <th>Play</th>
                            </tr>
                        </thead>
                        <tbody>
                            {album.songs.map((song, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{song}</td>
                                    <td>{album.durations[index]}</td>
                                    <td>
                                        <button
                                            onClick={() => handlePlay(song)}
                                            className="btn btn-success"
                                        >
                                            Play
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
