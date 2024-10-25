import { COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = { 
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'space-between',
        padding:12
    },
    text:{
        fontSize: FONT_SIZE.md,
        colors: COLORS.gray3,
        marginBottom: 15,
        marginLeft: 10,
    }
}