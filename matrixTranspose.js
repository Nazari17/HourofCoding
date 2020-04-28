function matrixTranspose(givenText)
{
    givenText = givenText.split("\n");
    let result = [];
    for (let i = 0; i < givenText.length; i++)
    {
        result[i] = []
        for (let o = 0; o < givenText[i].length; o++)
        {
            result[i].push(givenText[i][o]);
        }
    }
    let longest = 0;
    result.forEach((arr) => {
        longest = Math.max(arr.length, longest)
    });
    let finalResult = '';
    for (let a = 0; a < longest; a++)
    {
        for (let b = 0; b < result.length; b++)
        {
            finalResult += typeof(result[b][a]) != 'undefined' ? result[b][a] : '-';
        }
        finalResult += "\n";
    }
    return finalResult;
}
console.log(matrixTranspose("ABC\nDE"));
console.log(matrixTranspose("ABCDEF\nGHIJ\nKLMNO"));