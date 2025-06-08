// any number between 17 and 36 inclusive
const BASE = 17;

// get days since 2000/01/01
function getDayNumber() {
    const now = new Date()
    const start = new Date(2000, 0, 1);
    now.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);

    const diffInMs = now.getTime() - start.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const number = Math.round(diffInDays);
    return number;
}

function getDateFromDayNumber(dayNumber) {
    const start = new Date(2000, 0, 1);
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() + dayNumber);
    return start;
}

function generateShortCode(storeId, transactionId) {
    const dayNumber = getDayNumber();
    const dayStr = dayNumber.toString().padStart(5, '0');
    const storeStr = storeId.toString().padStart(3, '0');
    const transStr = transactionId.toString().padStart(4, '0');
    // console.log(dayStr)
    // console.log(storeStr)
    // console.log(transStr)

    const combined = `${dayStr}${storeStr}${transStr}`;
    const code = Number(combined).toString(BASE)

    return code;
}

function decodeShortCode(shortCode) {
    const decoded = parseInt(shortCode, BASE).toString();
    const combined = decoded.padStart(12, '0');
    const dayNumber = parseInt(combined.slice(0, 5));
    const storeId = parseInt(combined.slice(5, 8));
    const transactionId = parseInt(combined.slice(8, 12));
    const shopDate = getDateFromDayNumber(dayNumber);

    // console.log(dayNumber)
    // console.log(storeId)
    // console.log(transactionId)
    // console.log("----------------")

    return {
        storeId,
        shopDate,
        transactionId
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}