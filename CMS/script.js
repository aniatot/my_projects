document.querySelector(".btn-toggle").addEventListener("click", function() {
    document.querySelector(".cms-footer").classList.toggle("expanded");
});

const gridContainer = document.getElementById('grid-container');

const widgetData = [
  {
    "widgets": [
      {
        "name": "Full Page Widget",
        "signature": "FPW",
        "description": "This widget occupies the entire grid.",
        "background": "#ffcc00",
        "grid-column-start": 1,
        "grid-column-end": 5,
        "grid-row-start": 1,
        "grid-row-end": 5
      }
    ]
  },
  {
    "widgets": [
      {
        "name": "Half Page Widget",
        "signature": "HPW1",
        "description": "This widget occupies the half grid.",
        "background": "#ffcc00",
        "grid-column-start": 1,
        "grid-column-end": 3,
        "grid-row-start": 1,
        "grid-row-end": 5
      },
      {
        "name": "Half Page Widget",
        "signature": "HPW2",
        "description": "This widget occupies the half grid.",
        "background": "#e39213",
        "grid-column-start": 3,
        "grid-column-end": 5,
        "grid-row-start": 1,
        "grid-row-end": 5
      }
    ]
  },
  {
    "widgets": [
      {
        "name": "Widget 1",
        "signature": "W1",
        "description": "1 column wide, 4 rows high",
        "background": "#ff9999",
        "grid-column-start": 1,
        "grid-column-end": 2,
        "grid-row-start": 1,
        "grid-row-end": 5
      },
      {
        "name": "Widget 2",
        "signature": "W2",
        "description": "2 columns wide, 2 rows high",
        "background": "#99ff99",
        "grid-column-start": 2,
        "grid-column-end": 4,
        "grid-row-start": 1,
        "grid-row-end": 3
      },
      {
        "name": "Widget 3",
        "signature": "W3",
        "description": "2 columns wide, 2 rows high",
        "background": "#9999ff",
        "grid-column-start": 2,
        "grid-column-end": 4,
        "grid-row-start": 3,
        "grid-row-end": 5
      },
      {
        "name": "Widget 4",
        "signature": "W4",
        "description": "1 column wide, 3 rows high",
        "background": "#ff99ff",
        "grid-column-start": 4,
        "grid-column-end": 5,
        "grid-row-start": 1,
        "grid-row-end": 4
      }
    ]
  }, 
  {
    "widgets": [
      {
        "name": "",
        "signature": "",
        "description": "Parent Widget with Nested Widgets",
        "background": "#f4a261",
        "grid-column-start": 1,
        "grid-column-end": 4,
        "grid-row-start": 1,
        "grid-row-end": 5,
        "nested-widgets": [
          {
            "name": "A-1",
            "signature": "A1",
            "description": "Single widget inside A",
            "background": "#f28482",
            "grid-column-start": 1,
            "grid-column-end": 3,
            "grid-row-start": 1,
            "grid-row-end": 2
          },
          {
            "name": "A-2",
            "signature": "A2",
            "description": "Single widget inside A",
            "background": "#84a59d",
            "grid-column-start": 1,
            "grid-column-end": 3,
            "grid-row-start": 2,
            "grid-row-end": 4
          },
          {
            "name": "",
            "signature": "",
            "description": "Nested widget inside A",
            "background": "#6d597a",
            "grid-column-start": 3,
            "grid-column-end": 5,
            "grid-row-start": 1,
            "grid-row-end": 4,
            "nested-widgets": [
                            {
                                "name": "AX-1",
                                "signature": "AX1",
                                "background": "#34495e",
                                "grid-column-start": 1,
                                "grid-column-end": 3,
                                "grid-row-start": 1,
                                "grid-row-end": 3
                            },
                            {
                                "name": "AX-2",
                                "signature": "AX2",
                                "background": "#16a085",
                                "grid-column-start": 3,
                                "grid-column-end": 5,
                                "grid-row-start": 1,
                                "grid-row-end": 3
                            },
                            {
                                "name": "AX-3",
                                "signature": "AX3",
                                "background": "#34495e",
                                "grid-column-start": 1,
                                "grid-column-end": 5,
                                "grid-row-start": 3,
                                "grid-row-end": 4
                            },
                            {
                                "name": "AX-4",
                                "signature": "AX4",
                                "background": "#16a085",
                                "grid-column-start": 1,
                                "grid-column-end": 3,
                                "grid-row-start": 4,
                                "grid-row-end": 5
                            },
                            {
                                "name": "AX-5",
                                "signature": "AX5",
                                "background": "#34495e",
                                "grid-column-start": 3,
                                "grid-column-end": 5,
                                "grid-row-start": 4,
                                "grid-row-end": 5
                            }
                        ]
          },          
          {
            "name": "A-4",
            "signature": "A4",
            "description": "Single widget inside A",
            "background": "#f37492",
            "grid-column-start": 1,
            "grid-column-end": 5,
            "grid-row-start": 4,
            "grid-row-end": 5
          },
        ]
      },
      {
        "name": "",
        "signature": "B",
        "description": "Another parent widget",
        "background": "#a4a284",
        "grid-column-start": 4,
        "grid-column-end": 5,
        "grid-row-start": 1,
        "grid-row-end": 5,
        "nested-widgets": [
                {
                    "name": "BX-3",
                    "signature": "BX3",
                    "background": "#f449fe",
                    "grid-column-start": 1,
                    "grid-column-end": 5,
                    "grid-row-start": 1,
                    "grid-row-end": 3
                },
                {
                    "name": "BX-4",
                    "signature": "BX4",
                    "background": "#16a085",
                    "grid-column-start": 1,
                    "grid-column-end": 3,
                    "grid-row-start": 3,
                    "grid-row-end": 5
                },
                {
                    "name": "BX-5",
                    "signature": "BX5",
                    "background": "#34495e",
                    "grid-column-start": 3,
                    "grid-column-end": 5,
                    "grid-row-start": 3,
                    "grid-row-end": 5
                }
            ]
      }
    ]
  } 
];

