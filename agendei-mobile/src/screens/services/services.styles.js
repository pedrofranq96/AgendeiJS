import { COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = { 
    container: {
        backgroundColor: COLORS.white,
        flex: 1
        
    },
    banner: {
      backgroundColor: COLORS.blue,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 25
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: 'bold',
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        marginTop: 3
    },
    text:{
        fontSize: FONT_SIZE.md,
        colors: COLORS.gray1,
        marginBottom: 15,
        marginLeft: 10,
    }
}