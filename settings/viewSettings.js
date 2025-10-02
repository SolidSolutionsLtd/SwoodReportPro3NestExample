const viewSettings = {
  "pages": [
    {
      "id": "home",
      "name": "home",
      "comment": "application home page",
      "url": "/",
      "type": "layout",
      "title": "Home Page",
      "resource": "project",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "name",
                "prefix": "Name: ",
                "formatter": "text",
                "range": "1,1:3,1"
              },
              {
                "field": "pdfs.PDF_PROJECT",
                "prefix": "pdf: ",
                "formatter": "pdf",
                "range": "4,1:4,1"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "formatter": "text",
                "range": "1,2:4,2"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "formatter": "text",
                "range": "1,3:4,3"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "1,4:4,4"
              },
              {
                "field": "images.IMG_REPORT",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "documents.EDRAWINGS_PROJECT.relativeURI"
                },
                "range": "5,1:12,12"
              },
              {
                "field": "root",
                "formatter": "chart",
                "range": "1,5:4,12",
                "formatterParams": {
                  "title": "Project Items",
                  "fields": [
                    {
                      "field": "sum(\"quantity\",\"root.frames\")",
                      "title": "frames"
                    },
                    {
                      "field": "sum(\"quantity\", \"root.panels\")",
                      "title": "panels"
                    },
                    {
                      "field": "sum(\"quantity\",\"root.programs\")",
                      "title": "programs"
                    },
                    {
                      "field": "\"sum(\"quantity\",\"root.sheets\"",
                      "title": "sheets"
                    },
                    {
                      "field": "sum(\"quantity\",\"root.programParts\")",
                      "title": "programParts"
                    },
                    {
                      "field": "sum(\"quantity\",\"root.patterns\")",
                      "title": "patterns"
                    },
                    {
                      "field": "sum(\"quantity\",\"root.hardware\")",
                      "title": "hardware"
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    {
      "id": "panels",
      "name": "panels",
      "comment": "list of all panels in the project",
      "url": "/panels",
      "type": "table",
      "title": "List of Panels",
      "resource": "panels",
      "table": {
        "splitBy": [
          {
            "field": "material.category",
            "label": "Category"
          },
          {
            "field": "material.name",
            "label": "Material"
          }
        ],
        "title": "Panels",
        "dataTreeElementColumn": "name",
        "columns": [
          {
            "field": "isCompleted",
            "title": "Completed",
            "formatter": "tickCross",
            "width": 120,
            "editor": "tickCross"
          },
          {
            "field": "name",
            "title": "Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            },
            "hozAlign": "left"
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 200
          },
          {
            "field": "length",
            "title": "Length",
            "width": 120
          },
          {
            "field": "width",
            "title": "Width",
            "width": 120
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": 120
          }
        ],
        "initialSort": []
      }
    },
    {
      "id": "panels-damaged",
      "name": "panels-damaged",
      "comment": "list of all damaged panels in the project",
      "url": "/panels-damaged",
      "type": "table",
      "title": "List of Damaged Panels",
      "resource": "panels",
      "table": {
        "title": "Panels",
        "filter": {
          "condition": "and",
          "rules": [
            {
              "label": "isCompleted",
              "field": "isCompleted",
              "operator": "equal",
              "type": "boolean",
              "value": true
            }
          ]
        },
        "splitBy": [
          {
            "field": "material.category",
            "label": "Category"
          },
          {
            "field": "material.name",
            "label": "Material"
          }
        ],
        "dataTreeElementColumn": "name",
        "columns": [
          {
            "field": "isCompleted",
            "title": "Completed",
            "formatter": "tickCross",
            "width": 120,
            "editor": "tickCross"
          },
          {
            "field": "id",
            "title": "#",
            "hozAlign": "center",
            "width": 70
          },
          {
            "field": "name",
            "title": "Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            }
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 200,
            "editor": "adaptable"
          },
          {
            "field": "length",
            "title": "Length",
            "width": 120
          },
          {
            "field": "width",
            "title": "Width",
            "width": 120
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": 120
          }
        ]
      }
    },
    {
      "id": "panels-sandbox",
      "name": "panels-sandbox",
      "comment": "test page to try new features",
      "url": "/panels-sandbox",
      "type": "table",
      "title": "List of Panels Sandbox",
      "resource": "panels",
      "table": {
        "title": "Panels",
        "splitBy": [
          {
            "field": "material.category",
            "label": "Category"
          },
          {
            "field": "material.name",
            "label": "Material"
          }
        ],
        "dataTreeElementColumn": "name",
        "columns": [
          {
            "field": "isCompleted",
            "title": "Completed",
            "formatter": "tickCross",
            "width": 120,
            "editor": "tickCross"
          },
          {
            "field": "name",
            "title": "Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            }
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 400
          },
          {
            "field": "swcps.Comments",
            "title": "Comments",
            "width": 400
          }
        ]
      }
    },
    {
      "id": "panels-filtered",
      "name": "panels-filtered",
      "comment": "list of panels with filter, only panels with length > 1000 and width > 500",
      "url": "/panels-filtered",
      "type": "table",
      "title": "List of Filtered Panels",
      "resource": "panels",
      "table": {
        "title": "Panels",
        "splitBy": [
          {
            "field": "material.category",
            "label": "Category"
          },
          {
            "field": "material.name",
            "label": "Material"
          }
        ],
        "filter": {
          "condition": "and",
          "rules": [
            {
              "label": "length",
              "field": "length",
              "operator": "greaterthan",
              "type": "number",
              "value": 1000
            },
            {
              "label": "width",
              "field": "width",
              "type": "number",
              "operator": "greaterthan",
              "value": 500
            }
          ]
        },
        "columns": [
          {
            "field": "pdfs.PDF_PANEL",
            "title": "",
            "formatter": "pdf",
            "width": 50
          },
          {
            "field": "programs.length",
            "title": "",
            "formatter": "programIndicator",
            "width": 50
          },
          {
            "field": "id",
            "title": "#",
            "hozAlign": "center",
            "width": 70
          },
          {
            "field": "name",
            "title": "Part Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            }
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 300
          },
          {
            "field": "length",
            "title": "Length",
            "width": 120
          },
          {
            "field": "width",
            "title": "Width",
            "width": 120
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": 120
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": 70
          },
          {
            "field": "hasGrain",
            "title": "Grain",
            "formatter": "tickCross",
            "width": 100
          },
          {
            "field": "costCore",
            "title": "costCore",
            "width": 120,
            "formatter": "money",
            "formatterParams": {
              "decimal": ".",
              "thousand": ","
            }
          }
        ]
      }
    },
    {
      "id": "panels-materials",
      "name": "panels-materials",
      "comment": "list of panels grouped by material, a page per material",
      "url": "/panel-materials",
      "type": "table",
      "title": "???",
      "resource": "panels",
      "pagePerGroup": {
        "field": "material.name"
      },
      "splitBy": [
        {
          "field": "material.category",
          "label": "Category"
        },
        {
          "field": "material.name",
          "label": "Material"
        }
      ],
      "table": {
        "columns": [
          {
            "field": "pdfs.PDF_PANEL",
            "title": "",
            "formatter": "pdf",
            "width": 50
          },
          {
            "field": "programs.length",
            "title": "",
            "formatter": "programIndicator",
            "width": 50
          },
          {
            "field": "id",
            "title": "#",
            "hozAlign": "center",
            "width": 70
          },
          {
            "field": "name",
            "title": "Part Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            }
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 300
          },
          {
            "field": "length",
            "title": "Length",
            "width": 120
          },
          {
            "field": "width",
            "title": "Width",
            "width": 120
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": 120
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": 70
          },
          {
            "field": "hasGrain",
            "title": "Grain",
            "formatter": "tickCross",
            "width": 100
          },
          {
            "field": "costCore",
            "title": "costCore",
            "width": 120,
            "formatter": "money",
            "formatterParams": {
              "decimal": ".",
              "thousand": ","
            }
          }
        ]
      }
    },
    {
      "id": "panels-frames",
      "name": "panels-frames",
      "comment": "list of panels grouped by frame, a page per frame",
      "url": "panel-frames",
      "type": "table",
      "title": "???",
      "resource": "panels",
      "pagePerGroup": {
        "field": "frame.name"
      },
      "splitBy": [
        {
          "field": "material.category",
          "label": "Category"
        },
        {
          "field": "material.name",
          "label": "Material"
        }
      ],
      "table": {
        "columns": [
          {
            "field": "pdfs.PDF_PANEL",
            "title": "",
            "formatter": "pdf",
            "width": 50
          },
          {
            "field": "programs.length",
            "title": "",
            "formatter": "programIndicator",
            "width": 50
          },
          {
            "field": "id",
            "title": "#",
            "hozAlign": "center",
            "width": 70
          },
          {
            "field": "name",
            "title": "Part Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            }
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 300
          },
          {
            "field": "length",
            "title": "Length",
            "width": 120
          },
          {
            "field": "width",
            "title": "Width",
            "width": 120
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": 120
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": 70
          },
          {
            "field": "hasGrain",
            "title": "Grain",
            "formatter": "tickCross",
            "width": 100
          },
          {
            "field": "costCore",
            "title": "costCore",
            "width": 120,
            "formatter": "money",
            "formatterParams": {
              "decimal": ".",
              "thousand": ","
            }
          }
        ]
      }
    },
    {
      "id": "stocks",
      "name": "stocks",
      "comment": "list of all stocks in the project",
      "url": "/stocks",
      "type": "table",
      "resource": "stocks",
      "title": "List of Stocks",
      "table": {
        "title": "Stocks",
        "columns": [
          {
            "field": "name",
            "title": "Part Name",
            "width": "auto",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:refPart"
            }
          },
          {
            "field": "description",
            "title": "Description",
            "width": "250"
          },
          {
            "field": "length",
            "title": "Length",
            "width": "200"
          },
          {
            "field": "width",
            "title": "Width",
            "width": "200"
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": "200"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "100"
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": "250"
          }
        ]
      }
    },
    {
      "id": "laminates",
      "name": "laminates",
      "comment": "list of all laminates in the project",
      "url": "/stocks/laminates",
      "type": "table",
      "resource": "laminates",
      "title": "Laminates",
      "table": {
        "columns": [
          {
            "field": "name",
            "title": "Name",
            "width": 150
          },
          {
            "field": "panel.name",
            "title": "Panel",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:refPart"
            }
          },
          {
            "field": "material.name",
            "title": "Material"
          },
          {
            "field": "material.hasGrain",
            "title": "Grain",
            "formatter": "tickCross"
          },
          {
            "field": "length",
            "title": "Length"
          },
          {
            "field": "width",
            "title": "Width"
          },
          {
            "field": "thickness",
            "title": "Thickness"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": 100
          }
        ]
      }
    },
    {
      "id": "edgebands",
      "name": "edgebands",
      "comment": "list of all edgebands in the project",
      "url": "/stocks/edgebands",
      "type": "table",
      "resource": "edgebands",
      "title": "List of Edgebands",
      "table": {
        "title": "Edgebands",
        "columns": [
          {
            "field": "panel.name",
            "title": "Panel",
            "width": "auto"
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": "250"
          },
          {
            "field": "length",
            "title": "Length",
            "width": "200"
          },
          {
            "field": "width",
            "title": "Width",
            "width": "200"
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": "200"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "100"
          }
        ]
      }
    },
    {
      "id": "patterned-panels",
      "name": "patterned-panels",
      "comment": "list of all patterned panels in the project",
      "url": "/patterned-panels",
      "type": "table",
      "resource": "panels",
      "title": "List of Patterned Panels",
      "table": {
        "title": "Patterned Panels",
        "filter": {
          "condition": "and",
          "rules": [
            {
              "label": "isPatterned",
              "field": "isPatterned",
              "operator": "equal",
              "type": "boolean",
              "value": true
            }
          ]
        },
        "dataTreeElementColumn": "name",
        "columns": [
          {
            "field": "pdfs.PDF_PANEL",
            "title": "",
            "formatter": "pdf",
            "width": 50
          },
          {
            "field": "programs.length",
            "title": "",
            "formatter": "programIndicator",
            "width": 50
          },
          {
            "field": "id",
            "title": "#",
            "hozAlign": "center",
            "width": 70
          },
          {
            "field": "name",
            "title": "Part Name",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:key"
            }
          },
          {
            "field": "material.name",
            "title": "Material",
            "width": 300
          },
          {
            "field": "length",
            "title": "Length",
            "width": 120
          },
          {
            "field": "width",
            "title": "Width",
            "width": 120
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": 120
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": 70
          },
          {
            "field": "hasGrain",
            "title": "Grain",
            "formatter": "tickCross",
            "width": 100
          },
          {
            "field": "costCore",
            "title": "costCore",
            "width": 120,
            "formatter": "money",
            "formatterParams": {
              "decimal": ".",
              "thousand": ","
            }
          }
        ]
      }
    },
    {
      "id": "weldments",
      "name": "weldments",
      "comment": "list of all weldments in the project",
      "url": "/weldments",
      "type": "table",
      "resource": "weldments",
      "title": "List of Weldments",
      "table": {
        "title": "Weldments",
        "columns": [
          {
            "field": "name",
            "title": "Part Name",
            "width": "auto"
          },
          {
            "field": "description",
            "title": "Description",
            "width": "250"
          },
          {
            "field": "length",
            "title": "Length",
            "width": "160"
          },
          {
            "field": "lengthTotal",
            "title": "Length Total",
            "width": "160"
          },
          {
            "field": "cutlist",
            "title": "cutlist",
            "width": "250"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "100"
          }
        ]
      }
    },
    {
      "id": "frames",
      "name": "frames",
      "comment": "list of all frames in the project",
      "url": "/frames",
      "type": "table",
      "resource": "frames",
      "title": "List Frames",
      "table": {
        "title": "Frames",
        "dataTreeElementColumn": "name",
        "columns": [
          {
            "field": "id",
            "title": "#",
            "width": 70
          },
          {
            "field": "pdfs.PDF_FRAME",
            "title": "",
            "formatter": "pdf",
            "width": 50
          },
          {
            "field": "name",
            "title": "Name",
            "width": "auto",
            "formatter": "link",
            "formatterParams": {
              "url": "/frames/:key",
              "urlChildren": "/sub-frames/:key"
            }
          },
          {
            "field": "description",
            "title": "Description",
            "width": "auto"
          },
          {
            "field": "height",
            "title": "Height",
            "width": "200"
          },
          {
            "field": "width",
            "title": "Width",
            "width": "200"
          },
          {
            "field": "depth",
            "title": "Depth",
            "width": "200"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "150"
          }
        ]
      }
    },
    {
      "id": "sub-frames",
      "name": "sub-frames",
      "comment": "list of all subframes in the project",
      "url": "/sub-frames",
      "type": "table",
      "resource": "subFrames",
      "title": "List of Sub-Frames",
      "table": {
        "title": "subFrames",
        "dataTreeElementColumn": "name",
        "columns": [
          {
            "field": "id",
            "title": "#",
            "width": 70
          },
          {
            "field": "pdfs.PDF_FRAME",
            "title": "",
            "formatter": "pdf",
            "width": 50
          },
          {
            "field": "name",
            "title": "Name",
            "width": "auto",
            "formatter": "link",
            "formatterParams": {
              "url": "/sub-frames/:key"
            }
          },
          {
            "field": "description",
            "title": "Description",
            "width": "auto"
          },
          {
            "field": "height",
            "title": "Height",
            "width": "200"
          },
          {
            "field": "width",
            "title": "Width",
            "width": "200"
          },
          {
            "field": "depth",
            "title": "Depth",
            "width": "200"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "150"
          }
        ]
      }
    },
    {
      "id": "programs",
      "name": "programs",
      "comment": "list of all programs in the project",
      "url": "/programs",
      "type": "table",
      "resource": "programs",
      "title": "List of Programs",
      "table": {
        "title": "Programs",
        "splitBy": [
          {
            "field": "machine",
            "label": "Machine"
          }
        ],
        "columns": [
          {
            "field": "panel.id",
            "title": "#",
            "hozAlign": "center",
            "width": 70
          },
          {
            "field": "part.name",
            "title": "Panel Name",
            "width": "auto",
            "formatter": "link",
            "formatterParams": {
              "url": "/panels/:panel.key"
            }
          },
          {
            "field": "name",
            "title": "Program Name",
            "width": "200",
            "formatter": "link",
            "formatterParams": {
              "url": "/programs/:key"
            }
          },
          {
            "field": "programFile.relativeURI",
            "title": "Program File Name",
            "width": "400"
          },
          {
            "field": "panel.material.name",
            "title": "Material",
            "width": "200"
          },
          {
            "field": "machine",
            "title": "Machine",
            "width": "150"
          },
          {
            "field": "cost",
            "title": "Cost",
            "width": "150",
            "formatter": "money",
            "formatterParams": {
              "decimal": ".",
              "thousand": ","
            }
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "75"
          }
        ]
      }
    },
    {
      "id": "tools",
      "name": "tools",
      "comment": "list of all tools in the project",
      "url": "/tools",
      "type": "table",
      "resource": "tools",
      "title": "List of Tools",
      "table": {
        "title": "Tools",
        "columns": [
          {
            "field": "number",
            "title": "Number",
            "width": "20%"
          },
          {
            "field": "name",
            "title": "Name",
            "width": "30%"
          },
          {
            "field": "reference",
            "title": "Reference",
            "width": "25%"
          },
          {
            "field": "diameter",
            "title": "Diameter",
            "width": "25%"
          }
        ]
      }
    },
    {
      "id": "spindles",
      "name": "spindles",
      "comment": "list of all spindles in the project",
      "url": "/spindles",
      "type": "table",
      "resource": "spindles",
      "title": "List of Spindles",
      "table": {
        "title": "Spindles",
        "columns": [
          {
            "field": "key",
            "title": "key"
          },
          {
            "field": "variables.SPINDLE_NAME",
            "title": "name"
          },
          {
            "field": "variables.SPINDLE_FAMILY",
            "title": "family"
          },
          {
            "field": "variables.SPINDLE_RPM",
            "title": "rpm"
          },
          {
            "field": "variables.SPINDLE_USED",
            "title": "used"
          }
        ]
      }
    },
    {
      "id": "sheets",
      "name": "sheets",
      "comment": "list of all sheets in the project",
      "url": "/sheets",
      "type": "table",
      "resource": "sheets",
      "title": "List of Sheets",
      "table": {
        "title": "Sheets",
        "columns": [
          {
            "field": "name",
            "title": "Name",
            "width": "600",
            "formatter": "link",
            "formatterParams": {
              "url": "/sheets/:key"
            }
          },
          {
            "field": "length",
            "title": "Length",
            "width": "auto"
          },
          {
            "field": "width",
            "title": "Width",
            "width": "auto"
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": "auto"
          },
          {
            "field": "board.name",
            "title": "Material",
            "width": "auto"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "auto"
          }
        ]
      }
    },
    {
      "id": "program-parts",
      "name": "program-parts",
      "comment": "list of all program parts (nested panels) in the project",
      "url": "/program-parts",
      "type": "table",
      "resource": "programParts",
      "title": "List of Nested Panels",
      "table": {
        "title": "Nested Panels",
        "splitBy": [
          {
            "field": "sheet.name",
            "label": "Sheet",
            "default": true
          }
        ],
        "columns": [
          {
            "field": "ProgramIndicator",
            "title": "",
            "hozAlign": "center",
            "width": "40"
          },
          {
            "field": "programPartId",
            "title": "#",
            "hozAlign": "center",
            "width": "60"
          },
          {
            "field": "name",
            "title": "Name",
            "width": 300,
            "formatter": "link",
            "formatterParams": {
              "url": "/program-parts/:key"
            }
          },
          {
            "field": "panel.length",
            "title": "Length",
            "width": "auto"
          },
          {
            "field": "panel.width",
            "title": "Width",
            "width": "auto"
          },
          {
            "field": "panel.thickness",
            "title": "Thickness",
            "width": "auto"
          },
          {
            "field": "sheet.board.name",
            "title": "Material",
            "width": "auto"
          },
          {
            "field": "quantityInProject",
            "title": "Qty in Project",
            "width": 150
          }
        ]
      }
    },
    {
      "id": "patterns",
      "name": "patterns",
      "comment": "list of all patterns in the project",
      "url": "/patterns",
      "type": "table",
      "resource": "patterns",
      "title": "List of Patterns",
      "table": {
        "title": "Patterns",
        "columns": [
          {
            "field": "name",
            "title": "Name",
            "width": "auto",
            "formatter": "link",
            "formatterParams": {
              "url": "/patterns/:key"
            }
          },
          {
            "field": "quantityPanels",
            "title": "quantityPanels",
            "width": "200"
          },
          {
            "field": "length",
            "title": "Length",
            "width": "200"
          },
          {
            "field": "width",
            "title": "Width",
            "width": "200"
          },
          {
            "field": "thickness",
            "title": "Thickness",
            "width": "200"
          },
          {
            "field": "material",
            "title": "Material",
            "width": "200"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "100"
          }
        ]
      }
    },
    {
      "id": "hardware",
      "name": "hardware",
      "comment": "list of all hardware in the project",
      "url": "/hardware",
      "type": "table",
      "resource": "hardware",
      "title": "List of Hardware",
      "table": {
        "title": "Hardware",
        "columns": [
          {
            "field": "images.IMG_HARDWARE",
            "title": "image",
            "formatter": "image",
            "hozAlign": "center",
            "width": 150
          },
          {
            "field": "name",
            "title": "Name",
            "width": "auto",
            "formatter": "link",
            "formatterParams": {
              "url": "/hardware/:key"
            }
          },
          {
            "field": "description",
            "title": "Description",
            "width": "auto"
          },
          {
            "field": "configuration",
            "title": "Configuration",
            "width": "300"
          },
          {
            "field": "swcps.Reference",
            "title": "Reference",
            "width": "auto"
          },
          {
            "field": "swcps.Supplier",
            "title": "Supplier",
            "width": "auto"
          },
          {
            "field": "quantity",
            "title": "Qty",
            "width": "100"
          },
          {
            "field": "costUnit",
            "title": "Unit Cost",
            "width": "200",
            "formatter": "money",
            "formatterParams": {
              "decimal": ".",
              "thousand": ","
            }
          }
        ]
      }
    },
    {
      "id": "summary",
      "name": "summary",
      "comment": "summary of all materials in the project",
      "url": "/summary",
      "type": "layout",
      "title": "Summary",
      "resource": "root",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "sum(\"cost\",\"tables\")",
                "prefix": "Total Cost: ",
                "range": "10,1:12,1",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "boards",
          "name": "boards",
          "type": "table",
          "resource": "materials.boards",
          "title": "Boards",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "quantity",
                "title": "Quantity",
                "width": "12%"
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "14%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "12%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "panels",
          "name": "panels",
          "type": "table",
          "resource": "materials.panels",
          "title": "Materials",
          "table": {
            "groupBy": "category",
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "«EVAL(«quantity»)0:000» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "14%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "12%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "laminates",
          "name": "laminates",
          "type": "table",
          "resource": "materials.laminates",
          "title": "Laminates",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "14%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "12%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "edgebands",
          "name": "edgebands",
          "type": "table",
          "resource": "materials.edgebands",
          "title": "Edgebands",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "14%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "12%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "weldments",
          "name": "weldments",
          "type": "table",
          "resource": "materials.weldments",
          "title": "Weldments",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "32%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "14%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "12%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "hardware",
          "name": "hardware",
          "type": "table",
          "resource": "hardware",
          "title": "Hardware",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "auto"
              },
              {
                "field": "configuration",
                "title": "Configuration",
                "width": "20%"
              },
              {
                "field": "swcps.Reference",
                "title": "Reference",
                "width": "12%"
              },
              {
                "field": "quantity",
                "title": "Quantity",
                "width": "12%"
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "14%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "12%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "panelProcesses",
          "name": "panelProcesses",
          "type": "table",
          "resource": "panelProcesses",
          "title": "Panel Process",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "25%"
              },
              {
                "field": "quantity",
                "title": "Quantity",
                "width": "25%",
                "formatter": "number",
                "formatterParams": {
                  "precision": 2
                }
              },
              {
                "field": "costUnit",
                "title": "Unit Cost",
                "width": "25%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "25%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "programs",
          "name": "programs",
          "type": "table",
          "resource": "programs",
          "title": "Machining Costs",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "20%"
              },
              {
                "field": "time",
                "title": "Time",
                "width": "20%"
              },
              {
                "field": "quantity",
                "title": "Quantity",
                "width": "20%"
              },
              {
                "field": "costHour",
                "title": "Hourly Cost",
                "width": "20%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              },
              {
                "field": "cost",
                "title": "Cost",
                "width": "20%",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                },
                "bottomCalc": "sum",
                "bottomCalcFormatter": "money",
                "bottomCalcFormatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        },
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "sum(\"cost\",\"tables\")",
                "prefix": "Total Cost: ",
                "range": "10,1:12,1",
                "formatter": "money",
                "formatterParams": {
                  "symbol": "£"
                }
              }
            ]
          }
        }
      ]
    },
    {
      "id": "picking-list",
      "name": "picking-list",
      "comment": "list of materials for picking",
      "url": "/picking-list",
      "type": "layout",
      "title": "Picking List",
      "showTotalTop": false,
      "showTotalBottom": false,
      "sections": [
        {
          "id": "Boards",
          "name": "Boards",
          "type": "table",
          "resource": "materials.boards",
          "title": "Boards",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "quantity",
                "title": "Quantity",
                "width": "12%"
              }
            ]
          }
        },
        {
          "id": "Materials",
          "name": "Materials",
          "type": "table",
          "resource": "materials.panels",
          "title": "Materials",
          "table": {
            "groupBy": "category",
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              }
            ]
          }
        },
        {
          "id": "Laminates",
          "name": "Laminates",
          "type": "table",
          "resource": "materials.laminates",
          "title": "Laminates",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              }
            ]
          }
        },
        {
          "id": "Edgebands",
          "name": "Edgebands",
          "type": "table",
          "resource": "materials.edgebands",
          "title": "Edgebands",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "12%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              }
            ]
          }
        },
        {
          "id": "Weldments",
          "name": "Weldments",
          "type": "table",
          "resource": "materials.weldments",
          "title": "Weldments",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Material",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "32%"
              },
              {
                "field": "«EVAL(«quantity»)0:00» «unitOfMeasure»",
                "title": "Quantity",
                "width": "12%"
              }
            ]
          }
        },
        {
          "id": "Hardware",
          "name": "Hardware",
          "type": "table",
          "resource": "hardware",
          "title": "Hardware",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "auto"
              },
              {
                "field": "configuration",
                "title": "Configuration",
                "width": "20%"
              },
              {
                "field": "swcps.Reference",
                "title": "Reference",
                "width": "12%"
              },
              {
                "field": "quantity",
                "title": "Quantity",
                "width": "12%"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "excluded",
      "name": "excluded",
      "comment": "list of all excluded items in the project",
      "url": "/excluded",
      "type": "table",
      "resource": "excluded",
      "title": "List of Excluded Items",
      "table": {
        "title": "Excluded",
        "columns": [
          {
            "field": "name",
            "title": "Name",
            "width": "40%",
            "formatter": "component"
          },
          {
            "field": "description",
            "title": "Description",
            "width": "30%"
          },
          {
            "field": "configuration",
            "title": "Configuration",
            "width": "30%"
          }
        ]
      }
    },
    {
      "id": "panel-details",
      "name": "panel-details",
      "comment": "details of a single panel",
      "url": "/panels/:key",
      "resource": "panels",
      "type": "layout",
      "title": "Panel Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "part.images.IMG_PART",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "documents.EDRAWINGS_PANEL.relativeURI"
                },
                "range": "1,1:12,6"
              },
              {
                "field": "id",
                "prefix": "id: ",
                "range": "4,7:4,7"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "5,7:11,7"
              },
              {
                "field": "pdfs.PDF_PANEL",
                "prefix": "pdf: ",
                "formatter": "pdf",
                "range": "12,7:12,7"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "range": "4,8:7,8"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "range": "8,8:12,8"
              },
              {
                "field": "material.key",
                "prefix": "Material: ",
                "range": "4,10:7,10"
              },
              {
                "field": "length",
                "prefix": "Length: ",
                "formatter": "text",
                "range": "4,9:6,9"
              },
              {
                "field": "width",
                "prefix": "Width: ",
                "formatter": "text",
                "range": "7,9:9,9"
              },
              {
                "field": "thickness",
                "prefix": "Thickness: ",
                "formatter": "text",
                "range": "10,9:12,9"
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "8,10:12,10"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "4,11:12,12"
              },
              {
                "field": "images.IMG_PANEL",
                "formatter": "image",
                "range": "1,7:3,12"
              }
            ]
          }
        },
        {
          "id": "combined-panels",
          "name": "combined-panels",
          "type": "table",
          "resource": "children",
          "title": "Combined Panels",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "33%",
                "formatter": "link",
                "formatterParams": {
                  "url": "/panels/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "33%"
              },
              {
                "field": "quantity",
                "title": "Qty",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "layers",
          "name": "layers",
          "type": "table",
          "resource": "layers",
          "title": "Layers",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "33%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "33%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "laminates",
          "name": "laminates",
          "type": "table",
          "resource": "laminates",
          "title": "Laminates",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Laminate",
                "width": "33%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "33%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "edgebands",
          "name": "edgebands",
          "type": "table",
          "resource": "edgebands",
          "title": "Edgebands",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Edgebands",
                "width": "33%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "33%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "processZones",
          "name": "processZones",
          "type": "table",
          "resource": "processZones",
          "title": "Process Zones",
          "table": {
            "columns": [
              {
                "field": "panelProcess.name",
                "title": "Process",
                "width": "50%"
              },
              {
                "field": "name",
                "title": "Zone",
                "width": "50%"
              }
            ]
          }
        },
        {
          "id": "programs",
          "name": "programs",
          "type": "table",
          "resource": "programs",
          "title": "Programs",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "50%",
                "formatter": "link",
                "formatterParams": {
                  "url": "/programs/:key"
                }
              },
              {
                "field": "machine",
                "title": "Code",
                "width": "50%"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "program-details",
      "name": "program-details",
      "comment": "details of a single program",
      "url": "/programs/:key",
      "resource": "programs",
      "type": "layout",
      "title": "Program Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "part.images.IMG_PART",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "panel.documents.EDRAWINGS_PANEL.relativeURI"
                },
                "range": "1,1:12,6"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "4,7:11,7"
              },
              {
                "field": "programFile.relativeURI",
                "prefix": "code: ",
                "formatter": "link",
                "range": "12,7:12,7"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "range": "4,8:8,8"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "range": "9,8:12,8"
              },
              {
                "field": "material.name",
                "prefix": "Material: ",
                "range": "4,10:8,10"
              },
              {
                "field": "length",
                "prefix": "Length: ",
                "formatter": "text",
                "range": "4,9:6,9"
              },
              {
                "field": "width",
                "prefix": "Width: ",
                "formatter": "text",
                "range": "7,9:9,9"
              },
              {
                "field": "thickness",
                "prefix": "Thickness: ",
                "formatter": "text",
                "range": "10,9:12,9"
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "9,10:12,10"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "4,11:12,12"
              },
              {
                "field": "images.IMG_PROGRAM",
                "formatter": "image",
                "range": "1,7:3,12"
              }
            ]
          }
        },
        {
          "id": "tools",
          "name": "tools",
          "type": "table",
          "resource": "tools",
          "title": "Tools",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name"
              },
              {
                "field": "number",
                "title": "number"
              },
              {
                "field": "diameter",
                "title": "diameter"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "program-part-details",
      "name": "program-part-details",
      "comment": "details of a single program part (nested panel)",
      "url": "/program-parts/:key",
      "resource": "programParts",
      "type": "layout",
      "title": "Program Part Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "images.IMG_PROGRAM_PART_HIGHLIGHT",
                "formatter": "image",
                "range": "1,1:12,6"
              },
              {
                "field": "id",
                "prefix": "id: ",
                "range": "4,7:4,7"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "5,7:11,7"
              },
              {
                "field": "pdfs.PDF_PANEL",
                "prefix": "pdf: ",
                "formatter": "pdf",
                "range": "12,7:12,7"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "range": "4,8:7,8"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "range": "8,8:12,8"
              },
              {
                "field": "material.key",
                "prefix": "Material: ",
                "range": "4,10:7,10"
              },
              {
                "field": "length",
                "prefix": "Length: ",
                "formatter": "text",
                "range": "4,9:6,9"
              },
              {
                "field": "width",
                "prefix": "Width: ",
                "formatter": "text",
                "range": "7,9:9,9"
              },
              {
                "field": "thickness",
                "prefix": "Thickness: ",
                "formatter": "text",
                "range": "10,9:12,9"
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "8,10:12,10"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "4,11:12,12"
              },
              {
                "field": "images.IMG_PROGRAM_PART",
                "formatter": "image",
                "range": "1,7:3,12"
              }
            ]
          }
        },
        {
          "id": "panel.layers",
          "name": "panel.layers",
          "type": "table",
          "resource": "panel.layers",
          "title": "Layers",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "33%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "33%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "panel.laminates",
          "name": "panel.laminates",
          "type": "table",
          "resource": "panel.laminates",
          "title": "Laminates",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Laminate",
                "width": "33%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "33%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "panel.edgebands",
          "name": "panel.edgebands",
          "type": "table",
          "resource": "panel.edgebands",
          "title": "Edgebands",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Edgebands",
                "width": "33%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "33%"
              },
              {
                "field": "thickness",
                "title": "Thickness",
                "width": "33%"
              }
            ]
          }
        },
        {
          "id": "panel.processZones",
          "name": "panel.processZones",
          "type": "table",
          "resource": "panel.processZones",
          "title": "Panel Process",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Process",
                "width": "50%"
              },
              {
                "field": "ZoneName",
                "title": "Zone",
                "width": "50%"
              }
            ]
          }
        },
        {
          "id": "panel.programs",
          "name": "panel.programs",
          "type": "table",
          "resource": "panel.programs",
          "title": "Programs",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "50%",
                "formatter": "link",
                "formatterParams": {
                  "url": "/programs/:key"
                }
              },
              {
                "field": "machine",
                "title": "Code",
                "width": "50%"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "frame-details",
      "name": "frame-details",
      "comment": "details of a single frame",
      "url": "/frames/:key",
      "resource": "frames",
      "type": "layout",
      "title": "Frame Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "images.IMG_FRAME",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "documents.EDRAWINGS_FRAME.relativeURI"
                },
                "range": "1,1:12,6"
              },
              {
                "field": "id",
                "prefix": "id: ",
                "range": "4,7:4,7"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "5,7:11,7"
              },
              {
                "field": "pdfs.PDF_FRAME",
                "prefix": "pdf: ",
                "formatter": "pdf",
                "range": "12,7:12,7"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "range": "4,8:8,8"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "range": "9,8:12,8"
              },
              {
                "field": "panels",
                "prefix": "Materials: ",
                "range": "4,9:8,9",
                "formatter": "list",
                "formatterParams": {
                  "valueMap": "material.name",
                  "removeDuplicates": true
                }
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "9,9:12,9"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "4,10:12,11"
              },
              {
                "field": "images.IMG_FRAME",
                "formatter": "image",
                "range": "1,7:3,11"
              }
            ]
          }
        },
        {
          "id": "children",
          "name": "children",
          "type": "table",
          "resource": "children",
          "title": "Sub Frames",
          "table": {
            "columns": [
              {
                "field": "id",
                "title": "#",
                "width": "10%"
              },
              {
                "field": "name",
                "title": "Part Name",
                "width": "auto",
                "formatter": "link",
                "formatterParams": {
                  "url": "/sub-frames/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "40%"
              }
            ]
          }
        },
        {
          "id": "panels",
          "name": "panels",
          "type": "table",
          "resource": "panels",
          "title": "Panels",
          "table": {
            "columns": [
              {
                "field": "id",
                "title": "#",
                "width": "5%"
              },
              {
                "field": "name",
                "title": "Part Name",
                "width": "auto",
                "formatter": "link",
                "formatterParams": {
                  "url": "/panels/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "15%"
              },
              {
                "field": "quantityInParent",
                "title": "Qty",
                "width": "10%"
              }
            ]
          }
        },
        {
          "id": "hardware",
          "name": "hardware",
          "type": "table",
          "resource": "hardware",
          "title": "Hardware",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "auto",
                "formatter": "link",
                "formatterParams": {
                  "url": "/hardware/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "25%"
              },
              {
                "field": "configuration",
                "title": "Configuration",
                "width": "25%"
              },
              {
                "field": "supplier",
                "title": "Supplier",
                "width": "10%"
              },
              {
                "field": "quantityInParent",
                "title": "Qty",
                "width": 100
              }
            ]
          }
        },
        {
          "id": "programs",
          "name": "programs",
          "type": "table",
          "resource": "programs",
          "title": "Programs",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Program",
                "width": "50%",
                "formatter": "link",
                "formatterParams": {
                  "url": "/programs/:key"
                }
              },
              {
                "field": "quantity",
                "title": "Qty",
                "width": "50%"
              }
            ]
          }
        },
        {
          "id": "weldments",
          "name": "weldments",
          "type": "table",
          "resource": "weldments",
          "title": "Weldments",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Part Name",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "250"
              },
              {
                "field": "length",
                "title": "Length",
                "width": "160"
              },
              {
                "field": "lengthTotal",
                "title": "Length Total",
                "width": "160"
              },
              {
                "field": "cutlist",
                "title": "cutlist",
                "width": "250"
              },
              {
                "field": "quantity",
                "title": "Qty",
                "width": "100"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "sub-frame-details",
      "name": "sub-frame-details",
      "comment": "details of a single sub frame",
      "url": "/sub-frames/:key",
      "resource": "subFrames",
      "type": "layout",
      "title": "Sub Frame Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "images.IMG_SUBFRAME",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "documents.EDRAWINGS_SUBFRAME.relativeURI"
                },
                "range": "1,1:12,6"
              },
              {
                "field": "id",
                "prefix": "id: ",
                "range": "4,7:4,7"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "5,7:11,7"
              },
              {
                "field": "pdfs.PDF_FRAME",
                "prefix": "pdf: ",
                "formatter": "pdf",
                "range": "12,7:12,7"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "range": "4,8:8,8"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "range": "9,8:12,8"
              },
              {
                "field": "materials",
                "prefix": "Materials: ",
                "range": "4,9:8,9"
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "9,9:12,9"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "4,10:12,11"
              },
              {
                "field": "images.IMG_SUBFRAME",
                "formatter": "image",
                "range": "1,7:3,11"
              }
            ]
          }
        },
        {
          "id": "children",
          "name": "children",
          "type": "table",
          "resource": "children",
          "title": "Sub Frames",
          "table": {
            "columns": [
              {
                "field": "id",
                "title": "#",
                "width": "10%"
              },
              {
                "field": "name",
                "title": "Part Name",
                "width": "auto",
                "formatter": "link",
                "formatterParams": {
                  "url": "/sub-frames/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "40%"
              }
            ]
          }
        },
        {
          "id": "panels",
          "name": "panels",
          "type": "table",
          "resource": "panels",
          "title": "Panels",
          "table": {
            "columns": [
              {
                "field": "id",
                "title": "#",
                "width": "5%"
              },
              {
                "field": "name",
                "title": "Part Name",
                "width": "auto",
                "formatter": "link",
                "formatterParams": {
                  "url": "/panels/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "20%"
              },
              {
                "field": "material.name",
                "title": "Material",
                "width": "15%"
              },
              {
                "field": "quantityInParent",
                "title": "Qty",
                "width": "10%"
              }
            ]
          }
        },
        {
          "id": "hardware",
          "name": "hardware",
          "type": "table",
          "resource": "hardware",
          "title": "Hardware",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name",
                "width": "auto",
                "formatter": "link",
                "formatterParams": {
                  "url": "/hardware/:key"
                }
              },
              {
                "field": "description",
                "title": "Description",
                "width": "25%"
              },
              {
                "field": "configuration",
                "title": "Configuration",
                "width": "25%"
              },
              {
                "field": "supplier",
                "title": "Supplier",
                "width": "10%"
              },
              {
                "field": "quantityInParent",
                "title": "Qty",
                "width": 100
              }
            ]
          }
        },
        {
          "id": "programs",
          "name": "programs",
          "type": "table",
          "resource": "programs",
          "title": "Programs",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Program",
                "width": "50%",
                "formatter": "link",
                "formatterParams": {
                  "url": "/programs/:key"
                }
              },
              {
                "field": "quantity",
                "title": "Qty",
                "width": "50%"
              }
            ]
          }
        },
        {
          "id": "weldments",
          "name": "weldments",
          "type": "table",
          "resource": "weldments",
          "title": "Weldments",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Part Name",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "250"
              },
              {
                "field": "length",
                "title": "Length",
                "width": "160"
              },
              {
                "field": "lengthTotal",
                "title": "Length Total",
                "width": "160"
              },
              {
                "field": "cutlist",
                "title": "cutlist",
                "width": "250"
              },
              {
                "field": "quantity",
                "title": "Qty",
                "width": "100"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "sheet-details",
      "name": "sheet-details",
      "comment": "details of a single nested sheet",
      "url": "/sheets/:key",
      "resource": "sheets",
      "type": "layout",
      "title": "Sheet Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "images.IMG_SHEET",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "documents.EDRAWINGS_NEST_HTML.relativeURI"
                },
                "range": "1,1:12,6"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "1,7:8,7"
              },
              {
                "field": "length",
                "prefix": "Length: ",
                "range": "1,8:6,8"
              },
              {
                "field": "width",
                "prefix": "Width: ",
                "range": "1,9:6,9"
              },
              {
                "field": "thickness",
                "prefix": "Thickness: ",
                "range": "1,10:6,10"
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "7,8:8,8"
              },
              {
                "field": "refBoard",
                "prefix": "Material: ",
                "formatter": "text",
                "range": "7,9:8,9"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "1,11:8,11"
              },
              {
                "field": "programFile.relativeURI",
                "prefix": "code: ",
                "formatter": "link",
                "range": "7,10:8,10"
              },
              {
                "field": "root",
                "formatter": "chart",
                "formatterParams": {
                  "title": "Surface Usage",
                  "fields": [
                    {
                      "field": "variables.PROG_NSHEETSURFACEUSEDBYPARTS",
                      "title": "panel surface"
                    },
                    {
                      "field": "variables.PROG_NSHEETSURFACEUSEDBYSCRAPS",
                      "title": "waste surface"
                    }
                  ]
                },
                "range": "9,7:12,11"
              }
            ]
          }
        },
        {
          "id": "programParts",
          "name": "programParts",
          "type": "table",
          "resource": "programParts",
          "title": "Panels",
          "table": {
            "columns": [
              {
                "field": "programPartId",
                "title": "Nesting ID",
                "width": 120
              },
              {
                "field": "name",
                "title": "Name",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "auto"
              }
            ]
          }
        },
        {
          "id": "tools",
          "name": "tools",
          "type": "table",
          "resource": "tools",
          "title": "Tools",
          "table": {
            "columns": [
              {
                "field": "name",
                "title": "Name"
              },
              {
                "field": "number",
                "title": "number"
              },
              {
                "field": "diameter",
                "title": "diameter"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "pattern-details",
      "name": "pattern-details",
      "comment": "details of a single pattern",
      "url": "/patterns/:key",
      "resource": "patterns",
      "type": "layout",
      "title": "Pattern Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "part.images.IMG_PART",
                "formatter": "pattern",
                "range": "1,1:12,6",
                "formatterParams": {
                  "panelIdField": "id",
                  "showStatistics": true,
                  "printStatistics": true,
                  "showCutList": true,
                  "printCutList": true,
                  "showPanelIds": true,
                  "showPanelDimensions": true,
                  "showWasteIds": false,
                  "showWasteDimensions": false,
                  "showTrimIds": false,
                  "showTrimDimensions": false
                }
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "1,7:8,7"
              },
              {
                "field": "length",
                "prefix": "Length: ",
                "range": "1,8:4,8"
              },
              {
                "field": "width",
                "prefix": "Width: ",
                "range": "5,8:8,8"
              },
              {
                "field": "thickness",
                "prefix": "Thickness: ",
                "range": "1,9:4,9"
              },
              {
                "field": "refBoard",
                "prefix": "Material: ",
                "formatter": "text",
                "range": "5,9:8,9"
              },
              {
                "field": "quantityPanels",
                "prefix": "Panels: ",
                "range": "1,10:2,10"
              },
              {
                "field": "quantityTrims",
                "prefix": "trims: ",
                "range": "3,10:4,10"
              },
              {
                "field": "quantityWaste",
                "prefix": "waste: ",
                "range": "5,10:6,10"
              },
              {
                "field": "quantityCuts",
                "prefix": "cuts: ",
                "range": "7,10:8,10"
              },
              {
                "field": "comments",
                "prefix": "Comments: ",
                "range": "1,11:8,12"
              },
              {
                "field": "root",
                "formatter": "chart",
                "range": "9,7:12,12",
                "formatterParams": {
                  "title": "Area Usage",
                  "fields": [
                    {
                      "field": "areaPanels",
                      "title": "panels"
                    },
                    {
                      "field": "areaWaste",
                      "title": "waste"
                    },
                    {
                      "field": "areaTrims",
                      "title": "trims"
                    },
                    {
                      "field": "areaCuts",
                      "title": "cuts"
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "id": "panels",
          "name": "panels",
          "type": "table",
          "resource": "panels",
          "title": "Panels",
          "table": {
            "columns": [
              {
                "field": "id",
                "title": "id",
                "width": "10%"
              },
              {
                "field": "name",
                "title": "Name",
                "width": "auto"
              },
              {
                "field": "description",
                "title": "Description",
                "width": "auto"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "hardware-details",
      "name": "hardware-details",
      "comment": "details of a single hardware",
      "url": "/hardware/:key",
      "resource": "hardware",
      "type": "layout",
      "title": "Hardware Details",
      "sections": [
        {
          "id": "main",
          "name": "main",
          "type": "grid",
          "grid": {
            "cells": [
              {
                "field": "images.IMG_HARDWARE",
                "formatter": "image",
                "formatterParams": {
                  "edrawings": "documents.EDRAWINGS_HARDWARE.relativeURI"
                },
                "range": "1,1:12,6"
              },
              {
                "field": "id",
                "prefix": "id: ",
                "range": "1,7:1,7"
              },
              {
                "field": "name",
                "prefix": "Name: ",
                "range": "2,7:12,7"
              },
              {
                "field": "description",
                "prefix": "Description: ",
                "range": "1,8:6,8"
              },
              {
                "field": "configuration",
                "prefix": "Configuration: ",
                "range": "7,8:12,8"
              },
              {
                "field": "swcps.Material",
                "prefix": "Material: ",
                "range": "1,9:6,9"
              },
              {
                "field": "quantity",
                "prefix": "Quantity: ",
                "formatter": "text",
                "range": "7,9:12,9"
              },
              {
                "field": "swcps.comments",
                "prefix": "Comments: ",
                "formatter": "text",
                "range": "1,10:12,11"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "labels-panels",
      "name": "labels-panels",
      "comment": "labels for panels",
      "url": "/labels-panels",
      "type": "labels",
      "resource": "panels",
      "grid": {
        "cells": [
          {
            "field": "programs.length",
            "formatter": "programIndicator",
            "range": "1,1:1,1"
          },
          {
            "field": "id",
            "range": "2,1:3,1"
          },
          {
            "field": "name",
            "wrapText": true,
            "range": "4,1:12,1"
          },
          {
            "field": "images.IMG_PANEL",
            "formatter": "image",
            "range": "7,2:12,5"
          },
          {
            "field": "material.name",
            "range": "1,2:6,2"
          },
          {
            "field": "description",
            "range": "1,3:6,3"
          },
          {
            "field": "instance",
            "range": "1,4:6,4"
          },
          {
            "field": "Instance",
            "formatter": "qrcode",
            "range": "1,5:6,5"
          }
        ]
      },
      "settings": {
        "columns": 2,
        "rows": 5,
        "pageHeight": 297,
        "pageWidth": 210,
        "pagePaddingTop": 5,
        "pagePaddingBottom": 5,
        "pagePaddingLeft": 5,
        "pagePaddingRight": 5,
        "pageGapVertical": 5,
        "pageGapHorizontal": 5,
        "labelPadding": 2,
        "fontSize": 15
      }
    },
    {
      "id": "labels-panels-big",
      "name": "labels-panels-big",
      "comment": "labels for \"big\" panels",
      "url": "/labels-panels-big",
      "type": "labels",
      "resource": "panels",
      "filter": {
        "condition": "and",
        "rules": [
          {
            "label": "length",
            "field": "length",
            "operator": "greaterthan",
            "type": "number",
            "value": 1000
          },
          {
            "label": "width",
            "field": "width",
            "type": "number",
            "operator": "greaterthan",
            "value": 500
          }
        ]
      },
      "grid": {
        "cells": [
          {
            "field": "programs.length",
            "formatter": "programIndicator",
            "range": "1,1:1,1"
          },
          {
            "field": "id",
            "range": "2,1:3,1"
          },
          {
            "field": "name",
            "wrapText": true,
            "range": "4,1:12,1"
          },
          {
            "field": "images.IMG_PANEL",
            "formatter": "image",
            "range": "7,2:12,5"
          },
          {
            "field": "material.name",
            "range": "1,2:6,2"
          },
          {
            "field": "description",
            "range": "1,3:6,3"
          },
          {
            "field": "instance",
            "range": "1,4:6,4"
          },
          {
            "field": "Instance",
            "formatter": "qrcode",
            "range": "1,5:6,5"
          }
        ]
      },
      "settings": {
        "columns": 2,
        "rows": 5,
        "pageHeight": 297,
        "pageWidth": 210,
        "pagePaddingTop": 5,
        "pagePaddingBottom": 5,
        "pagePaddingLeft": 5,
        "pagePaddingRight": 5,
        "pageGapVertical": 5,
        "pageGapHorizontal": 5,
        "labelPadding": 2,
        "fontSize": 15
      }
    },
    {
      "id": "labels-frames",
      "name": "labels-frames",
      "comment": "labels for frames",
      "url": "/labels-frames",
      "type": "labels",
      "resource": "frames",
      "grid": {
        "cells": [
          {
            "field": "name",
            "range": "3,1:12,1"
          },
          {
            "field": "images.IMG_FRAME",
            "formatter": "image",
            "range": "7,2:12,4"
          },
          {
            "field": "description",
            "range": "1,2:6,2"
          },
          {
            "field": "assets/images/company-logo-label.png",
            "formatter": "image",
            "range": "1,1:2,1"
          },
          {
            "field": "«height» x «width» x «depth»",
            "range": "1,3:6,3"
          },
          {
            "field": "instance",
            "range": "1,4:6,4"
          }
        ]
      },
      "settings": {
        "columns": 2,
        "rows": 5,
        "pageHeight": 297,
        "pageWidth": 210,
        "pagePaddingTop": 5,
        "pagePaddingBottom": 5,
        "pagePaddingLeft": 5,
        "pagePaddingRight": 5,
        "pageGapVertical": 5,
        "pageGapHorizontal": 5,
        "labelPadding": 2,
        "fontSize": 15
      }
    },
    {
      "id": "labels-programParts",
      "name": "labels-programParts",
      "comment": "labels for program parts (nested panels)",
      "url": "/labels-programParts",
      "type": "labels",
      "resource": "programParts",
      "grid": {
        "cells": [
          {
            "field": "programs.length",
            "formatter": "programIndicator",
            "range": "1,1:1,1"
          },
          {
            "field": "id",
            "range": "2,1:3,1"
          },
          {
            "field": "name",
            "wrapText": true,
            "range": "4,1:12,1"
          },
          {
            "field": "images.IMG_PROGRAM_PART",
            "formatter": "image",
            "range": "7,2:12,4"
          },
          {
            "field": "part.description",
            "range": "1,2:6,2"
          },
          {
            "field": "panel.material.name",
            "range": "1,3:6,3"
          },
          {
            "field": "«instance»/«quantityInProject»",
            "range": "1,4:6,4"
          }
        ]
      },
      "settings": {
        "columns": 2,
        "rows": 5,
        "pageHeight": 297,
        "pageWidth": 210,
        "pagePaddingTop": 5,
        "pagePaddingBottom": 5,
        "pagePaddingLeft": 5,
        "pagePaddingRight": 5,
        "pageGapVertical": 5,
        "pageGapHorizontal": 5,
        "labelPadding": 2,
        "fontSize": 15
      }
    }
  ],
  "profiles": [
    {
      "id": "default",
      "name": "default",
      "comment": "main profile",
      "menu": [
        {
          "id": "home",
          "link": "/",
          "title": "Home",
          "icon": {
            "name": "home"
          }
        },
        {
          "id": "frames",
          "link": "/frames",
          "title": "Frames",
          "icon": {
            "name": "door_sliding"
          },
          "children": [
            {
              "id": "sub-frames",
              "link": "/sub-frames",
              "title": "Sub Frames",
              "icon": {
                "name": "door_back"
              }
            }
          ]
        },
        {
          "id": "panels",
          "link": "/panels",
          "title": "Panels",
          "icon": {
            "name": "crop_7_5"
          }
        },
        {
          "id": "panels-damaged",
          "link": "/panels-damaged",
          "title": "Panels Damaged",
          "icon": {
            "name": "crop_7_5"
          }
        },
        {
          "id": "panels-filtered",
          "link": "/panels-filtered",
          "title": "Panels filtered",
          "icon": {
            "name": "crop_7_5"
          }
        },
        {
          "id": "panels-materials",
          "link": "/panel-materials",
          "title": "Panels by Materials",
          "icon": {
            "name": "grain"
          }
        },
        {
          "id": "panels-frames",
          "link": "/panel-frames",
          "title": "Panels in Frames",
          "icon": {
            "name": "view_module"
          }
        },
        {
          "id": "stocks",
          "link": "/stocks",
          "title": "Stocks",
          "icon": {
            "name": "select_all"
          },
          "children": [
            {
              "id": "laminates",
              "link": "/stocks/laminates",
              "title": "Laminates",
              "icon": {
                "name": "filter_none"
              }
            },
            {
              "id": "edgebands",
              "link": "/stocks/edgebands",
              "title": "Edgebands",
              "icon": {
                "name": "border_style"
              }
            }
          ]
        },
        {
          "id": "weldments",
          "link": "/weldments",
          "title": "Weldments",
          "icon": {
            "name": "foundation"
          }
        },
        {
          "id": "programs",
          "link": "/programs",
          "title": "Programs",
          "icon": {
            "name": "precision_manufacturing"
          },
          "children": [
            {
              "id": "tools",
              "link": "/tools",
              "title": "tools",
              "icon": {
                "name": "tools_power_drill"
              }
            },
            {
              "id": "spindles",
              "link": "/spindles",
              "title": "spindles",
              "icon": {
                "name": "360"
              }
            }
          ]
        },
        {
          "id": "sheets",
          "link": "/sheets",
          "title": "Sheets",
          "icon": {
            "name": "view_quilt"
          }
        },
        {
          "id": "program-parts",
          "link": "/program-parts",
          "title": "Nested Panels",
          "icon": {
            "name": "home"
          }
        },
        {
          "id": "patterns",
          "link": "/patterns",
          "title": "Patterns",
          "icon": {
            "name": "view_comfy"
          },
          "children": [
            {
              "id": "patterned-panels",
              "link": "/patterned-panels",
              "title": "Patterned Panels",
              "icon": {
                "name": "carpenter"
              }
            }
          ]
        },
        {
          "id": "hardware",
          "link": "/hardware",
          "title": "Hardware",
          "icon": {
            "name": "hardware"
          }
        },
        {
          "id": "summary",
          "link": "/summary",
          "title": "Summary",
          "icon": {
            "name": "request_page"
          }
        },
        {
          "id": "labels",
          "title": "Labels",
          "icon": {
            "name": "sticky_note_2"
          },
          "children": [
            {
              "id": "labels-frames",
              "link": "/labels-frames",
              "title": "Frames",
              "icon": {
                "name": "view_compact"
              }
            },
            {
              "id": "labels-panels",
              "link": "/labels-panels",
              "title": "Panels",
              "icon": {
                "name": "view_compact"
              }
            },
            {
              "id": "labels-panels-big",
              "link": "/labels-panels-big",
              "title": "Panels Big",
              "icon": {
                "name": "view_compact"
              }
            },
            {
              "id": "labels-programParts",
              "link": "/labels-programParts",
              "title": "Program Parts",
              "icon": {
                "name": "view_compact"
              }
            }
          ]
        },
        {
          "id": "data-viewer",
          "link": "/data-viewer",
          "title": "Data Viewer",
          "icon": {
            "name": "code"
          }
        },
        {
          "id": "excluded",
          "link": "/excluded",
          "title": "Excluded",
          "icon": {
            "name": "block"
          }
        }
      ],
      "print": [
        {
          "id": "print-1"
        },
        {
          "id": "print-2"
        }
      ]
    },
    {
      "id": "shop",
      "comment": "profile for shop floor",
      "name": "Shop Floor",
      "menu": [
        {
          "id": "picking-list",
          "link": "/picking-list",
          "title": "Picking List",
          "icon": {
            "name": "checklist"
          }
        }
      ],
      "print": [
        {
          "id": "print-1"
        }
      ]
    }
  ],
  "print": {
    "headers": [
      {
        "id": "main",
        "name": "main",
        "comment": "main header",
        "grid": {
          "gap": 0,
          "fontSize": 10,
          "cellHeight": 25,
          "cells": [
            {
              "field": "name",
              "prefix": "Project: ",
              "formatter": "text",
              "range": "11,1:12,1"
            },
            {
              "field": "description",
              "prefix": "Description: ",
              "formatter": "text",
              "range": "11,2:12,2"
            },
            {
              "field": "configuration",
              "prefix": "Configuration: ",
              "formatter": "text",
              "range": "11,3:12,3"
            },
            {
              "field": "comments",
              "prefix": "Comments: ",
              "formatter": "text",
              "range": "11,4:12,4"
            },
            {
              "field": "\"custom/company-logo.png\"",
              "formatter": "image",
              "range": "1,1:2,4"
            }
          ]
        }
      }
    ],
    "groups": [
      {
        "id": "page-group-1",
        "name": "page-group-1",
        "comment": "this is a page group",
        "pages": [
          {
            "id": "home"
          },
          {
            "id": "panels"
          },
          {
            "id": "programs"
          }
        ]
      },
      {
        "id": "page-group-2",
        "name": "page-group-2",
        "comment": "this is a page group",
        "pages": [
          {
            "id": "home"
          },
          {
            "id": "summary"
          }
        ]
      }
    ],
    "profiles": [
      {
        "id": "print-1",
        "name": "print items",
        "comment": "this is a print profile",
        "header": {
          "id": "main"
        },
        "group": {
          "id": "page-group-1"
        }
      },
      {
        "id": "print-2",
        "name": "print summary",
        "comment": "this is a print profile2",
        "header": {
          "id": "main"
        },
        "group": {
          "id": "page-group-2"
        }
      }
    ]
  }
}

try {module.exports = viewSettings} catch {}