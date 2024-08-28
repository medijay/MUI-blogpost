import React from "react";

import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

function Main(props) {


    return (
        <Grid
        item
        xs={12}
        md={8}
        sx={{
            '& .markdown': {
                py: 3,
            },
        }}
        >
     
     <Divider />
        </Grid>
    );
}



export default Main;