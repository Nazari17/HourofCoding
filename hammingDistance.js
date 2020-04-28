function hammingDistance(first, second)
{
    if (first.length != second.length)
    {
        return false;    
    }
    let result = [{location: 'the location of char', char1: 'the char in the first arg', char2: 'the char in the second arg'}];

    first = first.split('');
    second = second.split('');

    for (let i = 0; i < first.length; i++)
    {
        if (first[i] !== second[i])
        {
            result.push({location: i+1, char1: first[i], char2: second[i]});
        }
    }

console.log(result);
console.log('the defrences between the args is ' + result.length + ' chars');
}


console.log(hammingDistance('abcde', 'abcdd'));
console.log(hammingDistance('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'))