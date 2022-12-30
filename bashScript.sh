#!/bin/bash

while true
do
/usr/bin/sensors -j *-isa-* > sensorsOutput.json #gets "sensors" command output and sends it to a json file
sleep 1
done