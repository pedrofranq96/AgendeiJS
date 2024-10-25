import { COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = { 
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingTop: 12,
        
        
    },
    item: {
        borderWidth: 1,
        borderColor: COLORS.gray4,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15
    },
    title:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 2
    },
    text:{
        fontSize: FONT_SIZE.md,
        colors: COLORS.gray1
    }

}