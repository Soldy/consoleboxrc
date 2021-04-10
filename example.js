
const boxrc = new (require('./index.js')).base();
const $stdio = new (require('consolestdiorc')).base();

$stdio.clear();
$stdio.cursorHide();
boxrc.set('columns', 25);
boxrc.set('rows', 7);

boxrc.add(
    'hugo the amazing cool'
);


boxrc.add(
    'hugo a dog'
);

boxrc.add(
    'not a cat'
);

boxrc.add(
    'not a rat'
);
boxrc.print();


setTimeout(()=>{
    $stdio.cursorShow();
    $stdio.printTo('',0,0);
},5000);
