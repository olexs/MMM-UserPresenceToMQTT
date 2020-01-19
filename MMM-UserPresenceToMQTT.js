Module.register("MMM-UserPresenceToMQTT", {

	defaults: {
		mqttServer: "mqtt://localhost:1883",
		mqttUser: undefined,
		mqttPassword: undefined,
		mqttTopic: "mmm/userpresence",
		notificationType: "USER_PRESENCE"
	},

	start: function() {
		this.sendSocketNotification("CONFIG", this.config);
	},

	notificationReceived: function(notification, payload) {
		if (notification === this.config.notificationType) {
			this.sendSocketNotification(notification, payload);
		}
	},
});
