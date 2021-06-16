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
    this.clear = function (){
        return $buffer.clear();
    }
    this.add = function (line){
        return $buffer.add(line);
    }
    this.print=function(){
        let start = _setup.get('top');
        let end = _setup.get('rows') + start;
        let left = _setup.get('left');
        let screen = $buffer.screen();
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
    this.resize=function(width,height){
        setup.width  = width;
        setup.height = height;
        lineBuffer.setScreen(width, height);
    }
    this.set = function(name, value){
        _setup.set(name, value);
        $buffer.set(name, value);
    }
    let bufferSizeRegulator = function(){

    }
    let render = function (){
    }
    let print = function (){
        
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
    const _get = function (name){
        return _setup.get(name);
    }
    const _set = function (name){
        return _setup.get(name);
    }

}

exports.base = boxrcbase;
