//Add more messages if need be
export const messages = [
    '“The secret to getting ahead is getting started." - Mark Twain',
    `Did you know that stipends disbursed by Edustipend are not restricted to students alone? Yes!
     Anyone who has a learning goal can apply. In fact, more than 35% of current Edustipend beneficiaries 
     are middle-class workers who currently have a job while 63% are young people, mostly students. 
     Your dreams are valid, regardless of your age.`,
]

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