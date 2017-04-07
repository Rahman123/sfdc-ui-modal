({
	showModal : function(component) {
		var modalContainer = component.find("modalContainer");
		$A.util.removeClass(modalContainer, "slds-hide");
	},

	hideModal : function(component) {
		var modalContainer = component.find("modalContainer");
		$A.util.addClass(modalContainer, "slds-hide");
	}
})