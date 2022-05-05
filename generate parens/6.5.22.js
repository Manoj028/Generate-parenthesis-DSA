// Generate valid parenthesis for given n value
// if n = 1 => "()"
// if  n = 2 => "() (())"
// and so ,here we use recursion method
const n = 4;
function generateParens(n){
    const solution = [];

    var generateCombo = (LeftPCount,RightPCount,Partial) =>{
        if(LeftPCount>RightPCount) return;
        if(!LeftPCount && !RightPCount) solution.push(Partial);
        if(LeftPCount>0) generateCombo(LeftPCount-1,RightPCount,Partial+'(');
        if(RightPCount>0) generateCombo(LeftPCount,RightPCount-1,Partial+')');
    }
    generateCombo(n,n,'')
    return solution;
}
console.log(generateParens(n));











