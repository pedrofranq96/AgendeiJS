import { COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = { 
    doctor: {
        backgroundColor: COLORS.white,
        flex: 1,
        // justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 8
    },
    name:{
        fontSize: FONT_SIZE.md,
        colors: COLORS.gray1,
        marginTop: 5      
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        colors: COLORS.gray3     
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 8
    }
}