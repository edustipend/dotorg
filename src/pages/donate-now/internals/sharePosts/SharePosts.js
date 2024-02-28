import { constants } from "../transactionModal/constants";

export const defaultShare = (social) => {
    const url = encodeURIComponent('https://www.edustipend.org/support-a-learner');
    return social === 'LinkedIn' ? window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        : social === 'Facebook' ? window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank') : '';
}


export const twitterShare = () => {
    const tweetText = encodeURIComponent(constants.sharedContent);
    const url = `https://twitter.com/intent/tweet?text=${tweetText}`;
    return window.open(url, '_blank');
}

export const instagramShare = () => {
    return window.open(`https://www.instagram.com/`, '_blank');
}

