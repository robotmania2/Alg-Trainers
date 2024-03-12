const timesArrayKey = "2x2egTimes";
const selectionArrayKey = "2x2egSelection";
var trainerTitle = "2x2 EG Trainer";
var preRotations = ['', 'y', 'y2', "y'", "x", "x y", "x y2", "x y'", "z'", "z' y", "z' y2", "z' y'", "z", "z y", "z y2", "z y'", "z2 y'", "z2", "x2", "z2 y"];
var postRotations = [''];
var preMoves = ["", "U", "U'", "U2"];
var postMoves = preMoves;
var selCases = [];
var selectedAlgSets = {"CLL": true, "EG-1": true, "EG-2": true, "LEG-1": true}
var maxAlgsPerRow = 6;
var algsGroups = {"CLL Sune": [1, 2, 3, 4, 5, 6], "CLL Anti-Sune": [7, 8, 9, 10, 11, 12], "CLL Pi": [13, 14, 15, 16, 17, 18], "CLL U": [19, 20, 21, 22, 23, 24], "CLL L": [25, 26, 27, 28, 29, 30], "CLL T": [31, 32, 33, 34, 35, 36], "CLL H": [37, 38, 39, 40], "EG-1 Sune": [41, 42, 43, 44, 45, 46], "EG-1 Anti-Sune": [47, 48, 49, 50, 51, 52], "EG-1 Pi": [53, 54, 55, 56, 57, 58], "EG-1 U": [59, 60, 61, 62, 63, 64], "EG-1 L": [65, 66, 67, 68, 69, 70], "EG-1 T": [71, 72, 73, 74, 75, 76], "EG-1 H": [77, 78, 79, 80], "EG-2 Sune": [81, 82, 83, 84, 85, 86], "EG-2 Anti-Sune": [87, 88, 89, 90, 91, 92], "EG-2 Pi": [93, 94, 95, 96, 97, 98], "EG-2 U": [99, 100, 101, 102, 103, 104], "EG-2 L": [105, 106, 107, 108, 109, 110], "EG-2 T": [111, 112, 113, 114, 115, 116], "EG-2 H": [117, 118, 119, 120], "LEG-1 Sune": [121, 122, 123, 124, 125, 126], "LEG-1 Anti-Sune": [127, 128, 129, 130, 131, 132], "LEG-1 Pi": [133, 134, 135, 136, 137, 138], "LEG-1 U": [139, 140, 141, 142, 143, 144], "LEG-1 L": [145, 146, 147, 148, 149, 150], "LEG-1 T": [151, 152, 153, 154, 155, 156], "LEG-1 H": [157, 158, 159, 160]}

var algsets = {"CLL": ["CLL Sune", "CLL Anti-Sune", "CLL Pi", "CLL U", "CLL L", "CLL T", "CLL H"], "EG-1": ["EG-1 Sune", "EG-1 Anti-Sune", "EG-1 Pi", "EG-1 U", "EG-1 L", "EG-1 T", "EG-1 H"], "EG-2": ["EG-2 Sune", "EG-2 Anti-Sune", "EG-2 Pi", "EG-2 U", "EG-2 L", "EG-2 T", "EG-2 H"], "LEG-1": ["LEG-1 Sune", "LEG-1 Anti-Sune", "LEG-1 Pi", "LEG-1 U", "LEG-1 L", "LEG-1 T", "LEG-1 H"]};

