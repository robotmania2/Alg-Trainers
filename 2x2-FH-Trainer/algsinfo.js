const timesArrayKey = "2x2egTimes";
const selectionArrayKey = "2x2egSelection";
var trainerTitle = "2x2 EG Trainer";
var preRotations = ['', 'y', 'y2', "y'", "x", "x y", "x y2", "x y'", "z'", "z' y", "z' y2", "z' y'", "z", "z y", "z y2", "z y'", "z2 y'", "z2", "x2", "z2 y"];
var postRotations = [''];
var preMoves = ["", "U", "U'", "U2"];
var postMoves = preMoves;
var selCases = [];
var selectedAlgSets = {"FH-U": true, "FH-T": true, "U-FH": true, "T-FH": true}
var maxAlgsPerRow = 6;
var algsGroups = {"FH-U Sune": [1, 2, 3, 4, 5, 6], "FH-U Anti-Sune": [7, 8, 9, 10, 11, 12], "FH-U Pi": [13, 14, 15, 16, 17, 18], "FH-U U": [19, 20, 21, 22, 23, 24], "FH-U L": [25, 26, 27, 28, 29, 30], "FH-U T": [31, 32, 33, 34, 35, 36], "FH-U H": [37, 38, 39, 40], "FH-U O": [41, 42, 43], "FH-T Sune": [44, 45, 46, 47, 48, 49], "FH-T Anti-Sune": [50, 51, 52, 53, 54, 55], "FH-T Pi": [56, 57, 58, 59, 60, 61], "FH-T U": [62, 63, 64, 65, 66, 67], "FH-T L": [68, 69, 70, 71, 72, 73], "FH-T T": [74, 75, 76, 77, 78, 79], "FH-T H": [80, 81, 82, 83], "FH-T O": [84, 85, 86], "U-FH Sune": [87, 88, 89, 90, 91, 92], "U-FH Anti-Sune": [93, 94, 95, 96, 97, 98], "U-FH Pi": [99, 100, 101, 102, 103, 104], "U-FH U": [105, 106, 107, 108, 109, 110], "U-FH L": [111, 112, 113, 114, 115, 116], "U-FH T": [117, 118, 119, 120, 121, 122], "U-FH H": [123, 124, 125, 126], "U-FH O": [127, 128, 129], "T-FH Sune": [130, 131, 132, 133, 134, 135], "T-FH Anti-Sune": [136, 137, 138, 139, 140, 141], "T-FH Pi": [142, 143, 144, 145, 146, 147], "T-FH U": [148, 149, 150, 151, 152, 153], "T-FH L": [154, 155, 156, 157, 158, 159], "T-FH T": [160, 161, 162, 163, 164, 165], "T-FH H": [166, 167, 168, 169], "T-FH O": [170, 171, 172]}

var algsets = {"FH-U": ["FH-U Sune", "FH-U Anti-Sune", "FH-U Pi", "FH-U U", "FH-U L", "FH-U T", "FH-U H", "FH-U O"], "FH-T": ["FH-T Sune", "FH-T Anti-Sune", "FH-T Pi", "FH-T U", "FH-T L", "FH-T T", "FH-T H", "FH-T O"], "U-FH": ["U-FH Sune", "U-FH Anti-Sune", "U-FH Pi", "U-FH U", "U-FH L", "U-FH T", "U-FH H", "U-FH O"], "T-FH": ["T-FH Sune", "T-FH Anti-Sune", "T-FH Pi", "T-FH U", "T-FH L", "T-FH T", "T-FH H", "T-FH O"]}

