import React from 'react'
import InfoSection from '../InfoSection'
import {infoObjOne, infoObjTwo, infoObjThree, infoObjFour} from './DataInfo'
import Prisers from '../../Priser'
/* <InfoSection {...infoObjFour} /> */
function Info() {
    return (
        <>
            <InfoSection {...infoObjOne} />
            <InfoSection {...infoObjTwo} />
            <InfoSection {...infoObjThree} />
            <Prisers/>

        </>
    )
}

export default Info
