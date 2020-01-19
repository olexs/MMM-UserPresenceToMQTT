# MMM-UserPresenceToMQTT

[MagicMirror](https://github.com/MichMich/MagicMirror) module that publishes the internal `USER_PRESENCE` broadcast notification to an MQTT topic, allowing to use the mirror
as an occupancy/motion sensor in a home automation setup.

Data for the `USER_PRESENCE` notification can be supplied by a [PIR sensor module](https://github.com/paviro/MMM-PIR-Sensor), a camera-based motion detection module,
or any other source.

## Installation

1. Make sure you already have a module that publishes the `USER_PRESENCE` notification to other modules.
2. Clone the repository into `modules` folder of your install.
3. Run `cd MMM-UserPresenceToMQTT` and `npm install`.
4. Add the module to your config as described below.
5. Restart your MagicMirror.

## Configuration

Place the configuration block anywhere in your modules list in `config.js`. The module does not render anything to the mirror.

```
{
    module: 'MMM-UserPresenceToMQTT',
    config: {
        mqttServer: "mqtt://mqtt.server.com:1883",
        mqttTopic: "home/magicmirror/userpresent",
        // check below for other options
    }
}
```

### Options

<table width="100%">
    <thead>
        <tr>
            <th>Option</th>
            <th width="100%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>mqttServer</code></td>
            <td>
                The MQTT server to publish to, including protocol (<code>mqtt://</code> or <code>mqtts://</code>), host/path and port.
				<br><b>Default value:</b> <code>mqtt://localhost:1883</code>
            </td>
        </tr>
        <tr>
            <td><code>mqttUser</code></td>
            <td>
                Username to authenticate against the MQTT server.
				<br><b>Default value:</b> <i>undefined</i> (no auth)
            </td>
        </tr>
        <tr>
            <td><code>mqttPassword</code></td>
            <td>
                Password to authenticate against the MQTT server.
				<br><b>Default value:</b> <i>undefined</i> (no auth)
            </td>
        </tr>
        <tr>
            <td><code>mqttTopic</code></td>
            <td>
                MQTT topic to publish the notifications to.
				<br><b>Default value:</b> <code>home/magicmirror/userpresent</code>
            </td>
        </tr>
        <tr>
            <td><code>notificationType</code></td>
            <td>
                What type of broadcast notification is listened to and published to MQTT.
				<br><b>Default value:</b> <code>USER_PRESENCE</code>
            </td>
        </tr>
    </tbody>
</table>

## Dependencies

- [mqtt](https://www.npmjs.com/package/mqtt) (via `npm install`)
