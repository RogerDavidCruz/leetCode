// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true


//Attempt # 2
//Looked at solution

const canAttendMeetings = intervals => {
    const starts = [];
    const ends = [];

    //Fill up starts and ends
    for(let i = 0; i< intervals.length; i++){
        const subArray = intervals[i];
        starts.push(subArray[0]);
        ends.push(subArray[1]);
    }

    starts.sort((a,b) => a - b);
    ends.sort((a,b) => a - b);

    for(let i = 0; i < starts.length; i++){
        if(starts[i + 1] < ends[i]) return false;
    }

    return true;
}

module.exports = canAttendMeetings;


//Attempt # 1
//Incorrect 

function canAttendMeetings(intervals) {
    if(intervals[0].length === 0) return false;
    let final = [];
    let firstElem = intervals[0];
    let secondElem = intervals[1];
    let thirdElem = intervals[2];

    for(let i = firstElem[0] ; i<firstElem[1]; i++){
        final.push(i)
    }

    for(let i = secondElem[0]; i<secondElem[1]; i++){
        final.push(i)
    }

    for(let i = thirdElem[0]; i<thirdElem[1]; i++){
        final.push(i)
    }

    final.sort((a,b) => a - b);

    for(let i = 0; i<final.length; i++){
        if(final[i] === final[i+1]){
            return false;
        }else{
            return true;
        }
    }
    
}

module.exports = canAttendMeetings;


//Note: I don't understand how false and true is being determined...
//My interpretation: I think I sort of get it now... each sub array must start and end with numbers
//                   within bounds while not passing the other sub array start and end time. If one 
//                   larger number overlaps with another time number then it is false, otherwise it is true.

//PREP

//P: an array with sub arrays with two elements each
//R: boolean
//E: [[7, 10], [2, 4]] --> true
//P: declare an empty array, then for loop with a start of s1 sub array and ends at e1 of the sub array. Then
//   continue to push each element into the empty array. Do this for each sub array, then sort the entire
//   array of several elements. If there are any duplicates then return false, otherwise true.
