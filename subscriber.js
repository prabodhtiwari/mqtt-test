var mqtt = require("mqtt");

// change "test.mosquitto.org" with your mqtt server address
var client = mqtt.connect("mqtt://test.mosquitto.org");

var queueName = "mqtt-test";

client.on("connect", function () {
    console.log("Connected with MQTT server");
    client.subscribe(queueName, function (err) {
        if (!err) {
            client.on("message", function (topic, message) {
                // message is Buffer
                var msg = message.toString();
                console.log("Message as string: ", msg);
                console.log("Message as JSON: ", JSON.parse(msg));
            })
        } else {
            console.log("Error while subscribing queue: ", err);
        }
    });
});
