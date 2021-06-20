
const $boxrc = new (require('./index.js')).base();
const $stdio = new (require('consolestdiorc')).base();

let x = 4;
let y = 4;
$stdio.clear();
$stdio.cursorHide();
$boxrc.set('columns', 25);
$boxrc.set('rows', 7);
$boxrc.move(x,y);

$boxrc.add(
    'hugo the amazing cool'
);


$boxrc.add(
    'hugo a dog'
);

$boxrc.add(
    'not a cat'
);

$boxrc.add(
    'not a rat'
);
$boxrc.print();

setInterval(()=>{
    x++;
    y++;
    $boxrc.clean();
    $boxrc.move(x,y);
    $boxrc.print();
},500);

setTimeout(()=>{
    $stdio.cursorShow();
    $stdio.printTo('',0,0);
    process.exit();
},5000);
