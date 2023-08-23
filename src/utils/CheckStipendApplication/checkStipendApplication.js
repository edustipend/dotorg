//this helper function checkes if the values of each form field has a length greater than 4

export const application = (field1, field2, field3, field4) => {
    if (field1.length > 4 && field2.length > 4 && field3.length > 4 && field4.length > 4) {
        return true
    }
    return false
}