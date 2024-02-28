export const CheckPreviousApplication = (application) => {
    const applicationDate = application?.createdAt;
    if (!applicationDate) {
        return
    }
    const IsoFormat = new Date(applicationDate);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const formattedYear = IsoFormat.getFullYear();
    const formattedMonth = IsoFormat.getMonth() + 1;
  
    //return true to disable the button if the user has applied in the current window
    if (currentYear === formattedYear && currentMonth === formattedMonth) {
        return true;
    }
    return false;

}
