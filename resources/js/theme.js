import { Card } from "antd";

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
        },
        black: {
            1200: "#000000",
            1100: "#141414", 
            1000: "#1f1f1f",
            900: "#262626",
            800: '#434343', 
            700: '#595959',
            600: '#8c8c8c',
            500: '#bfbfbf',
            400: '#d9d9d9',
            300: '#f0f0f0',
            200: '#f5f5f5',
            100: '#fafafa',
        },
        grey: {
            500: '#746d69', 
            400: '#acada8',
            300: '#bbbcb6',
            200: '#cccdc6',
            100: '#e8e9eb',
        }
    }
}

export const antdTheme = {
    token: {
        colorText: theme.colors.black[1100],
        colorPrimary: theme.colors.purple[400],
        borderRadius: 8, 
        
        colorBgContainer: theme.colors.black[100],
        colorBorderSecondary: theme.colors.black[500],

    },
};
