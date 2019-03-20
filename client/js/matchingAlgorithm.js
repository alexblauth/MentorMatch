//Function(s) to return match score for potential mentors and mentees
//Two exported functions (FindMenteeMatches() and FindMentorMatches())


/***** Psuedocode *****/

/*

userData = {retrieve current user profile data as JSON};

someContainer FindMenteeMatches(){
    ScoreContainer -> container of two value nodes (firstValue: potentialMenteeID, secondValue: score)
    var score = 0;
    for(menteeCandidate: all other users in database){
        score = CalculateMenteeScore(userData, menteeCandidate);

        ScoreContainer.push_back(menteeCandidate.id, score);

        score = 0;
    }

    sort scoreContainer (by decreasing score)

    return ScoreContainer;
}

someContainer FindMentorMatches(){
    ScoreContainer -> container of two value nodes (firstValue: potentialMentorID, secondValue: score)
    var score = 0;
    for(mentorCandidate: all other users in database){
        score = CalculateMentorScore(userData, mentorCandidate);

        ScoreContainer.push_back(mentorCandidate.id, score);

        score = 0;
    }

    sort scoreContainer (by decreasing score)

    return ScoreContainer;
}




var CalculateMenteeScore(userData, potentialMentee){
    var score = 0;
    Mentor = userData;
    

    //Finish later based on comments in "Matching Algorithm" Google Doc



    return score;
}

var CalculateMentorScore(userData, potentialMentor){
    var score = 0;
    Mentee = userData;



    //Finish later based on comments in "Matching Algorithm" Google Doc




    return score;
}

*/