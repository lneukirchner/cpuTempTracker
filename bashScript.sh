while true
do
/usr/bin/sensors -j *-isa-* > sensorsOutput.json
sleep 1
done