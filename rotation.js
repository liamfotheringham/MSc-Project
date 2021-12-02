/*
    Rotation script utilised to produce random rotation degree to stimuli experiment trials in Gorilla

    Liam Fotheringham - 2595981F
*/

gorillaTaskBuilder.onScreenStart((spreadsheet: any, rowIndex: number, screenIndex: number, row: any, container: string) => {

    //Choose betweeen either random rotation degree one or two
    choice = Math.floor(Math.random() * 2);

    //choice 1 - degree range [-45..45]
	if(choice === 1){
		randomDegree = (Math.floor(Math.random() * 45)) - (Math.floor(Math.random() * 45));
	}
    
    //choice 2 - degree range [135..225]
	else if(choice === 0){
		randomDegree = Math.floor(Math.random() * 90) + 135;
	}

	//Convert to string
    randomDegreeStr = randomDegree.toString();

    //Update stimuli image css to apply rotation transform
    $(".gorilla-content-image").css('transform', "rotate(" + randomDegreeStr + "deg)");
    
    //Add degree applied to results spreadsheet
    gorilla.metric({screen_name: randomDegreeStr});
});