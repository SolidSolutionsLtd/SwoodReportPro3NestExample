// SSMClient: Solid Solutions

const dataSettings = {
	/*	========================================
					General Settings
		======================================== */
	// LengthLongestEdge: true,
	units: {
		imperialFractions: false,
		roundToNearest: 1 / 64,
	},

	/*	========================================
					Projects Page
		======================================== */

	sortByProjects: [],

	/*	========================================
					Panels Page
		======================================== */

	NoParentTitle: 'No Parent',
	CombinedPanelName: 'Combined Panel',
	sortByPanel: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Stocks Page
		======================================== */

	CombinedStockName: 'Combined Stock',
	CombineStocks: true,

	sortByStock: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Laminates Page
		======================================== */

	sortByLaminate: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Edgebands Page
		======================================== */

	sortByEdgeband: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'panelName', formatter: -1 },
		{ field: 'Order', formatter: 1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					BeamSaw Page
		======================================== */

	CombinedBeamSawName: 'Combined BeamSaw',
	CombineBeamSaw: true,

	sortByBeamSaw: [],

	/*	========================================
					Weldments Page
		======================================== */

	CombineWeldments: true,

	CombinedWeldmentName: 'Combined Weldment',

	sortByWeldment: [
		{ field: 'WeldmentLength', formatter: -1 },
		{ field: 'name', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Panel Details Page
		======================================== */

	/*	========================================
					Frames Page
		======================================== */

	sortByFrame: [
		{ field: 'name', formatter: 1 },
		{ field: 'Height', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'Depth', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Frames Details Page
		======================================== */

	sortByPanelFrame: [],

	/*	========================================
					Programs Page
		======================================== */

	ProgramsDefaultGroup: 0,
	CombinePrograms: false,
	CombinedProgramName: 'Combined Program',

	sortByProgram: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Program Details Page
		======================================== */

	ShowPanelIDPrograms: { field: 'PanelID', title: 'Panel ID', Show: true },
	NoParentTitlePrograms: 'No Parent',

	/*	========================================
					Sheets
		======================================== */

	sortBySheets: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Nesting
		======================================== */

	sortByNestingPanels: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Sheet Details
		======================================== */

	GroupSheetPanels: true,

	/*	========================================
					Cutting Pattern
		======================================== */
	sortByCuttingPattern: [
		{ field: 'name', formatter: 1 },
		{ field: 'thickness', formatter: -1 },
		{ field: 'material', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Cutting Pattern Details
		======================================== */

	/*	========================================
					Hardware Page
		======================================== */

	NoParentTitleHardware: 'No Parent',
	NoTypeTitleHardware: 'Hardware',

	sortByHardware: [
		{ field: 'UnitCost', formatter: -1 },
		{ field: 'quantity', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'Description', formatter: 1 },
		{ field: 'Configuration', formatter: 1 },
		{ field: 'length', formatter: 1 },
	],

	/*	========================================
					Summary Page
		======================================== */

	GroupPanelMachiningCosts: true,
	GroupSheetMachiningCosts: true,

	// SummarysortBy also used to sort Weldments
	SummarysortBy: [
		{ field: 'TotalCost', formatter: -1 },
		{ field: 'UnitCost', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'Description', formatter: 1 },
		{ field: 'MaterialThickness', formatter: 1 },
		{ field: 'MaterialQty', formatter: 1 },
	],

	SummaryHardwaresortBy: [
		{ field: 'TotalCost', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'Description', formatter: 1 },
		{ field: 'Configuration', formatter: 1 },
		{ field: 'UnitCost', formatter: -1 },
		{ field: 'quantity', formatter: -1 },
		{ field: 'length', formatter: 1 },
	],

	SummaryMachiningCostssortBy: [
		{ field: 'ProgramCost', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'Description', formatter: 1 },
		{ field: 'Configuration', formatter: 1 },
		{ field: 'UnitCost', formatter: -1 },
		{ field: 'quantity', formatter: -1 },
		{ field: 'length', formatter: 1 },
	],

	/*	========================================
					Labels Page
		======================================== */

	ExcludePanelLabels: false,
	ExcludeOffcutLabels: true,

	LabelData: [
		{ field: 'ProgramIndicator', GridLocation: { xs: 1, xe: 2, ys: 1, ye: 2 } },
		{ field: 'SWPanelID', GridLocation: { xs: 2, xe: 4, ys: 1, ye: 2 } },
		{ field: 'name', wrapText: true, GridLocation: { xs: 4, xe: 13, ys: 1, ye: 2 } },
		{ field: 'Image', Type: 'Image', GridLocation: { xs: 7, xe: 13, ys: 2, ye: 6 } },
		{ field: 'name', FontSize: 10, wrapText: true, HozAlign: 'right', VerAlign: 'bottom', GridLocation: { xs: 1, xe: 7, ys: 2, ye: 3 } },
		// { field: 'material.name', GridLocation: { xs: 1, xe: 7, ys: 3, ye: 4 } },
		{ field: 'material', GridLocation: { xs: 1, xe: 7, ys: 3, ye: 4 } },
		{ field: 'panelDimensions', GridLocation: { xs: 1, xe: 7, ys: 4, ye: 5 } },
		// { field: 'LabelQuantity', GridLocation: { xs: 1, xe: 7, ys: 5, ye: 6 } },
		{ field: 'Instance', Type: 'QRcode', GridLocation: { xs: 1, xe: 7, ys: 5, ye: 6 } },
	],

	// Not applicable to nesting labels
	sortByLabel: [
		{ field: 'thickness', formatter: -1 },
		{ field: 'material.name', formatter: 1 },
		{ field: 'length', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Labels Page Nesting
		======================================== */

	ExcludeNestedPanelLabels: false,
	ExcludeOffcutLabels: true,

	LabelDataNest: [],

	/*	========================================
					Labels Page BeamSaw
		======================================== */

	LabelDataBeamSaw: [],

	sortByLabelBeamSaw: [],

	/*	========================================
					Labels Page Frame
		======================================== */

	LabelDataFrames: [
		{ field: 'name', GridLocation: { xs: 3, xe: 13, ys: 1, ye: 2 } },
		{ field: 'Image', Type: 'Image', GridLocation: { xs: 7, xe: 13, ys: 2, ye: 5 } },
		{ field: 'description', GridLocation: { xs: 1, xe: 7, ys: 2, ye: 3 } },
		{ field: 'companyLogoLabel', GridLocation: { xs: 1, xe: 3, ys: 1, ye: 2 } },
		{ field: 'frameDimensions', GridLocation: { xs: 1, xe: 7, ys: 3, ye: 4 } },
		{ field: 'labelQuantity', GridLocation: { xs: 1, xe: 7, ys: 4, ye: 5 } },
	],

	sortByLabelFrame: [
		{ field: 'Heigh', formatter: -1 },
		{ field: 'width', formatter: 1 },
		{ field: 'Depth', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],
}

try {
	module.exports = { dataSettings }
} catch {}
