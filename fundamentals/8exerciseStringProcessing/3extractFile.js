function extractFile(inputString) {
    let filename = inputString.split('\\').pop();
    let pointIndex = filename.lastIndexOf('.');
    const name = filename.substring(0, pointIndex);
    const extension = filename.substring(pointIndex + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('--------------------------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
console.log('--------------------------');