import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        color: 'white',
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#4caf50',
            light: '#6fbf73',
            dark: '#357a38',
            contrastText: '#fff'
        },
        secondary: {
            main: '#3d5afe',
            light: '#637bfe',
            dark: '#2a3eb1'
        },
        background: {
            default: '#282c34',
            secondary: '#357a38'
        },
        text:{
            primary: '#ffffff',
            secondary: '#000000'
        }
        
    }
});