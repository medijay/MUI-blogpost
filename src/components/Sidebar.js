import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography  from "@mui/material/Typography";


function Sidebar() {

    const Sidebar = {
        title: 'jay"s blog',
        description:
          "jAY's blog gives you up to date story on technology, politics,business, culture and lots more...",
      };

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{p: 2, bgcolor: 'grey.200'}} >
                <Typography variant="h6" gutterBottom>
                    {Sidebar.title}
                </Typography>
                <Typography>{Sidebar.description}</Typography>
            </Paper>
                </Grid>
                );
            }
 
           

            export default Sidebar;