var algsInfo = {"1": {"a": ["R U R' U R U2 R' ", "(U') R' U2 R U R' U R ", "R U R2 U' R2 U R", "(U') R' U2 R U2 R U R U' R'", "R' F' R U2 R' F R U2 R' F R"], "name": "S1", "group": "Sune", "algset": "CLL", "s": "(U') F R2 F' U' F R' F'"}, "2": {"a": ["(U') R' F R2 F' U' R' U' R2 U R' ", "(U') R' F R2 F' R U2 R' U' R2 ", "(U2) R U R' U R' F R F' R U2 R'"], "name": "S2", "group": "Sune", "algset": "CLL", "s": "(U') F R' F2 R F' U2 F U F2"}, "3": {"a": ["F R' F' R U2 R U2 R' ", "R U' R2 U R U F R' F' R U R'", "(U2) R2 U R2 F' U' F R2 U' R2"], "name": "S3", "group": "Sune", "algset": "CLL", "s": "(U') F R2 F' U2 F' U F R'"}, "4": {"a": ["R U' R' F R' F' R ", "(U2) R2 U R' U' R' F R F' R'", "(U) F U' F' R U' R' F"], "name": "S4", "group": "Sune", "algset": "CLL", "s": "(U) F' R U R' F U F'"}, "5": {"a": ["(U2) R U' R U' R' U R' U' F R' F' ", "(U2) R U' R U' R' U R' U' y R U' R' ", "R U2 R' F R U2 R' U R U' R' F ", "(U) R' F' R2 U R' F' R' F R2 U' R'", "R U R' U' R' F R F' R U R' U R U2 R'"], "name": "S5", "group": "Sune", "algset": "CLL", "s": "(U) F2 R U F2 R' F2 U' R' F2"}, "6": {"a": ["R' F2 R U2 R U' R' F", "F R' F' R U R U2' R' F R' F' R", "(U) R2 U' R2 F R' F' R2 U R2"], "name": "S6", "group": "Sune", "algset": "CLL", "s": "F' R U R' U2 R' F2 R"}, "7": {"a": ["R' U' R U' R' U2 R ", "(U) R U2 R' U' R U' R' ", "(U2) R' F' R U' R' F2 R"], "name": "AS1", "group": "Anti-Sune", "algset": "CLL", "s": "F R F' U F R2 F'"}, "8": {"a": ["R U2 R' F R' F' R U' R U' R' ", "(U2) R' U R U' R2 F R F' R U R' U' R", "(U') R U' R2 U R U F R2 F' R", "(U2) R' F R' F' R U R U' R2' F R F' R", "(U2) R U' R' U R U R2 F R F' U2' R U R'", "(U) R' F R U' R' U F2 U' F2 U' R"], "name": "AS2", "group": "Anti-Sune", "algset": "CLL", "s": "(U2) F' R U2 R' F U2 F' U' F2"}, "9": {"a": ["(U2) F' R U R' U2 R' F2 R ", "(U) R' F R F' R U2' R' U' R' F R F'", "(U2) R' F R2 F' U' R' U' R F R' F' R", "(U2) R2 U' R2 F R F' R2 U R2"], "name": "AS3", "group": "Anti-Sune", "algset": "CLL", "s": "(U) F' R2 F R2 F R' U' R"}, "10": {"a": ["(U2) R' F R F' R U R'", "(U) R F R' F' R U R U' R2"], "name": "AS4", "group": "Anti-Sune", "algset": "CLL", "s": "(U') F R' F' R F' U' F"}, "11": {"a": ["(U) R U R2 F' R F R U' R2 F R", "F R F' U R U' R U R' U R'", "(U2) R' F2 R F' R' F2 R U' R' F R F' ", "(U) R U R' U y' R U' R U R' U R' ", "R2 F R U2 R U' R' U2 F' R", "R U R' U' R' F R F' R U2 R' U' R U' R'"], "name": "AS5", "group": "Anti-Sune", "algset": "CLL", "s": "F2 R U F2 R F2 U' R' F2"}, "12": {"a": ["(U2) R U2 R' U2 R' F R F' ", "(U') R U' R' F R F' U' R' U' R2 U R'", "(U') R2 U R2' F' U F R2 U' R2'"], "name": "AS6", "group": "Anti-Sune", "algset": "CLL", "s": "F R' F' R U2 R U2 R'"}, "13": {"a": ["R U' R2 U R2 U R2 U' R ", "R' U R2 U' R2 U' R2 U R' ", "F R U R' U' R U R' U' F' ", "(U2) F U R U' R' U R U' R' F' ", "R U2 R' U R U' R' U2 R U' R'", "R U2' R2' U' R2 U' R2' U2' R"], "name": "Pi1", "group": "Pi", "algset": "CLL", "s": "(U') F R' F2 R U2 R U2 R' F"}, "14": {"a": ["(U') R' U' R' F R F' R U' R' U2 R  ", "(U2) R U R' U R U' B U' B' R' ", "(U) R' U2 R U R' F R' F' R U R", "(U2) R2 U' R2 F R2 F' R2 U R2", "R U' R' U2 R' F R F' U2 R U R' ", "(U2) R U' R' U2 F R' F' R U2 R U R' ", "R' F R U2 F' R U R' U2 R' F' R ", "(U2) R' F R U2 R U' R' F U2 R' F' R "], "name": "Pi2", "group": "Pi", "algset": "CLL", "s": "(U2) F2 U F2 R' F2 R F2 U' F2"}, "15": {"a": ["(U2) R' F R F' R U' R' U' R U' R' ", "R U' R' F R' F R U R' F R"], "name": "Pi3", "group": "Pi", "algset": "CLL", "s": "F R' F' R U2 F2 R U R' F"}, "16": {"a": ["(U') R U' R U' R' U R' F R2 F' ", "(U) F R2 U' R2 U R2 U R2 F'", "(U') F R' F' R U' R U R' U R' F R F'", "F R' F' R U2 R U R' F R' F' R"], "name": "Pi4", "group": "Pi", "algset": "CLL", "s": "F R U2 R U2 R F U2 R2"}, "17": {"a": ["R U2 R' U' R U R' U2 R' F R F' ", "(U) F' R U R' U2 R' F R U' R' F2 R"], "name": "Pi5", "group": "Pi", "algset": "CLL", "s": "F R' U' F' R F2 U' R F2 R'"}, "18": {"a": ["(U2) R' F2 R U R' F' R U2 R U' R' F", "(U) F R' F' R U2 R U' R' U R U2 R'", "R U' R' F R' F' R U' R U' R' F R' F' R", "R' F2 R F' U2 R U' R' U' F"], "name": "Pi6", "group": "Pi", "algset": "CLL", "s": "F R2 F' R U2 F' U F U R'"}, "19": {"a": ["F R U R' U' F'", "R' U' F R' F' R U R ", "(U2) F U R U' R' F' ", "(U2) R' U' R' F R F' U R", "F R F' R' U2 R F R' F'", "(U') R F R F' U' R'"], "name": "U1", "group": "U", "algset": "CLL", "s": "(U2) F R U R' U' F'"}, "20": {"a": ["(U') R U R2' U' R U2 R' U2' R U' R", "R2 F2 R U R U2 R2 F' R U' R", "(U) R U' R' F' R U' R' F2 U' R U R'", "(U) R' U' R2 U R' U2 R U2 R' U R'", "R' F R F' R' F R F' R U R' U' R U R'", "(U') R2 F2 R U R' F U' R U R2", "F2 R2 U' R' F R' F U' F", "R2 F2 R U R' F R2 U2 R' U' R", "(U') F R F' R U2 R' F2 R2 U R' U R' U' F"], "name": "U2", "group": "U", "algset": "CLL", "s": "(U2) F R' F R' U R' U' R2 F2"}, "21": {"a": ["(U') F R U R' U2 F' R U' R' F ", "R U2 R U' R' F R' F2 U' F", "F R U' R' U' F2 U' R U R' U F", "z' U2 R' U' R2 U' R' U' R U' R' ", "R2' F2 R U R U2 R2' F R F' R' F2 R2", "F R U' R2 F R F' R U2 R' F'", "(U2) R2 U2 R F' U' R2 U' R2 U' F'", "R\u2019 U\u2019 F2 U\u2019 R U R\u2019 U F2 R", "(U2) R U' R' F R' F2 U' F U R", "(U') F' R' F' R U2 F R' F R F'", "R U R' U' R' F R U2 R U' R' U2 F'", "(U) F R' F' R U2 R U' R' U' F' U' F"], "name": "U3", "group": "U", "algset": "CLL", "s": "(U2) F R F' R2 U' F R' F' U R2"}, "22": {"a": ["F R' F' R U' R U' R' U2 R U' R' ", "(U) x R U' R U' R' U R' F' R ", "(U2) R U R' U R U' R U' R' F R' F'", "(U2) F' R U R' U' R' F R2 U R' U R U2' R'", "(U') R U R' U' R' F R2 U' R' F' R' F R"], "name": "U4", "group": "U", "algset": "CLL", "s": "(U') F R' U' R F' R' U F' R"}, "23": {"a": ["(U) R U' R2 F R F' R U R' U' R U R'", "(U') R U2 R' U R' F2 R F' R' F2 R", "(U') R U R2 U R U2 R' F R2 F'", "(U2) R2 U' R' U R' F R F' R2 U' R'", "(U') R U2 R' U' R U R' U2 F' U' F", "(U) R2' U2' R U R' U F R F' R"], "name": "U5", "group": "U", "algset": "CLL", "s": "F R2 F' U' R2 U' R' U R2"}, "24": {"a": ["(U) R' U R' F R F' R U2 R' U R ", "(U') R2 U R' U' R' F R2 F' U' R'", "(U') R2 U R' U' R2 U' y R' F2 R", "(U) R F' U' R' U' R2 U R' U' R' F R", "(U) R' F R2 U' R' F R' F' R U R' F' R", "(U2) F' R U R' U' R' F R2 U' R' F R' F' R"], "name": "U6", "group": "U", "algset": "CLL", "s": "(U') F R2 F U F' R2 F U' F2"}, "25": {"a": ["F R U' R' U' R U R' F' ", "(U) F' L F L' U' L' U L", "(U') R U R U' R' F R' F'"], "name": "L1", "group": "L", "algset": "CLL", "s": "F R F' U' R' U' R"}, "26": {"a": ["F R' F' R U R U' R'", "(U2) L' U' L' U L F' L F", "(U') R F' U' R' U' R F", "(U) F' R' F R F' R U R' U' F"], "name": "L2", "group": "L", "algset": "CLL", "s": "(U') F R' F' U2 R' U2 R"}, "27": {"a": ["R U2 R2 F R F' R U2 R'", "(U2) R' F2 R F' R' F2 R2 U' R'", "(U') R U2 R' F R' F' R2 U2 R'", "(U2) R' U' R U R' F' R U R' U' R' F R2"], "name": "L3", "group": "L", "algset": "CLL", "s": "(U) F R F2 U2 F R F' U2 F"}, "28": {"a": ["(U) R' U R' U2 R U' R' U R U' R2", "(U) R2 U' R U2 R' U2 R U' R2", "(U2) R2 U R' U2 R U2 R' U R2", "(U2) R2 U R' U' R U R' U2 R U' R", "R U' R U' R U2 R' U R' U R'"], "name": "L4", "group": "L", "algset": "CLL", "s": "(U) F2 U F' U2 F U2 F' U F2"}, "29": {"a": ["(U') R U' R' U R U' R' F R' F' R2 U R'", "R U R' U' R' F R2 F' U' R' U' R", "(U') R' U2 R' U' F R2 F' U R2", "(U') R U' R' F R' F' R2 U R' U' R' F R F'", "R U R' U' R' F R2 U' R' U R U R' F'", "(U') F R2 F' U' R' U' R2 U R' U' R'"], "name": "L5", "group": "L", "algset": "CLL", "s": "(U') F2 U' F R2 F' R F R2 F"}, "30": {"a": ["R' U' R U2 R' F R' F' R U' R  ", "(U') R' F' R U R' U' R' F R2 U' R' U2 R", "R U R2 F' R U R U' R2 F' R F", "(U') F R F' R U R2 U' R' F R F'", "(U2) R' F R U' R' F R F' R U R2' F' R", "(U2) R U R' U R' F R F' U2 R' F R F'"], "name": "L6", "group": "L", "algset": "CLL", "s": "(U) F2 U F' R2 F U' F' R2 F'"}, "31": {"a": [" R U R' U' R' F R F' ", "(U2) F' L' F L' U' L U L", "F' U' F U R U R'"], "name": "T1", "group": "T", "algset": "CLL", "s": "F R' F' U' R' U R"}, "32": {"a": ["(U2) R' F' R U R U' R' F", "F R F' R U R' U' R' ", "F R F' U' R' U' R", "(U) R U2 F R F' U2 R' "], "name": "T2", "group": "T", "algset": "CLL", "s": "(U') F R2 F' U2 R' U' R"}, "33": {"a": ["(U') R U F R' F' R U2 R U2 R2", "(U) F U' R U2 R' U' F2 R U R'", "(U2) R U2 R2 F R F' R U' R' U R U2 R'", " R2 U2 R' U2 R' F R F' U' R'", "(U2) R2 U R' F R' F' R U' R U R", "(U') L U' R' U2 F R U2 L' U B'", "(U') R U' R' U' R2 F R F' R U' R2", "R' U' R' F R F' R U' R' U R U' R' U2 R"], "name": "T3", "group": "T", "algset": "CLL", "s": "(U2) F R U F' R U' R U2 R2 F"}, "34": {"a": ["(U') R' U R' U2 R U2 R' U R2 U' R'", "(U) R' U R U2' R2' F' R U' R' F2 R2", "R U R' U R U2 R2 F' R U' R' F2 R", "(U) R U2 R' U L U L' U L U2 F' L'", "(U2) R' U R' F U' R U F2 R2"], "name": "T4", "group": "T", "algset": "CLL", "s": "(U) F R' U F' U F U2 R2 F'"}, "35": {"a": ["(U2) R U R' U2 R U R' U R' F R F'", "(U') F R F' R U R' U R' U' R U' R'", "(U') F R U R' U' R U' R' U' R U R' F'", "(U2) R U' x' z' R' U R' U' R U' R", "(U') F U' R' U F' R' F U' R", "(U) R U2 R' U R U2 R' U R' F R F'"], "name": "T5", "group": "T", "algset": "CLL", "s": "(U2) F R' U F' R' F U' F' R"}, "36": {"a": ["(U) R' U R U2 R2 F R F' R", "R U2 R' U' R2 U' R' F R' F' ", "(U') R' F R U2 R2 F R U' R", "(U') R' F R' F' R2 U2 R' U' R", "(U) R U R2' F R F' U R U R'"], "name": "T6", "group": "T", "algset": "CLL", "s": "(U2) F R F' U R2 U' R U R2"}, "37": {"a": ["R2 U2 R U2 R2", "R2 U2 R' U2 R2", "R U' R' U' R U' R' U R U R'", "(U') R U R' U R U' R' U R U2 R'"], "name": "H1", "group": "H", "algset": "CLL", "s": "(U) F2 U2 F U2 F2"}, "38": {"a": ["(U) (R U' R' F R' F' R) (R U' R' F R' F' R)", "(U) ( R' F R F' R U R') ( R' F R F' R U R')", "(U) R2 F' U2 F2 R2 F' R2", "x' U2 R U2 R2 F2 R U2 ", "F (R U R' U') (R U R' U') (R U R' U') F'"], "name": "H2", "group": "H", "algset": "CLL", "s": "(U) F2 R F2 R2 U2 R F2"}, "39": {"a": ["R U R' U R U R' F R' F' R ", "(U2) R' F' R U' R' F ' R F' R U R' ", "R U' R' U R U R' U2 F R' F' R", "(U') R U R2' F R F' R U R' U R U R'", "(U2) R U' R' F R' F' R2 U R' U R U2 R'", "(U) R U' R' F U2' R2' F R U' R"], "name": "H3", "group": "H", "algset": "CLL", "s": "(U') F R F' R2 U2 R U R2 U R2"}, "40": {"a": ["(U) F R2 U' R2 U' R2 U R2 F'", "R' U2 R y R' U R' U' R U' R", "(U') F R' F' R U' R U' R' U R' F R F'", "(U) R U2 R2 F R F' U2 R' F R F'", "(U') F U2 R' U2 R' U2 R U2 F'", "(U') F R U R' U' R F' R U R' U' R'", "(U) R U' R' F R' F R U2 R U' R' F", "(U) R' F R F' R U' R' U2 R' F R F'"], "name": "H4", "group": "H", "algset": "CLL", "s": "F R2 U' R2 U R2 U R2 F'"}, "41": {"a": ["(U') F' L U2 F2 R U' ", "(U2) R U R' U F R U' R2 F' R ", "y' (U') R' F R2 F' R2 U2 R", "(U') F' R B2 U2 R F' (z')", "(U) R U' R2 F' R F U R' F R"], "name": "S1", "group": "Sune", "algset": "EG-1", "s": "F R' U2 F2 R' F"}, "42": {"a": ["R U R' F2 U F R U R' ", "(U) F R' F' R F R U' R' U R' F' R", "(U2) F R2 U' R2 F U' F2 U' R", "(U2) F' R' F R U' R U R' U' F R' F' R", "(U2) R2 U' R2 F R2 U' R2 U' F2 U' R", "(U2) R2 U R2 F' R2 U R2 U' F2 U' R", "(U2) x R U' R U x' R' U2 R U' R2 F R2"], "name": "S2", "group": "Sune", "algset": "EG-1", "s": "(U2) F U' R F2 R U2 F' R"}, "43": {"a": ["(U2) F R' F' R U R' F' R2 U R' ", "(U') R' F R U2 R U' R2 F2 R F'"], "name": "S3", "group": "Sune", "algset": "EG-1", "s": "F' U2 F' U F2 R' F2 R"}, "44": {"a": ["F' U R U' R' U F R U R' ", "(U') R U' R' F U' R' F R2 U R' F'", "(U) F' R' F R2 U R' U' F R' F' R", "(U2) F U' R U2 R' F2 R' F R", "R U R' F' U R U2 R' U2 R U R'"], "name": "S4", "group": "Sune", "algset": "EG-1", "s": "(U) F R2 F U' F2 U' R U R2"}, "45": {"a": ["(U) R U' R' U R U' R' U F R U' R'", "(U') R2' F U' R U' R U' B2", "(U) R U' R' U R U' R' U' R' F' R F", "(U') R' F' R F U R' F' R U R' F' R", "(U2) R U2 R' U R' F' R F R' F R"], "name": "S5", "group": "Sune", "algset": "EG-1", "s": "(U2) F2 U R' U R' U F' R2"}, "46": {"a": ["R' F R2 U' R' U R U' R' F "], "name": "S6", "group": "Sune", "algset": "EG-1", "s": "F2 R U R' U F' U F2"}, "47": {"a": ["(U') B U' R2 F2 U' F ", "(U) R' F R2 U R' F' U' R U' R' ", "R' F' R U' F' R' F R2 U R' "], "name": "AS1", "group": "Anti-Sune", "algset": "EG-1", "s": "F' R F2 U2 R F'"}, "48": {"a": ["(U) R U' R' F' U' F2 R U' R' ", "R U' F2 R U2 R U' F", "F R U' R' U R' F' R U F' R U R'"], "name": "AS2", "group": "Anti-Sune", "algset": "EG-1", "s": "F U F2 R U2 R2 F' R"}, "49": {"a": ["F' R U R' U' R U R2 F' R "], "name": "AS3", "group": "Anti-Sune", "algset": "EG-1", "s": "F U2 F U' F2 R U2 R'"}, "50": {"a": ["R U' R' F' U' R U R' U' F ", "(U') R' F R F' U R U' R2 F' R F", "(U) F R U' R2' F' R U F' R U R'", "(U') R U R' F R U' R' U2 R' F R"], "name": "AS4", "group": "Anti-Sune", "algset": "EG-1", "s": "(U) F R2 F2 U' R' F2 R' U R'"}, "51": {"a": ["(U') R U R' F' U' R U R' U' R U R'", "(U) F' R' F R U R U R' U' R U R'", "(U2) R U F' R U R2 U' R U R'", "R' F2 R U' R U R' F' R U' R'"], "name": "AS5", "group": "Anti-Sune", "algset": "EG-1", "s": "F2 U' R F' U R' F R2"}, "52": {"a": ["(U2) R U' R2 F R U' R' F R F' ", "(U) F R' F2 R2 U R' U2 R' F' R"], "name": "AS6", "group": "Anti-Sune", "algset": "EG-1", "s": "F2 R' F' R U' F U' F2"}, "53": {"a": ["(U2) F2 R U R' U2 R U R' U' F ", "(U2) R2 B2 R' U R' U' R U2 R U' R2"], "name": "Pi1", "group": "Pi", "algset": "EG-1", "s": "(U2) F R F2 R F2 U2 R' F'"}, "54": {"a": ["(U') R U' R2 F R2 U' R'", "(U') R U R2 F' R2 U R' ", "(U') R' F R2 U' R2 F R", "(U') R' F' R2 U R2 F' R"], "name": "Pi2", "group": "Pi", "algset": "EG-1", "s": "R U R2 F' R2 U R'"}, "55": {"a": ["(U') F R' F U' F2 R U R "], "name": "Pi3", "group": "Pi", "algset": "EG-1", "s": "(U2) R F U R2 F' U R' F"}, "56": {"a": ["(U') R U' R' U R U' R' F R U' R'", "(U') R' F R U' R' F R F' R' F R ", "(U') F' R U R' U' R U R' F' R U R'", "(U') F R' F' R U R' F' R F R' F' R"], "name": "Pi4", "group": "Pi", "algset": "EG-1", "s": "(U) F U' R U' R' F U' F2"}, "57": {"a": ["(U) F U' R U2 R' F' R U R' F'", "(U') R U R' U R U' R2' F' R F R' F' R", "R U' R2 F R U R U' R' U' R' F R F' ", "F R U' R' U' F' R U R2' F' R", "(U2) F' R' F R F' R' F2 R U' F"], "name": "Pi5", "group": "Pi", "algset": "EG-1", "s": "(U') F R' U2 F2 U R' F U F'"}, "58": {"a": ["F R U' R' F R U2 R' U F' ", "(U') R' F' R U' R' F R2 U R' F' R U R'", "(U') F R' F' R U R U R' U' R' F' R2 U R'", "(U') R' F R F' R' F R2 U R' U' R U' R'", "(U2) F' R' F R U F R' F' R2 U R'", "(U) F' U R' F2 R F R' F' R F", "R F' R U' R' F R2 U2 R' U' R'", "(U2) R' U2 R U2 F2 U' F2 R U R"], "name": "Pi6", "group": "Pi", "algset": "EG-1", "s": "(U') F R U' R F R U' F2 R"}, "59": {"a": ["R U R' U R U R2 F R2 U' R' ", "R U' R2 F R2 U R' U' R U' R'", "R U R2' F' R2 U' R' U' R U' R'", "B' R2 F' R2 B' U' R2", "R U R' U R U' R2 F' R2 U R'"], "name": "U1", "group": "U", "algset": "EG-1", "s": "(U2) F U2 F U2 F U F2"}, "60": {"a": ["(U') y R' U R' U' R U' R' U' F2 R2 ", "F R2 B R2' F U F2 R2", "R U R' F' U' R U R' U' F R' F' R", "(U') x U' R' U R U' F R U R U'", "(U2) F' R' F R U R U R' U' F R' F' R"], "name": "U2", "group": "U", "algset": "EG-1", "s": "(U) R2 F2 U F R2 F R2 F"}, "61": {"a": ["(U) F' U2 R U2 R' U2 F ", "(U') R U' R2 F2 R F' U R U R'", "(U) R U R\u2019 U F\u2019 R U R\u2019 U\u2019 R U R2 F2 R", "(U) R U R\u2019 U F\u2019 R U R\u2019 U\u2019 R\u2019 F2 R2 U\u2019 R\u2019"], "name": "U3", "group": "U", "algset": "EG-1", "s": "F U2 R' F2 R U2 F'"}, "62": {"a": ["(U2) R' F R F' R' F R2 U' R' ", "R U' R' F R U' R2 F R "], "name": "U4", "group": "U", "algset": "EG-1", "s": "F R' U F' U2 F' R' F R'"}, "63": {"a": ["(U2) R' F R F' U R U' R' F R U' R'", "(U') R U' R' U R U' R' U' F R U' R'", "(U') R U' R' U R U' R' U R' F' R F", "(U2) F' U' F U R' F R2 U' R'", "(U2) R' F R U' R U R' F' U R U' R'"], "name": "U5", "group": "U", "algset": "EG-1", "s": "(U) F U2 F R' F2 R U F'"}, "64": {"a": ["(U') R' F R U' R' F R U' R U R' F'", "(U') R' F R2 U' R' y' U R U R'", "(U) F' U R U2 R' F U2 F", "R U' R' F U' R' F R F' R' F R", "(U') R' F R U' R' F R U F' R' F R", "(U2) R U R' F' R U2 R' U2 F R' F' R"], "name": "U6", "group": "U", "algset": "EG-1", "s": "(U2) F U' R2 U F U' F2 R"}, "65": {"a": ["R U' R' U R U' R2 F' R F ", "(U) R U R' F' R U2 R' U2 R U R' ", "(U) F R U' R' F' R U R' F' R U R'"], "name": "L1", "group": "L", "algset": "EG-1", "s": "(U') F' R F R2 F R U2 R"}, "66": {"a": ["(U) R' F R U' R' F R2 U R' F'", "(U2) R' F R F' R' F R U R U2 R'", "x U' R' U R U R' U' R U R' U' R ", "(U2) F R' F' R U2 R U' R2' F' R2 U R'", "F' R' F R F R' F' R F R' F' R", "R' F' R F R' F2 R U2 R' F' R "], "name": "L2", "group": "L", "algset": "EG-1", "s": "(U) F R' U' F2 U' R' F2 R'"}, "67": {"a": ["R' U R2 U' R2 U' F R2 U' R' "], "name": "L3", "group": "L", "algset": "EG-1", "s": "(U') F R' U F' U' R2 F U F2"}, "68": {"a": ["R' F R2 U R' F' R U2 R' ", "R U2 R' F R U' R2 F' R", "(U) R' F2 R F' R' F R2 U R'", "(U) R U' R2 F' R F R' F2 R"], "name": "L4", "group": "L", "algset": "EG-1", "s": "(U') F R2 F U' F2 R2 F R2 F'"}, "69": {"a": ["(U) R U R' F' R U R' U' F R' F' R ", "(U2) F' R' F R U' R U R' U' R U R'", "(U) L' U L y' R U2 R U' R2", "R U' R2' F R U' R' F R2 F' U' R' U' R", "R U R' F' U R U R' U' R U R'"], "name": "L5", "group": "L", "algset": "EG-1", "s": "(U') F U' R' F2 R F' U2 F'"}, "70": {"a": ["(U) R' U2 F R U2 R U' R2 F", "(U') F R U' R' U R' F' R U R' F' R", "(U') F' U2 F' R U2 R' U' F", "(U) R' F' R F U' R' F' R U R' F' R "], "name": "L6", "group": "L", "algset": "EG-1", "s": "(U2) F' U R U2 R' F U2 F"}, "71": {"a": ["(U) F R U' R2 F' R U R' F' R", "R U' R2 F R2 U R' U2 R' F R F' ", "R U R' U R U R2 F R U' R' F R F'", "R' F R U2 R' F2 R F' R' F R "], "name": "T1", "group": "T", "algset": "EG-1", "s": "(U') F R2 F2 R F R2 F R2"}, "72": {"a": ["(U) F' R' F R2 U R' U' R U R'", "(U2) R U' R' U2 R U2 R' F R U' R'", "(U') R U2 R' F R U' R' F' R U R'", "(U') R U R' F' U2 R U R' U' R U R'"], "name": "T2", "group": "T", "algset": "EG-1", "s": "(U) F R2 F2 R F' U2 F' R2"}, "73": {"a": ["R' F R2 U' R' U' R' F2 R ", "(U2) R U' R2 F R U R U2 R'"], "name": "T3", "group": "T", "algset": "EG-1", "s": "(U) R F U2 F' U R2 F' R"}, "74": {"a": ["R2 B2 U' R' U' R U' R' U R'", "(U2) R' F R F' U R U' R' U' R' F' R F", "(U') R' U F R2 U' R2 U' F U' R", "(U') R2 B2 U' R' U2 R' U2 R'"], "name": "T4", "group": "T", "algset": "EG-1", "s": "(U) F R2 F U2 F U F2 R2"}, "75": {"a": ["R' F' R2 U R' F' R U R' ", "(U2) R U R2 F' R F R' F' R", "R U2 R2' F R2 U' R' F' R U R'"], "name": "T5", "group": "T", "algset": "EG-1", "s": "(U') F R2 U' F2 U F2 R F2 R2"}, "76": {"a": ["(U') R U' R' U2 F R U2 R' F ", "(U') R' F R U2 F' R' F2 R F'", "(U') R' F R2 U R' F' U2' R' F R F'", "(U) R' U' R U F2 U' F2 R U R", "(U2) R U R' U F R U' R' F' R U R'"], "name": "T6", "group": "T", "algset": "EG-1", "s": "(U) F R' F U' F' R F' U R"}, "77": {"a": ["R' F R2 U' R2 U' F U R ", "R' F R2 U' R' F R U R' F'", "(U') R U R' F R U' R' U' R U' R' F", "(U') F' R' F R F R' F' R2 U R'", "(U') F R U' R' F' R U R2' F' R"], "name": "H1", "group": "H", "algset": "EG-1", "s": "F R2 F U' F' R F' R"}, "78": {"a": ["F' U R U' R2 F2 R U' F", "R U' R' U' R U' R2 F2 R U R U R'"], "name": "H2", "group": "H", "algset": "EG-1", "s": "(U) F R U' R2 F U' F2 U R"}, "79": {"a": ["R' U' R' F2 U F' R F' ", "(U) R' F R F' U2 F R U2 R' F"], "name": "H3", "group": "H", "algset": "EG-1", "s": "F R' F U' F2 R U R"}, "80": {"a": ["R U R' F' R U R' U' R U R' ", "(U) R' F R F' R' F R U' R' F R F'"], "name": "H4", "group": "H", "algset": "EG-1", "s": "(U') F R' F R U' F U2 F"}, "81": {"a": ["(U') F U' R2 U' R' U2 R U' R2 F'", "(U') R' F R2 F' R U2 R' U' F2 R2 "], "name": "S1", "group": "Sune", "algset": "EG-2", "s": "(U2) F R U R U2 F' R' U2 F2 R"}, "82": {"a": ["R U R' U R U2 R B2 R2", "(U') R' U2 R U R' U R' F2 R2", "(U') R2 F2 R U2 R U R' U R"], "name": "S2", "group": "Sune", "algset": "EG-2", "s": "(U) F R2 F' U' F R' F R2 F2"}, "83": {"a": ["R U' R' F R' F' R' F2 R2", "(U2) R' U F U R U' R2 F R2"], "name": "S3", "group": "Sune", "algset": "EG-2", "s": "(U') F2 R U2 F' U F' U' R'"}, "84": {"a": ["(U) F R2 F' R2 F' R U' R ", "(U2) R' F' U R' F R2 U R' U2 R ", "F R' F' R U2 R U2 R B2 R2"], "name": "S4", "group": "Sune", "algset": "EG-2", "s": "(U') F' R U' R F2 R U2 R'"}, "85": {"a": ["F' R' U R' U2 F R' U R'", "(U2) R' F R' F2 R U R U R' U R", "R' U R' F R2 U' F R' F'", "(U2) R' U2 R U' R' F U R U R' U' R"], "name": "S5", "group": "Sune", "algset": "EG-2", "s": "(U2) F R F' U R2 F' R U' R"}, "86": {"a": ["R2 B2 R' U' R' F R' F' R", "(U) R' U F R U R' F' R U R' U' R", "R' F U R' F R2 U R' U' R", "(U) R' U R' U' F U R2 U R' U' R", "(U2) R' U F R' F R2 U R' F' R"], "name": "S6", "group": "Sune", "algset": "EG-2", "s": "(U) F' R' F' U R U2 F' R2"}, "87": {"a": ["(U2) R' U R U' R2 F R F' R U R' U' R' F2 R2", "(U') R2 U R U2 R' F R2 F' R' F2 R2", "(U2) F R2 U2 R' U R' U2 R U' F'", "(U2) F U2 R U' R2 U R U2 R F' ", "(U2) F R U R U2 F' R' U2 F2 R ", "(U2) R2 U2 R2 F' R U R' U2 R U' F'", "(U2) R' U2 R2 U' R' U R' F R F R2"], "name": "AS1", "group": "Anti-Sune", "algset": "EG-2", "s": "(U') F R F U F' U R F2 U' R"}, "88": {"a": ["R' U' R U' R' U2 R' F2 R2"], "name": "AS2", "group": "Anti-Sune", "algset": "EG-2", "s": "F R F' U F R2 F R2 F2"}, "89": {"a": ["(U2) R' F R F' R U R B2 R2 ", "(U') F' U' R' U R' U2 F R2", "(U) R F R' F' R U R U' B2 R2"], "name": "AS3", "group": "Anti-Sune", "algset": "EG-2", "s": "(U) F2 R F2 U' R' F U R"}, "90": {"a": ["R' U2 R U' R2 F' R U' F R ", "(U') R' U R' F R2 F R2 F'"], "name": "AS4", "group": "Anti-Sune", "algset": "EG-2", "s": "(U2) F R' F R' F2 R' U2 R"}, "91": {"a": ["R2 B2 R2 F' R U R' U2 R' F2 R ", "R' U' R U' R' U' R' F2 R F' R", "(U) R' F R U' R' F' U' R U R' F2 R"], "name": "AS5", "group": "Anti-Sune", "algset": "EG-2", "s": "(U) F R2 F U F U R U2 R"}, "92": {"a": ["(U2) R2 F2 R F R F' R U R' "], "name": "AS6", "group": "Anti-Sune", "algset": "EG-2", "s": "(U) F R U F' U R2 F' R2"}, "93": {"a": ["F U' R U2 R U' R' U R' F'"], "name": "Pi1", "group": "Pi", "algset": "EG-2", "s": "(U2) F R' F2 R' F2 U' R2 U' R"}, "94": {"a": ["R' U2 R2 U' R' F2 R2 F' "], "name": "Pi2", "group": "Pi", "algset": "EG-2", "s": "F R2 F2 R U R2 U2 R"}, "95": {"a": ["(U2) R' F' U R' F R2 U2 R' U R", "R' F R U R' U' R U2 R' U' F R"], "name": "Pi3", "group": "Pi", "algset": "EG-2", "s": "(U2) F R2 F R' F2 R' U2 F' R"}, "96": {"a": ["(U) R' F U' R U R' F2 U2 R"], "name": "Pi4", "group": "Pi", "algset": "EG-2", "s": "(U') F R2 U2 F' U F R' U F'"}, "97": {"a": ["(U) R' U' R' F2 R2 U R' F2 R", "(U') R' F' R' F2 R2 U R' U2 R", "(U') R' F' R U' R2 F2 R U2 R"], "name": "Pi5", "group": "Pi", "algset": "EG-2", "s": "(U') F R F R2 F2 U' F U2 F'"}, "98": {"a": ["(U) R' U2 R U' R2 F2 R F R"], "name": "Pi6", "group": "Pi", "algset": "EG-2", "s": "(U') F R2 F R2 F2 U' F U' F'"}, "99": {"a": ["F U' R U2 R U' R' U2 R' U' F' ", "(U) R2 U2 R U R' U F' R U' R"], "name": "U1", "group": "U", "algset": "EG-2", "s": "(U2) F R F U2 R2 F2 U F' U R2"}, "100": {"a": ["F R U R' U' F R2 B2", "R' U' F R' F' R U R' F2 R2 "], "name": "U2", "group": "U", "algset": "EG-2", "s": "F2 R2 F R' F' R U F"}, "101": {"a": ["(U') R' U' R U R' F2 R U' R' U R", "(U) R U R' U' R B2 R' U R U' R' "], "name": "U3", "group": "U", "algset": "EG-2", "s": "F R F R2 F2 U2 F U' F'"}, "102": {"a": ["R2 F2 R U R U2 R2 F R F' R ", "(U2) R' U R' F' R U' R U R' F2 R"], "name": "U4", "group": "U", "algset": "EG-2", "s": "(U2) F R F' U R' F2 U F U' R"}, "103": {"a": ["(U') R2 B2 R' U R' U' R' F R F' ", "(U') R U' R' U2 R B R' U2 R U' R'"], "name": "U5", "group": "U", "algset": "EG-2", "s": "(U2) F R' F R U F' U' R2 F2"}, "104": {"a": ["(U') R2 B2 R2 F R F' R U R' U' R'", "(U') R' F R U2 R' U' R U2 R' F R"], "name": "U6", "group": "U", "algset": "EG-2", "s": "F R U' R F' R' F' U2 R"}, "105": {"a": ["R' U' R' F' R U' R U' R' F R", "F U2 R' U R U2 R F'", "R2 B2 R2 F R' F' R U R U' R' ", "F U' R U R U' R' U R F'"], "name": "L1", "group": "L", "algset": "EG-2", "s": "(U) F R' U2 R' U' R U2 F'"}, "106": {"a": ["(U) R2 B2 R' U R U' R' F R' F'", "(U) F' R F' U' R2 F R U2 R'"], "name": "L2", "group": "L", "algset": "EG-2", "s": "(U2) F' R F2 R F U' R2 F"}, "107": {"a": ["R' U' F2 R U2 R' U2 F R"], "name": "L3", "group": "L", "algset": "EG-2", "s": "F R U2 F' U2 F R2 U' F'"}, "108": {"a": ["(U2) R' U' R U R' F' R U R' U' R' F' R2", "R U2 R2 F R F' R U2 R B2 R2 "], "name": "L4", "group": "L", "algset": "EG-2", "s": "(U') F R U F U2 F2 U R' F' R'"}, "109": {"a": ["F R' F' R U R U' R B2 R2"], "name": "L5", "group": "L", "algset": "EG-2", "s": "(U') F R2 U' F' R' U F' U R"}, "110": {"a": ["(U') R U R U' R' F R' F' R2 B2 R2", "(U) F' R U R' U' R' F R' F2 R2"], "name": "L6", "group": "L", "algset": "EG-2", "s": "(U) F' R2 U R F R' F U' R'"}, "111": {"a": ["F R F' R U R' U' R B2 R2 "], "name": "T1", "group": "T", "algset": "EG-2", "s": "F' R2 U F' R' F2 R' F"}, "112": {"a": ["R U R' U' R' F R F' R2 B2 R2", "(U2) x U' R' F R' F' R U R' U2 R2"], "name": "T2", "group": "T", "algset": "EG-2", "s": "F R2 U' R U R2 U F'"}, "113": {"a": ["(U2) R' U R' F U' R U R2 ", "(U) R' U R' F R2 U2 R' U' R", "(U) R' U R U2 R2' F' R U' R"], "name": "T3", "group": "T", "algset": "EG-2", "s": "(U') F R' F R' U R' U' F2"}, "114": {"a": ["(U) R2 F2 R U' F R' F' R U R ", "(U') R2 B2 R2 F R U R' U' F' ", "(U') R2 F2 R U' R' F R F' U R"], "name": "T4", "group": "T", "algset": "EG-2", "s": "(U2) F R U R' U' F R2 F2"}, "115": {"a": ["(U2) R' F2 R U' R' U R' F R U' R", "(U) R' U R U2 R2 F R F' R' F2 R2", "(U') R' F R' F' R2 U2 R' U' R' F2 R2"], "name": "T5", "group": "T", "algset": "EG-2", "s": "(U2) F R U R' U2 F R2 F' R F'"}, "116": {"a": ["R' F' U R U2 R' F' U R", "(U2) R' U2 R' F2 R F2 R", "(U2) R U2 R F2 R' U2 R'", "(U2) R' U' F R U2 R' U' F R", "(U) R' U F' R U2 R' U F' R", "(U') R' F U' R U2 R' F U' R"], "name": "T6", "group": "T", "algset": "EG-2", "s": "(U') F R2 F R2 F' U2 F'"}, "117": {"a": ["(U') R2 F U2 F2 R2 F' R2", "(U') x R2 U' R2 U2 F2 U R2"], "name": "H1", "group": "H", "algset": "EG-2", "s": "(U) F2 R F2 R2 U2 R' F2"}, "118": {"a": ["R2 U2 R U2 B2 R2 ", "R2 U2 R' U2 F2 R2", "R2 F2 U2 R U2 R2", "R2 F2 U2 R' U2 R2"], "name": "H2", "group": "H", "algset": "EG-2", "s": "(U) F2 R2 U2 F U2 F2"}, "119": {"a": ["R' U' R U2 R2 F' R U' F R", "(U) R' U' F R U' R U R' U2 R' F"], "name": "H3", "group": "H", "algset": "EG-2", "s": "(U') F R' U2 F' R2 F' R F2 R"}, "120": {"a": ["R U2 B2 R' U R U' B R' ", "R' U' R U' R U' R' F U2 R' U' R "], "name": "H4", "group": "H", "algset": "EG-2", "s": "(U') F R' U F' U' F R2 U2 F'"}, "121": {"a": ["(U2) R' F R2 F' R2 U2 R", "(U2) R' F U2 R2' F R'"], "name": "S1", "group": "Sune", "algset": "LEG-1", "s": "R F' R2 U2 F' R"}, "122": {"a": ["(U') R U R2 F' U F2 R2 F'", "R U' R' U R U2 R' U R2 U' R2"], "name": "S2", "group": "Sune", "algset": "LEG-1", "s": "F R' U2 F R2 F U' R"}, "123": {"a": ["(U2) F R' F' R2 U2 R U' R2", "(U) R F R' F' R U' R' U R U' R' "], "name": "S3", "group": "Sune", "algset": "LEG-1", "s": "(U') R' U2 R' U R2 F' U2 F"}, "124": {"a": ["(U) R2 U' R2 F' R U2 R' U2 R' F"], "name": "S4", "group": "Sune", "algset": "LEG-1", "s": "(U) F R' F R2 F U R2 F2 R'"}, "125": {"a": ["(U2) F2 R F' U R' F U' R2", "R U2 R' U F R F' R2 U' R"], "name": "S5", "group": "Sune", "algset": "LEG-1", "s": "(U2) F2 R' U F' U F' U R2"}, "126": {"a": ["(U') R U2 R U' R2 F R2 F'", "(U2) R2' U' R U' F R' F' R2"], "name": "S6", "group": "Sune", "algset": "LEG-1", "s": "F R2 F' R2 U R' U2 R'"}, "127": {"a": ["(U2) x' R U' R2 U R2 B2 R'", "(U) R2 U R2 F R F' R U R' U R'", "(U2) R' U2 R2 F R2 F' R", "(U2) R F' R2 U2 F' R"], "name": "AS1", "group": "Anti-Sune", "algset": "LEG-1", "s": "R' F U2 R2 F R'"}, "128": {"a": ["(U) R2 U R2 U' R U2 R' U' R U R'", "(U) R U' R' U' F R F' R' F R F'", "R' U R U' R' U2 R U' R2 U R2"], "name": "AS2", "group": "Anti-Sune", "algset": "LEG-1", "s": "(U) F R' F2 U2 F R2 U R"}, "129": {"a": ["(U') F R2 F' R2 U R' U2 R'", "(U2) F' U F R2 U2 R' U R2", "(U') R2 F R F' U R' U R2"], "name": "AS3", "group": "Anti-Sune", "algset": "LEG-1", "s": "R U2 R U' R2 F R2 F'"}, "130": {"a": ["(U') F' R U2 R U2 R' F R2 U R2", "(U') F R' F' R U2 R2 U' R2 F R2 F'"], "name": "AS4", "group": "Anti-Sune", "algset": "LEG-1", "s": "(U') F R F' R2 F' U2 F U' R"}, "131": {"a": ["F' U2 R U R' U' R' F2 R2 F' R'", "(U2) R2 U R2 U2 R' F R F' R U' R'", " F2 R U' R2 U' R2 U' R' F R'", "(U) F' R2 U F' R2 U' R U2 F'", "R' U2 R U' F' U' F R2 U R'"], "name": "AS5", "group": "Anti-Sune", "algset": "LEG-1", "s": "(U2) F2 R F' U R' F U' R2"}, "132": {"a": ["(U2) R2 U R' U2 R2 F R F'", "(U') R U R' U' R U R' F R F' R'"], "name": "AS6", "group": "Anti-Sune", "algset": "LEG-1", "s": "F R U2 R2 F R' U' R2"}, "133": {"a": ["(U2) F R F' R' F R2 F' R' U2 R", "(U2) R' F' R2 F' R2 U2 F R", "(U') R F R' F' U R U' R2 F R F'", "(U2) R2 B2 R' U' R2 F R2 U' R'"], "name": "Pi1", "group": "Pi", "algset": "LEG-1", "s": "(U) R F R2 U2 F' U2 F' R'"}, "134": {"a": ["(U') R U R' U' R U2 R U' R2", "(U') R2 U R' U2 R' U R U' R'", "(U) R2' U' R U2 R U' R' U R", "(U') R U' R' U2 R2 U' R U2 R ", "(U) R' U R U2 R2 U R' U2 R' ", "(U2) R' U2 R' U R2 U2 R U R' ", "(U2) R U2 R U' R2 U2 R' U' R "], "name": "Pi2", "group": "Pi", "algset": "LEG-1", "s": "(U') F R F2 U' F2 R F'"}, "135": {"a": ["(U2) R F' U R' F2 U R F", "(U2) R F' U R2 U' R' F' U' R2 F' R'", "(U2) F U' R' U' R' F R2 U' R2 U' F"], "name": "Pi3", "group": "Pi", "algset": "LEG-1", "s": "(U2) F U F R2 U' R F' R"}, "136": {"a": ["(U') R2 U R' F R F' U R'", "(U') R' F R' F' U R' U2 R' ", "(U) R F' U F U' R U2 R ", "R F R' F' R U' R2 F R F' "], "name": "Pi4", "group": "Pi", "algset": "LEG-1", "s": "R U' F R' F' R U' R2"}, "137": {"a": ["(U) R U' R' F R F' R2 U2 R", "R2 U R' U R' U' R U2 R2 F R F' ", "(U') R F R' F R U R' U2 F ", "(U2) F R2 F' R2 U R2 U' R U' R' "], "name": "Pi5", "group": "Pi", "algset": "LEG-1", "s": "(U') F U F R2 U F' U2 R2 F'"}, "138": {"a": ["(U) R U R' U R2 U' R2 F R2 F'", "(U2) R' U2 R2 F R' F' R U R'", "(U') R' U R F' U' F R2 U2 R'", "F' U' F R2 U R2 U2 R U2 R"], "name": "Pi6", "group": "Pi", "algset": "LEG-1", "s": "(U) F R2 U' F R F U' F R"}, "139": {"a": ["R' U R' U' R U' R' U' R2", "(U') R2 U' R' U' R U' R' U R'", "R U' R U R' U R U R2 ", "R U' R' U' R2 U' R' U R U' R'", "(U) R U2 R U2 R U R2", "(U2) R' U' R U2 R2 U R' U R'"], "name": "U1", "group": "U", "algset": "LEG-1", "s": "R U2 R U2 R U R2"}, "140": {"a": ["(U2) R2 U R2 F' R2 F' R2 F R2 ", "(U') R F R' F' R U' R' F' U' F", "(U) R2 B2 R' U' R2 F R U R U2 R'", "F2 R U R U' R2 F U' R F'"], "name": "U2", "group": "U", "algset": "LEG-1", "s": "(U') F2 R2 U R U2 R F2 R"}, "141": {"a": ["(U) R U R' F R2 F' R U' R' ", "R2 F R U R' U' R2 U2 R2 F", "R U' F R' F' R U R U2 R2", "R2 U2 R' U' R' F R F' U R'", "(U') R' U' R B' R2' F U' F R"], "name": "U3", "group": "U", "algset": "LEG-1", "s": "(U') R U2 F' U2 F U2 R'"}, "142": {"a": ["(U') F' U' F R2 U' R' U R U' R'", "(U') R2 U R' U R' F R F' R U R2"], "name": "U4", "group": "U", "algset": "LEG-1", "s": "(U2) F R F R' F U' F' R F2"}, "143": {"a": ["(U') R2 U R' U2 R' F' U' F", "R F R' F' U' R U' R' U R U' R' "], "name": "U5", "group": "U", "algset": "LEG-1", "s": "F' R' F U2 F R F R2"}, "144": {"a": ["(U) R2 U' R U2 R F R F'", "(U') F R' F' U R2 U R' U R'", "(U2) F R F' U R2 U R' U2 R'", "R' U F R2 F' R U2 R", "(U2) R2 F R2 F' U2 R2 U R2 U2 R'"], "name": "U6", "group": "U", "algset": "LEG-1", "s": "F R' F' R' U2 R' U R2"}, "145": {"a": ["R2 U R' U' F R2 F' U R'", "(U2) R2 F R F' R U R2 U R2", "(U') R U2 F R' F' R U2 R U R2"], "name": "L1", "group": "L", "algset": "LEG-1", "s": "(U) F2 R F2 R F R2 F2 R"}, "146": {"a": ["(U2) R U' R' U' R2 U' R2 F R F'", "(U) R2 U R2 U F R F' R U R2", "(U2) F R' F' R2 U' R' U' R2 U' R2"], "name": "L2", "group": "L", "algset": "LEG-1", "s": "(U2) F2 R U' R' U2 R' U F"}, "147": {"a": ["R' U R' U R2 U' R U2 R'", "(U') R U2 R' U R2 U' R U' R"], "name": "L3", "group": "L", "algset": "LEG-1", "s": "(U2) F R U2 R' F U' R2 U F2"}, "148": {"a": ["(U') R' U R' U' R U R' F R2 F' R", "R' F U2 R2 F R U2 R U2 R2"], "name": "L4", "group": "L", "algset": "LEG-1", "s": "(U2) F R' F2 U' F R F' U2 F"}, "149": {"a": ["F' U F R U2 R U' R2"], "name": "L5", "group": "L", "algset": "LEG-1", "s": "(U') F R2 U' R U F2 U' R"}, "150": {"a": ["(U) R U' R U' R2 U' F R F'", "R U' R' D' R U R2 F' R", "(U2) R' U2 R' F R2 F' U' R"], "name": "L6", "group": "L", "algset": "LEG-1", "s": "(U') F' R2 F' U2 R2 F' U' R2"}, "151": {"a": ["(U) F R' F' R2 U R2 U R U R'", "R2 U R2 U R U R2 F R F'", "(U') R2 U' R' F R' F' U' R2 U' R2 "], "name": "T1", "group": "T", "algset": "LEG-1", "s": "F U2 F R F2 R F R'"}, "152": {"a": ["(U) R U' F R2 F' U R U' R2", "R2 U' R' U2 R' F R F' U2 R'", "R2 U' R2 U' R' F R' F' R2", "R U' R' U' R' F R F' R2 U' R2", "(U) R' U R' U' R2 U R' F R' F'", "R U R' F2 R U' R2 U2 R' U' F"], "name": "T2", "group": "T", "algset": "LEG-1", "s": "(U) F R U' F2 U' F' R F2"}, "153": {"a": ["(U2) R U2 R' U R' U' R U2 R U R' ", "(U2) R U2 R' U2 R U2 R U' R2", "(U2) R2 U R' U2 R' U2 R U2 R'"], "name": "T3", "group": "T", "algset": "LEG-1", "s": "(U') F R' F2 U R' U2 R F"}, "154": {"a": ["(U) F R F' R' F R2 F' U R' U R", "(U2) R2 U' F2 R U2 R' U2 R' F2", "(U2) R F' R2' U2' F R U R' F R"], "name": "T4", "group": "T", "algset": "LEG-1", "s": "(U') R F2 R F2 R U R2 F2"}, "155": {"a": ["R2 U' R' F R' F' R U' R U' R2", "(U2) R U R' U' R U R2 F' U F", "(U2) R' U2 R' U' R U R' F R' F'", "(U2) F2 R2 F R2 U R2 U' F2 R", "R' U2 R' U2 F R2 F' R2 U' R"], "name": "T5", "group": "T", "algset": "LEG-1", "s": "F R' F' R F R' F2 U F"}, "156": {"a": ["(U') R' F R2 F' R' U2 F R F'"], "name": "T6", "group": "T", "algset": "LEG-1", "s": "F R' F' U2 R F R2 F' R"}, "157": {"a": ["x R U2 R U' R' U F' R", "R F2 R F' R' F U' F"], "name": "H1", "group": "H", "algset": "LEG-1", "s": "F R' F R' U' R F2 R"}, "158": {"a": ["R2 U R' U R U' R U R' U R2 ", "R2 U' R U' R' U R' U' R U' R2 "], "name": "H2", "group": "H", "algset": "LEG-1", "s": "F U R2 U' R F2 U' F R"}, "159": {"a": ["(U') F' R' U' F2 R U' F R'", "F R' F' R U2 R' F' U2 F R'", "(U') F' R' U2 F2 R2 F' R' U' F2 R2", "(U') R2 B2 R' U R' F' R U R' U' R U R'"], "name": "H3", "group": "H", "algset": "LEG-1", "s": "R F' U R' F2 U R F"}, "160": {"a": ["R U' F R' F' R U' R2", "R U2 R U' F R F' R", "(U2) F' U' F R2 U' R2' F R F'"], "name": "H4", "group": "H", "algset": "LEG-1", "s": "(U2) R F' U F U' R U2 R"}};