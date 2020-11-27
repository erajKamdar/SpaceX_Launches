import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import { Launch } from './Launch'
import { Progress } from '../Loader/Loader'

export const Index = () => {
    const { data, loading, error } = useLaunchesQuery();

    if (loading) {
        return (
            <Progress />
        )
    }
    if (error || !data) {
        return (
            <h2>Error</h2>
        )
    }
    return (
        <div>
            <Launch data={data} />
        </div>
    )
}