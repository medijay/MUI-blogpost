import React from "react";
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography  from "@mui/material/Typography";


function Sidebar(props) {
    const {description,title } = props;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{p: 2, bgcolor: 'grey.200'}} >
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
                </Grid>
                );
            }
 
            Sidebar.propTypes = {
                archives: PropTypes.arrayOf(
                    PropTypes.shape({
                        title: PropTypes.string.isRequired,
                        url:PropTypes.string.isRequired,
                    }),
                ).isRequired,
                title: PropTypes.string.isRequired,
            };

            export default Sidebar;
