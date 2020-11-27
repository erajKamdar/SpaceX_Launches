import React from 'react';
import { useLaunchinfoQuery } from '../../generated/graphql';
import { LaunchDetail } from './LaunchDetail';
import { useParams } from 'react-router-dom';
import { Progress } from '../Loader/Loader';

export const LaunchIndexDetail = () => {
    const { launch } = useParams();
    const { data, loading, error } = useLaunchinfoQuery({
        variables: {
            id: launch
        },
    });
    if (loading) {
        return (
            <Progress />
        )
    }
    console.log(error)

    if (error || !data) {
        return (
            <h2>Error</h2>
        )
    }
    return (
        <div>
            <LaunchDetail data={data} />
        </div>
    )
}