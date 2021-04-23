



var b2Proxy = Class.create();
b2Proxy.prototype = {
	GetNext: function(){ return this.lowerBounds[0]; },
	SetNext: function(next) { this.lowerBounds[0] = next /*& 0x0000ffff*/; },

	IsValid: function(){ return this.overlapCount != b2BroadPhase.b2_invalid; },

	lowerBounds: [/*uint*/(0), /*uint*/(0)],
	upperBounds: [/*uint*/(0), /*uint*/(0)],
	overlapCount: 0,
	timeStamp: 0,

	userData: null,

	initialize: function() {
		// initialize instance variables for references
		this.lowerBounds = [/*uint*/(0), /*uint*/(0)];
		this.upperBounds = [/*uint*/(0), /*uint*/(0)];
		//
}}
