function calc() {
    var height = document.getElementById("Height").value;
    var weight = document.getElementById("Weight").value;
    var result = weight / ((height / 100) * (height / 100));
    result = result.toFixed(2);
    document.getElementById("result").value = result;

    if (isNaN(result)) {
        document.getElementById("result").value = "請輸入身高體重"
    }

    if (result < 18.5 && result > 0) {
        document.getElementById("result2").value = "體重過輕";
        // alert("體重過輕!建議均衡飲食，搭配適當的重量訓練!");
    } else if (18.5 <= result && result < 24) {
        document.getElementById("result2").value = "體重適中";
        // alert("體重剛剛好!要好好保持喔!")
    } else if (isNaN(result)) {
        document.getElementById("result2").value = "請輸入身高體重";

    } else if (result <= 0) {
        document.getElementById("result2").value = "身高體重不能為負值或零";

    } else {
        document.getElementById("result2").value = "體重過重";
        // alert("體重過重!建議少吃高熱量食品，搭配適當運動!")
    }

}