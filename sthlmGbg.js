    
    <script>
      let sthlmData, gbgData;
      $.post(ageUrl, ageQuery, function(returnData, status) {
        //console.log(data_use);
        let testSthlmData = returnData.data["0"].values;
        let testGbgData = returnData.data["1"].values;
        let sthlmPop = Number(testSthlmData[0]) + Number(testSthlmData[1]);
        let gbgPop = Number(testGbgData[0]) + Number(testGbgData[1]);
        let maxHeight = sthlmPop * 2;
        let sthlmHeight = sthlmPop / maxHeight;
        let gbgHeight = gbgPop / maxHeight;

        console.log("Sthlm:" + sthlmHeight);
        console.log("Gbg: " + gbgHeight);
      });
    </script>