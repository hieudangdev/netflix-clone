
// export const customTheme = createTheme({
//     palette: {
//         redcolor: {
//             main: '#EB1C24',
//             contrastText: '#ffffff'
//         },
//         background: {
//             main: '#0D0D0F',
//         },
//         primary: {
//             main: '#333333'
//         },
//         headerimage: {
//             main: '#1A171E',
//         }


//     }

// })
import { createTheme } from "@mui/material/styles"
import { colors } from "@mui/material"

// export const themeModes = {
//     dark: "dark",
//     light: "light"
// }

export const customPalette = createTheme({
    palette: {
        redcolor: {
            main: '#EB1C24',
            contrastText: '#ffffff',
        },
        Background: {
            default: '#0D0D0F',
            paper: "#131313"

        },
        bgPrimary: {
            main: '#    0D0D0F',
        },

        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        headerimage: {
            main: '#1A171E',
        }
    },

})





