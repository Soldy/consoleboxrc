
const boxrc = new (require('./index.js')).base();


boxrc.set('columns', 10);
boxrc.set('rows', 5);

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
