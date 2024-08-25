import { EventEmitter } from 'events';

// for realtime applications
//for creating custom events, that can be listened for,and for built-in event on readable strings

// the idea is to create a couple of functions we want to call when an event is emitted

// the .on() method is used to register event listeners and listen for multiple events and have multiple listeners for one event

// first create an instance for the EVENT EMITTER CLASS.
const eventemit = new EventEmitter();

const greethandler = () => {
    console.log('Hello World');
};
const byehandler = () => {
    console.log('bye everyone');
}

// registering the event
eventemit.on('greet', greethandler);
eventemit.on('bye', byehandler);

// Emitting the event
eventemit.emit('greet');
eventemit.emit('bye');
