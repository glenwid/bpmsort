import { styled } from '@/config/stitches.config';
import theme from '@/config/theme';

const Header = styled('header', {
    maxWidth: theme.maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
})

const AppBanner = styled('h1', {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: '3rem'
})

const AppLayout = ({ children }) => {

    return (
        <div>
            <Header>
                <AppBanner>
                    bpmsort
                </AppBanner>
            </Header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
