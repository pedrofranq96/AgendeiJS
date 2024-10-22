import { COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = { 
    appointment: {
        backgroundColor: COLORS.white,
        flex: 1,
        borderWidth: 1,
        padding:12,
        borderColor: COLORS.gray4
    },
    name:{
        fontSize: FONT_SIZE.md,
        colors: COLORS.gray1,
        marginBottom: 2,
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 3,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    bookingDateFull: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop: 2
    },
    booking: {
        flexDirection: "row",        
    },
    containerBooking:{
        flex: 1
    },
    containerButton: {
        marginTop: 3
    },
    container: {
        flexDirection: "row",
    }
}