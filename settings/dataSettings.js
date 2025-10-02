// SSMClient: Solid Solutions

const dataSettings = {
	/*	========================================
					General Settings
		======================================== */
	GenerateIDs: true,
	LengthLongestEdge: true,
	UseTopLevelProperties: true,
	AutoHideToggles: true,
	CheckForUpdates: true,
	ImperialUnits: false,
	ImperialRoundToNearest: 1 / 64,

	/*	========================================
					Projects Page
		======================================== */

	SortByProjects: [],

	/*	========================================
					Panels Page
		======================================== */

	NoParentTitle: 'No Parent',
	CombinedPanelName: 'Combined Panel',
	EBStringSeparator: ' ',
	EBStringReverse: true,
	PanelsDefaultGroup: 0,

	SortByPanel: [
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

	SortByStock: [
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

	SortByLaminate: [
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

	SortByEdgeband: [
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

	SortByBeamSaw: [],

	/*	========================================
					Weldments Page
		======================================== */

	CombineWeldments: true,

	CombinedWeldmentName: 'Combined Weldment',

	SortByWeldment: [
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

	SortByFrame: [
		{ field: 'name', formatter: 1 },
		{ field: 'Height', formatter: -1 },
		{ field: 'width', formatter: -1 },
		{ field: 'Depth', formatter: 1 },
		{ field: 'quantity', formatter: 1 },
	],

	/*	========================================
					Frames Details Page
		======================================== */

	SortByPanelFrame: [],

	/*	========================================
					Programs Page
		======================================== */

	ProgramsDefaultGroup: 0,
	CombinePrograms: false,
	CombinedProgramName: 'Combined Program',

	SortByProgram: [
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

	SortBySheets: [
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

	SortByNestingPanels: [
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
	SortByCuttingPattern: [
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

	SortByHardware: [
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

	// SummarySortBy also used to sort Weldments
	SummarySortBy: [
		{ field: 'TotalCost', formatter: -1 },
		{ field: 'UnitCost', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'Description', formatter: 1 },
		{ field: 'MaterialThickness', formatter: 1 },
		{ field: 'MaterialQty', formatter: 1 },
	],

	SummaryHardwareSortBy: [
		{ field: 'TotalCost', formatter: -1 },
		{ field: 'name', formatter: 1 },
		{ field: 'Description', formatter: 1 },
		{ field: 'Configuration', formatter: 1 },
		{ field: 'UnitCost', formatter: -1 },
		{ field: 'quantity', formatter: -1 },
		{ field: 'length', formatter: 1 },
	],

	SummaryMachiningCostsSortBy: [
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
	SortByLabel: [
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

	SortByLabelBeamSaw: [],

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

	SortByLabelFrame: [
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
