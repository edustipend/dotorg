/**
 * params - {array, max, min = 0}
 * generate a random message from an array of messages.
 * A ramdom number will be generated using the range between 0 - { the length of the array }
 * returns a random message using the position of the message in the array
 */
export const randomMessage = (array, max, min = 0) => {
    const position = Math.floor(Math.random() * (max - min)) + min;
    const random = array[position];
    return random;
}