import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = { 
    container: {
        backgroundColor: COLORS.white,
         flex: 1,
         justifyContent: 'space-between',
        padding: 50
    },
    containerLogo: {
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        width: 150,
        height: 30   

    },
    input: {
        backgroundColor: COLORS.gray4,
        padding: 10,
        borderRadius: 6,
        marginBottom: 6
    },
    footer: {
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row'
    },
    text:{
        fontSize: FONT_SIZE.sm
    },
    footerLink: {
        color: COLORS.blue,
        fontSize: FONT_SIZE.sm 
    }
}