// const dummyRoom = {
//     "uuid": "c8bc051c-a61d-4074-a182-7486e1eb0ecb", 
//     "name": "trip4077", 
//     "title": "Outside Cave Entrance", 
//     "description": "North of you, the cave mount beckons", 
//     "players": [
//             "dean1233442", "akaneleimo", "irving", "wisdomtooth", "lowell", 
//             "Fixmylife", "hellome", "brady", "mb", "marinatest", "bnsyoyoyo", 
//             "newuser2", "rodeantest99111", "mb1", "testuser45654", "juliejonak", 
//             "juliejonak10", "TomTom", "nnenna", "9999", "jessejames", "test1", "logan", 
//             "litpapi", "testuser3", "hithereperson", "austinnnnn", "testuser12", 
//             "theblueman", "testuser15", "testuser2", "testuser111", 
//             "user2", "test5", "tyeshi777", "ilovelambda", "billclinton", "Enoka", "testtest", 
//             "lowellism", "kevin", "arronm", "testuser25", "veritaem", "testbob1", "pcghost", "boombox", 
//             "guestuser", "Lambda", "test.test", "Hog", "erik12456", "jimjones", "jjerlich155", "ptdptd2", "Peter", "bojack", 
//             "harambe1234", "tester", "veritaem1", "ptdptd9", "cookiesaregood", "testingtester", "ptd", "test123", "User6", "newben", 
//             "doncherry1", "oye", "testuser10232303011", "christian123", "Jon", "testuserwut", "pierre", "teamzoomers", "testusersss", 
//             "pc", "franknobilo", "user1234", "PeterJacobStoner", "ejaona", "team14", "doncherry3", "noblyn", "matt", "dandan", "tomi", 
//             "ThomasTuttle", "David", "Nab", "bcon", "ghfghdf", "sdgdfg", "gsdfgsfdgssdfg", "victor123test", "sfdghdfg", "yusuf", "fsgsdfa", 
//             "billybobdjango", "hfghfgjkl", "sdghsdfhgase", "kfuyjddf", "fdgdfg", "fghsdgfhs", "JacobStoner", "dam", "kobetesting", "testingpurposes", 
//             "LambdaS", "testing1232456", "Azra", "dano1", "billyjoeldjango", "roryc", "jacksparrow", "ReedNewUser", "omars", "foobars", "victor082", 
//             "steven122185", "loserfacebob", "ReedNewUser321", "jason", "fairgame", "jtonna324", "icarly", "fakertest", "cjbtantay", "FuckThisShit", "azrap", 
//             "azrapanj", "np", "pickles2", "testuser123", "mike123", "eli12321132", "kevinsims21", "sammie", "user1111", "ksims21", "jamesbond123", "admincs24", 
//             "scottydo22"
//       ],
//     "north": true,
//     "south": true,
//     "east": true,
//     "west": true
// }
class Cell {
    constructor(coords) {
        this.coords = coords; // [ row, column ]
        this.visited = false;
        this.blocks = [ true, true, true, true ] // Top - Left - Bottom - Right 
        this.neighbors = [undefined, undefined, undefined, undefined]                      // Top- Left - Bottom - Right
        this.value = 6                        // Determines Sprite Display
    }
}

function generateTiles(room) {
    console.log('TILES', room);

    room.north = (room.description.includes('north') || room.description.includes('North'));
    room.east = (room.description.includes('east') || room.description.includes('East'));
    room.south = (room.description.includes('south') || room.description.includes('South'));
    room.west = (room.description.includes('west') || room.description.includes('West'));

    const tiles = []

    for(let i = 0; i < 10; i++) {
        tiles.push( [] );

        for(let j = 0; j < 20; j++) {
            const cell = new Cell([ i, j ]);

            if( (room.north && i === 0) || (room.south && i === 9) ) {
                cell.value = 0
            }

            if( (room.east && j === 0) || (room.west && j === 19) ) {
                cell.value = 0
            }
            
            tiles[i].push(cell)
        }
    }

    populateNeightbors(tiles);
    
    let startCell;

    for(let i = 0; i < 9; i += 4) {
        for(let j = 1; j < 19; j += 3) {
            if(i === 0) {
                startCell = tiles[i+1][j]
                generateMaze(startCell)
            } else {
                startCell = tiles[i][j]
                generateMaze(startCell)
            }
        }
    }

    return tiles;
}

function populateNeightbors(tiles) {
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 20; j++) {
            const cell = tiles[i][j]

            if(tiles[i-1] && tiles[i-1][j]) {
                //console.log('TOP', tiles[i-1][j])
                cell.neighbors[0] = tiles[i-1][j]
            }

            if(tiles[i][j-1]) {
                //console.log('LEFT', tiles[i-1][j])
                cell.neighbors[1] = tiles[i][j-1]
            }

            if(tiles[i+1] && tiles[i+1][j]) {
                //console.log('BOTTOM', tiles[i-1][j])
                cell.neighbors[2] = tiles[i+1][j]
            }

            if(tiles[i][j+1]) {
                //console.log('RIGHT', tiles[i-1][j])
                cell.neighbors[3] = tiles[i][j+1]
            }
        }
    }
}

function generateMaze(start) {
    // mark current cell as visted
    if( !start ) return;

    start.visited = true;
    start.value = 0;
    //debugger;

    // while current cell has unvisited neighbors
    const checked = {
        north: false,
        south: false,
        east: false,
        west: false,
    }

    while(!checked.north && !checked.east && !checked.west && !checked.south) {
        // Choose one neighbor
        let index = Math.floor( Math.random() * 3 ) + 1

        switch(index) {
            case 0: 
                checked.north = true
                break;

            case 1:
                checked.west = true
                break;

            case 2:
                checked.south = true
                break;

            case 3:
                checked.east = true
                break;
        }

        // Move new cell recursively
        if( start.neighbors[ index ] ) {
            generateMaze(start.neighbors[ index ])
        } else {
            continue;
        }
    }
}

export { generateTiles };