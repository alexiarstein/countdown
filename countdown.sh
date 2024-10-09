#!/bin/bash
# Author: Alexia Steinberg <alexia@goldendoglinux.org>
# Just a silly timer that shows how long you've left until
# You can logoff from work.
# Uses 12hr clock (AM/PM)

# Configuration:
# Set your end date below in 12hr format (e.g: 6:00 PM)
et="8:00 PM"


clear
END_TIME=$(date -d "${et}" +%s)
CURRENT_TIME=$(date +%s)
#echo "Add a title for your timer here if you want by editing this line and uncommenting it"; echo ""
while [ $CURRENT_TIME -lt $END_TIME ]; do
 DIFF=$(( $END_TIME - $CURRENT_TIME ))
 HOURS=$(( $DIFF / 3600 ))
 MINUTES=$(( ($DIFF % 3600) / 60 ))
 SECONDS=$(( $DIFF % 60 ))

# For English, comment the following line and uncomment the other one.
 printf "\r%02d horas %02d minutos %02d segundos" $HOURS $MINUTES $SECONDS
#printf "\r%02d hours %02d minutes %02d seconds" $HOURS $MINUTES $SECONDS
 sleep 1
 CURRENT_TIME=$(date +%s)
done

echo
echo "Time's up!"
