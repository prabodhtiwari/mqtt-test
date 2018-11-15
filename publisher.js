var mqtt = require("mqtt");

// change "test.mosquitto.org" with your mqtt server address
var client = mqtt.connect("mqtt://test.mosquitto.org");
var queueName = "mqtt-test";

client.on("connect", function () {
    console.log("Connected with MQTT server");
    client.subscribe(queueName, function (err) {
        if (!err) {
            client.publish(queueName, JSON.stringify({ name: "prabodh" }));
            client.end();
        } else {
            console.log("Error while subscribing queue: ", err);
        }
    });
});
