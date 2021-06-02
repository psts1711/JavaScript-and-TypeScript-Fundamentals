// Class Topic: Create package.json

// npm -> node package manage

import {callMeADog} from './dog.js';
import Abc from './dog.js';
import {callMeACat} from './subPackage/cat.js'
callMeADog();
callMeACat();
Abc();