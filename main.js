function storeDATA(){
    var height;
    height = document.getElementById('heightinput');
    var STOREDHeight;
    STOREDHeight = height.value;
    var weight;
    weight = document.getElementById('weightinput');
    var STOREDweight;
    STOREDweight = weight.value;

    var checkDATAweight;
    checkDATAweight = STOREDweight.length; /* checking if there is any data inputed*/
    var checkDATAHeight;
    checkDATAHeight = STOREDHeight.length;
    if (checkDATAHeight === 0  || checkDATAweight === 0){
        alert('please input a height and or weight');
    }else{
        localStorage.setItem('heightvalue', STOREDHeight);
        localStorage.setItem('weightvalue', STOREDweight); 
        window.location.href = 'results.html'; /* go to next window*/
    }
  
}