setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// 1 - A B C D E
// 2 - E B A D C <------
// 3 - B E A D C
// 4 - B D A C E

// pile d'appel
// ^
// |
// |                             lg                lg    lg              lg
// |st - st - st - st - lg ..⟳.. cbB ..⟳..         cbA - cbD ..⟳..       cbC
// +-----0-----------------------20----------------500---501-------------1000------> temps
//                      E        B                 A     D               C

// files d'attente de macro-tasks
// file d'attente de timer (0ms) : cbB
// file d'attente de timer (20ms) :
// file d'attente de timer (500ms) : cbA - cbD
// file d'attente de timer (501ms) : cbD
// file d'attente de timer (502ms) :
// file d'attente de timer (1000ms) : cbC
// file d'attente de timer (1001ms) :
// Node s'arrête

// Jake Archibald - In the Loop (JSConf Asia 2018) :
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
