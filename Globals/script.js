console.log(__dirname);
// Output:
//      E:\CodingArena\my-node.js-work\Globals
console.log(__filename);
// Output:
//      E:\CodingArena\my-node.js-work\Globals\script.js
console.log(global);
console.log(module);
// Output:
//      Module {
//          id: '.',
//          path: 'E:\\CodingArena\\my-node.js-work\\Globals',
//          exports: {},
//          filename: 'E:\\CodingArena\\my-node.js-work\\Globals\\script.js',
//          loaded: false,
//          children: [],
//          paths: [
//            'E:\\CodingArena\\my-node.js-work\\Globals\\node_modules',     
//            'E:\\CodingArena\\my-node.js-work\\node_modules',
//            'E:\\CodingArena\\node_modules',
//            'E:\\node_modules'
//          ]
//        }
console.log(process);