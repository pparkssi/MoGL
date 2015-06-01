/**
 * Created by redcamel on 2015-05-21.
 * description

 */
var KeyBoard = (function () {
    var W, KeyBoard;
    W = window,
    KeyBoard =  {
        BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, PAUSE: 19, CAPSLOCK: 20, ESC: 27,
        PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40, INSERT: 45, DELETE: 46,
        0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57,
        A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90,
        NUMPAD_0: 96, NUMPAD_1: 97, NUMPAD_2: 98, NUMPAD_3: 99, NUMPAD_4: 100, NUMPAD_5: 101, NUMPAD_6: 102, NUMPAD_7: 103, NUMPAD_8: 104, NUMPAD_9: 105,
        "*": 106, "+": 107, "-": 109, ".": 110, "/": 111,
        F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123,
        "=": 187, COMA: 188, "SLASH/": 191, "BACKSLASH": 220
    };
    KeyBoard.downed = {};
    for (var k in KeyBoard) KeyBoard.downed[k] = 0;
        W.addEventListener('keydown', function (e) {
            KeyBoard.downed[e.keyCode] = 1;
        }),
        W.addEventListener('keyup', function (e) {
            KeyBoard.downed[e.keyCode] = 0;
        })
    return KeyBoard;
})();