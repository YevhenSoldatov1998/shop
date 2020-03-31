import React from 'react'
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Typography from "@material-ui/core/Typography";
const Error = ({children:{message}}) => {
    debugger
    return <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <Typography variant={"body1"}>{message}</Typography>
        <Typography variant={"body2"}>Please start json-server</Typography>
    </Alert>
}
export default Error