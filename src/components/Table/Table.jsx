import React from 'react'
import { tableHead } from './internals/constants'
import PropTypes from 'prop-types';

export const Table = ({ entries }) => {
    return (
        <div>Table</div>
    )
}

Table.propTypes = {
    entries: PropTypes.array,

}
Table.defaultProps = {
    entries: []
}