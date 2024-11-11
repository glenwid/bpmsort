
export const theme = {
    colors: {
        primary: "", 
        purple: {
            100: "#9d4edd",
            200: "#7b2cbf",
            300: "#5a189a",
            400: "#3c096c",
            500: "#240046",
        },
        yellowrange: {
            100: "#ff9e00", 
            200: "#ff9100",
            300: "#ff8500",
            400: "#ff7900",
            500: "#ff6d00",
        }
    }
}

export const antdTheme = {
    token: {
        colorText: 'black',
        colorPrimary: theme.colors.purple[500],
        borderRadius: 12, 
        
        colorBgCountainer: theme.colors.yellowrange[100],
    },
};
