/*
 *  @Soldy\consolelinebufferrc\2021.01.21\GPL3
 */
'use strict';
const $setuprc = (require('setuprc')).base;
const $stdio = new (require('consolestdiorc')).base();
const $buffer = new (require('consolelinebufferrc')).base();

/*
 * @prototype
 */

const boxrcbase = function(){
    /*
    * @public
    */
    this.clear = function (){
        return $buffer.clear();
    }
    /*
    * @public
    */
    this.clean = function (){
        return _clean();
    }
    /*
    * @param {string}
    * @public
    */
    this.add = function (line){
        return $buffer.add(line);
    }
    /*
    * @public
    */
    this.print=function(){
        return _print();
    }
    /*
    * @param {integer}
    * @param {integer}
    * @public
    */
    this.move = function(x,y){
        _move(x,y)
    }
    /*
    * @param {integer}
    * @param {integer}
    * @public
    */
    this.resize=function(width,height){
        _resize(width, height);
    }
    /*
    * @param {string}
    * @param {any}
    * @public
    */
    this.set = function(name, value){
        _setup.set(name, value);
        $buffer.set(name, value);
    }
    /*
    * @private
    * @var {schemarc}
    */
    const _setup = new $setuprc({
        'top':{
            'type'    : 'int',
            'default' : 4
        },
        'left':{
            'type'    : 'int',
            'default' : 4
        },
        'rows':{
            'type'    : 'int',
            'default' : 20
        },
        'columns':{
            'type'    : 'int',
            'default' : 100
        }
    });
    /*
    * @private
    */
    const _clean = function (){
        const start = _get('top');
        const end = _get('rows') + start;
        const left = _get('left');
        const screen = ''.padEnd(
            _get('columns')
        );
        let s = 0;
        for (let i = start; end > i ; i++){
            $stdio.printTo(
                screen,
                left,
                i
            );
            s++;
        }
    }
    /*
    * @private
    */
    const _print = function (){
        const start = _get('top');
        const end = _get('rows') + start;
        const left = _get('left');
        const screen = $buffer.screen();
        let s = 0;
        for (let i = start; end > i ; i++){
            $stdio.printTo(
                screen[s],
                left,
                i
            );
            s++;
        }
    }
    /*
    * @param {integer}
    * @param {integer}
    * @private
    */
    const _move = function(x,y){
        _set('left', x);
        _set('top', y);
    }
    /*
    * @param {integer}
    * @param {integer}
    * @private
    */
    const _resize=function(width,height){
        _set('colunns', width);
        _set('rows', height);
        $buffer.setScreen(width, height);
    }
    /*
    * @param {string}
    * @private
    * @return {boolean}
    */
    const _get = function (name){
        return _setup.get(name);
    }
    /*
    * @param {string}
    * @param {any}
    * @private
    * @return {boolean}
    */
    const _set = function (name, val){
        return _setup.set(name, val);
    }
}

exports.base = boxrcbase;