function createWidget(widget) {
    const div = document.createElement('div');
    div.classList.add('widget');
    div.style.gridRow = `${widget["grid-row-start"]} / ${widget["grid-row-end"]}`;
    div.style.gridColumn = `${widget["grid-column-start"]} / ${widget["grid-column-end"]}`;
    div.style.background = widget.background;
    div.textContent = widget.name;

    // Check if widget has nested widgets
    if (widget["nested-widgets"] && widget["nested-widgets"].length > 0) {
        div.classList.add('nested-widget-parent'); // Add class to parent widget
        
        // Create nested widgets inside the parent widget
        widget["nested-widgets"].forEach(nestedWidget => {
            div.appendChild(createWidget(nestedWidget));
        });
    } else {
        div.classList.add('widget-child'); // Add class to child widget
    }

    return div;
}

// Loop through all widget data and append to grid container
/* widgetData.forEach(section => {
    section.widgets.forEach(widget => {
        gridContainer.appendChild(createWidget(widget));
    });
}); */

const dropdown = document.getElementById("widgetDropdown");

// Populate dropdown
widgetData.forEach((_, index) => {
    const option = document.createElement("option");
    option.value = `${index}`;
    option.textContent = `widgets[${index}]`;
    dropdown.appendChild(option);
});

// Set default selection to widgets[0]
dropdown.selectedIndex = 0;

function updateCMSBody(index) {
  const selectedWidgets = [widgetData[index]];

  // Clear existing content in grid container and cms-body
  gridContainer.innerHTML = '';

  // Re-render the widgets
  //gridContainer.appendChild(createWidget(selectedWidgets));
  selectedWidgets.forEach(section => {
    section.widgets.forEach(widget => {
        gridContainer.appendChild(createWidget(widget));
    });
  });
}


// Event listener for dropdown change
dropdown.addEventListener("change", function() {
  const selectedIndex = parseInt(this.value); // Parse the selected value (index)
  updateCMSBody(selectedIndex);
});

// Initial call to update cms-body on page load
updateCMSBody(0); // Show widgets[0] by default.