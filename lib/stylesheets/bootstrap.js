/*

	a bootstrap like style

*/
"use strict";

import { Platform } from "react-native";

var LABEL_COLOR = "#687a95";
var INPUT_COLOR = "#101010";
var ERROR_COLOR = "#ff5151";
var HELP_COLOR = "#999999";
var BORDER_COLOR = "#cccccc";
var DISABLED_COLOR = "#777777";
var DISABLED_BACKGROUND_COLOR = "#eeeeee";
var FONT_SIZE = 14;
var FONT_WEIGHT = "500";

var stylesheet = Object.freeze({
	fieldset: {},
	// the style applied to the container of all inputs
	formGroup: {
		normal: {
			marginBottom: 10
		},
		error: {
			marginBottom: 10
		}
	},
	controlLabel: {
		// normal: {
		// 	color: LABEL_COLOR,
		// 	fontSize: FONT_SIZE,
		// 	marginBottom: 7,
		// 	fontWeight: FONT_WEIGHT
		// },
		normal: {
			fontSize: 10,
			color: LABEL_COLOR
		},
		// the style applied when a validation error occours
		error: {
			color: ERROR_COLOR,
			fontSize: 10,
			marginBottom: 7,
			fontWeight: FONT_WEIGHT
		}
	},
	helpBlock: {
		normal: {
			color: HELP_COLOR,
			fontSize: FONT_SIZE,
			marginBottom: 2
		},
		// the style applied when a validation error occours
		error: {
			color: HELP_COLOR,
			fontSize: FONT_SIZE,
			marginBottom: 2
		}
	},
	errorBlock: {
		fontSize: FONT_SIZE,
		marginBottom: 2,
		color: ERROR_COLOR
	},
	textboxView: {
		normal: {},
		error: {},
		notEditable: {}
	},
	textbox: {
		normal: {
			color: INPUT_COLOR,
			fontSize: FONT_SIZE,
			height: 36,
			paddingVertical: Platform.OS === "ios" ? 7 : 0,
			paddingHorizontal: 7,
			// borderRadius: 4,
			borderRadius: 0,
			borderBottomColor: BORDER_COLOR,
			borderBottomWidth: 1,
			marginBottom: 5
		},
		// the style applied when a validation error occours
		error: {
			color: INPUT_COLOR,
			fontSize: FONT_SIZE,
			height: 36,
			paddingVertical: Platform.OS === "ios" ? 7 : 0,
			paddingHorizontal: 7,
			// borderRadius: 4,
			borderRadius: 0,
			borderColor: ERROR_COLOR,
			borderBottomWidth: 1,
			marginBottom: 5
		},
		// the style applied when the textbox is not editable
		notEditable: {
			fontSize: FONT_SIZE,
			height: 36,
			paddingVertical: Platform.OS === "ios" ? 7 : 0,
			paddingHorizontal: 7,
			borderRadius: 4,
			borderColor: BORDER_COLOR,
			borderWidth: 1,
			marginBottom: 5,
			color: DISABLED_COLOR,
			backgroundColor: DISABLED_BACKGROUND_COLOR
		}
	},
	checkbox: {
		normal: {
			marginBottom: 4
		},
		// the style applied when a validation error occours
		error: {
			marginBottom: 4
		}
	},
	pickerContainer: {
		normal: {
			borderRadius: 0,
			borderBottomColor: BORDER_COLOR,
			borderBottomWidth: 1,
			marginBottom: 5,
		},
		error: {
			// borderRadius: 4,
			borderRadius: 0,
			borderBottomColor: ERROR_COLOR,
			borderBottomWidth: 1,
			marginBottom: 5
		},
		open: {
			// Alter styles when select container is open
		}
	
	},
	select: {
		normal: Platform.select({
			android: {
				// paddingLeft: 7,
				// color: INPUT_COLOR,
				// fontSize: FONT_SIZE
				// borderRadius: 4,
				borderRadius: 0,
				borderBottomColor: BORDER_COLOR,
				borderBottomWidth: 1,
				marginBottom: 5
			},
			ios: {}
		}),
		// the style applied when a validation error occours
		error: Platform.select({
			android: {
				
			},
			ios: {}
		})
	},
	pickerTouchable: {
		normal: {
			height: 44,
			flexDirection: "row",
			alignItems: "center"
		},
		error: {
			height: 44,
			flexDirection: "row",
			alignItems: "center"
		},
		active: {
			borderBottomWidth: 1,
			borderColor: BORDER_COLOR
		}
	},
	pickerValue: {
		normal: {
			color: INPUT_COLOR,
			height: 36,
			paddingVertical: Platform.OS === "ios" ? 7 : 0,
			paddingHorizontal: 7,
			// borderRadius: 4,
			borderRadius: 0,
			borderBottomColor: BORDER_COLOR,
			borderBottomWidth: 1,
			marginBottom: 5
			
		},
		error: {
			color: INPUT_COLOR,
			height: 36,
			paddingVertical: Platform.OS === "ios" ? 7 : 0,
			paddingHorizontal: 7,
			// borderRadius: 4,
			borderRadius: 0,
			borderBottomColor: BORDER_COLOR,
			borderBottomWidth: 1,
			marginBottom: 5
		}
	},
	datepicker: {
		normal: {
			marginBottom: 4
		},
		// the style applied when a validation error occours
		error: {
			marginBottom: 4
		}
	},
	dateTouchable: {
		normal: {},
		error: {}
	},
	dateValue: {
		normal: {
			color: INPUT_COLOR,
			fontSize: FONT_SIZE,
			padding: 7,
			marginBottom: 5,
			borderRadius: 0,
			borderBottomColor: BORDER_COLOR,
			borderBottomWidth: 1,
		},
		error: {
			color: ERROR_COLOR,
			fontSize: FONT_SIZE,
			padding: 7,
			marginBottom: 5
		}
	},
	buttonText: {
		fontSize: 18,
		color: "white",
		alignSelf: "center"
	},
	button: {
		height: 36,
		backgroundColor: "#48BBEC",
		borderColor: "#48BBEC",
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: "stretch",
		justifyContent: "center"
	}
});

module.exports = stylesheet;