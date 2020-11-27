import React from 'react';
import { LaunchesQuery } from '../../generated/graphql'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './style.css';
import Moment from 'react-moment';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
interface Props {
    data: LaunchesQuery
}

export const Launch: React.FC<Props> = ({ data }) => {

    // console.log(data)
    return (

        <div className='launch'>
            {
                !!data.launches && data.launches.map((obj, index) => {
                    const date : any = obj?.launch_date_local;
                    return (
                        <Card key={index} className="rootLaunch">
                            <CardActionArea>
                                <CardContent>
                                     <div className='upcomingLaunch'>
                                         
                                        <Typography className={obj?.launch_success ? "greenLaunch" : 'redLaunch'} variant="h5" component="h5">
                                           <h5 className='title'>Mission: </h5> {obj?.launch_success ? obj?.mission_name : obj?.mission_name}
                                        </Typography>
                                    </div>

                                    <div className='DatesLaunch'>
                                        <div style={{ display: 'flex' }}>
                                            <Typography variant="subtitle1" component="h2">
                                              Date: <Moment format='MMMM Do, YYYY'>{date}</Moment> 
                                            </Typography>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <Typography variant="subtitle1" component="h2">
                                              Time: <Moment format='HH:mm:ss'>{date}</Moment> 
                                            </Typography>
                                        </div>
                                    </div>
                                   
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link className='ButtonLaunch' to={`/${obj?.flight_number}`}>
                                    <Button size="small" color="primary" >
                                      <span className='button'> Launch Details </span><ArrowRightAltIcon></ArrowRightAltIcon>
                                </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </div>


    )
}