var algsInfo = {"1": {"a": ["R' F R2 F' U' R2"], "name": "Sune easy", "group": "Sune", "algset": "FH-U", "s": "R F' U2 F U R2"}, "2": {"a": ["R2 U' R U R2 U' R U' R"], "name": "Sune Diag", "group": "Sune", "algset": "FH-U", "s": "F' R F' U' F2 R U R"}, "3": {"a": ["F R2 F' U2 R U' R"], "name": "Suen Niklas Diag", "group": "Sune", "algset": "FH-U", "s": "R' U R' U2 F R2 F'"}, "4": {"a": ["L' U L U2 R U' R F"], "name": "Sune Niklas", "group": "Sune", "algset": "FH-U", "s": "F R2 F2 R' U2 R' U2 F'"}, "5": {"a": ["R U' R U2 F' U2 F"], "name": "Sune opposite", "group": "Sune", "algset": "FH-U", "s": "F' U2 F U2 R' U R'"}, "6": {"a": ["F R F2 L' U2 B2 L F\r", "F R U2 F2 R F2 R F"], "name": "Sune Opp/Opp", "group": "Sune", "algset": "FH-U", "s": "F' R' F2 R' F2 U2 R' F'"}, "7": {"a": ["R2 U F R2 F' R"], "name": "Anti easy", "group": "Anti-Sune", "algset": "FH-U", "s": "R' F R2 F' U' R2"}, "8": {"a": ["R2 U R' U' R2 U R' U R'"], "name": "Anti Diag", "group": "Anti-Sune", "algset": "FH-U", "s": "F U' R U F2 R' U' R'"}, "9": {"a": ["F' U2 F U2 R' U R'"], "name": "Anti Niklas Diag", "group": "Anti-Sune", "algset": "FH-U", "s": "R U' R U2 F' U2 F"}, "10": {"a": ["F' R2 U' R' U' F' R U R\r", "F R F' U2 R U R U2 R\r", "F' R' U R' U2 R' F' R"], "name": "Anti Niklas", "group": "Anti-Sune", "algset": "FH-U", "s": "F U F' U R U' R F"}, "11": {"a": ["R' U R' U2 F R2 F'"], "name": "Anti Opposite", "group": "Anti-Sune", "algset": "FH-U", "s": "F R2 F' U2 R U' R"}, "12": {"a": ["R' F R' F' U2' R2' F R2 F'"], "name": "Anti Opp/Opp", "group": "Anti-Sune", "algset": "FH-U", "s": "F R F2 R' F2 U2 R F"}, "13": {"a": ["R' U' F R' F' R' U' R2 U' R'\r", "F2 R U R' F R F' U' F R2"], "name": "Pi easy", "group": "Pi", "algset": "FH-U", "s": "F2 R2 F R F2 U2 R' F2 R'"}, "14": {"a": ["(y) F2 U' R' F2 R2 U R' U' F' (y')"], "name": "Pi Diag", "group": "Pi", "algset": "FH-U", "s": "R F R' F2 U2 F R' U R2"}, "15": {"a": ["R' F R F' R' U R'"], "name": "Pi Bars", "group": "Pi", "algset": "FH-U", "s": "F R F' U' R U' R"}, "16": {"a": ["F' U2 R' U R' F U2 R' F'"], "name": "Pi Schach", "group": "Pi", "algset": "FH-U", "s": "F R2 F2 U2 F R U2 R2"}, "17": {"a": ["R' U' R' U2' R' F R2 F'"], "name": "Pi DL", "group": "Pi", "algset": "FH-U", "s": "F R F' U F' R2 U2 F'"}, "18": {"a": ["R' F' U F R U' R U' R\r", "F R2 F' R2 U R U R2"], "name": "Pi DR", "group": "Pi", "algset": "FH-U", "s": "F U F2 R' U R2 F R"}, "19": {"a": ["R U R2 U' R2 U R2 U' R2 U R'"], "name": "U easy", "group": "U", "algset": "FH-U", "s": "F R U2 F' R F U2 R F R'"}, "20": {"a": ["R' U' R2 U2 R2 F' U F R"], "name": "U RU", "group": "U", "algset": "FH-U", "s": "R F R F' U2 R2 U R'"}, "21": {"a": ["(y) R F2 R2 U2 R (y')\r", "y' F R U' R' F R U' R' F R U' R' y"], "name": "U Bars", "group": "U", "algset": "FH-U", "s": "F U2 F2 R2 F"}, "22": {"a": ["R U' F' U2 R U' R' F' R2 F'"], "name": "U Opp", "group": "U", "algset": "FH-U", "s": "F R U2 R U F R F R2"}, "23": {"a": ["y L' F2 L U' L U' L'\r", "R F' U' R2 F U2 F'"], "name": "U B", "group": "U", "algset": "FH-U", "s": "F U F' U F' R2 F"}, "24": {"a": ["R' F R U2 F' R2 F"], "name": "U F", "group": "U", "algset": "FH-U", "s": "F' R' U R' F U2 F'"}, "25": {"a": ["R F' U F R2 U2 R' U R'"], "name": "L left", "group": "L", "algset": "FH-U", "s": "F R2 F U' F R' U F'"}, "26": {"a": ["R' F R' F' R2 U2 R U' R"], "name": "L right", "group": "L", "algset": "FH-U", "s": "F' R2 F R2 U' F U R2"}, "27": {"a": ["R' U R2' U' R\r", "R U' R2 U R'"], "name": "L Diag", "group": "L", "algset": "FH-U", "s": "R U' R2 U R'"}, "28": {"a": ["R F' U' F R2 U2' F R2 F'\r", "F' U R' F2 U' R F U2 R' U"], "name": "L RU", "group": "L", "algset": "FH-U", "s": "F R' U R F2 U' F' U R2"}, "29": {"a": ["(y') R U R' U R' F2 R (x y')"], "name": "L Top Equal ADJ", "group": "L", "algset": "FH-U", "s": "F' R2 F U' F U' F'"}, "30": {"a": ["F' R2 F U2' R' F' R"], "name": "L Top Equal Opp", "group": "L", "algset": "FH-U", "s": "F U2 F' R U' R F"}, "31": {"a": ["R' U R' U2 R2 F R F' R"], "name": "T right", "group": "T", "algset": "FH-U", "s": "F' R F' R U' F U2 F"}, "32": {"a": ["R U' R U2 R2 F' U' F R'"], "name": "T left", "group": "T", "algset": "FH-U", "s": "F U' R F' U F' R2 F'"}, "33": {"a": ["R2 F' U' R2 F' R2 U' F R2\r", "R U R' U R U2 R2 U R2 U' R"], "name": "T doof", "group": "T", "algset": "FH-U", "s": "F R F R U' F U2 R' F"}, "34": {"a": ["R' F' U' F R2 U2 R2 U R"], "name": "T RU", "group": "T", "algset": "FH-U", "s": "R U F' R2 U2 R F' R'"}, "35": {"a": ["R F' U F U' R' U R U2 R2"], "name": "T Opp ", "group": "T", "algset": "FH-U", "s": "F R F' R U' R F' U2 F"}, "36": {"a": ["R2 F R2 F' R2"], "name": "T PLL", "group": "T", "algset": "FH-U", "s": "R2 F R2 F' R2"}, "37": {"a": ["R' F R U2 R2 U F R'"], "name": "H easy", "group": "H", "algset": "FH-U", "s": "R F U2 F R2 F U' R2"}, "38": {"a": ["R U R2 U R2 U R"], "name": "H Diag", "group": "H", "algset": "FH-U", "s": "R U R2 U R2 U R"}, "39": {"a": ["F' U' R2 F U' F U' R2 F'\r", "F' U2 F2 R2 F' R U2 R2"], "name": "H lang", "group": "H", "algset": "FH-U", "s": "R2 U2 R F R2 F2 U2 F"}, "40": {"a": ["F R F' U' R U' R\r", "R U' R F R' F' R"], "name": "H kurz", "group": "H", "algset": "FH-U", "s": "R F' U' F R U' R"}, "41": {"a": ["R' F2 U R2 U' F2 R"], "name": "AS", "group": "O", "algset": "FH-U", "s": "R F2 U' F2 U F2 R'"}, "42": {"a": ["R2 U R' U2 R' U2 R' U R2"], "name": "DS", "group": "O", "algset": "FH-U", "s": "F R F U' F2 U F' R' F'"}, "43": {"a": ["x2 F R U R' U2 F' R U' R' F (x2)"], "name": "S", "group": "O", "algset": "FH-U", "s": "F R' U' F U' F2 R' U F"}, "44": {"a": ["R' F R' F' R U' F R' F' R"], "name": "Sune easy", "group": "Sune", "algset": "FH-T", "s": "R F2 R' U F' U F' R2"}, "45": {"a": ["R' U2 R U2 R' U R U' R'"], "name": "Sune Diag", "group": "Sune", "algset": "FH-T", "s": "F R' U R' U' R F' U' R'"}, "46": {"a": ["x) R U' R2 U R2 U (x')"], "name": "Suen Niklas Diag", "group": "Sune", "algset": "FH-T", "s": "F' R2 F' R2 F R'"}, "47": {"a": ["R' F' U2 F R U R'\r", "R' U R U' R' F' U2 F"], "name": "Sune Niklas", "group": "Sune", "algset": "FH-T", "s": "F' R' F2 R F U' R"}, "48": {"a": ["(y') R U2 R U2' R' F (z')"], "name": "Sune opposite", "group": "Sune", "algset": "FH-T", "s": "R' F U2 F' U2 F'"}, "49": {"a": ["F' U' F U' R U R' U' R\r", "R U' R' U R U' F R' F'"], "name": "Sune Opp/Opp", "group": "Sune", "algset": "FH-T", "s": "F R F' U R' U' R U R'"}, "50": {"a": ["R2 F' R U' F R' F2 R"], "name": "Anti easy", "group": "Anti-Sune", "algset": "FH-T", "s": "R' F2 R F' U R' F R2"}, "51": {"a": ["R U R' U' R U2 R' U2 R"], "name": "Anti Diag", "group": "Anti-Sune", "algset": "FH-T", "s": "F R' U2 F R U2 F2 R F"}, "52": {"a": ["(y') B' R U2 R' U2 R' (y)"], "name": "Anti Niklas Diag", "group": "Anti-Sune", "algset": "FH-T", "s": "F U2 F U2 F' R"}, "53": {"a": ["R U' R' F' U2 F R"], "name": "Anti Niklas", "group": "Anti-Sune", "algset": "FH-T", "s": "F U R2 U' F' U R'"}, "54": {"a": ["(x) U' R2' U' R2 U R' (x')"], "name": "Anti Opposite", "group": "Anti-Sune", "algset": "FH-T", "s": "R F' R2 F R2 F"}, "55": {"a": ["F R F' U R' U' R U R'"], "name": "Anti Opp/Opp", "group": "Anti-Sune", "algset": "FH-T", "s": "F U2 F2 U F' U2 R' F2 R2"}, "56": {"a": ["R' F' U' R U' R' F2\r", "R2' F R F' U' R' F R F"], "name": "Pi easy", "group": "Pi", "algset": "FH-T", "s": "F R' F' R' F' U' F"}, "57": {"a": ["R2 U R' U R U2' R2' U R"], "name": "Pi Diag", "group": "Pi", "algset": "FH-T", "s": "F R F' R F' U' F U2 R'"}, "58": {"a": ["R' U2 R2 F R F' R U' R' U R'"], "name": "Pi Bars", "group": "Pi", "algset": "FH-T", "s": "F R2 F' U R' U F' U F"}, "59": {"a": ["R2 U' R' U R U' F R' F' R"], "name": "Pi Schach", "group": "Pi", "algset": "FH-T", "s": "F2 R F2 R' U2 F U2 F2"}, "60": {"a": ["F R F' U2' R' F' U2' F\r", "(y) R U R' U' R U2 R' F' (y') "], "name": "Pi DL", "group": "Pi", "algset": "FH-T", "s": "F U F' U F2 U2 F' R"}, "61": {"a": ["(y') R' U' R U R' U2 R B (y)"], "name": "Pi DR", "group": "Pi", "algset": "FH-T", "s": "F R F' U' F R2 F' R'"}, "62": {"a": ["F2 R U R' F U R\r", "R' U R U' R U R' U R U2 R2"], "name": "U easy", "group": "U", "algset": "FH-T", "s": "F R U2 F U2 R F'"}, "63": {"a": ["F' U R' F2 R U2 F U R"], "name": "U RU", "group": "U", "algset": "FH-T", "s": "F U' R2 U F' R' F2 U F2"}, "64": {"a": ["F2 R F2 R' F2"], "name": "U Bars", "group": "U", "algset": "FH-T", "s": "F2 R F2 R' F2"}, "65": {"a": ["R' F R' F' R U2 F' U F"], "name": "U Opp", "group": "U", "algset": "FH-T", "s": "F R F' U2 R F' U' F R'"}, "66": {"a": ["R' U' R U R2 F R F'"], "name": "U B", "group": "U", "algset": "FH-T", "s": "R2 F' U' F R' U R"}, "67": {"a": ["R U R' F R' F' R2"], "name": "U F", "group": "U", "algset": "FH-T", "s": "R2 F R F' R U' R'"}, "68": {"a": ["(y') B' R U' R U' R' U R'"], "name": "L left", "group": "L", "algset": "FH-T", "s": "R U' F2 U R2 U' F2"}, "69": {"a": ["(y') R2' U' R2 U R2' U' F (z')"], "name": "L right", "group": "L", "algset": "FH-T", "s": "R' U F2 U' F2 U F2"}, "70": {"a": ["F2 R2 U' R' U R' F R2 U' R"], "name": "L Diag", "group": "L", "algset": "FH-T", "s": "F U2 F R F2 R' F' U2 F'"}, "71": {"a": ["R' F R2 U R' F U' F' R\r", "R' F R2 F' U' R' U2 R2 U R2\r", "R' F R2 F' R U R' U R' U' R"], "name": "L RU", "group": "L", "algset": "FH-T", "s": "R2 U F U2 R2 F U R2"}, "72": {"a": ["F R' F' R2 U' R' U R"], "name": "L Top Equal ADJ", "group": "L", "algset": "FH-T", "s": "R' U' R F' U F R2"}, "73": {"a": ["R2' F R F' R U' R'"], "name": "L Top Equal Opp", "group": "L", "algset": "FH-T", "s": "R U R' F R' F' R2"}, "74": {"a": ["R2 F R F' U R U2 R'\r", "R' D R2 U' R2 U R2"], "name": "T right", "group": "T", "algset": "FH-T", "s": "F2 U' F2 U F2 U' R"}, "75": {"a": ["F R' F' R2 U2 R' U2 R\r", "R D' R2 U R2 U' R2"], "name": "T left", "group": "T", "algset": "FH-T", "s": "F2 U R2 U' F2 U R'"}, "76": {"a": ["R' U R2 U R2 U' R2\r", "R U' R2 U' R2' U R2"], "name": "T doof", "group": "T", "algset": "FH-T", "s": "R U' R2 U' R2 U R2"}, "77": {"a": ["R' F R F' U R U' F R' F'\r", "R2 F' R U' F U R' F R"], "name": "T RU", "group": "T", "algset": "FH-T", "s": "F R' U R2 U' R2 F' U' R'"}, "78": {"a": ["F' U' F U2 R' F R F' R"], "name": "T Opp ", "group": "T", "algset": "FH-T", "s": "F R F2 R U F U F' R2"}, "79": {"a": ["R' F R' F' R2 U R' F' U2 F"], "name": "T PLL", "group": "T", "algset": "FH-T", "s": "R2 F2 R U2 R2 F2 R F2 R2"}, "80": {"a": ["R' U2 F2 R F2 R' F2 R'"], "name": "H easy", "group": "H", "algset": "FH-T", "s": "R F2 R F2 R' F2 U2 R"}, "81": {"a": ["R' U2 R U2 R' U2 R U2 R'\r", "R U2 R' U2 R U2 R' U2 R"], "name": "H Diag", "group": "H", "algset": "FH-T", "s": "F R' U R2 U' R F' R'"}, "82": {"a": ["R' F R F' U2 R U R' U' R"], "name": "H lang", "group": "H", "algset": "FH-T", "s": "F2 U R' U' F U F R2"}, "83": {"a": ["R2' F' R F R' F R2 U R' F'"], "name": "H kurz", "group": "H", "algset": "FH-T", "s": "F R F' U R' U F' U2 F"}, "84": {"a": ["R U' R' U R' F R F' R"], "name": "AS", "group": "O", "algset": "FH-T", "s": "F R U R' F U' R' F' R2"}, "85": {"a": ["R U R' U' R U' R' U R\r", "R U2 R U2 R' U2 R'\r", "R' U2 R' U2 R U2 R"], "name": "DS", "group": "O", "algset": "FH-T", "s": "R U2 R U2 R' U2 R'"}, "86": {"a": ["F' R F U2 F2 R F R' F"], "name": "S", "group": "O", "algset": "FH-T", "s": "F U' R F R2 U2 R U F'"}, "87": {"a": ["R U2' R' U R' U' R2 U R' U' R\r", "F2 R U R U2 R2 F' U R"], "name": "Sune easy", "group": "Sune", "algset": "U-FH", "s": "F' R U' R' F2 R' U R2"}, "88": {"a": ["R' U' R F' U' F R2"], "name": "Sune Diag", "group": "Sune", "algset": "U-FH", "s": "F2 U R2 F R' U2 F"}, "89": {"a": ["R2 U' R2 U' R U' R' F R' F'"], "name": "Suen Niklas Diag", "group": "Sune", "algset": "U-FH", "s": "F' R F2 R F U' F2 R"}, "90": {"a": ["R F R' F' R U2' R' U R"], "name": "Sune Niklas", "group": "Sune", "algset": "U-FH", "s": "F U F R2 F2 U' F' R'"}, "91": {"a": ["R2 U R2 F' U' F U2 R"], "name": "Sune opposite", "group": "Sune", "algset": "U-FH", "s": "R' U' R2 F R F' U2 R2"}, "92": {"a": ["R' U' F' U' F R' U R'\r", "R U' R2' F R' F' R U' R2\r", "F R F' U2 R' U2 R' U R'"], "name": "Sune Opp/Opp", "group": "Sune", "algset": "U-FH", "s": "F2 U' F' U F2 R' U R2"}, "93": {"a": ["R' U2 R U' R U R2 U' R U R'"], "name": "Anti easy", "group": "Anti-Sune", "algset": "U-FH", "s": "F U' F R F2 R U' R2"}, "94": {"a": ["R U R' F R F' R2\r", "R2 U' F R F' R U2 R'"], "name": "Anti Diag", "group": "Anti-Sune", "algset": "U-FH", "s": "F2 U' F2 R' U R2 F'"}, "95": {"a": ["R2 F2 R U R' U2 F U' R2"], "name": "Anti Niklas Diag", "group": "Anti-Sune", "algset": "U-FH", "s": "F U' F U2 R' U R2 F2"}, "96": {"a": ["R2' U' R U2 R' F R F'\r", "R F R' F' R U2' R' U R"], "name": "Anti Niklas", "group": "Anti-Sune", "algset": "U-FH", "s": "F R' F' R U2 R' U R2"}, "97": {"a": ["R2 U' R2 F R F' U2 R'"], "name": "Anti Opposite", "group": "Anti-Sune", "algset": "U-FH", "s": "R U R2 F' U R2 U2 F'"}, "98": {"a": ["R U F R F' R U' R\r", "F' U' F U2 R U2 R U' R"], "name": "Anti Opp/Opp", "group": "Anti-Sune", "algset": "U-FH", "s": "F2 U R U' F2 R U' R2"}, "99": {"a": ["R2 U R' U R' U R"], "name": "Pi easy", "group": "Pi", "algset": "U-FH", "s": "R U R' U R' U R2"}, "100": {"a": ["F' U R' U2 F R F R\r", "F2 R U' R2 U2 R' F R2"], "name": "Pi Diag", "group": "Pi", "algset": "U-FH", "s": "R F U R F2 U' R F'"}, "101": {"a": ["R' F R' F' U' R' U2 R'"], "name": "Pi Bars", "group": "Pi", "algset": "U-FH", "s": "R U2 R U F R F' R"}, "102": {"a": ["R U2 R2' F' R' U' R U' F"], "name": "Pi Schach", "group": "Pi", "algset": "U-FH", "s": "R2 F R' F U' F' U F2"}, "103": {"a": ["F' U' F R2 U R' U2' R"], "name": "Pi DL", "group": "Pi", "algset": "U-FH", "s": "F' U F2 U R' U R2 F"}, "104": {"a": ["R U' R' U' R2 U' F R F'\r", "F R F' R2 U' R U2 R'"], "name": "Pi DR", "group": "Pi", "algset": "U-FH", "s": "F R' F2 R' F R' U2 F'"}, "105": {"a": ["R F R' F U2 R' U' R U' F2"], "name": "U easy", "group": "U", "algset": "U-FH", "s": "F U F' U2 R2 F R' U F2"}, "106": {"a": ["R2 U R2' U2 R"], "name": "U RU", "group": "U", "algset": "U-FH", "s": "R U2 R2 U R2"}, "107": {"a": ["F' U' F R2 U2 R' U R\r", "F R F' R2' U2' R U' R'"], "name": "U Bars", "group": "U", "algset": "U-FH", "s": "R U R F' R2 U2 R F'"}, "108": {"a": ["(y') R2 U' R2 U R2 B2 U' B"], "name": "U Opp", "group": "U", "algset": "U-FH", "s": "R U' F2 U' F2 U F2 R2"}, "109": {"a": ["R' F2 R' U' R2 U R' F\r", "R2 U' R2 U R' F R' F' R"], "name": "U B", "group": "U", "algset": "U-FH", "s": "F' R U' R2 U R F2 R"}, "110": {"a": ["R' F R' F' R U' R' U R'\r", "R F R' F' R U R' U2 R"], "name": "U F", "group": "U", "algset": "U-FH", "s": "F U' F R2 F' R' F2 R'"}, "111": {"a": ["F' U' R' F U' R U' F R2"], "name": "L left", "group": "L", "algset": "U-FH", "s": "R U' F R F2 U' F R"}, "112": {"a": ["F R U R' F U' R F' R2"], "name": "L right", "group": "L", "algset": "U-FH", "s": "R' U F' U' F2 R F' R'"}, "113": {"a": ["R2 U' R2 U' F R' F' R'"], "name": "L Diag", "group": "L", "algset": "U-FH", "s": "F U2 R' U F2 R F2 R2"}, "114": {"a": ["R U2 R U2 R' U R2 U R'\r", "R U' R U R' U2 R U' R U R'"], "name": "L RU", "group": "L", "algset": "U-FH", "s": "R F' R' F2 R' F R2 F"}, "115": {"a": ["F' U2 F R U R U' R"], "name": "L Top Equal ADJ", "group": "L", "algset": "U-FH", "s": "R' U R' F R2 F' R'"}, "116": {"a": ["R' F' U2 F R' U R'\r", "R' U R' F' U' F R2 U2 R'"], "name": "L Top Equal Opp", "group": "L", "algset": "U-FH", "s": "R U' R F' U2 F R"}, "117": {"a": ["R2 U' R U2 F' U' F\r", "R F U2 R' U' R' F2 R2"], "name": "T right", "group": "T", "algset": "U-FH", "s": "F' U F U2 R' U R2"}, "118": {"a": ["R2 U R' U2 F R F'"], "name": "T left", "group": "T", "algset": "U-FH", "s": "F R' F' U2 R U' R2"}, "119": {"a": ["F' U' F R2 U' F R F'"], "name": "T doof", "group": "T", "algset": "U-FH", "s": "F R' F' U R2 F' U F"}, "120": {"a": ["R2 U2 R U R' U R U' R' U R'"], "name": "T RU", "group": "T", "algset": "U-FH", "s": "F R U2 F2 R2 F U' R"}, "121": {"a": ["F' R' U' R U' F R2"], "name": "T Opp ", "group": "T", "algset": "U-FH", "s": "R2 F R' U F' U' F'"}, "122": {"a": ["R F R' F' R2 U' R2 F' U' F R2"], "name": "T PLL", "group": "T", "algset": "U-FH", "s": "F R' F2 R U' R' F2 U R2"}, "123": {"a": ["R F R' F' R U' F R F'"], "name": "H easy", "group": "H", "algset": "U-FH", "s": "F R' F' U R' F R F' R'"}, "124": {"a": ["R2 U R' U R' F' U F R"], "name": "H Diag", "group": "H", "algset": "U-FH", "s": "F U F R' U R2 U2 F"}, "125": {"a": ["R' F U R U' R' U2' R2' F"], "name": "H lang", "group": "H", "algset": "U-FH", "s": "F U R2 F' U2 R U F2"}, "126": {"a": ["R' F U2' F R2 F"], "name": "H kurz", "group": "H", "algset": "U-FH", "s": "F U2 F R2 F R'"}, "127": {"a": ["R2 U' F2 R U2 R U2 R' F2\r", "R2 F' R2 F' R2 F R2 U' R2"], "name": "AS", "group": "O", "algset": "U-FH", "s": "F2 R2 U F R2 F U2 F"}, "128": {"a": ["F R F R' U' R F2 R2"], "name": "DS", "group": "O", "algset": "U-FH", "s": "R2 F2 R F' R' F U F"}, "129": {"a": ["F2 R2 U' R' U R' F U' R\r", "R2 U R2 F2 R U R' F U' R"], "name": "T", "group": "O", "algset": "U-FH", "s": "R U' F U' F R' U' R2 F2"}, "130": {"a": ["R U' R' U R2 U' R' U R' U2 R\r", "R' U2 R U' R U' R' U R2 U' R'"], "name": "Suen easy", "group": "Sune", "algset": "T-FH", "s": "R' F R' F2 U2 F U' R2"}, "131": {"a": ["R2 F R' F' R U' R'\r", "R U2 R' F R' F' U R2"], "name": "Sune Diag", "group": "Sune", "algset": "T-FH", "s": "F R2 U' R F2 U F2"}, "132": {"a": ["R U2 F R' F' R2 U R2"], "name": "Suen Niklas Diag", "group": "Sune", "algset": "T-FH", "s": "F U2 R2 U' F R2 U' R'"}, "133": {"a": ["F R' F' R U2' R' U R2\r", "R U2 R U R2 F R2 F'"], "name": "Sune Niklas", "group": "Sune", "algset": "T-FH", "s": "F R2 F' R2 U' R' U2 R'"}, "134": {"a": ["R' F' U' F U2 R' F R2 F' R'\r", "F U' R2 U' R' U F2 R'"], "name": "Sune opposite", "group": "Sune", "algset": "T-FH", "s": "F2 R2 U' R U2 F' U F'"}, "135": {"a": ["R' U R' F R' F' U' R'\r", "y F R U R' U2 R U R' F R U' R'\r", "R2' U' R F' U' F R2 U' R"], "name": "Sune Opp/Opp", "group": "Sune", "algset": "T-FH", "s": "R U F R F' R U' R"}, "136": {"a": ["F' R U' R' F2 R' U R2\r", "y F' R U R' F' R U2 R' U' R U R'"], "name": "Anti easy", "group": "Anti-Sune", "algset": "T-FH", "s": "R F R2 F2 U' F U R2"}, "137": {"a": ["R2 F' U F R' U R\r", "R U2 R2 F R F' R' U R2"], "name": "Anti Diag", "group": "Anti-Sune", "algset": "T-FH", "s": "F' U2 R F' R2 U' F2"}, "138": {"a": ["F R' F' U' R' U' R2 U' R2"], "name": "Anti Niklas Diag", "group": "Anti-Sune", "algset": "T-FH", "s": "F' R2 U2 R F' R2 U R"}, "139": {"a": ["R' U' R U2 R' F R F' R'\r", "R U R2 F' U' F R' U2 R2"], "name": "Anti Niklas", "group": "Anti-Sune", "algset": "T-FH", "s": "F' U2 F R2 U R U2 R"}, "140": {"a": ["F R F' R U R' U R2 U R2\r", "F' R U' F2 R U' R2 F2"], "name": "Anti Opposite", "group": "Anti-Sune", "algset": "T-FH", "s": "F2 R2 U R' F2 U R' F"}, "141": {"a": ["R2 U R' F R F' R2 U R'\r", "R' U' R2 U2 R2 F R F' R U R2"], "name": "Anti Opp/Opp", "group": "Anti-Sune", "algset": "T-FH", "s": "R' U' F' U' F R' U R'"}, "142": {"a": ["R U R' U R' U R2\r", "R U2 R2 U' R U2 R2"], "name": "Pi easy", "group": "Pi", "algset": "T-FH", "s": "R2 U R' U R' U R"}, "143": {"a": ["R2 F' R' U2 R2 U' R' F2"], "name": "Pi Tiag", "group": "Pi", "algset": "T-FH", "s": "F R' U F2 R' U' F' R'"}, "144": {"a": ["F U2 F R2 F R'\r", "y' x' R F2 R U2 R U' x y"], "name": "Pi Bars", "group": "Pi", "algset": "T-FH", "s": "R F' R2 F' U2 F'"}, "145": {"a": ["F' R2 U2 R U R' U' F' R\r", "R' U' R2 U' R2 F R F' R' U' R"], "name": "Pi Schach", "group": "Pi", "algset": "T-FH", "s": "F R2 U2 F' U2 F' U' R2"}, "146": {"a": ["F R' F' U2 R U R' U2 R2\r", "F R' F' U2 R U R U2 R2"], "name": "Pi DL", "group": "Pi", "algset": "T-FH", "s": "F R F' R2 U' R U2 R'"}, "147": {"a": ["R' U2 R U' R2 F' U F"], "name": "Pi DR", "group": "Pi", "algset": "T-FH", "s": "F' R2 U' R U' F2 U' F"}, "148": {"a": ["R U R' U R' F R F' R' U R2\r", "R' U' R U' R F' U' F R U' R2"], "name": "U easy", "group": "U", "algset": "T-FH", "s": "F R2 F' U R' F U2 R2 F"}, "149": {"a": ["R' U R' U' R U R' U R U2 R2\r", "R2 U2 R' U2 R U2 R2 U' R2"], "name": "U RU", "group": "U", "algset": "T-FH", "s": "R F U2 R2 F2 R F' R"}, "150": {"a": ["R U R' U2' R2 F R' F'"], "name": "U Bars", "group": "U", "algset": "T-FH", "s": "F R F' R2 U2 R U' R'"}, "151": {"a": ["y F2 R U' R' U' R' F' R\r", "B2 R' U R U R B R'"], "name": "U Opp", "group": "U", "algset": "T-FH", "s": "F U F U' R F' R2"}, "152": {"a": ["R' U R' F R2 F' R'"], "name": "U B", "group": "U", "algset": "T-FH", "s": "R F R2 F' R U' R"}, "153": {"a": ["R U' R F' U2 F R\r", "R2 U R U R' U' F R2 F'"], "name": "U F", "group": "U", "algset": "T-FH", "s": "R' F' U2 F R' U R'"}, "154": {"a": ["F R' F' U2 R U' R2"], "name": "L left", "group": "L", "algset": "T-FH", "s": "R2 U R' U2 F R F'"}, "155": {"a": ["F' U F U2 R' U R2\r", "R2 F2 R U R U2 F' R"], "name": "L right", "group": "L", "algset": "T-FH", "s": "R2 U' R U2 F' U' F"}, "156": {"a": ["R' F' U' F U' R2 U' R2\r", "F2 R2 U R' U R' U' F R2"], "name": "L Diag", "group": "L", "algset": "T-FH", "s": "R2 F2 R U2 F U' R2 F"}, "157": {"a": ["R U' R' U R' U2 R U' R' U R'"], "name": "L RU", "group": "L", "algset": "T-FH", "s": "F U R' U' F2 U' F R2"}, "158": {"a": ["R' F R F' R U' R2 U R2"], "name": "L Top Equal ADJ", "group": "L", "algset": "T-FH", "s": "R' F2 R' U' R2 U R' F"}, "159": {"a": ["R' U2 R U' R' F R F' R'\r", "R U' R U R' F R F' R"], "name": "L Top Equal Opp", "group": "L", "algset": "T-FH", "s": "R F2 R F R2 F' U F'"}, "160": {"a": ["(y) F' U R' F' R2 U R' F' (y')\r", "R2 F2 U' R' U R2 F' R'"], "name": "T right", "group": "T", "algset": "T-FH", "s": "R F R' F2 U F U' R"}, "161": {"a": ["(y) F U' R U R2 F' R F (y')\r", "R U' F R F2 U' F R"], "name": "T left", "group": "T", "algset": "T-FH", "s": "R' F' U F2 R' F' U R'"}, "162": {"a": ["(y) R' F R U' F2 R U' R' (y')\r", "R' U2 R U' F R F' R U' R2"], "name": "T doof", "group": "T", "algset": "T-FH", "s": "F R F' R2 U F' U' F"}, "163": {"a": ["R' U2 R2 U' R2\r", "R U2 R2 U R2"], "name": "T RU", "group": "T", "algset": "T-FH", "s": "R2 U R2 U2 R"}, "164": {"a": ["R U2 R' F R F' U R U2 R"], "name": "T Opp ", "group": "T", "algset": "T-FH", "s": "F2 U F2 R2 U F2 U R'"}, "165": {"a": ["F' R U' R U' R2 F' R2 F'\r", "R U' R2 F R2 F' U R' U2 R"], "name": "T PLL", "group": "T", "algset": "T-FH", "s": "F R U' R F' R' U' R2 F"}, "166": {"a": ["R U' R' U R' U R' U2 R'"], "name": "H easy", "group": "H", "algset": "T-FH", "s": "F R' U F2 R2 U' R F' R'"}, "167": {"a": ["R' F' U' F R U' R U' R2\r", "R U2 F R2 F' R2 U R2"], "name": "H Diag", "group": "H", "algset": "T-FH", "s": "F R2 U2 R F' U R F"}, "168": {"a": ["F' U R' U R' U2 R2 F' R"], "name": "H lang", "group": "H", "algset": "T-FH", "s": "F2 U R' U' F U' F R2"}, "169": {"a": ["R U2' R U F R F' R"], "name": "H kurz", "group": "H", "algset": "T-FH", "s": "R F' U F U R U2 R"}, "170": {"a": ["R' F R' F' U2 R U' R U R'"], "name": "AS", "group": "O", "algset": "T-FH", "s": "F R2 F R2 F U R2 F2"}, "171": {"a": ["(y) R' F R F R' F R2 U' R' (y')\r", "R2 F2 R F' R' F U F"], "name": "DS", "group": "O", "algset": "T-FH", "s": "F R F R' U' R F2 R2"}, "172": {"a": ["R' U F' R U' R U R2 F2"], "name": "S", "group": "O", "algset": "T-FH", "s": "F R' F R' U R F2 U2 R'"}};