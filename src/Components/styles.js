import { makeStyles } from '@material-ui/core/styles';

export const TextStyles = makeStyles((theme) => ({
    XXLargeText: {
        [theme.breakpoints.up('lg')]: {
            fontSize: "xxx-large",
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: "xx-large",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "x-large",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "large",        
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "medium",        
        },
    },
    extraLargeText: {
        [theme.breakpoints.up('lg')]: {
            fontSize: "xxx-large",
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: "xx-large",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "x-large",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "large",        
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "medium",        
        },
    },
    largeText: {
        [theme.breakpoints.up('lg')]: {
            fontSize: "x-large",
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: "large",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "medium",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "small",        
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "x-small",        
        },
    },
    mediumText: {
        [theme.breakpoints.up('md')]: {
            fontSize: "medium",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "small",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "xx-small",        
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "xxx-small",        
        },
        },
  }));

