import { createButton } from './create-button.js';

const btnEl1 = createButton('Button 1');
const btnEl2 = createButton('Button 2');
const btnEl3 = createButton('Button 3');

document.body.append(btnEl1, btnEl2, btnEl3);
