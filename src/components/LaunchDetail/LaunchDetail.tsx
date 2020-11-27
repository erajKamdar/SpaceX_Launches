import React from 'react'
import { LaunchinfoQuery } from '../../generated/graphql';
import Paper from '@material-ui/core/Paper';
import './style.css'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';
interface Props {
    data: LaunchinfoQuery
}

export const LaunchDetail: React.FC<Props> = ({ data }) => {
    const date : any= data.launch?.launch_date_local;
    return (
        <div className='detailContainer'>
            <div className='heading'>
                Mission: {data.launch?.mission_name}
            </div>
            <div className='content'>
                <div>

                    <Paper className='Date' elevation={3} >
                        <h2 className='mediumHeading'>Launch Data</h2>
                        <div className='line'></div>
                        <div className='smallHeading'>
                            Flight Number  <span className='value'>{data.launch?.flight_number}</span>
                        </div>


                        <div className='smallHeading'>
                            Launch Year  <span className='value'>{data.launch?.launch_year}</span>
                        </div>


                        <div className='smallHeading'>
                            Date <span className='value'>
                             <Moment format='MMMM Do'>{date}
                            </Moment>
                            </span>
                        </div>

                        <div className='smallHeading'>Successfull
                        <span className={data.launch?.launch_success ? "green" : 'red'}  style={{float: 'right'}}>
                                {data.launch?.launch_success ? " YES" : ' NO'}
                            </span>
                        </div>
                    </Paper>
                </div>
                <br />


                <Paper className='Rocket' elevation={3} >
                    <h2 className='mediumHeading'>Rocket Details</h2>
                    <div className='line'></div>
                    <div className='smallHeading'>
                        Rocket_ID  <span className='value'>{data.launch?.rocket?.rocket_id}</span>
                    </div>


                    <div className='smallHeading'>
                        Rocket_Name  <span className='value'>{data.launch?.rocket?.rocket_name}</span>
                    </div>

                    <div className='smallHeading'>
                        Rocket_Type <span className='value'> {data.launch?.rocket?.rocket_type}</span>
                    </div>
                </Paper>

                <br />

                <Paper className='Date' elevation={3} >
                    <h2 className='mediumHeading'>Launch Details</h2>
                    <div className='line'></div>
                    <div className='Detail'>


                        <div className='smallHeading'>
                            Reason: <span className='value'>{data.launch?.details}</span>
                        </div>

                        <div className='smallHeading'>
                            Site Name: <span className='value'>{data.launch?.launch_site?.site_name}</span>
                        </div>

                    </div>
                </Paper>
            </div>
            <Link to='/'>
                <button className="btn">
                    <ArrowBackIcon></ArrowBackIcon>
                    <span className='back'>GO BACK</span>
                </button>
            </Link>
        </div>
    )
};