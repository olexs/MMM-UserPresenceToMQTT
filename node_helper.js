var mqtt = require("mqtt");
var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({

	start: function() {
		this.config = false;
	},	

	launch: function (config) {
		this.config = config;

		console.log(this.name + ": Starting node helper, connecting to MQTT");
		this.mqtt = mqtt.connect(this.config.mqttServer, {
			username: this.config.mqttUser,
			password: this.config.mqttPassword
		});
	},

	socketNotificationReceived: function (notification, payload) {
		if (notification === "CONFIG") {
			console.log(this.name + ": Received config from frontend");
			this.launch(payload);
		} else if (notification === this.config.notificationType) {
			if (this.config) {
				console.log(this.name + ": Received configured notification with payload: ", payload);
				this.mqtt.publish(this.config.mqttTopic, "" + payload);
			} else {
				console.error(this.name + ": Received configured payload before configuration!");
			}
		}
	},
});
