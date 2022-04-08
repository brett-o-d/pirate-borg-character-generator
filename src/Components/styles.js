import { makeStyles } from '@material-ui/core/styles';

export const TextStyles = makeStyles((theme) => ({
    extraLargeText: {
        fontSize: "xx-large",
        [theme.breakpoints.down('md')]: {
            fontSize: "x-large",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "large",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "80%",
        },
    },
    largeText: {
        fontSize: "x-large",
        [theme.breakpoints.down('md')]: {
            fontSize: "large",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "medium",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "50%",
        },
    },
    mediumText: {
        fontSize: "medium",
        [theme.breakpoints.down('md')]: {
            fontSize: "small",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "xx-small",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "4px",
        },
    },
}));

export const PositionStyles = makeStyles((theme) => ({
    CharacterName: {
        [theme.breakpoints.down('xs')]: {
            top: "8%",
            left: "6%",
            lineHeight: "1",
        },
    },
    ClassName: {
        [theme.breakpoints.down('xs')]: {
            top: "12.75%",
            left: "9%",
            lineHeight: "1.05",
        },
    },
    ClassFeatures: {
        [theme.breakpoints.down('xs')]: {
            left: "6%",
            width: "28%",
            lineHeight: "1.05",
        },
    },
    HitPoints: {
        [theme.breakpoints.down('xs')]: {
            top: "4%",
            left: "48%",
            lineHeight: "1.05",
        },
    },
    Weapon: {
        [theme.breakpoints.down('xs')]: {
            top: "8.5%",
            left: "58%",
            maxWidth: "33%",
            backgroundColor: "white",
        },
    },
    Clothes: {
        [theme.breakpoints.down('xs')]: {
            top: "14%",
            left: "58%",
            maxWidth: "33%",
        },
    },
    DevilsLuck: {
        [theme.breakpoints.down('xs')]: {
            top: "39.75%",
            left: "43.5%",
            lineHeight: "1.05",
        },
    },
    Strength: {
        [theme.breakpoints.down('xs')]: {
            top: "17%",
            left: "51.5%",
        },
    },
    Agility: {
        [theme.breakpoints.down('xs')]: {
            top: "21.25%",
            left: "51.75%",
        },
    },
    Presence: {
        [theme.breakpoints.down('xs')]: {
            top: "24.75%",
            left: "51.5%",
        },
    },
    Toughness: {
        [theme.breakpoints.down('xs')]: {
            top: "29%",
            left: "50.5%",
        },
    },
    Spirit: {
        [theme.breakpoints.down('xs')]: {
            top: "32.25%",
            left: "48%",
        },
    },
}));

