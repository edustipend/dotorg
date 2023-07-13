import React, { useReducer } from 'react'
import styles from './Carousel.module.css'
import Card from '../../sections/Testimonials/internals/card/Card';
import PropTypes from 'prop-types'
import arrLeft from '../../assets/arrow-left.svg';
import arrRight from '../../assets/arrow-right.svg';
import { TestConstants } from './constants';
import { slideReducer, initialState, types } from './carouselReducer';


const Carousel = ({ cardData }) => {
    // the minimum diffrence between touchStartEvent and touchEndEvent
    const minSwipeDiffrence = 0

    //function to register a touch event
    const onTouchStartEvent = (e) => {
        dispatch({ type: types.TOUCHEND, payload: null })
        dispatch({ type: types.TOUCHSTART, payload: e.targetTouches[0].clientX })
    }

    //function that holds the distance between the two touch events
    const onTouchMoveEvent = (e) => dispatch({ type: types.TOUCHEND, payload: e.targetTouches[0].clientX })

    /**
     * This onSwipeEvent function calculates the diffrence between the touchStartEvent state and the touchEndEvent state
     * The result is compared against the minSwipeDiffrence which is 0
     * If the diffrence is greater than 0 ? dispatch a swipeLeft event
     * If the diffrence is less than 0 ? dispatch a swipeRight event
     * @returns either a swipeLeft or swipeRight event for mobile or touch devices
     */

    const onSwipeEvent = () => {
        const diffrence = touchStartEvent - touchEndEvent
        if (!touchStartEvent || !touchEndEvent) return
        const swipeLeft = diffrence > minSwipeDiffrence
        const swipeRight = diffrence < minSwipeDiffrence

        if (swipeLeft) {
            return dispatch({ type: types.PREV })
        }
        if (swipeRight) {
            return dispatch({ type: types.NEXT })
        }
    }

    const [state, dispatch] = useReducer(slideReducer, initialState);
    const { slideIndex, touchStartEvent, touchEndEvent } = state;
    const { leftBtnTestId, rightBtnTestId, paginationTestId, pagTestId } = TestConstants

    return (
        <div onTouchStart={onTouchStartEvent} onTouchMove={onTouchMoveEvent}
            onTouchEnd={onSwipeEvent} className={styles.relativeContainer}
        >
            <section className={styles.carouselContainer}>
                {[...cardData, ...cardData, ...cardData].map((itm, idx) => {
                    let offset = cardData.length + (slideIndex - idx);
                    return <Card key={idx} itm={itm} offset={offset} />;
                })}
            </section>
            <img data-testid={leftBtnTestId} src={arrLeft} onClick={() => dispatch({ type: types.PREV })}
                className={`${styles.preBtn} ${styles.btns}`} alt="arrowLeft"
            />
            <img data-testid={rightBtnTestId} src={arrRight} onClick={() => dispatch({ type: types.NEXT })}
                className={`${styles.nextBtn} ${styles.btns}`} alt="arrowRight"
            />
            <div className={styles.outterContainer}>
                <div className={styles.pagination}>
                    <div data-testid={paginationTestId} className={styles.paginationContainer}>
                        {cardData.map((_, idx) => {
                            return (
                                <div data-testid={pagTestId}
                                    key={idx}
                                    className={slideIndex === idx ?
                                        `${styles.currentPag} ${styles.currentPagActive}` :
                                        `${styles.currentPag}`}
                                    onClick={() => dispatch({ type: types.PAYLOAD_CUSTOM, payload: idx })}
                                />
                            );
                        })}
                    </div>
                    <div className={`${styles.eclipse} ${styles.eclipseTop}`} />
                    <div className={`${styles.eclipse} ${styles.eclipseBottom}`} />
                </div>
            </div>
        </div>
    )
}
export default Carousel

Carousel.propTypes = {
    cardData: PropTypes.array,
}

Carousel.defaultProps = {
    cardData: [],
}