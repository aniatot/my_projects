document.querySelector(".btn-toggle").addEventListener("click", function () {
	document.querySelector(".cms-footer").classList.toggle("expanded");
});

const widgetData = [
	{
		widgets: [
			{
				name: "Full Page Widget",
				signature: "FPW",
				description: "This widget occupies the entire grid.",
				background: "#ffcc00",
				width_type: "full",
				order: 1,
			},
		],
	},
	{
		widgets: [
			{
				name: "",
				signature: "",
				description: "Parent Widget with Nested Widgets",
				background: "#f4a261",
				width_type: "three-fourth",
				order: 1,
				"nested-widgets": [
					{
						name: "A-1",
						signature: "A1",
						description: "Single widget inside A",
						background: "#f28482",
						width_type: "half",
						order: 1,
					},
					{
						name: "A-2",
						signature: "A2",
						description: "Single widget inside A",
						background: "#84a59d",
						width_type: "half",
						order: 2,
					},
					{
						name: "",
						signature: "",
						description: "Nested widget inside A",
						background: "#6d597a",
						width_type: "half",
						order: 3,
						"nested-widgets": [
							{
								name: "AX-1",
								signature: "AX1",
								background: "#34495e",
								width_type: "half",
								order: 1,
							},
							{
								name: "AX-2",
								signature: "AX2",
								background: "#16a085",
								width_type: "half",
								order: 2,
							},
							{
								name: "AX-3",
								signature: "AX3",
								background: "#34495e",
								width_type: "full",
								order: 3,
							},
							{
								name: "AX-4",
								signature: "AX4",
								background: "#16a085",
								width_type: "half",
								order: 4,
							},
							{
								name: "AX-5",
								signature: "AX5",
								background: "#34495e",
								width_type: "half",
								order: 5,
							},
						],
					},
					{
						name: "A-4",
						signature: "A4",
						description: "Single widget inside A",
						width_type: "full",
						order: 4,
					},
				],
			},
			{
				name: "",
				signature: "B",
				description: "Another parent widget",
				background: "#a4a284",
				width_type: "one-fourth",
				order: 2,
				"nested-widgets": [
					{
						name: "BX-3",
						signature: "BX3",
						background: "#f449fe",
						width_type: "full",
						order: 1,
					},
					{
						name: "BX-4",
						signature: "BX4",
						background: "#16a085",
						width_type: "full",
						order: 2,
					},
					{
						name: "BX-5",
						signature: "BX5",
						background: "#34495e",
						width_type: "full",
						order: 3,
					},
				],
			},
		],
	},
];

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

// Event listener for dropdown change
dropdown.addEventListener("change", function () {
	const selectedIndex = parseInt(this.value); // Parse the selected value (index)
	updateCMSBody(selectedIndex);
});

// Initial call to update cms-body on page load
updateCMSBody(0); // Show widgets[0] by default.

function getColumnClass(widgetClass) {
  switch (widgetClass) {
      case "full": return "col-12";
      case "half": return "col-lg-6 col-sm-12";
      case "one-fourth": return "col-lg-3 col-sm-12 col-xs-12";
      case "three-fourth": return "col-lg-9 col-sm-12";
      default: return "col-3";
  }
}

function createWidgetElement(widget) {
  const colClass = getColumnClass(widget.width_type);
  const div = document.createElement("div");
  div.className = `${colClass} widget`;
  div.style.background = widget.background || "#ccc";
  div.innerHTML = `<strong>${widget.name || widget.signature}</strong>`;
  return div;
}

function renderWidgets(widgets, container) {
    widgets.sort((a, b) => a.order - b.order);

    widgets.forEach(widget => {
        // Create widget element (column div)
        const widgetElement = createWidgetElement(widget);
		// Check if it's a leaf widget (does not have nested widgets)
		if (!widget["nested-widgets"] || widget["nested-widgets"].length === 0) {
			widgetElement.classList.add("widget-child");
		}
        // If the widget has nested widgets, create a container inside it
        if (widget["nested-widgets"] && widget["nested-widgets"].length) {
            const nestedContainer = document.createElement("div");
            nestedContainer.className = "row col-sm-12 parent-widget"; // Ensure full width of parent
            
            // Recursively render the nested widgets inside the nestedContainer
            renderWidgets(widget["nested-widgets"], nestedContainer);

            // Append nested container inside the widget element
            widgetElement.appendChild(nestedContainer);
        }

        // Append the complete widget element (with nested structure) to the container
        container.appendChild(widgetElement);
    });
}

function loadWidgets(index) {
  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  renderWidgets(widgetData[index].widgets, gridContainer);
}

function updateCMSBody(index) {
/* 	const selectedWidgets = [widgetData[index]];
	selectedWidgets.forEach((section) => {
		section.widgets.forEach((widget) => { */
			loadWidgets(index);
/* 		});
	}); */
}
